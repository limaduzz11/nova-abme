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
} as const;

export interface ProjectData {
  id: string;
  number: string;
  displayName: string;
  href: string;
  cover: 'hub' | 'research' | 'rest-lab' | 'po-ui';
  diagram: 'hub' | 'research' | 'rest-lab' | 'po-ui';
  stack: readonly { icon: string; name: string }[];
}

export const projectsData: readonly ProjectData[] = [
  {
    id: 'nova-hub',
    displayName: 'NOVA HUB WEB',
    number: '01',
    href: 'https://github.com/limaduzz11/nova-hub',
    cover: 'hub',
    diagram: 'hub',
    stack: [
      { icon: 'nodedotjs', name: 'Node.js' },
      { icon: 'javascript', name: 'JavaScript' },
      { icon: 'terminal', name: 'WebSocket / PTY' },
      { icon: 'linux', name: 'Linux' },
    ],
  },
  {
    id: 'protheus-research',
    displayName: 'protheus-research',
    number: '02',
    href: 'https://github.com/limaduzz11/protheus-research',
    cover: 'research',
    diagram: 'research',
    stack: [
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'nodedotjs', name: 'Node.js' },
      { icon: 'code', name: 'ADVPL' },
      { icon: 'layers', name: 'TOTVS Protheus' },
    ],
  },
  {
    id: 'protheus-rest-lab',
    displayName: 'protheus-rest-lab',
    number: '03',
    href: 'https://github.com/limaduzz11/protheus-rest-lab',
    cover: 'rest-lab',
    diagram: 'rest-lab',
    stack: [
      { icon: 'code', name: 'ADVPL / TL++' },
      { icon: 'sync', name: 'REST' },
      { icon: 'doc', name: 'JSON / XML' },
      { icon: 'database', name: 'SQL' },
    ],
  },
  {
    id: 'protheus-po-ui-template',
    displayName: 'protheus-po-ui-template',
    number: '04',
    href: 'https://github.com/limaduzz11/protheus-po-ui-template',
    cover: 'po-ui',
    diagram: 'po-ui',
    stack: [
      { icon: 'angular', name: 'Angular' },
      { icon: 'browser', name: 'PO-UI' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'sync', name: 'REST' },
    ],
  },
] as const;

export const techStackItems: readonly { icon: string; name: string }[] = [
  { icon: 'code', name: 'ADVPL / TL++' },
  { icon: 'layers', name: 'TOTVS Protheus' },
  { icon: 'database', name: 'SQL Server' },
  { icon: 'doc', name: 'T-SQL' },
  { icon: 'sync', name: 'APIs REST' },
  { icon: 'globe', name: 'SOAP / XML' },
  { icon: 'browser', name: 'PO-UI' },
  { icon: 'angular', name: 'Angular' },
  { icon: 'typescript', name: 'TypeScript' },
  { icon: 'javascript', name: 'JavaScript' },
  { icon: 'nodedotjs', name: 'Node.js' },
  { icon: 'flutter', name: 'Flutter' },
  { icon: 'dart', name: 'Dart' },
  { icon: 'git', name: 'Git' },
  { icon: 'github', name: 'GitHub' },
  { icon: 'docker', name: 'Docker' },
  { icon: 'linux', name: 'Linux' },
  { icon: 'terminal', name: 'Jobs & Schedules' },
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
