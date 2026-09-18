export const siteMeta = {
  productName: 'NOVA Abme',
  profileSlug: 'eduardodelimaparanhos',
  name: 'Eduardo de Lima Paranhos',
  shortName: 'Eduardo Paranhos',
  role: 'Desenvolvedor ADVPL / TOTVS Protheus',
  title: 'Eduardo Paranhos — Desenvolvedor ADVPL / TOTVS Protheus · APIs & ERP',
  description:
    'Desenvolvimento de software com foco em TOTVS Protheus, ADVPL/TL++, APIs REST, SQL Server e automação de processos. São Paulo, remoto.',
  defaultUrl: 'https://nova-abme.pages.dev',
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

export const navItems = [
  { label: 'Experiência', href: '#engineering' },
  { label: 'Resultados', href: '#results' },
  { label: 'Projetos', href: '#work' },
  { label: 'Open Source', href: '#lab' },
  { label: 'Consultoria', href: '#business' },
  { label: 'Contato', href: '#connect' },
] as const;

export const stackItems = [
  {
    id: 'advpl',
    number: '01',
    label: 'ADVPL / TL++',
    title: 'Regras de negócio, customizações e processamento em lote',
    description:
      'Desenvolvimento de Pontos de Entrada (PE), User Functions, rotinas com framework MVC (FWFormModel / FWFormView), gatilhos e validações de integridade transacional no Protheus.',
    context: 'ERP / regras de negócio',
    highlights: ['Pontos de Entrada', 'MVC Protheus', 'Rotinas Automáticas', 'Jobs & Schedules'],
  },
  {
    id: 'protheus',
    number: '02',
    label: 'TOTVS PROTHEUS',
    title: 'Domínio funcional em módulos operacionais e financeiros',
    description:
      'Experiência prática com regras de negócio e rotinas nos módulos Financeiro (SIGAFIN), Faturamento (SIGAFAT), Compras (SIGACOM), Contabilidade Gerencial (SIGACTB) e manutenção de base via APSDU.',
    context: 'ERP / módulos corporativos',
    highlights: ['Financeiro (SIGAFIN)', 'Faturamento (SIGAFAT)', 'Compras (SIGACOM)', 'Contábil (SIGACTB) & APSDU'],
  },
  {
    id: 'rest',
    number: '03',
    label: 'APIs REST & WEBSERVICES',
    title: 'Criação, manutenção e melhoria de integrações',
    description:
      'Criação, manutenção e melhoria de integrações seguras entre o ERP Protheus e sistemas externos via REST/JSON e Webservices SOAP/XML. Conexão com plataformas externas, automação de fluxos operacionais e resiliência transacional.',
    context: 'integração / contratos HTTP',
    highlights: ['Criação de APIs REST', 'Manutenção & Melhorias', 'Webservices SOAP', 'Webhooks & Payloads'],
  },
  {
    id: 'sql',
    number: '04',
    label: 'SQL SERVER & T-SQL',
    title: 'Consultas de alta performance e diagnósticos relacionais',
    description:
      'Elaboração de queries complexas, views, procedures e índices direcionados ao modelo de dados do Protheus. Análise de planos de execução e otimização para eliminar lentidões em rotinas pesadas.',
    context: 'dados / diagnóstico & performance',
    highlights: ['T-SQL Avançado', 'Planos de Execução', 'Índices Estratégicos', 'DBAccess / Profiler'],
  },
  {
    id: 'poui',
    number: '05',
    label: 'PO-UI / ANGULAR',
    title: 'Interfaces corporativas modernas e intuitivas',
    description:
      'Construção de aplicações com o design system corporativo da TOTVS sobre Angular. Telas responsivas integradas via REST ao Protheus para operações ágeis e dashboards.',
    context: 'frontend / modernização',
    highlights: ['Design System PO-UI', 'Angular', 'Componentes TOTVS', 'Consumo de REST'],
  },
  {
    id: 'devops',
    number: '06',
    label: 'DEVOPS & SUSTENTAÇÃO',
    title: 'Controle de versão, compilação e deploy estruturado',
    description:
      'Gestão de repositórios Git, branches de sustentação/features, compilação controlada de pacotes RPO e esteiras de entrega contínua para manter a estabilidade dos ambientes.',
    context: 'engenharia / governança',
    highlights: ['Git & Versionamento', 'Gestão de RPO', 'Ambientes Dev/HML/Prod', 'TDS / VS Code'],
  },
  {
    id: 'appserver',
    number: '07',
    label: 'APPSERVER & JOBS',
    title: 'Processamento em segundo plano e alta disponibilidade',
    description:
      'Automação de rotinas agendadas no AppServer, disparos de alertas, integrações e sincronizações automáticas com tratamento seguro de exceções e rastreabilidade.',
    context: 'infra / rotinas em lote',
    highlights: ['Jobs Agendados', 'Multi-thread / IPC', 'Tratamento de Logs', 'Processamento Noturno'],
  },
  {
    id: 'audit',
    number: '08',
    label: 'GOVERNANÇA & CÓDIGO LIMPO',
    title: 'Rigor técnico, padronização e documentação viva',
    description:
      'Revisão criteriosa de código, observância às melhores práticas de desenvolvimento TOTVS, refatoração de código legado e documentação clara de regras e customizações.',
    context: 'qualidade / manutenibilidade',
    highlights: ['Code Review', 'Clean Code ADVPL', 'Documentação Técnica', 'Refatoração Segura'],
  },
] as const;

export const provenResults = [
  {
    metric: 'Pipeline Automatizado',
    title: 'Integração de ERP com API Externa',
    description:
      'Criação, manutenção e melhoria de integração REST: consumo de dados externos via GET, persistência em tabela temporária de alta performance, validação transacional e geração automática de Cliente (SA1), Pedido de Venda (SC5/SC6) e Faturamento (SF2/SD2) no Protheus.',
    tag: 'API REST / INTEGRAÇÃO',
  },
  {
    metric: 'ADVPL Nativo (.prw)',
    title: 'Relatórios Customizados de Alta Performance',
    description:
      'Desenvolvimento de relatórios analíticos em ADVPL puro (`.prw`), consolidação financeira de títulos, extratos de movimentações e análise gerencial com filtros dinâmicos e consultas diretas ao banco de dados do ERP.',
    tag: 'ADVPL / FINANCEIRO',
  },
  {
    metric: '100% Automático',
    title: 'Integrações de Marketplaces & E-commerce',
    description:
      'Criação, manutenção e melhoria de integrações: fluxo contínuo de pedidos, conciliação de pagamentos e emissão no Protheus conectado a hubs e plataformas externas, eliminando digitação manual e inconsistências operacionais.',
    tag: 'E-COMMERCE / REST',
  },
  {
    metric: 'Alta Performance',
    title: 'Otimização de Consultas em SQL Server',
    description:
      'Refatoração de queries críticas e criação de índices estratégicos sobre tabelas volumosas do ERP (SIGAFIN/SIGAFAT/SIGACOM), reduzindo expressivamente o tempo de processamento em rotinas pesadas e fechamentos.',
    tag: 'SQL / DIAGNÓSTICO',
  },
] as const;

export const projects = [
  {
    number: '01',
    name: 'nova-hub',
    badge: 'PLATAFORMA & OPERAÇÕES',
    title: 'Painel Central Multiplataforma, Telemetria & Integrações',
    description:
      'Painel de telemetria e orquestração de serviços com 3 módulos integrados: NEXUS (integração corporativa com plataforma de tickets/chamados), ARCADIA (consumo de dados via IGDB API) e CORTEX (motor de contexto e núcleo da arquitetura de Engineering AI Harness).',
    modules: [
      { name: 'NEXUS', role: 'Integração com plataforma corporativa de tickets e chamados' },
      { name: 'ARCADIA', role: 'Consumo estruturado e catálogo de dados via IGDB API' },
      { name: 'CORTEX', role: 'Motor de contextos e core da arquitetura de Engineering AI Harness' },
    ],
    stack: 'Flutter · Dart · Linux · REST · Architecture',
    year: '2026',
    href: 'https://github.com/limaduzz11/nova-hub',
  },
  {
    number: '02',
    name: 'protheus-research',
    badge: 'MCP SERVER / AI',
    title: 'Pesquisa Técnica Estruturada no Ecossistema Protheus',
    description:
      'Servidor Model Context Protocol (MCP) em TypeScript que indexa sintaxe ADVPL, rotinas, tabelas e regras do Protheus, permitindo consultas técnicas estruturadas por agentes de IA e desenvolvedores.',
    modules: [],
    stack: 'TypeScript · Node.js · MCP · TOTVS',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-research',
  },
  {
    number: '03',
    name: 'protheus-rest-lab',
    badge: 'ARQUITETURA / BACKEND',
    title: 'Laboratório de Padrões para APIs REST no Protheus',
    description:
      'Implementação de referência para construção de endpoints REST seguros e padronizados no Protheus: paginação, controle de status HTTP, serialização JSON e tratamento consistente de exceções.',
    modules: [],
    stack: 'ADVPL / TL++ · REST · JSON · ERP',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-rest-lab',
  },
  {
    number: '04',
    name: 'protheus-po-ui-template',
    badge: 'PORTAL / PO-UI',
    title: 'Template de Portal Corporativo em Angular e PO-UI',
    description:
      'Base de aplicação corporativa completa utilizando o design system PO-UI sobre Angular, pronta para integração via REST com backends do Protheus para telas de consulta e operação rápida.',
    modules: [],
    stack: 'Angular · PO-UI · TypeScript · REST',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-po-ui-template',
  },
] as const;

export const vantaProjects = [
  {
    name: 'VANTA Reader',
    badge: 'EM EVOLUÇÃO',
    role: 'LEITOR OFFLINE-FIRST',
    description:
      'Leitor e organizador de conteúdo focado em autonomia de armazenamento local, leitura fluida e zero distrações.',
  },
  {
    name: 'XNOVA Runtime',
    badge: 'EM DESENVOLVIMENTO',
    role: '',
    description:
      'Runtime em C/C++ e UWP voltado para Xbox Series em Dev Mode, permitindo a execução de binários (.exe) de Windows diretamente no console.',
  },
  {
    name: 'VANTA Feed',
    badge: 'CONCEITO EM LABORATÓRIO',
    role: '',
    description:
      'Conceito de organizador de feeds e fontes de informação técnica com prioridade estrita para privacidade e leitura limpa.',
  },
  {
    name: 'VANTA Scan & Doc Toolkit',
    badge: 'CONCEITO EM LABORATÓRIO',
    role: '',
    description:
      'Conceito de utilitários locais para digitalização, tratamento e extração estruturada de documentos e relatórios.',
  },
] as const;

export interface ContactChannel {
  id: string;
  number: string;
  label: string;
  detail: string;
  actionText: string;
  href: string;
  isExternal: boolean;
  badge: string;
  download?: boolean;
  copyable?: boolean;
}

export const contactChannels: readonly ContactChannel[] = [
  {
    id: 'whatsapp',
    number: '01',
    label: 'WhatsApp Direto',
    detail: '+55 11 94466-5292 · Conversa rápida sobre vagas e projetos',
    actionText: 'Conversar no WhatsApp ↗',
    href: publicLinks.whatsapp,
    isExternal: true,
    badge: 'MENSAGEM',
  },
  {
    id: 'email',
    number: '02',
    label: 'E-mail Direto',
    detail: publicLinks.emailRaw,
    actionText: 'Enviar e-mail ↗',
    href: publicLinks.email,
    isExternal: false,
    copyable: true,
    badge: 'DIRETO',
  },
  {
    id: 'cv',
    number: '03',
    label: 'Currículo Consolidado (PDF)',
    detail: 'Documento técnico completo para recrutamento e triagem ATS',
    actionText: 'Baixar currículo (PDF) ↓',
    href: publicLinks.cv,
    isExternal: false,
    download: true,
    badge: 'DOCUMENTO',
  },
  {
    id: 'linkedin',
    number: '04',
    label: 'LinkedIn',
    detail: 'Trajetória profissional, conexões e recomendações corporativas',
    actionText: 'Ver perfil no LinkedIn ↗',
    href: publicLinks.linkedin,
    isExternal: true,
    badge: 'REDE',
  },
  {
    id: 'github',
    number: '05',
    label: 'GitHub',
    detail: 'Código-fonte público, arquiteturas e projetos de referência',
    actionText: 'Ver repositórios no GitHub ↗',
    href: publicLinks.github,
    isExternal: true,
    badge: 'CÓDIGO',
  },
  {
    id: 'vcard',
    number: '06',
    label: 'Salvar Contato (vCard)',
    detail: 'Adicione meu contato profissional ao celular em um único toque',
    actionText: 'Salvar contato (.vcf) ↓',
    href: publicLinks.vcard,
    isExternal: false,
    download: true,
    badge: 'VCARD',
  },
] as const;

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
