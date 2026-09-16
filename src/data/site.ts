export const siteMeta = {
  productName: 'NOVA Abme',
  profileSlug: 'eduardodelimaparanhos',
  name: 'Eduardo de Lima Paranhos',
  shortName: 'Eduardo Paranhos',
  title: 'Eduardo Paranhos — Software Engineering',
  description:
    'Software engineering across ERP, integrations, automation and open-source systems.',
  defaultUrl: 'https://nova-abme.pages.dev',
  year: 2026,
} as const;

export const publicLinks = {
  github: 'https://github.com/limaduzz11',
  linkedin: 'https://www.linkedin.com/in/eduardo-de-lima-paranhos-910930263/',
  elp: 'https://elptecnologia.com.br/',
  contact: 'https://elptecnologia.com.br/contato/',
} as const;

export const navItems = [
  { label: 'Engineering', href: '#engineering' },
  { label: 'Work', href: '#work' },
  { label: 'Connect', href: '#connect' },
] as const;

export const contextRoutes = [
  {
    id: 'software',
    number: '01',
    label: 'Software',
    description:
      'ERP systems, APIs and automation — the practical layer where software meets operations.',
    cta: 'OPEN ENGINEERING INDEX →',
    href: '#engineering',
  },
  {
    id: 'open-source',
    number: '02',
    label: 'Open source',
    description:
      'Public repositories, reusable patterns and experiments built in the open.',
    cta: 'ENTER THE LAB →',
    href: '#lab',
  },
  {
    id: 'business',
    number: '03',
    label: 'Business',
    description:
      'A direct route to ELP Tecnologia for software work around business systems.',
    cta: 'VISIT ELP TECNOLOGIA →',
    href: '#business',
  },
  {
    id: 'connect',
    number: '04',
    label: 'Connect',
    description:
      'Professional profile, public code or a direct conversation — choose the shortest path.',
    cta: 'CHOOSE A DIRECT ROUTE →',
    href: '#connect',
  },
] as const;

export const audienceModes = [
  {
    id: 'hiring',
    label: "I'm hiring",
    note: 'Prioritising the engineering index, selected work and professional profile.',
    cta: 'SEE THE ENGINEERING INDEX →',
    href: '#engineering',
  },
  {
    id: 'software',
    label: 'I need software',
    note: 'Prioritising capabilities, ELP Tecnologia and a direct contact route.',
    cta: 'GO TO THE BUSINESS ROUTE →',
    href: '#business',
  },
  {
    id: 'exploring',
    label: "I'm exploring",
    note: 'Prioritising public work, experiments and the open-source lab.',
    cta: 'OPEN THE LAB →',
    href: '#lab',
  },
] as const;

export const stackItems = [
  {
    id: 'advpl',
    number: '01',
    label: 'ADVPL / TL++',
    title: 'Business logic close to the ERP',
    description:
      'Custom development and maintenance inside the TOTVS Protheus ecosystem.',
    context: 'ERP / domain logic',
  },
  {
    id: 'protheus',
    number: '02',
    label: 'TOTVS PROTHEUS',
    title: 'Enterprise systems with real constraints',
    description:
      'Understanding the product surface, modules and operational context around Protheus.',
    context: 'ERP / enterprise',
  },
  {
    id: 'sql',
    number: '03',
    label: 'SQL SERVER',
    title: 'Data work that stays explainable',
    description:
      'Queries, data models and diagnostics for systems that cannot afford guesswork.',
    context: 'data / diagnostics',
  },
  {
    id: 'rest',
    number: '04',
    label: 'REST APIS',
    title: 'Interfaces with an explicit contract',
    description:
      'Designing and consuming integrations with clear payloads, boundaries and failure paths.',
    context: 'integration / HTTP',
  },
  {
    id: 'poui',
    number: '05',
    label: 'PO-UI / ANGULAR',
    title: 'Operational interfaces, not decoration',
    description:
      'Interfaces that expose the state of a system and make the next action obvious.',
    context: 'frontend / workflow',
  },
  {
    id: 'automation',
    number: '06',
    label: 'AUTOMATION',
    title: 'Less repetition, more control',
    description:
      'Automating repeatable work while keeping the behavior observable and reversible.',
    context: 'workflow / operations',
  },
  {
    id: 'linux',
    number: '07',
    label: 'LINUX',
    title: 'The environment is part of the system',
    description:
      'Working close to the runtime, tools and delivery path that keep software moving.',
    context: 'runtime / delivery',
  },
  {
    id: 'architecture',
    number: '08',
    label: 'SOFTWARE ARCHITECTURE',
    title: 'Boundaries before ornament',
    description:
      'Choosing the smallest architecture that makes the system clear, testable and durable.',
    context: 'design / systems',
  },
] as const;

export const projects = [
  {
    number: '01',
    name: 'protheus-research',
    category: 'TOOLING / PUBLIC',
    description:
      'A structured research server for technical work in the TOTVS Protheus ecosystem.',
    stack: 'TypeScript · Node.js · MCP',
    status: 'PUBLIC REPOSITORY',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-research',
  },
  {
    number: '02',
    name: 'protheus-rest-lab',
    category: 'INTEGRATION / PUBLIC',
    description:
      'Practical patterns for consuming and exposing REST APIs around Protheus.',
    stack: 'ADVPL · REST · JSON',
    status: 'PUBLIC REPOSITORY',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-rest-lab',
  },
  {
    number: '03',
    name: 'protheus-po-ui-template',
    category: 'INTERFACE / PUBLIC',
    description:
      'A reference surface for Angular and PO-UI interfaces integrated with ERP backends.',
    stack: 'Angular · PO-UI · ADVPL',
    status: 'PUBLIC REPOSITORY',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-po-ui-template',
  },
  {
    number: '04',
    name: 'nova-hub',
    category: 'PRODUCT / PUBLIC',
    description:
      'A multiplatform dashboard for remote device management and system telemetry.',
    stack: 'Flutter · Dart · Material 3',
    status: 'PUBLIC REPOSITORY',
    year: '2026',
    href: 'https://github.com/limaduzz11/nova-hub',
  },
] as const;

export const workDirectories = ['open-source/', 'systems/', 'experiments/', 'engineering/'] as const;

/**
 * Keeps internal links correct for both Cloudflare Pages (/) and the optional
 * GitHub Pages fallback (/aboutme/).
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
