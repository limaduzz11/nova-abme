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

// Context router: anchors keep a useful no-JS fallback while the panel is enhanced.
const contextOptions = selectAll<HTMLAnchorElement>('[data-context-option]');
const contextCopy = select<HTMLElement>('[data-context-copy]');
const contextCta = select<HTMLAnchorElement>('[data-context-cta]');

const setContext = (option: HTMLAnchorElement): void => {
  contextOptions.forEach((current) => {
    const active = current === option;
    current.classList.toggle('is-active', active);
    current.setAttribute('aria-current', active ? 'location' : 'false');
  });

  if (contextCopy) contextCopy.textContent = option.dataset.description ?? '';
  if (contextCta) {
    contextCta.href = option.dataset.href ?? '#engineering';
    contextCta.textContent = option.dataset.cta ?? 'OPEN ROUTE →';
  }
};

contextOptions.forEach((option) => {
  option.addEventListener('click', () => setContext(option));
});
if (contextOptions[0]) setContext(contextOptions[0]);

// Visitor intent is deliberately session-scoped: it changes emphasis, never access.
const audienceOptions = selectAll<HTMLButtonElement>('[data-audience-option]');
const audienceNote = select<HTMLElement>('[data-audience-note]');
const audienceCta = select<HTMLAnchorElement>('[data-audience-cta]');

const setAudience = (option: HTMLButtonElement, persist = true): void => {
  const audience = option.dataset.audienceOption ?? 'exploring';
  root.dataset.audience = audience;

  audienceOptions.forEach((current) => {
    current.setAttribute('aria-pressed', current === option ? 'true' : 'false');
  });

  if (audienceNote) audienceNote.textContent = option.dataset.note ?? '';
  if (audienceCta) {
    audienceCta.href = option.dataset.href ?? '#connect';
    audienceCta.textContent = option.dataset.cta ?? 'Connect →';
  }

  if (persist) {
    try {
      window.sessionStorage.setItem('nova-abme-audience', audience);
    } catch {
      // Private browsing or a disabled storage layer should not affect navigation.
    }
  }
};

audienceOptions.forEach((option) => {
  option.addEventListener('click', () => setAudience(option));
});

const defaultAudience =
  audienceOptions.find((option) => option.dataset.audienceOption === 'exploring') ?? audienceOptions[0];
let storedAudience: string | null = null;
try {
  storedAudience = window.sessionStorage.getItem('nova-abme-audience');
} catch {
  storedAudience = null;
}
const initialAudience =
  audienceOptions.find((option) => option.dataset.audienceOption === storedAudience) ?? defaultAudience;
if (initialAudience) setAudience(initialAudience, false);

// Stack index: a small, accessible tablist replaces proficiency bars.
const stackOptions = selectAll<HTMLButtonElement>('[data-stack-option]');
const stackContext = select<HTMLElement>('[data-stack-context]');
const stackCode = select<HTMLElement>('[data-stack-code]');
const stackTitle = select<HTMLElement>('[data-stack-title]');
const stackDescription = select<HTMLElement>('[data-stack-description]');

const setStack = (option: HTMLButtonElement, focus = false): void => {
  stackOptions.forEach((current) => {
    const active = current === option;
    current.setAttribute('aria-selected', active ? 'true' : 'false');
    current.tabIndex = active ? 0 : -1;
  });

  if (stackContext) stackContext.textContent = option.dataset.context ?? '';
  if (stackCode) stackCode.textContent = `${option.dataset.number ?? ''} / ${option.dataset.label ?? ''}`;
  if (stackTitle) stackTitle.textContent = option.dataset.title ?? '';
  if (stackDescription) stackDescription.textContent = option.dataset.description ?? '';
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

// Section index is informational only and follows the viewport.
const currentSection = select<HTMLElement>('[data-current-section]');
const indexedSections = selectAll<HTMLElement>('[data-section-index]');
if (currentSection && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.textContent = `${entry.target.getAttribute('data-section-index')} / 07`;
        }
      });
    },
    { rootMargin: '-38% 0px -52% 0px', threshold: 0 },
  );
  indexedSections.forEach((section) => sectionObserver.observe(section));
}

// Fine-pointer cursor halo. The native cursor remains available at all times.
const cursor = select<HTMLElement>('[data-cursor]');
if (cursor && window.matchMedia('(pointer: fine)').matches && !reducedMotion) {
  let frame = 0;
  let x = 0;
  let y = 0;
  let hasPosition = false;

  window.addEventListener(
    'pointermove',
    (event) => {
      x = event.clientX;
      y = event.clientY;
      hasPosition = true;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        cursor.classList.toggle('is-positioned', hasPosition);
        frame = 0;
      });
    },
    { passive: true },
  );

  selectAll<HTMLElement>('[data-cursor-target]').forEach((target) => {
    target.addEventListener('pointerenter', () => cursor.classList.add('is-hovering'));
    target.addEventListener('pointerleave', () => cursor.classList.remove('is-hovering'));
  });
}

// Command palette: optional navigation accelerator with proper dialog focus handling.
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

root.dataset.gatewayReady = 'true';
