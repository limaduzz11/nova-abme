export const siteMeta = {
  productName: 'Eduardo Paranhos',
  systemName: 'NOVA Abme',
  profileSlug: 'eduardodelimaparanhos',
  name: 'Eduardo de Lima Paranhos',
  shortName: 'Eduardo Paranhos',
  role: 'Desenvolvedor ADVPL / TOTVS Protheus',
  title: 'Eduardo Paranhos — Desenvolvedor ADVPL / TOTVS Protheus · APIs & ERP',
  description:
    'Desenvolvedor especializado em TOTVS Protheus, ADVPL/TL++, APIs REST e SQL Server. Experiência em Faturamento, Financeiro, Estoque, Custos e integrações corporativas. São Paulo, remoto.',
  defaultUrl: 'https://nova-abme.pages.dev',
  year: 2026,
  availability: '🟢 Aberto a propostas · CLT ou PJ · Remoto & São Paulo',
  location: 'São Paulo, Brasil · Remoto / Híbrido (GMT-3)',
  email: 'eduardodelimaparanhos@gmail.com',
  whatsappUrl: 'https://wa.me/5511999999999?text=Ol%C3%A1%20Eduardo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar',
  cvPath: '/cv/eduardo-paranhos-cv.pdf',
  vcardPath: '/eduardo-paranhos.vcf',
} as const;

export const publicLinks = {
  github: 'https://github.com/limaduzz11',
  linkedin: 'https://www.linkedin.com/in/eduardo-de-lima-paranhos-910930263/',
  elp: 'https://elptecnologia.com.br/',
  contact: 'https://elptecnologia.com.br/contato/',
  email: 'mailto:eduardodelimaparanhos@gmail.com?subject=Oportunidade%20ADVPL%20%2F%20TOTVS%20Protheus',
  emailRaw: 'eduardodelimaparanhos@gmail.com',
  whatsapp: 'https://wa.me/5511999999999?text=Ol%C3%A1%20Eduardo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar',
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

export const contextRoutes = [
  {
    id: 'recruitment',
    number: '01',
    label: 'Recrutamento & Perfil',
    description:
      'Resumo direto para recrutadores e gestores: especialista em TOTVS Protheus (ADVPL/TL++), APIs REST, SQL Server, módulos corporativos e download imediato do currículo.',
    cta: 'VER EXPERIÊNCIA E RESUMO →',
    href: '#engineering',
  },
  {
    id: 'results',
    number: '02',
    label: 'Resultados Práticos',
    description:
      'Casos reais anonimizados: integrações de marketplaces sem digitação manual, automação de conciliação bancária e otimização de consultas pesadas em SQL Server.',
    cta: 'VER RESULTADOS REAIS →',
    href: '#results',
  },
  {
    id: 'projects',
    number: '03',
    label: 'Projetos Selecionados',
    description:
      'Repositórios públicos com problema e solução bem definidos: MCP Server para pesquisa em Protheus, padrões de arquitetura REST, template PO-UI e painel de telemetria.',
    cta: 'VER PROJETOS PÚBLICOS →',
    href: '#work',
  },
  {
    id: 'business',
    number: '04',
    label: 'Consultoria & ELP',
    description:
      'Caminho corporativo para contratação de desenvolvimento sob demanda, integrações de sistemas de negócio e consultoria em ERP.',
    cta: 'CONHECER A ELP TECNOLOGIA →',
    href: '#business',
  },
  {
    id: 'connect',
    number: '05',
    label: 'Contato Imediato',
    description:
      'Canais sem intermediários: WhatsApp, e-mail direto com botão de copiar, LinkedIn, GitHub e arquivos de contato prontos para download.',
    cta: 'FALAR COMIGO AGORA →',
    href: '#connect',
  },
] as const;

export const audienceModes = [
  {
    id: 'hiring',
    label: 'Sou recrutador(a)',
    note: 'Visão executiva imediata: Desenvolvedor Protheus / ADVPL, stack técnica, módulos do ERP, histórico profissional e currículo para download.',
    cta: 'BAIXAR CURRÍCULO (PDF) ↓',
    href: '/cv/eduardo-paranhos-cv.pdf',
    download: true,
  },
  {
    id: 'software',
    label: 'Preciso de software / consultoria',
    note: 'Desenvolvimento sob medida para empresas: integrações REST/SOAP, automação de regras comerciais e sustentação de ERP via ELP Tecnologia.',
    cta: 'CONHECER A ELP TECNOLOGIA →',
    href: '#business',
    download: false,
  },
  {
    id: 'exploring',
    label: 'Estou conhecendo',
    note: 'Navegue pelos repositórios públicos, experimentos no ecossistema TOTVS e iniciativas do laboratório de código aberto VANTA Labz.',
    cta: 'VER PROJETOS PÚBLICOS →',
    href: '#work',
    download: false,
  },
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
    title: 'Domínio dos módulos operacionais e do ciclo corporativo',
    description:
      'Experiência prática nos módulos de Faturamento (SIGAFAT), Financeiro (SIGAFIN), Estoque e Custos (SIGAEST) e Compras (SIGACOM). Parametrização, regras fiscais e sustentação de processos críticos.',
    context: 'ERP / módulos corporativos',
    highlights: ['Faturamento (SIGAFAT)', 'Financeiro (SIGAFIN)', 'Estoque (SIGAEST)', 'Compras (SIGACOM)'],
  },
  {
    id: 'rest',
    number: '03',
    label: 'APIs REST & WEBSERVICES',
    title: 'Integrações seguras entre o ERP e sistemas externos',
    description:
      'Construção e consumo de endpoints REST/JSON e Webservices SOAP/XML. Integrações com plataformas de e-commerce, hubs de marketplaces (Shopee, Anymarket, Mercado Livre) e emissão de notas fiscais.',
    context: 'integração / contratos HTTP',
    highlights: ['APIs RESTful', 'SOAP / XML', 'Webhooks', 'Marketplaces & E-commerce'],
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
      'Desenvolvimento de portais, painéis operacionais e formulários web utilizando a biblioteca PO-UI da TOTVS sobre Angular. Experiências responsivas que simplificam a operação do usuário final.',
    context: 'interface / portais corporativos',
    highlights: ['Design System PO-UI', 'Angular & TypeScript', 'Tabelas Dinâmicas', 'Consumo de APIs REST'],
  },
  {
    id: 'automation',
    number: '06',
    label: 'JOBS & AUTOMAÇÕES',
    title: 'Processamentos em background resilientes e observáveis',
    description:
      'Automação de conciliação bancária (arquivos CNAB 240/400), rotinas de fechamento, rotinas agendadas no AppServer e disparos de alertas com tratamento seguro de exceções e rastreabilidade.',
    context: 'automação / background processing',
    highlights: ['Conciliação CNAB', 'Schedules Protheus', 'Tratamento de Exceções', 'Auditoria & Logs'],
  },
  {
    id: 'linux',
    number: '07',
    label: 'LINUX & AMBIENTE',
    title: 'Infraestrutura estável para aplicações corporativas',
    description:
      'Configuração e gerenciamento de servidores de aplicação Protheus (AppServer, DBAccess, Licenciamento) em ambientes Linux, pipelines de compilação automatizada e monitoramento de serviços.',
    context: 'infraestrutura / servidores',
    highlights: ['Servidores AppServer', 'DBAccess', 'Scripts Bash / Shell', 'Deploy Automatizado'],
  },
  {
    id: 'architecture',
    number: '08',
    label: 'ARQUITETURA & QUALIDADE',
    title: 'Código limpo, manutenível e durável',
    description:
      'Adoção de boas práticas de engenharia de software, separação estrita de camadas de dados e regras de negócio, testes estruturados e documentação clara para facilitar a evolução do sistema.',
    context: 'arquitetura / engenharia',
    highlights: ['Separação de Camadas', 'Design Patterns', 'Documentação Técnica', 'Versionamento Git'],
  },
] as const;

