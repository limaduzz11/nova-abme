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
const stackDescription = select<HTMLElement>('[data-stack-description]');
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
  if (stackDescription) stackDescription.textContent = option.dataset.description ?? '';
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

root.dataset.gatewayReady = 'true';
