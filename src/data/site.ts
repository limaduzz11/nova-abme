/** Dados neutros do site (links, identidade, estruturas). Textos: `i18n.ts`. */

export const siteMeta = {
  productName: 'NOVA Abme',
  profileSlug: 'eduardodelimaparanhos',
  name: 'Eduardo de Lima Paranhos',
  shortName: 'Eduardo Paranhos',
  defaultUrl: 'https://portfolioeduardo.elptecnologia.com.br',
  year: 2026,
  location: 'São Paulo, Brasil · Remoto & Híbrido (GMT-3)',
  email: 'contatoeduardoparanhos@gmail.com',
  elpEmail: 'contato@elptecnologia.com.br',
  phone: '+55 11 94466-5292',
  whatsappUrl: 'https://wa.me/5511944665292?text=Ol%C3%A1%20Eduardo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar',
  cvPath: '/cv/eduardo-paranhos-cv.pdf',
  vcardPath: '/eduardo-paranhos.vcf',
} as const;

export const publicLinks = {
  github: 'https://github.com/limaduzz11',
  linkedin: 'https://www.linkedin.com/in/eduardo-de-lima-paranhos-910930263/',
  elp: 'https://elptecnologia.com.br/',
  elpEmail: 'mailto:contato@elptecnologia.com.br?subject=Demanda%20Corporativa%20-%20ELP%20Tecnologia',
  elpEmailRaw: 'contato@elptecnologia.com.br',
  contact: 'https://elptecnologia.com.br/contato/',
  email: 'mailto:contatoeduardoparanhos@gmail.com?subject=Oportunidade%20ADVPL%20%2F%20TOTVS%20Protheus',
  emailRaw: 'contatoeduardoparanhos@gmail.com',
  phoneRaw: '+55 11 94466-5292',
  whatsapp: 'https://wa.me/5511944665292?text=Ol%C3%A1%20Eduardo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar',
  cv: '/cv/eduardo-paranhos-cv.pdf',
  vcard: '/eduardo-paranhos.vcf',
  openpantheon: 'https://openpantheon.com.br/',
  novaCrm: 'https://elptecnologia.com.br/labs/nova-crm/',
} as const;

export type ProjectStatus = 'live' | 'demo' | 'development' | 'lab';
export type ProjectLinkKind = 'github' | 'site' | 'product';
export type ProjectCoverId = 'hub' | 'research' | 'rest-lab' | 'po-ui';

export interface ProjectLink {
  kind: ProjectLinkKind;
  href: string;
}

export interface ProjectScreenshot {
  kind: 'screenshot';
  /** Base path without extension: the component builds AVIF/WebP and 720px variants. */
  src: string;
  width: number;
  height: number;
}

export interface ProjectGalleryItem {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  href: string;
}

export interface ProjectGallery {
  kind: 'gallery';
  items: readonly ProjectGalleryItem[];
}

export interface ProjectDiagramMedia {
  kind: 'diagram';
  cover: ProjectCoverId;
}

export type ProjectMedia = ProjectScreenshot | ProjectGallery | ProjectDiagramMedia;

export interface ProjectData {
  id: string;
  number: string;
  displayName: string;
  status: ProjectStatus;
  media: ProjectMedia;
  diagram?: ProjectCoverId;
  stack: readonly { icon: string; name: string }[];
  links: readonly ProjectLink[];
}

/**
 * Projetos exibidos na vitrine.
 *
 * Regra editorial: só entra captura de tela de interface real. Projetos sem
 * interface gráfica usam um diagrama declarado (`kind: 'diagram'`) e nunca são
 * apresentados como screenshot.
 */
