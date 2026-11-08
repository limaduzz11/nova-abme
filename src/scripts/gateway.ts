const root = document.documentElement;
root.classList.remove('no-js');
root.classList.add('js');

const select = <T extends Element>(selector: string): T | null => document.querySelector<T>(selector);
const selectAll = <T extends Element>(selector: string): T[] =>
  Array.from(document.querySelectorAll<T>(selector));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Progressive reveal is an enhancement. Without JavaScript, content remains visible.
const revealItems = selectAll<HTMLElement>('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}


// Stack index: an accessible tablist for technical specialities.
const stackOptions = selectAll<HTMLButtonElement>('[data-stack-option]');
const stackContext = select<HTMLElement>('[data-stack-context]');
const stackCode = select<HTMLElement>('[data-stack-code]');
const stackTitle = select<HTMLElement>('[data-stack-title]');
const stackHighlights = select<HTMLElement>('[data-stack-highlights]');

const setStack = (option: HTMLButtonElement, focus = false): void => {
  stackOptions.forEach((current) => {
    const active = current === option;
    current.setAttribute('aria-selected', active ? 'true' : 'false');
    current.tabIndex = active ? 0 : -1;
  });

  if (stackContext) stackContext.textContent = option.dataset.context ?? '';
  if (stackCode) stackCode.textContent = `${option.dataset.number ?? ''} / ${option.dataset.label ?? ''}`;
  if (stackTitle) stackTitle.textContent = option.dataset.title ?? '';
  if (stackHighlights) stackHighlights.textContent = option.dataset.highlights ?? '';
  if (focus) option.focus();
};

stackOptions.forEach((option, index) => {
  option.addEventListener('click', () => setStack(option));
  option.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? stackOptions.length - 1
          : (index + direction + stackOptions.length) % stackOptions.length;
    setStack(stackOptions[nextIndex], true);
  });
});
if (stackOptions[0]) setStack(stackOptions[0]);

// Email copy buttons: copies address with feedback, zero telemetry, zero backends.
const copyButtons = selectAll<HTMLButtonElement>('[data-copy-email]');
copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    if (!email) return;
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(email);
      }
      const label = button.querySelector<HTMLElement>('[data-copy-label]');
      const originalText = label ? label.textContent : '';
      if (label) label.textContent = 'Copiado! ✓';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        if (label && originalText) label.textContent = originalText;
        button.classList.remove('is-copied');
      }, 2000);
    } catch {
      // Graceful degradation when clipboard permission is restricted
    }
  });
});

// Command palette: navigation accelerator with proper dialog focus handling.
const dialog = select<HTMLDialogElement>('#command-palette');
const openButtons = selectAll<HTMLButtonElement>('[data-command-open]');
const closeButton = select<HTMLButtonElement>('[data-command-close]');
const search = select<HTMLInputElement>('[data-command-search]');
const commandEmpty = select<HTMLElement>('[data-command-empty]');
let previouslyFocused: HTMLElement | null = null;
let activeCommandIndex = 0;

if (dialog) {
  const getVisibleCommands = (): HTMLAnchorElement[] =>
    selectAll<HTMLAnchorElement>('[data-command-item]').filter((item) => !item.hidden);

  const focusCommand = (index: number, moveFocus = false): void => {
    const commands = getVisibleCommands();
    if (!commands.length) return;
    activeCommandIndex = (index + commands.length) % commands.length;
    commands.forEach((command, commandIndex) => {
      command.classList.toggle('is-active', commandIndex === activeCommandIndex);
      command.tabIndex = commandIndex === activeCommandIndex ? 0 : -1;
    });
    if (moveFocus) commands[activeCommandIndex]?.focus();
  };

  const filterCommands = (): void => {
    const query = search?.value.trim().toLowerCase() ?? '';
    selectAll<HTMLAnchorElement>('[data-command-item]').forEach((item) => {
      const label = (item.dataset.commandLabel ?? item.textContent ?? '').toLowerCase();
      item.hidden = Boolean(query && !label.includes(query));
    });
    const commands = getVisibleCommands();
    if (commandEmpty) commandEmpty.hidden = commands.length > 0;
    activeCommandIndex = 0;
    focusCommand(0);
  };

  const closePalette = (): void => {
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    dialog.classList.remove('is-open');
    previouslyFocused?.focus();
  };

  const openPalette = (): void => {
    previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.classList.add('is-open');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    if (search) search.value = '';
    filterCommands();
    window.requestAnimationFrame(() => search?.focus());
  };

  openButtons.forEach((button) => button.addEventListener('click', openPalette));
  closeButton?.addEventListener('click', closePalette);
  search?.addEventListener('input', filterCommands);

  selectAll<HTMLAnchorElement>('[data-command-item]').forEach((item) => {
    item.addEventListener('click', closePalette);
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closePalette();
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closePalette();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closePalette();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusCommand(activeCommandIndex + (event.key === 'ArrowDown' ? 1 : -1), true);
    } else if (event.key === 'Enter' && !(document.activeElement instanceof HTMLAnchorElement)) {
      event.preventDefault();
      getVisibleCommands()[activeCommandIndex]?.click();
    }
  });

  window.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (dialog.open) closePalette();
      else openPalette();
    }
  });
}