export const provenResults = [
  {
    metric: '100% Automático',
    title: 'Integrações de Marketplaces & E-commerce',
    description:
      'Fluxo integrado de pedidos, baixa de estoque e faturamento no Protheus integrado a hubs (Anymarket) e marketplaces, eliminando digitação manual e divergências de estoque.',
    tag: 'E-COMMERCE / REST',
  },
  {
    metric: 'Zero Digitação',
    title: 'Conciliação Bancária & Retorno CNAB',
    description:
      'Automatização da leitura de arquivos de retorno bancário e baixa de títulos no módulo Financeiro (SIGAFIN), acelerando expressivamente a rotina diária de conciliação.',
    tag: 'FINANCEIRO / JOBS',
  },
  {
    metric: 'Alta Performance',
    title: 'Otimização de Consultas em SQL Server',
    description:
      'Refatoração de queries críticas e criação de índices estratégicos sobre tabelas volumosas do ERP, reduzindo o tempo de processamento de relatórios e rotinas mensais.',
    tag: 'SQL / DIAGNÓSTICO',
  },
  {
    metric: 'Aderência Fiscal',
    title: 'Customizações em Faturamento & Compras',
    description:
      'Pontos de entrada, validações fiscais e rotinas de aprovação em MVC respeitando a legislação tributária e regras comerciais da operação.',
    tag: 'FATURAMENTO / COMPRAS',
  },
] as const;

