/**
 * Conteúdo textual do site por idioma (pt / en / es).
 * Dados neutros (links, e-mails, repositórios, ícones) ficam em `site.ts`.
 */

export type Lang = 'pt' | 'en' | 'es';

export interface StackItemContent {
  number: string;
  label: string;
  title: string;
  description: string;
  context: string;
  highlights: readonly string[];
}

export interface ResultItemContent {
  metric: string;
  title: string;
  description: string;
}

export interface TrajectoryItemContent {
  period: string;
  role: string;
  company: string;
  current: boolean;
  highlights: readonly string[];
}

export interface ProjectTextContent {
  category: string;
  title: string;
  description: string;
  diagramCaption: string;
  metrics: readonly { value: string; label: string }[];
}

export interface LabItemContent {
  badge: string;
  name: string;
  description: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  heroTitle: readonly string[];
  navLabel: string;
  nav: readonly { label: string; href: string }[];
  hero: {
    eyebrow: string;
    lede: string;
    actionsLabel: string;
    ctaCv: string;
    ctaLinkedin: string;
    ctaWhatsapp: string;
    projectsLink: string;
    scroll: string;
  };
  engineering: {
    eyebrow: string;
    title: string;
    intro: string;
    stackHeading: string;
    topicsLabel: string;
    stack: readonly StackItemContent[];
    results: {
      eyebrow: string;
      title: string;
      note: string;
      items: readonly ResultItemContent[];
      ctaQuestion: string;
      ctaLink: string;
    };
  };
  trajectory: {
    eyebrow: string;
    title: string;
    education: string;
    degree: string;
    items: readonly TrajectoryItemContent[];
  };
  work: {
    eyebrow: string;
    headingA: string;
    headingB: string;
    intro: string;
    toolsLabel: string;
    archLabel: string;
    prevLabel: string;
    nextLabel: string;
    linkLabel: string;
    allRepos: string;
    projects: Record<string, ProjectTextContent>;
  };
  techstack: {
    headingA: string;
    headingB: string;
    subtitle: string;
  };
  lab: {
    eyebrow: string;
    title: string;
    intro: string;
    action: string;
    items: Record<string, LabItemContent>;
  };
  business: {
    title: string;
    cards: {
      role: { title: string; description: string; note: string; cta: string };
      elp: { title: string; description: string; note: string; cta: string; ctaEmail: string };
    };
  };
  connect: {
    title: string;
    introBefore: string;
    introAfter: string;
    copy: string;
    channels: Record<string, { label: string; detail: string; action: string }>;
  };
  footer: { role: string; location: string; quickLinks: string };
  langSwitch: { ariaLabel: string; switchingTo: string };
  command: { eyebrow: string; title: string; home: string; menuLabel: string; closeLabel: string; search: string; empty: string };
  notFound: { eyebrow: string; title: string; text: string; cta: string; pageTitle: string; description: string };
}