// Projects carousel: exactly one project per view, scroll-snap + arrows/numbers/keyboard.
const workViewport = select<HTMLElement>('[data-work-viewport]');
if (workViewport) {
  const slides = selectAll<HTMLElement>('[data-work-slide]');
  const dots = selectAll<HTMLButtonElement>('[data-work-dot]');
  const currentLabel = select<HTMLElement>('[data-work-current]');
  const fill = select<HTMLElement>('[data-work-fill]');
  const prev = select<HTMLButtonElement>('[data-work-prev]');
  const next = select<HTMLButtonElement>('[data-work-next]');
  const announcer = select<HTMLElement>('[data-work-status]');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let scrollFrame = 0;
  let programmaticScroll = false;
  let programmaticTimer = 0;

  const setActive = (index: number, announce = true): void => {
    if (!slides.length) return;
    const clamped = (index + slides.length) % slides.length;
    activeIndex = clamped;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === clamped;
      slide.classList.toggle('is-active', isActive);
      if (isActive) slide.removeAttribute('inert');
      else slide.setAttribute('inert', '');
    });

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute('aria-current', dotIndex === clamped ? 'true' : 'false');
    });

    if (currentLabel) currentLabel.textContent = String(clamped + 1).padStart(2, '0');
    if (fill) fill.dataset.progress = String(clamped + 1);

    if (announce && announcer) {
      const label = dots[clamped]?.getAttribute('aria-label') ?? '';
      announcer.textContent = label;
    }
  };

  const scrollToSlide = (index: number): void => {
    if (!slides.length) return;
    const clamped = (index + slides.length) % slides.length;
    const slide = slides[clamped];
    if (!slide) return;

    programmaticScroll = true;
    window.clearTimeout(programmaticTimer);
    workViewport.scrollTo({
      left: slide.offsetLeft,
      behavior: reducedMotionQuery.matches ? 'auto' : 'smooth',
    });
    setActive(clamped);
    // Ignore scroll-driven recalculation while the programmatic animation runs.
    programmaticTimer = window.setTimeout(finishProgrammaticScroll, 1200);
  };

  const finishProgrammaticScroll = (): void => {
    programmaticScroll = false;
    window.clearTimeout(programmaticTimer);
    syncFromScroll();
  };

  const syncFromScroll = (): void => {
    const viewportBox = workViewport.getBoundingClientRect();
    const center = viewportBox.left + viewportBox.width / 2;
    let best = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const box = slide.getBoundingClientRect();
      const distance = Math.abs(box.left + box.width / 2 - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });

    if (best !== activeIndex) setActive(best);
  };

  workViewport.addEventListener(
    'scroll',
    () => {
      if (programmaticScroll || scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        syncFromScroll();
      });
    },
    { passive: true },
  );

  if ('onscrollend' in workViewport) {
    workViewport.addEventListener('scrollend', finishProgrammaticScroll);
  }

  prev?.addEventListener('click', () => scrollToSlide(activeIndex - 1));
  next?.addEventListener('click', () => scrollToSlide(activeIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => scrollToSlide(index)));

  workViewport.addEventListener('keydown', (event) => {
    // Arrow keys belong to the focused control (gallery tabs, links); only the
    // viewport itself uses them for slide navigation.
    if (event.target !== workViewport) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollToSlide(activeIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollToSlide(activeIndex + 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      scrollToSlide(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      scrollToSlide(slides.length - 1);
    }
  });

  // Keep the active slide aligned after orientation or viewport changes.
  let resizeFrame = 0;
  window.addEventListener(
    'resize',
    () => {
      if (resizeFrame) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = 0;
        workViewport.scrollTo({ left: slides[activeIndex]?.offsetLeft ?? 0, behavior: 'auto' });
      });
    },
    { passive: true },
  );

  setActive(0, false);
  window.requestAnimationFrame(syncFromScroll);

  // Lightbox: native <dialog> keeps focus management and Esc behavior.
  const lightbox = select<HTMLDialogElement>('[data-work-lightbox]');
  if (lightbox) {
    const lightboxImage = select<HTMLImageElement>('[data-work-lightbox-img]');
    const lightboxCaption = select<HTMLElement>('[data-work-lightbox-caption]');
    const closeButton = select<HTMLButtonElement>('[data-work-lightbox-close]');
    let lastTrigger: HTMLElement | null = null;

    const closeLightbox = (): void => {
      if (lightbox.open && typeof lightbox.close === 'function') lightbox.close();
      else lightbox.removeAttribute('open');
      root.classList.remove('is-lightbox-open');
      lastTrigger?.focus();
    };

    selectAll<HTMLButtonElement>('[data-work-zoom]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const src = trigger.dataset.full;
        if (!src) return;
        lastTrigger = trigger;
        if (lightboxImage) {
          lightboxImage.src = src;
          lightboxImage.alt =
            trigger.parentElement?.querySelector('img')?.alt ??
            trigger.getAttribute('aria-label') ??
            '';
        }
        if (lightboxCaption) lightboxCaption.textContent = trigger.dataset.caption ?? '';
        root.classList.add('is-lightbox-open');
        if (typeof lightbox.showModal === 'function') lightbox.showModal();
        else lightbox.setAttribute('open', '');
        window.requestAnimationFrame(() => closeButton?.focus());
      });
    });

    closeButton?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeLightbox();
    });
    lightbox.addEventListener('close', () => {
      root.classList.remove('is-lightbox-open');
    });
  }
}