export const projects = [
  {
    number: '01',
    name: 'protheus-research',
    badge: 'MCP SERVER / AI',
    title: 'Pesquisa Técnica Estruturada no Protheus',
    problem: 'Documentação e regras do ecossistema TOTVS são dispersas e de difícil indexação para agentes e desenvolvedores.',
    solution: 'Servidor Model Context Protocol em TypeScript que permite consultas estruturadas de sintaxe ADVPL, rotinas e regras de ERP.',
    stack: 'TypeScript · Node.js · MCP · TOTVS',
    status: 'CÓDIGO ABERTO',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-research',
  },
  {
    number: '02',
    name: 'protheus-rest-lab',
    badge: 'ARQUITETURA / BACKEND',
    title: 'Laboratório de Padrões para APIs REST no Protheus',
    problem: 'Falta de uniformidade em serialização JSON, paginação, cabeçalhos HTTP e tratamento de falhas em ADVPL.',
    solution: 'Padrões de referência testados com endpoints seguros, autenticação estruturada e boas práticas de integração HTTP.',
    stack: 'ADVPL / TL++ · REST · JSON · ERP',
    status: 'CÓDIGO ABERTO',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-rest-lab',
  },
  {
    number: '03',
    name: 'protheus-po-ui-template',
    badge: 'PORTAL / PO-UI',
    title: 'Template de Interface Corporativa em Angular e PO-UI',
    problem: 'Interfaces nativas de ERP muitas vezes não atendem a requisitos modernos de usabilidade e mobilidade para operadores.',
    solution: 'Base completa em Angular com componentes PO-UI pronta para integração via REST com o Protheus.',
    stack: 'Angular · PO-UI · TypeScript · REST',
    status: 'CÓDIGO ABERTO',
    year: '2026',
    href: 'https://github.com/limaduzz11/protheus-po-ui-template',
  },
  {
    number: '04',
    name: 'nova-hub',
    badge: 'TELEMETRIA / FLUTTER',
    title: 'Painel Multiplataforma de Telemetria e Infraestrutura',
    problem: 'Acompanhamento unificado de nós locais, serviços corporativos e telemetria de sistema sem stacks pesadas.',
    solution: 'Aplicação multiplataforma reativa em Flutter com monitoramento de status, telemetria e visualização em tempo real.',
    stack: 'Flutter · Dart · Material 3 · Linux',
    status: 'CÓDIGO ABERTO',
    year: '2026',
    href: 'https://github.com/limaduzz11/nova-hub',
  },
] as const;

export const vantaProjects = [
  {
    name: 'VANTA Reader',
    role: 'LEITOR OFFLINE-FIRST',
    description: 'Leitor e organizador de conteúdo focado em autonomia de armazenamento local, leitura fluida e zero distrações.',
    status: 'EM EVOLUÇÃO',
  },
  {
    name: 'VANTA Feed',
    role: 'AGREGADOR DE CONTEÚDO',
    description: 'Organizador de feeds e fontes de informação técnica com foco em privacidade e simplicidade.',
    status: 'LABORATÓRIO',
  },
  {
    name: 'VANTA Scan & Doc Toolkit',
    role: 'PROCESSAMENTO DE DOCUMENTOS',
    description: 'Utilitários para tratamento, digitalização e extração estruturada de documentos e relatórios locais.',
    status: 'LABORATÓRIO',
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
    detail: 'Conversa rápida sobre oportunidades ou projetos',
    actionText: 'Conversar no WhatsApp ↗',
    href: publicLinks.whatsapp,
    isExternal: true,
    badge: 'RESPOSTA RÁPIDA',
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
    detail: 'Documento completo para recrutadores e ATS',
    actionText: 'Baixar currículo (PDF) ↓',
    href: publicLinks.cv,
    isExternal: false,
    download: true,
    badge: 'CURRÍCULO',
  },
  {
    id: 'linkedin',
    number: '04',
    label: 'LinkedIn',
    detail: 'Trajetória profissional, conexões e recomendações',
    actionText: 'Ver perfil no LinkedIn ↗',
    href: publicLinks.linkedin,
    isExternal: true,
    badge: 'REDE',
  },
  {
    id: 'github',
    number: '05',
    label: 'GitHub',
    detail: 'Código-fonte, laboratórios e projetos públicos',
    actionText: 'Ver perfil no GitHub ↗',
    href: publicLinks.github,
    isExternal: true,
    badge: 'CÓDIGO',
  },
  {
    id: 'vcard',
    number: '06',
    label: 'Salvar Contato (vCard)',
    detail: 'Adicione meu contato ao celular em 1 toque',
    actionText: 'Salvar contato (.vcf) ↓',
    href: publicLinks.vcard,
    isExternal: false,
    download: true,
    badge: '1-TOQUE',
  },
  {
    id: 'elp',
    number: '07',
    label: 'ELP Tecnologia',
    detail: 'Demandas empresariais, consultoria e projetos PJ',
    actionText: 'Acessar elptecnologia.com.br ↗',
    href: publicLinks.elp,
    isExternal: true,
    badge: 'CONSULTORIA',
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
