export const siteMeta = {
  productName: 'NOVA Abme',
  profileSlug: 'eduardodelimaparanhos',
  name: 'Eduardo de Lima Paranhos',
  shortName: 'Eduardo Paranhos',
  title: 'Eduardo Paranhos — Desenvolvimento de Software',
  description:
    'Desenvolvedor de software com experiência em ERP, integrações, automação e produtos digitais.',
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
  { label: 'Engenharia', href: '#engineering' },
  { label: 'Projetos', href: '#work' },
  { label: 'Contato', href: '#connect' },
] as const;

export const contextRoutes = [
  {
    id: 'software',
    number: '01',
    label: 'Recrutamento',
    description:
      'Para conhecer minha experiência, as tecnologias que uso e os problemas que gosto de resolver.',
    cta: 'VER EXPERIÊNCIA →',
    href: '#engineering',
  },
  {
    id: 'open-source',
    number: '02',
    label: 'Projetos',
    description:
      'Uma seleção de projetos e repositórios públicos para conhecer meu jeito de trabalhar.',
    cta: 'VER PROJETOS →',
    href: '#lab',
  },
  {
    id: 'business',
    number: '03',
    label: 'ELP Tecnologia',
    description:
      'Para conversar sobre desenvolvimento, integrações e automação em sistemas de negócio.',
    cta: 'CONHECER A ELP →',
    href: '#business',
  },
  {
    id: 'connect',
    number: '04',
    label: 'Contato',
    description:
      'Se preferir ir direto ao ponto, aqui estão os caminhos para falar comigo.',
    cta: 'ENTRAR EM CONTATO →',
    href: '#connect',
  },
] as const;

export const audienceModes = [
  {
    id: 'hiring',
    label: 'Sou recrutador(a)',
    note: 'Quero conhecer rapidamente sua experiência, seus projetos e seu perfil profissional.',
    cta: 'VER EXPERIÊNCIA E PROJETOS →',
    href: '#engineering',
  },
  {
    id: 'software',
    label: 'Preciso de software',
    note: 'Quero entender como você trabalha com ERP, integrações e automação.',
    cta: 'CONHECER A ELP →',
    href: '#business',
  },
  {
    id: 'exploring',
    label: 'Estou conhecendo',
    note: 'Quero ver projetos públicos, experimentos e código aberto.',
    cta: 'VER PROJETOS PÚBLICOS →',
    href: '#lab',
  },
] as const;

export const stackItems = [
  {
    id: 'advpl',
    number: '01',
    label: 'ADVPL / TL++',
    title: 'Lógica de negócio perto do ERP',
    description:
      'Desenvolvimento e manutenção sob medida dentro do ecossistema TOTVS Protheus.',
    context: 'ERP / lógica de negócio',
  },
  {
    id: 'protheus',
    number: '02',
    label: 'TOTVS PROTHEUS',
    title: 'Sistemas corporativos com desafios reais',
    description:
      'Conhecimento dos módulos, das regras e do contexto operacional que fazem parte do Protheus.',
    context: 'ERP / corporativo',
  },
  {
    id: 'sql',
    number: '03',
    label: 'SQL SERVER',
    title: 'Dados que continuam fáceis de entender',
    description:
      'Consultas, modelos e diagnósticos para sistemas que não podem depender de tentativa e erro.',
    context: 'dados / diagnóstico',
  },
  {
    id: 'rest',
    number: '04',
    label: 'APIs REST',
    title: 'Interfaces com acordos claros',
    description:
      'Integrações com contratos claros, limites bem definidos e caminhos para lidar com falhas.',
    context: 'integração / HTTP',
  },
  {
    id: 'poui',
    number: '05',
    label: 'PO-UI / ANGULAR',
    title: 'Interfaces que ajudam o trabalho',
    description:
      'Telas que mostram o estado do sistema e deixam claro qual é o próximo passo.',
    context: 'interface / operação',
  },
  {
    id: 'automation',
    number: '06',
    label: 'AUTOMAÇÃO',
    title: 'Menos repetição, mais controle',
    description:
      'Automação de tarefas repetitivas com comportamento observável e reversível.',
    context: 'fluxo / operação',
  },
  {
    id: 'linux',
    number: '07',
    label: 'LINUX',
    title: 'O ambiente também faz parte do sistema',
    description:
      'Trabalho próximo do ambiente, das ferramentas e do caminho que leva o software até as pessoas.',
    context: 'ambiente / entrega',
  },
  {
    id: 'architecture',
    number: '08',
    label: 'ARQUITETURA DE SOFTWARE',
    title: 'Clareza antes do enfeite',
    description:
      'Escolha de uma arquitetura simples o bastante para ser clara, testável e durável.',
    context: 'projeto / sistemas',
  },
] as const;

export const projects = [
  {
    number: '01',
    name: 'protheus-research',
    category: 'FERRAMENTA / PÚBLICO',
    description:
      'Servidor de pesquisa estruturada para trabalho técnico no ecossistema TOTVS Protheus.',
    stack: 'TypeScript · Node.js · MCP',
    status: 'REPOSITÓRIO PÚBLICO',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-research',
  },
  {
    number: '02',
    name: 'protheus-rest-lab',
    category: 'INTEGRAÇÃO / PÚBLICO',
    description:
      'Padrões práticos para consumir e expor APIs REST ligadas ao Protheus.',
    stack: 'ADVPL · REST · JSON',
    status: 'REPOSITÓRIO PÚBLICO',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-rest-lab',
  },
  {
    number: '03',
    name: 'protheus-po-ui-template',
    category: 'INTERFACE / PÚBLICO',
    description:
      'Base de referência para interfaces Angular e PO-UI conectadas a backends ERP.',
    stack: 'Angular · PO-UI · ADVPL',
    status: 'REPOSITÓRIO PÚBLICO',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-po-ui-template',
  },
  {
    number: '04',
    name: 'nova-hub',
    category: 'PRODUTO / PÚBLICO',
    description:
      'Painel multiplataforma para acompanhar dispositivos e a telemetria dos sistemas.',
    stack: 'Flutter · Dart · Material 3',
    status: 'REPOSITÓRIO PÚBLICO',
    year: '2026',
    href: 'https://github.com/limaduzz11/nova-hub',
  },
] as const;

export const workDirectories = ['código-aberto/', 'sistemas/', 'experimentos/', 'engenharia/'] as const;

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