// Web project gallery: an accessible tablist for the two published sites.
const workGallery = select<HTMLElement>('[data-work-gallery]');
if (workGallery) {
  const galleryTabs = selectAll<HTMLButtonElement>('[data-work-gallery-tab]');
  const galleryPanels = selectAll<HTMLElement>('[data-work-gallery-slide]');

  const selectGallery = (index: number, focus = false): void => {
    if (!galleryTabs.length) return;
    const clamped = (index + galleryTabs.length) % galleryTabs.length;

    galleryTabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === clamped;
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.tabIndex = isActive ? 0 : -1;
      tab.classList.toggle('is-active', isActive);
    });

    galleryPanels.forEach((panel, panelIndex) => {
      const isActive = panelIndex === clamped;
      panel.hidden = !isActive;
      panel.classList.toggle('is-active', isActive);
    });

    if (focus) galleryTabs[clamped]?.focus();
  };

  galleryTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectGallery(index));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? galleryTabs.length - 1
            : index + (event.key === 'ArrowRight' ? 1 : -1);
      selectGallery(nextIndex, true);
    });
  });

  selectGallery(0);
}

// Tech stack: hover shows the level fill (CSS); click reveals where it is applied.
const techButtons = selectAll<HTMLButtonElement>('[data-tech-button]');
const techDetail = select<HTMLElement>('[data-tech-detail]');
if (techButtons.length > 0 && techDetail) {
  const detailIcon = techDetail.querySelector<HTMLElement>('[data-tech-detail-icon]');
  const detailName = techDetail.querySelector<HTMLElement>('[data-tech-detail-name]');
  const detailLevel = techDetail.querySelector<HTMLElement>('[data-tech-detail-level]');
  const detailUses = techDetail.querySelector<HTMLElement>('[data-tech-detail-uses]');

  const closeTechDetail = (): void => {
    techButtons.forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.closest('.tech-item')?.classList.remove('is-open');
    });
    techDetail.hidden = true;
  };

  techButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeTechDetail();
        return;
      }

      techButtons.forEach((current) => {
        current.setAttribute('aria-expanded', 'false');
        current.closest('.tech-item')?.classList.remove('is-open');
      });
      button.setAttribute('aria-expanded', 'true');
      button.closest('.tech-item')?.classList.add('is-open');

      if (detailIcon) {
        detailIcon.innerHTML = button.querySelector('.tech-orb__icon')?.innerHTML ?? '';
      }
      if (detailName) detailName.textContent = button.dataset.techName ?? '';
      if (detailLevel) detailLevel.textContent = button.dataset.techLevel ?? '';
      if (detailUses) {
        detailUses.innerHTML = '';
        try {
          const uses = JSON.parse(button.dataset.techUses ?? '[]') as string[];
          uses.forEach((use) => {
            const item = document.createElement('li');
            item.textContent = use;
            detailUses.appendChild(item);
          });
        } catch {
          /* payload inválido: ignora */
        }
      }
      techDetail.hidden = false;
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !techDetail.hidden) closeTechDetail();
  });
}

// Language switch: wipe transition between locales (disabled for reduced motion).
const wipe = select<HTMLElement>('[data-lang-wipe]');
const wipeCode = select<HTMLElement>('[data-lang-wipe-code]');
if (wipe && wipeCode) {
  selectAll<HTMLAnchorElement>('[data-lang-option]').forEach((option) => {
    option.addEventListener('click', (event) => {
      const target = option.dataset.langTarget ?? '';
      if (option.getAttribute('aria-current') === 'true') {
        event.preventDefault();
        return;
      }
      if (reducedMotion) return; // navegação direta
      event.preventDefault();
      wipeCode.textContent = target.toUpperCase();
      try {
        sessionStorage.setItem('nova-lang-wipe', target.toUpperCase());
      } catch {
        /* storage indisponível: transição apenas visual */
      }
      wipe.classList.add('lang-wipe--cover');
      window.setTimeout(() => {
        window.location.href = option.href;
      }, 440);
    });
  });

  let pendingWipe: string | null = null;
  try {
    pendingWipe = sessionStorage.getItem('nova-lang-wipe');
  } catch {
    pendingWipe = null;
  }
  if (pendingWipe) {
    try {
      sessionStorage.removeItem('nova-lang-wipe');
    } catch {
      /* ignora */
    }
    wipeCode.textContent = pendingWipe;
    wipe.classList.add('lang-wipe--reveal');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => wipe.classList.add('lang-wipe--done'));
    });
    window.setTimeout(() => {
      wipe.classList.remove('lang-wipe--reveal', 'lang-wipe--done');
      wipeCode.textContent = '';
    }, 700);
  }
}

root.dataset.gatewayReady = 'true';