export const content: Record<Lang, SiteContent> = {
  pt: {
    heroTitle: ['SOFTWARE', 'QUE FUNCIONA', 'NO MUNDO REAL.'],
    navLabel: 'Navegação principal',
    meta: {
      title: 'Eduardo Paranhos — Desenvolvedor de Software | TOTVS Protheus · ADVPL, APIs & SQL Server',
      description:
        'Desenvolvedor de Software com foco em TOTVS Protheus, ADVPL/TL++, integrações REST/SOAP e SQL Server desde 2021, em rotinas de Financeiro, Faturamento, Compras e Contábil. São Paulo, remoto.',
    },
    nav: [
      { label: 'Experiência', href: '#engineering' },
      { label: 'Projetos', href: '#work' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contratação', href: '#business' },
      { label: 'Contato', href: '#connect' },
    ],
    hero: {
      eyebrow: 'EDUARDO PARANHOS · DESENVOLVEDOR DE SOFTWARE | TOTVS PROTHEUS',
      actionsLabel: 'Ações principais',
      lede: 'TOTVS Protheus · ADVPL/TL++ · APIs REST & SOAP · SQL Server. Em produção desde 2021.',
      ctaCv: 'Baixar Currículo (PDF)',
      ctaLinkedin: 'LinkedIn',
      ctaWhatsapp: 'WhatsApp',
      projectsLink: 'Ver projetos técnicos',
      scroll: 'Explorar',
    },
    engineering: {
      eyebrow: 'EXPERIÊNCIA & ESPECIALIDADES',
      title: 'ENGENHARIA PARA\nPROCESSOS REAIS.',
      intro:
        'Desenvolvimento, integração e sustentação de sistemas corporativos.',
      stackHeading: 'ESPECIALIDADES DE ATUAÇÃO',
      topicsLabel: 'Tópicos & Módulos:',
      stack: [
        {
          number: '01',
          label: 'ADVPL / TL++',
          title: 'Regras de negócio, customizações e processamento em lote',
          description:
            'Pontos de Entrada (PE), User Functions, rotinas MVC (FWFormModel / FWFormView), gatilhos e validações transacionais.',
          context: 'ERP / regras de negócio',
          highlights: ['Pontos de Entrada', 'MVC Protheus', 'Rotinas Automáticas', 'Jobs & Schedules'],
        },
        {
          number: '02',
          label: 'TOTVS PROTHEUS',
          title: 'Domínio funcional em módulos operacionais e financeiros',
          description:
            'Regras de negócio e rotinas em Financeiro (SIGAFIN), Faturamento (SIGAFAT), Compras (SIGACOM), Estoque (SIGAEST), Contábil (SIGACTB) e APSDU.',
          context: 'ERP / módulos corporativos',
          highlights: ['Financeiro (SIGAFIN)', 'Faturamento (SIGAFAT)', 'Compras (SIGACOM)', 'Estoque (SIGAEST) · Contábil (SIGACTB) & APSDU'],
        },
        {
          number: '03',
          label: 'APIs REST & WEBSERVICES',
          title: 'Criação, manutenção e melhoria de integrações',
          description:
            'Integrações REST/JSON e SOAP/XML entre o Protheus e sistemas externos, com resiliência transacional e tratamento de falhas.',
          context: 'integração / contratos HTTP',
          highlights: ['Criação de APIs REST', 'Manutenção & Melhorias', 'Webservices SOAP', 'Webhooks & Payloads'],
        },
        {
          number: '04',
          label: 'SQL SERVER & T-SQL',
          title: 'Consultas, procedures e diagnósticos relacionais',
          description:
            'Queries complexas, views, procedures e índices sobre o modelo de dados do Protheus, com análise de planos de execução.',
          context: 'dados / diagnóstico & performance',
          highlights: ['T-SQL', 'Planos de Execução', 'Índices Estratégicos', 'DBAccess / Profiler'],
        },
        {
          number: '05',
          label: 'PO-UI / ANGULAR',
          title: 'Interfaces corporativas modernas e intuitivas',
          description:
            'Aplicações com o design system TOTVS sobre Angular, integradas via REST ao Protheus.',
          context: 'frontend / modernização',
          highlights: ['Design System PO-UI', 'Angular', 'Componentes TOTVS', 'Consumo de REST'],
        },
        {
          number: '06',
          label: 'SUSTENTAÇÃO & AUTOMAÇÃO',
          title: 'Rotinas agendadas, versionamento e qualidade de código',
          description:
            'Jobs e Schedules no AppServer, versionamento Git, build controlado de RPO e documentação técnica.',
          context: 'engenharia / operação',
          highlights: ['Jobs & Schedules', 'Git / RPO', 'Refatoração Segura', 'Documentação Técnica'],
        },
      ],
      results: {
        eyebrow: 'RESULTADOS NO MUNDO REAL',
        title: 'IMPACTO EM AMBIENTES DE PRODUÇÃO',
        note: 'Trabalho corporativo sob sigilo ético e NDA. Abaixo, padrões de desafios resolvidos e entregues.',
        items: [
          {
            metric: 'Integração REST',
            title: 'ERP conectado a plataforma externa',
            description:
              'Consumo de dados de sistema externo via API REST, persistência em tabela temporária, validação transacional e geração de Cliente (SA1), Pedido de Venda (SC5/SC6) e Faturamento (SF2/SD2) no Protheus.',
          },
          {
            metric: 'ADVPL nativo (.prw)',
            title: 'Relatórios analíticos customizados',
            description:
              'Relatórios em ADVPL puro (.prw): consolidação financeira de títulos, extratos de movimentações e análise gerencial com filtros dinâmicos e consultas diretas ao banco do ERP.',
          },
          {
            metric: 'Fluxo contínuo',
            title: 'Marketplaces integrados ao Protheus',
            description:
              'Integrações com hubs de marketplaces (Anymarket, Shopee, Magalu, Casas Bahia): recebimento de pedidos, conciliação de pagamentos e emissão no Protheus a partir das plataformas conectadas.',
          },
          {
            metric: 'Refatoração SQL',
            title: 'Queries críticas e índices sobre tabelas volumosas',
            description:
              'Refatoração de queries e criação de índices sobre tabelas de alto volume (SIGAFIN/SIGAFAT/SIGACOM), com análise de planos de execução aplicada a rotinas de fechamento e conciliação.',
          },
        ],
        ctaQuestion: 'Quer avaliar se meu perfil atende à necessidade da sua equipe?',
        ctaLink: 'Baixar currículo completo (PDF)',
      },
    },
    trajectory: {
      eyebrow: 'TRAJETÓRIA PROFISSIONAL',
      title: 'EXPERIÊNCIA EM PRODUÇÃO.',
      education: 'Centro Universitário FMU (FIAM-FAAM) · Mar 2023 — Jan 2026 · Concluído',
      degree: 'Análise e Desenvolvimento de Sistemas',
      items: [
        {
          period: 'JUN 2024 — ATUAL',
          role: 'Analista Desenvolvedor',
          company: 'COMM',
          current: true,
          highlights: [
            'ADVPL/TL++ com ExecAuto e Pontos de Entrada.',
            'Integrações REST/SOAP com marketplaces e gateways.',
            'Jobs, Schedules e diagnóstico SQL Server.',
          ],
        },
        {
          period: 'NOV 2023 — JUN 2024',
          role: 'Estagiário de TI',
          company: 'COMM',
          current: false,
          highlights: [
            'Suporte a incidentes e monitoramento de integrações.',
            'Promovido a Analista Desenvolvedor em 7 meses.',
          ],
        },
        {
          period: 'ABR 2021 — NOV 2023',
          role: 'Desenvolvedor ADVPL / Protheus',
          company: 'Freelancer',
          current: false,
          highlights: [
            'Relatórios ADVPL/TReport e SQL Server (SIGAFIN).',
            'Rotinas, Pontos de Entrada e tratamento de dados no Protheus.',
          ],
        },
      ],
    },
    work: {
      eyebrow: 'ENGENHARIA E ARQUITETURA',
      headingA: 'MEUS',
      headingB: 'PROJETOS',
      intro:
        'Além do trabalho corporativo sob sigilo de clientes, cada projeto público demonstra decisões reais de arquitetura, qualidade de código e capacidade de entrega.',
      toolsLabel: 'Tecnologias',
      archLabel: 'Arquitetura técnica',
      prevLabel: 'Projeto anterior',
      nextLabel: 'Próximo projeto',
      linkLabel: 'Ver no GitHub',
      allRepos: 'Explorar todos os repositórios no GitHub',
      projects: {
        'nova-hub': {
          category: 'Operações & infraestrutura',
          diagramCaption: 'Fluxo: navegador ↔ API Express ↔ host Linux, sob malha privada Tailscale.',
          title: 'Dashboard web de operações: telemetria, terminal remoto e orquestração',
          description:
            'Painel web privado para operar infraestrutura: telemetria, terminal SSH no navegador e orquestração de tarefas. Node.js + Express, em malha Tailscale sem porta pública.',
          metrics: [
            { value: '4 módulos', label: 'LINK · NEXUS · ARCADIA · CORTEX' },
            { value: 'Privado', label: 'malha Tailscale, sem porta pública' },
          ],
        },
        'protheus-research': {
          category: 'MCP server / AI',
          diagramCaption: 'Fluxo: cliente MCP → servidor TypeScript → base indexada do ecossistema Protheus.',
          title: 'Pesquisa técnica estruturada no ecossistema Protheus',
          description:
            'Servidor MCP em TypeScript que indexa sintaxe, rotinas, tabelas e regras do Protheus para consultas técnicas de agentes de IA.',
          metrics: [
            { value: 'MCP', label: 'servidor TypeScript' },
            { value: 'Local', label: 'índice do ecossistema Protheus' },
          ],
        },
        'protheus-rest-lab': {
          category: 'Arquitetura / backend',
          diagramCaption: 'Fluxo: cliente HTTP → WSRESTFUL (ADVPL) → dados do ERP com envelope e status corretos.',
          title: 'Laboratório de padrões para APIs REST no Protheus',
          description:
            'Implementação de referência para endpoints REST no Protheus: paginação, status HTTP, JSON e tratamento de exceções.',
          metrics: [
            { value: 'REST', label: 'paginação e status HTTP' },
            { value: 'ADVPL', label: 'WSRESTFUL / WSMETHOD' },
          ],
        },
        'protheus-po-ui-template': {
          category: 'Portal / PO-UI',
          diagramCaption: 'Fluxo: portal Angular + PO-UI → REST → rotinas Protheus de consulta e operação.',
          title: 'Template de portal corporativo em Angular e PO-UI',
          description:
            'Base de portal corporativo com PO-UI sobre Angular, pronta para integração REST com o Protheus.',
          metrics: [
            { value: 'PO-UI', label: 'design system TOTVS' },
            { value: 'Angular', label: 'portal REST-ready' },
          ],
        },
      },
    },
    techstack: {
      headingA: 'MINHAS',
      headingB: 'TECNOLOGIAS',
      subtitle: 'Stack & ferramentas',
    },
    lab: {
      eyebrow: 'CÓDIGO ABERTO & AUTONOMIA LOCAL',
      title: 'FERRAMENTAS QUE\nAMPLIAM A AUTONOMIA.',
      intro:
        'Projetos pessoais e utilitários open source: offline-first, privacidade e controle local de dados.',
      action: 'Ver ecossistema no GitHub',
      items: {
        'vanta-reader': {
          badge: 'EM EVOLUÇÃO',
          name: 'VANTA Reader',
          description:
            'Leitor e organizador de conteúdo offline-first: catálogo local, armazenamento sob controle do usuário e leitura sem distrações.',
        },
        'xnova-runtime': {
          badge: 'EM DESENVOLVIMENTO',
          name: 'XNOVA Runtime',
          description:
            'Runtime experimental em C/C++ e UWP para Xbox Series em Dev Mode, investigando a execução de binários Win32 no console.',
        },
        'vanta-feed': {
          badge: 'CONCEITO',
          name: 'VANTA Feed',
          description:
            'Conceito de organizador de feeds e fontes de informação técnica com prioridade para privacidade e leitura limpa.',
        },
        'vanta-scan': {
          badge: 'CONCEITO',
          name: 'VANTA Scan & Doc Toolkit',
          description:
            'Conceito de utilitários locais para digitalização, tratamento e extração estruturada de documentos.',
        },
      },
    },
    business: {
      title: 'COMO PODEMOS\nTRABALHAR JUNTOS.',
      cards: {
        role: {
          title: 'Desenvolvedor de Software | TOTVS Protheus',
          description:
            'Alocação em squads: ADVPL/TL++, MVC Protheus, integrações REST/SOAP e sustentação em Financeiro, Compras, Contábil, Faturamento, Estoque e APSDU.',
          note: 'CLT ou PJ · Remoto & São Paulo',
          cta: 'Falar comigo',
        },
        elp: {
          title: 'ELP Tecnologia',
          description:
            'Projetos PJ sob escopo: integrações ERP, relatórios ADVPL (.prw) e diagnósticos SQL Server.',
          note: 'Projetos & consultoria B2B',
          cta: 'Conhecer a ELP',
          ctaEmail: 'E-mail B2B',
        },
      },
    },
    connect: {
      title: 'VAMOS\nCONVERSAR?',
      introBefore: 'Recrutamento (CLT/PJ) e demandas corporativas via',
      introAfter: '.',
      copy: 'Copiar',
      channels: {
        whatsapp: { label: 'WhatsApp', detail: '+55 11 94466-5292', action: 'Conversar' },
        email: { label: 'E-mail', detail: 'contatoeduardoparanhos@gmail.com', action: 'Enviar' },
        cv: { label: 'Currículo (PDF)', detail: 'PDF técnico · triagem ATS', action: 'Baixar' },
        linkedin: { label: 'LinkedIn', detail: 'Trajetória e recomendações', action: 'Abrir' },
        github: { label: 'GitHub', detail: 'Código público e projetos', action: 'Abrir' },
        vcard: { label: 'Contato (vCard)', detail: 'Adicionar ao celular', action: 'Salvar' },
      },
    },
    footer: { role: 'DESENVOLVEDOR DE SOFTWARE | TOTVS PROTHEUS', location: 'SÃO PAULO · BRASIL', quickLinks: 'Links rápidos do rodapé' },
    langSwitch: { ariaLabel: 'Escolher idioma', switchingTo: 'Mudando para' },
    command: {
      eyebrow: 'EDUARDO PARANHOS · NAVEGAÇÃO RÁPIDA',
      title: 'COMANDOS_',
      home: 'Início / Topo',
      menuLabel: 'Menu de navegação',
      closeLabel: 'Fechar',
      search: 'Digite um comando, tecnologia ou destino...',
      empty: 'Nenhum comando encontrado.',
    },
    notFound: {
      eyebrow: 'EDUARDO PARANHOS · PORTFÓLIO',
      title: 'CAMINHO_\nNÃO ENCONTRADO.',
      text: 'Esse endereço não leva a uma página do perfil de Eduardo Paranhos.',
      cta: 'Voltar ao início',
      pageTitle: '404 — Caminho não encontrado',
      description: 'O caminho solicitado não existe neste portfólio.',
    },
  },
  en: {
    heroTitle: ['SOFTWARE', 'THAT WORKS', 'IN THE REAL WORLD.'],
    navLabel: 'Main navigation',
    meta: {
      title: 'Eduardo Paranhos — Software Developer | TOTVS Protheus · ADVPL, APIs & SQL Server',
      description:
        'Software Developer focused on TOTVS Protheus, ADVPL/TL++, REST/SOAP integrations and SQL Server since 2021, working on Finance, Billing, Purchasing and Accounting processes. São Paulo, remote.',
    },
    nav: [
      { label: 'Experience', href: '#engineering' },
      { label: 'Projects', href: '#work' },
      { label: 'Stack', href: '#stack' },
      { label: 'Hire', href: '#business' },
      { label: 'Contact', href: '#connect' },
    ],
    hero: {
      eyebrow: 'EDUARDO PARANHOS · SOFTWARE DEVELOPER | TOTVS PROTHEUS',
      actionsLabel: 'Primary actions',
      lede: 'TOTVS Protheus · ADVPL/TL++ · REST & SOAP APIs · SQL Server. In production since 2021.',
      ctaCv: 'Download Résumé (PDF)',
      ctaLinkedin: 'LinkedIn',
      ctaWhatsapp: 'WhatsApp',
      projectsLink: 'View technical projects',
      scroll: 'Explore',
    },
    engineering: {
      eyebrow: 'EXPERIENCE & SPECIALTIES',
      title: 'ENGINEERING FOR\nREAL PROCESSES.',
      intro:
        'Development, integration and support of business systems.',
      stackHeading: 'CORE SPECIALTIES',
      topicsLabel: 'Topics & modules:',
      stack: [
        {
          number: '01',
          label: 'ADVPL / TL++',
          title: 'Business rules, customizations and batch processing',
          description:
            'Entry Points (PE), User Functions, MVC routines (FWFormModel / FWFormView), triggers and transactional validations.',
          context: 'ERP / business rules',
          highlights: ['Entry Points', 'Protheus MVC', 'Scheduled Routines', 'Jobs & Schedules'],
        },
        {
          number: '02',
          label: 'TOTVS PROTHEUS',
          title: 'Functional expertise across operational and financial modules',
          description:
            'Business rules and routines in Finance (SIGAFIN), Billing (SIGAFAT), Purchasing (SIGACOM), Inventory (SIGAEST), Accounting (SIGACTB) and APSDU.',
          context: 'ERP / business modules',
          highlights: ['Finance (SIGAFIN)', 'Billing (SIGAFAT)', 'Purchasing (SIGACOM)', 'Inventory (SIGAEST) · Accounting (SIGACTB) & APSDU'],
        },
        {
          number: '03',
          label: 'REST APIS & WEB SERVICES',
          title: 'Building, maintaining and improving integrations',
          description:
            'REST/JSON and SOAP/XML integrations between Protheus and external systems, with transactional resilience and failure handling.',
          context: 'integration / HTTP contracts',
          highlights: ['Building REST APIs', 'Maintenance & Improvements', 'SOAP Web Services', 'Webhooks & Payloads'],
        },
        {
          number: '04',
          label: 'SQL SERVER & T-SQL',
          title: 'Queries, procedures and relational diagnostics',
          description:
            'Complex queries, views, procedures and indexes on the Protheus data model, with execution plan analysis.',
          context: 'data / diagnostics & performance',
          highlights: ['T-SQL', 'Execution Plans', 'Strategic Indexes', 'DBAccess / Profiler'],
        },
        {
          number: '05',
          label: 'PO-UI / ANGULAR',
          title: 'Modern, intuitive corporate interfaces',
          description:
            'Applications with the TOTVS design system on Angular, REST-integrated with Protheus.',
          context: 'frontend / modernization',
          highlights: ['PO-UI Design System', 'Angular', 'TOTVS Components', 'REST Consumption'],
        },
        {
          number: '06',
          label: 'SUPPORT & AUTOMATION',
          title: 'Scheduled routines, versioning and code quality',
          description:
            'AppServer Jobs and Schedules, Git versioning, controlled RPO builds and technical documentation.',
          context: 'engineering / operations',
          highlights: ['Jobs & Schedules', 'Git / RPO', 'Safe Refactoring', 'Technical Docs'],
        },
      ],
      results: {
        eyebrow: 'REAL-WORLD RESULTS',
        title: 'IMPACT IN PRODUCTION ENVIRONMENTS',
        note: 'Corporate work under ethical confidentiality and NDA. Below, patterns of challenges solved and delivered.',
        items: [
          {
            metric: 'REST Integration',
            title: 'ERP connected to an external platform',
            description:
              'External system data consumption via REST API, staging-table persistence, transactional validation and generation of Customer (SA1), Sales Order (SC5/SC6) and Billing (SF2/SD2) in Protheus.',
          },
          {
            metric: 'Native ADVPL (.prw)',
            title: 'Custom analytical reports',
            description:
              'Pure ADVPL reports (.prw): financial consolidation of receivables/payables, movement statements and managerial analysis with dynamic filters and direct ERP database queries.',
          },
          {
            metric: 'Continuous flow',
            title: 'Marketplaces integrated with Protheus',
            description:
              'Integrations with marketplace hubs (Anymarket, Shopee, Magalu, Casas Bahia): order intake, payment reconciliation and invoicing in Protheus from connected platforms.',
          },
          {
            metric: 'SQL Refactoring',
            title: 'Critical queries and indexes on high-volume tables',
            description:
              'Query refactoring and index creation on high-volume tables (SIGAFIN/SIGAFAT/SIGACOM), applying execution plan analysis to closing and reconciliation routines.',
          },
        ],
        ctaQuestion: 'Want to assess whether my profile fits your team?',
        ctaLink: 'Download full résumé (PDF)',
      },
    },
    trajectory: {
      eyebrow: 'CAREER PATH',
      title: 'PRODUCTION EXPERIENCE.',
      education: 'FMU University Center (FIAM-FAAM) · Mar 2023 — Jan 2026 · Completed',
      degree: 'Systems Analysis and Development',
      items: [
        {
          period: 'JUN 2024 — PRESENT',
          role: 'Developer Analyst',
          company: 'COMM',
          current: true,
          highlights: [
            'ADVPL/TL++ with ExecAuto and Entry Points.',
            'REST/SOAP integrations with marketplaces and gateways.',
            'Jobs, Schedules and SQL Server diagnostics.',
          ],
        },
        {
          period: 'NOV 2023 — JUN 2024',
          role: 'IT Intern',
          company: 'COMM',
          current: false,
          highlights: [
            'Incident support and integration monitoring.',
            'Promoted to Developer Analyst within 7 months.',
          ],
        },
        {
          period: 'APR 2021 — NOV 2023',
          role: 'ADVPL / Protheus Developer',
          company: 'Freelancer',
          current: false,
          highlights: [
            'ADVPL/TReport and SQL Server reports (SIGAFIN).',
            'Routines, Entry Points and data handling in Protheus.',
          ],
        },
      ],
    },
    work: {
      eyebrow: 'ENGINEERING & ARCHITECTURE',
      headingA: 'MY',
      headingB: 'PROJECTS',
      intro:
        'Beyond corporate work under client confidentiality, each public project demonstrates real architecture decisions, code quality and delivery capability.',
      toolsLabel: 'Technologies',
      archLabel: 'Technical architecture',
      prevLabel: 'Previous project',
      nextLabel: 'Next project',
      linkLabel: 'View on GitHub',
      allRepos: 'Explore all repositories on GitHub',
      projects: {
        'nova-hub': {
          category: 'Operations & infrastructure',
          diagramCaption: 'Flow: browser ↔ Express API ↔ Linux host, over a private Tailscale mesh.',
          title: 'Web operations dashboard: telemetry, remote terminal and orchestration',
          description:
            'Private web panel to operate infrastructure: telemetry, in-browser SSH terminal and task orchestration. Node.js + Express over a Tailscale mesh, no public port.',
          metrics: [
            { value: '4 modules', label: 'LINK · NEXUS · ARCADIA · CORTEX' },
            { value: 'Private', label: 'Tailscale mesh, no public port' },
          ],
        },
        'protheus-research': {
          category: 'MCP server / AI',
          diagramCaption: 'Flow: MCP client → TypeScript server → indexed Protheus ecosystem base.',
          title: 'Structured technical research in the Protheus ecosystem',
          description:
            'MCP server in TypeScript indexing Protheus syntax, routines, tables and rules for structured AI-agent queries.',
          metrics: [
            { value: 'MCP', label: 'TypeScript server' },
            { value: 'Local', label: 'Protheus ecosystem index' },
          ],
        },
        'protheus-rest-lab': {
          category: 'Architecture / backend',
          diagramCaption: 'Flow: HTTP client → WSRESTFUL (ADVPL) → ERP data with correct envelope and status codes.',
          title: 'Pattern laboratory for REST APIs in Protheus',
          description:
            'Reference implementation for Protheus REST endpoints: pagination, HTTP status, JSON and exception handling.',
          metrics: [
            { value: 'REST', label: 'pagination and HTTP status' },
            { value: 'ADVPL', label: 'WSRESTFUL / WSMETHOD' },
          ],
        },
        'protheus-po-ui-template': {
          category: 'Portal / PO-UI',
          diagramCaption: 'Flow: Angular + PO-UI portal → REST → Protheus query and operation routines.',
          title: 'Corporate portal template with Angular and PO-UI',
          description:
            'Corporate portal base with PO-UI on Angular, ready for REST integration with Protheus.',
          metrics: [
            { value: 'PO-UI', label: 'TOTVS design system' },
            { value: 'Angular', label: 'REST-ready portal' },
          ],
        },
      },
    },
    techstack: {
      headingA: 'MY',
      headingB: 'TECHNOLOGIES',
      subtitle: 'Stack & tools',
    },
    lab: {
      eyebrow: 'OPEN SOURCE & LOCAL AUTONOMY',
      title: 'TOOLS THAT\nEXPAND AUTONOMY.',
      intro:
        'Personal projects and open-source utilities: offline-first, privacy and local data control.',
      action: 'View ecosystem on GitHub',
      items: {
        'vanta-reader': {
          badge: 'EVOLVING',
          name: 'VANTA Reader',
          description:
            'Offline-first content reader and organizer: local catalog, user-controlled storage and distraction-free reading.',
        },
        'xnova-runtime': {
          badge: 'IN DEVELOPMENT',
          name: 'XNOVA Runtime',
          description:
            'Experimental C/C++ and UWP runtime for Xbox Series in Dev Mode, researching Win32 binary execution on console.',
        },
        'vanta-feed': {
          badge: 'CONCEPT',
          name: 'VANTA Feed',
          description:
            'Concept for a feed and technical-source organizer prioritizing privacy and clean reading.',
        },
        'vanta-scan': {
          badge: 'CONCEPT',
          name: 'VANTA Scan & Doc Toolkit',
          description:
            'Concept for local utilities for document scanning, processing and structured extraction.',
        },
      },
    },
    business: {
      title: 'HOW WE CAN\nWORK TOGETHER.',
      cards: {
        role: {
          title: 'Software Developer | TOTVS Protheus',
          description:
            'Team allocation: ADVPL/TL++, Protheus MVC, REST/SOAP integrations and support across Finance, Purchasing, Accounting, Billing, Inventory and APSDU.',
          note: 'CLT or PJ · Remote & São Paulo',
          cta: 'Talk to me',
        },
        elp: {
          title: 'ELP Tecnologia',
          description:
            'PJ projects under scope: ERP integrations, ADVPL reports (.prw) and SQL Server diagnostics.',
          note: 'Projects & B2B consulting',
          cta: 'Visit ELP',
          ctaEmail: 'B2B e-mail',
        },
      },
    },
    connect: {
      title: "LET'S\nTALK?",
      introBefore: 'Hiring (CLT/PJ) and corporate demands via',
      introAfter: '.',
      copy: 'Copy',
      channels: {
        whatsapp: { label: 'WhatsApp', detail: '+55 11 94466-5292', action: 'Chat' },
        email: { label: 'E-mail', detail: 'contatoeduardoparanhos@gmail.com', action: 'Send' },
        cv: { label: 'Résumé (PDF)', detail: 'Technical PDF · ATS-friendly', action: 'Download' },
        linkedin: { label: 'LinkedIn', detail: 'Career path and recommendations', action: 'Open' },
        github: { label: 'GitHub', detail: 'Public code and projects', action: 'Open' },
        vcard: { label: 'Contact (vCard)', detail: 'Add to your phone', action: 'Save' },
      },
    },
    footer: { role: 'SOFTWARE DEVELOPER | TOTVS PROTHEUS', location: 'SÃO PAULO · BRAZIL', quickLinks: 'Footer quick links' },
    langSwitch: { ariaLabel: 'Choose language', switchingTo: 'Switching to' },
    command: {
      eyebrow: 'EDUARDO PARANHOS · QUICK NAVIGATION',
      title: 'COMMANDS_',
      home: 'Home',
      menuLabel: 'Navigation menu',
      closeLabel: 'Close',
      search: 'Type a command, technology or destination...',
      empty: 'No command found.',
    },
    notFound: {
      eyebrow: 'EDUARDO PARANHOS · PORTFOLIO',
      title: 'PATH_\nNOT FOUND.',
      text: 'This address does not lead to a page of Eduardo Paranhos\u2019 profile.',
      cta: 'Back to home',
      pageTitle: '404 — Path not found',
      description: 'The requested path does not exist in this portfolio.',
    },
  },
  es: {
    heroTitle: ['SOFTWARE', 'QUE FUNCIONA', 'EN EL MUNDO REAL.'],
    navLabel: 'Navegación principal',
    meta: {
      title: 'Eduardo Paranhos — Desarrollador de Software | TOTVS Protheus · ADVPL, APIs y SQL Server',
      description:
        'Desarrollador de Software enfocado en TOTVS Protheus, ADVPL/TL++, integraciones REST/SOAP y SQL Server desde 2021, en rutinas de Financiero, Facturación, Compras y Contabilidad. São Paulo, remoto.',
    },
    nav: [
      { label: 'Experiencia', href: '#engineering' },
      { label: 'Proyectos', href: '#work' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contratación', href: '#business' },
      { label: 'Contacto', href: '#connect' },
    ],
    hero: {
      eyebrow: 'EDUARDO PARANHOS · DESARROLLADOR DE SOFTWARE | TOTVS PROTHEUS',
      actionsLabel: 'Acciones principales',
      lede: 'TOTVS Protheus · ADVPL/TL++ · APIs REST & SOAP · SQL Server. En producción desde 2021.',
      ctaCv: 'Descargar CV (PDF)',
      ctaLinkedin: 'LinkedIn',
      ctaWhatsapp: 'WhatsApp',
      projectsLink: 'Ver proyectos técnicos',
      scroll: 'Explorar',
    },
    engineering: {
      eyebrow: 'EXPERIENCIA Y ESPECIALIDADES',
      title: 'INGENIERÍA PARA\nPROCESOS REALES.',
      intro:
        'Desarrollo, integración y soporte de sistemas corporativos.',
      stackHeading: 'ESPECIALIDADES PRINCIPALES',
      topicsLabel: 'Temas y módulos:',
      stack: [
        {
          number: '01',
          label: 'ADVPL / TL++',
          title: 'Reglas de negocio, personalizaciones y procesamiento por lotes',
          description:
            'Puntos de Entrada (PE), User Functions, rutinas MVC (FWFormModel / FWFormView), triggers y validaciones transaccionales.',
          context: 'ERP / reglas de negocio',
          highlights: ['Puntos de Entrada', 'MVC Protheus', 'Rutinas Automáticas', 'Jobs & Schedules'],
        },
        {
          number: '02',
          label: 'TOTVS PROTHEUS',
          title: 'Dominio funcional en módulos operativos y financieros',
          description:
            'Reglas de negocio y rutinas en Financiero (SIGAFIN), Facturación (SIGAFAT), Compras (SIGACOM), Inventario (SIGAEST), Contabilidad (SIGACTB) y APSDU.',
          context: 'ERP / módulos corporativos',
          highlights: ['Financiero (SIGAFIN)', 'Facturación (SIGAFAT)', 'Compras (SIGACOM)', 'Inventario (SIGAEST) · Contabilidad (SIGACTB) & APSDU'],
        },
        {
          number: '03',
          label: 'APIS REST & WEB SERVICES',
          title: 'Creación, mantenimiento y mejora de integraciones',
          description:
            'Integraciones REST/JSON y SOAP/XML entre Protheus y sistemas externos, con resiliencia transaccional y manejo de fallos.',
          context: 'integración / contratos HTTP',
          highlights: ['Creación de APIs REST', 'Mantenimiento y Mejoras', 'Web Services SOAP', 'Webhooks y Payloads'],
        },
        {
          number: '04',
          label: 'SQL SERVER & T-SQL',
          title: 'Consultas, procedimientos y diagnósticos relacionales',
          description:
            'Consultas complejas, vistas, procedimientos e índices sobre el modelo de datos de Protheus, con análisis de planes de ejecución.',
          context: 'datos / diagnóstico y rendimiento',
          highlights: ['T-SQL', 'Planes de Ejecución', 'Índices Estratégicos', 'DBAccess / Profiler'],
        },
        {
          number: '05',
          label: 'PO-UI / ANGULAR',
          title: 'Interfaces corporativas modernas e intuitivas',
          description:
            'Aplicaciones con el design system TOTVS sobre Angular, integradas vía REST con Protheus.',
          context: 'frontend / modernización',
          highlights: ['Design System PO-UI', 'Angular', 'Componentes TOTVS', 'Consumo de REST'],
        },
        {
          number: '06',
          label: 'SOPORTE Y AUTOMATIZACIÓN',
          title: 'Rutinas programadas, versionado y calidad de código',
          description:
            'Jobs y Schedules en AppServer, versionado Git, build controlado de RPO y documentación técnica.',
          context: 'ingeniería / operación',
          highlights: ['Jobs & Schedules', 'Git / RPO', 'Refactorización Segura', 'Documentación Técnica'],
        },
      ],
      results: {
        eyebrow: 'RESULTADOS EN EL MUNDO REAL',
        title: 'IMPACTO EN ENTORNOS DE PRODUCCIÓN',
        note: 'Trabajo corporativo bajo confidencialidad ética y NDA. Abajo, patrones de desafíos resueltos y entregados.',
        items: [
          {
            metric: 'Integración REST',
            title: 'ERP conectado a plataforma externa',
            description:
              'Consumo de datos de sistema externo vía API REST, persistencia en tabla temporal, validación transaccional y generación de Cliente (SA1), Pedido de Venta (SC5/SC6) y Facturación (SF2/SD2) en Protheus.',
          },
          {
            metric: 'ADVPL nativo (.prw)',
            title: 'Informes analíticos personalizados',
            description:
              'Informes en ADVPL puro (.prw): consolidación financiera de títulos, extractos de movimientos y análisis gerencial con filtros dinámicos y consultas directas a la base del ERP.',
          },
          {
            metric: 'Flujo continuo',
            title: 'Marketplaces integrados con Protheus',
            description:
              'Integraciones con hubs de marketplaces (Anymarket, Shopee, Magalu, Casas Bahia): recepción de pedidos, conciliación de pagos y emisión en Protheus desde las plataformas conectadas.',
          },
          {
            metric: 'Refactorización SQL',
            title: 'Consultas críticas e índices sobre tablas voluminosas',
            description:
              'Refactorización de consultas y creación de índices sobre tablas de alto volumen (SIGAFIN/SIGAFAT/SIGACOM), con análisis de planes de ejecución aplicado a rutinas de cierre y conciliación.',
          },
        ],
        ctaQuestion: '¿Quieres evaluar si mi perfil se ajusta a tu equipo?',
        ctaLink: 'Descargar CV completo (PDF)',
      },
    },
    trajectory: {
      eyebrow: 'TRAYECTORIA PROFESIONAL',
      title: 'EXPERIENCIA EN PRODUCCIÓN.',
      education: 'Centro Universitario FMU (FIAM-FAAM) · Mar 2023 — Ene 2026 · Completado',
      degree: 'Análisis y Desarrollo de Sistemas',
      items: [
        {
          period: 'JUN 2024 — ACTUAL',
          role: 'Analista Desarrollador',
          company: 'COMM',
          current: true,
          highlights: [
            'ADVPL/TL++ con ExecAuto y Puntos de Entrada.',
            'Integraciones REST/SOAP con marketplaces y gateways.',
            'Jobs, Schedules y diagnóstico SQL Server.',
          ],
        },
        {
          period: 'NOV 2023 — JUN 2024',
          role: 'Pasante de TI',
          company: 'COMM',
          current: false,
          highlights: [
            'Soporte de incidentes y monitoreo de integraciones.',
            'Promovido a Analista Desarrollador en 7 meses.',
          ],
        },
        {
          period: 'ABR 2021 — NOV 2023',
          role: 'Desarrollador ADVPL / Protheus',
          company: 'Freelancer',
          current: false,
          highlights: [
            'Informes ADVPL/TReport y SQL Server (SIGAFIN).',
            'Rutinas, Puntos de Entrada y tratamiento de datos en Protheus.',
          ],
        },
      ],
    },
    work: {
      eyebrow: 'INGENIERÍA Y ARQUITECTURA',
      headingA: 'MIS',
      headingB: 'PROYECTOS',
      intro:
        'Además del trabajo corporativo bajo confidencialidad de clientes, cada proyecto público demuestra decisiones reales de arquitectura, calidad de código y capacidad de entrega.',
      toolsLabel: 'Tecnologías',
      archLabel: 'Arquitectura técnica',
      prevLabel: 'Proyecto anterior',
      nextLabel: 'Proyecto siguiente',
      linkLabel: 'Ver en GitHub',
      allRepos: 'Explorar todos los repositorios en GitHub',
      projects: {
        'nova-hub': {
          category: 'Operaciones e infraestructura',
          diagramCaption: 'Flujo: navegador ↔ API Express ↔ host Linux, sobre malla privada Tailscale.',
          title: 'Panel web de operaciones: telemetría, terminal remoto y orquestación',
          description:
            'Panel web privado para operar infraestructura: telemetría, terminal SSH en el navegador y orquestación de tareas. Node.js + Express en malla Tailscale, sin puerto público.',
          metrics: [
            { value: '4 módulos', label: 'LINK · NEXUS · ARCADIA · CORTEX' },
            { value: 'Privado', label: 'malla Tailscale, sin puerto público' },
          ],
        },
        'protheus-research': {
          category: 'MCP server / IA',
          diagramCaption: 'Flujo: cliente MCP → servidor TypeScript → base indexada del ecosistema Protheus.',
          title: 'Investigación técnica estructurada en el ecosistema Protheus',
          description:
            'Servidor MCP en TypeScript que indexa sintaxis, rutinas, tablas y reglas de Protheus para consultas técnicas de agentes de IA.',
          metrics: [
            { value: 'MCP', label: 'servidor TypeScript' },
            { value: 'Local', label: 'índice del ecosistema Protheus' },
          ],
        },
        'protheus-rest-lab': {
          category: 'Arquitectura / backend',
          diagramCaption: 'Flujo: cliente HTTP → WSRESTFUL (ADVPL) → datos del ERP con envelope y status correctos.',
          title: 'Laboratorio de patrones para APIs REST en Protheus',
          description:
            'Implementación de referencia para endpoints REST en Protheus: paginación, status HTTP, JSON y manejo de excepciones.',
          metrics: [
            { value: 'REST', label: 'paginación y status HTTP' },
            { value: 'ADVPL', label: 'WSRESTFUL / WSMETHOD' },
          ],
        },
        'protheus-po-ui-template': {
          category: 'Portal / PO-UI',
          diagramCaption: 'Flujo: portal Angular + PO-UI → REST → rutinas Protheus de consulta y operación.',
          title: 'Plantilla de portal corporativo con Angular y PO-UI',
          description:
            'Base de portal corporativo con PO-UI sobre Angular, lista para integración REST con Protheus.',
          metrics: [
            { value: 'PO-UI', label: 'design system TOTVS' },
            { value: 'Angular', label: 'portal REST-ready' },
          ],
        },
      },
    },
    techstack: {
      headingA: 'MIS',
      headingB: 'TECNOLOGÍAS',
      subtitle: 'Stack y herramientas',
    },
    lab: {
      eyebrow: 'CÓDIGO ABIERTO Y AUTONOMÍA LOCAL',
      title: 'HERRAMIENTAS QUE\nAMPLÍAN LA AUTONOMÍA.',
      intro:
        'Proyectos personales y utilidades open source: offline-first, privacidad y control local de datos.',
      action: 'Ver ecosistema en GitHub',
      items: {
        'vanta-reader': {
          badge: 'EN EVOLUCIÓN',
          name: 'VANTA Reader',
          description:
            'Lector y organizador de contenido offline-first: catálogo local, almacenamiento bajo control del usuario y lectura sin distracciones.',
        },
        'xnova-runtime': {
          badge: 'EN DESARROLLO',
          name: 'XNOVA Runtime',
          description:
            'Runtime experimental en C/C++ y UWP para Xbox Series en Dev Mode, investigando la ejecución de binarios Win32 en la consola.',
        },
        'vanta-feed': {
          badge: 'CONCEPTO',
          name: 'VANTA Feed',
          description:
            'Concepto de organizador de feeds y fuentes de información técnica con prioridad en privacidad y lectura limpia.',
        },
        'vanta-scan': {
          badge: 'CONCEPTO',
          name: 'VANTA Scan & Doc Toolkit',
          description:
            'Concepto de utilidades locales para digitalización, procesamiento y extracción estructurada de documentos.',
        },
      },
    },
    business: {
      title: 'CÓMO PODEMOS\nTRABAJAR JUNTOS.',
      cards: {
        role: {
          title: 'Desarrollador de Software | TOTVS Protheus',
          description:
            'Asignación en squads: ADVPL/TL++, MVC Protheus, integraciones REST/SOAP y soporte en Financiero, Compras, Contabilidad, Facturación, Inventario y APSDU.',
          note: 'CLT o PJ · Remoto y São Paulo',
          cta: 'Hablar conmigo',
        },
        elp: {
          title: 'ELP Tecnologia',
          description:
            'Proyectos PJ bajo alcance: integraciones ERP, informes ADVPL (.prw) y diagnósticos SQL Server.',
          note: 'Proyectos y consultoría B2B',
          cta: 'Conocer ELP',
          ctaEmail: 'E-mail B2B',
        },
      },
    },
    connect: {
      title: '¿HABLAMOS?',
      introBefore: 'Contratación (CLT/PJ) y demandas corporativas vía',
      introAfter: '.',
      copy: 'Copiar',
      channels: {
        whatsapp: { label: 'WhatsApp', detail: '+55 11 94466-5292', action: 'Conversar' },
        email: { label: 'E-mail', detail: 'contatoeduardoparanhos@gmail.com', action: 'Enviar' },
        cv: { label: 'CV (PDF)', detail: 'PDF técnico · filtros ATS', action: 'Descargar' },
        linkedin: { label: 'LinkedIn', detail: 'Trayectoria y recomendaciones', action: 'Abrir' },
        github: { label: 'GitHub', detail: 'Código público y proyectos', action: 'Abrir' },
        vcard: { label: 'Contacto (vCard)', detail: 'Agregar al teléfono', action: 'Guardar' },
      },
    },
    footer: { role: 'DESARROLLADOR DE SOFTWARE | TOTVS PROTHEUS', location: 'SÃO PAULO · BRASIL', quickLinks: 'Enlaces rápidos del pie de página' },
    langSwitch: { ariaLabel: 'Elegir idioma', switchingTo: 'Cambiando a' },
    command: {
      eyebrow: 'EDUARDO PARANHOS · NAVEGACIÓN RÁPIDA',
      title: 'COMANDOS_',
      home: 'Inicio',
      menuLabel: 'Menú de navegación',
      closeLabel: 'Cerrar',
      search: 'Escribe un comando, tecnología o destino...',
      empty: 'No se encontró ningún comando.',
    },
    notFound: {
      eyebrow: 'EDUARDO PARANHOS · PORTAFOLIO',
      title: 'RUTA_\nNO ENCONTRADA.',
      text: 'Esta dirección no lleva a una página del perfil de Eduardo Paranhos.',
      cta: 'Volver al inicio',
      pageTitle: '404 — Ruta no encontrada',
      description: 'La ruta solicitada no existe en este portafolio.',
    },
  },
};

export const langLabels: Record<Lang, string> = { pt: 'PT', en: 'EN', es: 'ES' };
export const langHtml: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
export const langPaths: Record<Lang, string> = { pt: '/', en: '/en/', es: '/es/' };
export const otherLangs: Record<Lang, Lang[]> = {
  pt: ['en', 'es'],
  en: ['pt', 'es'],
  es: ['pt', 'en'],
};

export function altLangPath(lang: Lang, path: string): string {
  // Troca o prefixo de idioma preservando o restante do caminho (âncoras, etc.)
  const clean = path.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
  if (lang === 'pt') return clean.startsWith('/') ? clean : `/${clean}`;
  const base = clean === '/' ? '' : clean;
  return `/${lang}${base}`;
}