export const projectsData: readonly ProjectData[] = [
  {
    id: 'nova-hub',
    displayName: 'NOVA HUB WEB',
    number: '01',
    status: 'live',
    media: {
      kind: 'screenshot',
      src: '/images/projects/nova-hub',
      width: 1440,
      height: 1000,
    },
    diagram: 'hub',
    stack: [
      { icon: 'nodedotjs', name: 'Node.js' },
      { icon: 'javascript', name: 'JavaScript' },
      { icon: 'terminal', name: 'WebSocket / PTY' },
      { icon: 'linux', name: 'Linux' },
    ],
    links: [{ kind: 'github', href: 'https://github.com/limaduzz11/nova-hub' }],
  },
  {
    id: 'vanta-reader',
    displayName: 'VANTA Reader',
    number: '02',
    status: 'development',
    media: {
      kind: 'screenshot',
      src: '/images/projects/vanta-reader',
      width: 1280,
      height: 720,
    },
    diagram: 'hub',
    stack: [
      { icon: 'flutter', name: 'Flutter' },
      { icon: 'dart', name: 'Dart' },
      { icon: 'database', name: 'SQLite' },
      { icon: 'sync', name: 'REST' },
    ],
    links: [{ kind: 'github', href: 'https://github.com/limaduzz11/vanta-reader' }],
  },
  {
    id: 'web-platforms',
    displayName: 'Desenvolvimento Web',
    number: '03',
    status: 'live',
    media: {
      kind: 'gallery',
      items: [
        {
          id: 'openpantheon',
          name: 'OpenPantheon',
          src: '/images/projects/openpantheon',
          width: 1440,
          height: 900,
          href: 'https://openpantheon.com.br/',
        },
        {
          id: 'elp-tecnologia',
          name: 'ELP Tecnologia',
          src: '/images/projects/elp-tecnologia',
          width: 1440,
          height: 900,
          href: 'https://elptecnologia.com.br/',
        },
      ],
    },
    stack: [
      { icon: 'browser', name: 'Astro' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'globe', name: 'Cloudflare' },
      { icon: 'terminal', name: 'Go' },
    ],
    links: [],
  },
  {
    id: 'nova-crm',
    displayName: 'NOVA CRM',
    number: '04',
    status: 'demo',
    media: {
      kind: 'screenshot',
      src: '/images/projects/nova-crm',
      width: 1440,
      height: 900,
    },
    stack: [
      { icon: 'browser', name: 'Astro' },
      { icon: 'code', name: 'PHP' },
      { icon: 'database', name: 'SQLite' },
      { icon: 'database', name: 'SQL Server' },
    ],
    links: [{ kind: 'product', href: 'https://elptecnologia.com.br/labs/nova-crm/' }],
  },
  {
    id: 'protheus-research',
    displayName: 'protheus-research',
    number: '05',
    status: 'lab',
    media: { kind: 'diagram', cover: 'research' },
    stack: [
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'nodedotjs', name: 'Node.js' },
      { icon: 'code', name: 'ADVPL' },
      { icon: 'layers', name: 'TOTVS Protheus' },
    ],
    links: [{ kind: 'github', href: 'https://github.com/limaduzz11/protheus-research' }],
  },
  {
    id: 'protheus-rest-lab',
    displayName: 'protheus-rest-lab',
    number: '06',
    status: 'lab',
    media: { kind: 'diagram', cover: 'rest-lab' },
    stack: [
      { icon: 'code', name: 'ADVPL / TL++' },
      { icon: 'sync', name: 'REST' },
      { icon: 'doc', name: 'JSON / XML' },
      { icon: 'database', name: 'SQL' },
    ],
    links: [{ kind: 'github', href: 'https://github.com/limaduzz11/protheus-rest-lab' }],
  },
  {
    id: 'protheus-po-ui-template',
    displayName: 'protheus-po-ui-template',
    number: '07',
    status: 'lab',
    media: { kind: 'diagram', cover: 'po-ui' },
    stack: [
      { icon: 'angular', name: 'Angular' },
      { icon: 'browser', name: 'PO-UI' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'sync', name: 'REST' },
    ],
    links: [{ kind: 'github', href: 'https://github.com/limaduzz11/protheus-po-ui-template' }],
  },
] as const;

export type TechLevel = 'advanced' | 'intermediate' | 'basic';

export interface TechStackItem {
  id: string;
  icon: string;
  name: string;
  level: TechLevel;
}

/** Ordenado por domínio (avançado → intermediário → básico), conforme currículo. */
export const techStackItems: readonly TechStackItem[] = [
  { id: 'advpl', icon: 'code', name: 'ADVPL / TL++', level: 'advanced' },
  { id: 'protheus', icon: 'layers', name: 'ERP Protheus', level: 'advanced' },
  { id: 'sqlserver', icon: 'database', name: 'SQL Server', level: 'advanced' },
  { id: 'github', icon: 'github', name: 'GitHub', level: 'advanced' },
  { id: 'git', icon: 'git', name: 'Git', level: 'advanced' },
  { id: 'jobs', icon: 'terminal', name: 'Jobs & Schedules', level: 'advanced' },
  { id: 'rest', icon: 'sync', name: 'APIs REST', level: 'intermediate' },
  { id: 'soap', icon: 'globe', name: 'SOAP / XML', level: 'intermediate' },
  { id: 'poui', icon: 'browser', name: 'PO-UI', level: 'intermediate' },
  { id: 'angular', icon: 'angular', name: 'Angular', level: 'intermediate' },
  { id: 'javascript', icon: 'javascript', name: 'JavaScript', level: 'intermediate' },
  { id: 'linux', icon: 'linux', name: 'Linux', level: 'intermediate' },
  { id: 'typescript', icon: 'typescript', name: 'TypeScript', level: 'basic' },
  { id: 'nodejs', icon: 'nodedotjs', name: 'Node.js', level: 'basic' },
  { id: 'flutter', icon: 'flutter', name: 'Flutter', level: 'basic' },
  { id: 'docker', icon: 'docker', name: 'Docker', level: 'basic' },
  { id: 'python', icon: 'python', name: 'Python', level: 'basic' },
  { id: 'cpp', icon: 'cpp', name: 'C++', level: 'basic' },
] as const;

export interface LabItemData {
  id: string;
  maturity: 'active' | 'concept';
}

export const labItems: readonly LabItemData[] = [
  { id: 'vanta-reader', maturity: 'active' },
  { id: 'xnova-runtime', maturity: 'active' },
  { id: 'vanta-feed', maturity: 'concept' },
  { id: 'vanta-scan', maturity: 'concept' },
] as const;

export interface ContactChannelData {
  id: string;
  href: string;
  isExternal: boolean;
  download?: boolean;
  copyable?: boolean;
  primary?: boolean;
}

export const contactChannels: readonly ContactChannelData[] = [
  { id: 'whatsapp', href: publicLinks.whatsapp, isExternal: true, primary: true },
  { id: 'email', href: publicLinks.email, isExternal: false, copyable: true, primary: true },
  { id: 'cv', href: publicLinks.cv, isExternal: false, download: true, primary: true },
  { id: 'linkedin', href: publicLinks.linkedin, isExternal: true },
  { id: 'github', href: publicLinks.github, isExternal: true },
  { id: 'vcard', href: publicLinks.vcard, isExternal: false, download: true },
] as const;

export const whatsappMessages = {
  pt: 'Olá Eduardo, vi seu portfólio e gostaria de conversar',
  en: 'Hi Eduardo, I saw your portfolio and would like to talk',
  es: 'Hola Eduardo, vi tu portafolio y me gustaría conversar',
} as const;

export function whatsappLink(lang: 'pt' | 'en' | 'es'): string {
  return `https://wa.me/5511944665292?text=${encodeURIComponent(whatsappMessages[lang])}`;
}

/**
 * Keeps internal links correct for both Cloudflare Pages (/) and fallback environments.
 */
export function toPath(path: string): string {
  if (!path.startsWith('/')) return path;

  const configuredBase = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const base = configuredBase === '/' ? '' : configuredBase;
  const cleanPath = path === '/' ? '' : path.replace(/^\/+/, '');
  const isFile = /\.[a-z0-9]+$/i.test(cleanPath);
  const suffix = cleanPath
    ? `/${cleanPath}${path.endsWith('/') || isFile ? '' : '/'}`
    : '/';

  return `${base}${suffix}`;
}
