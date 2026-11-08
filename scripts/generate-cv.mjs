/**
 * Gera os currículos ATS-friendly em inglês (mercado EUA/Europa) e português.
 *
 * Padrões aplicados:
 * - uma página A4, coluna única, texto real (sem imagens/tabelas);
 * - títulos de seção convencionais e ordem reversa dentro de experiência;
 * - sem foto, data de nascimento, estado civil ou endereço completo;
 * - verbos de ação e resultados verificáveis;
 * - links clicáveis e texto extraível por ATS.
 *
 * Uso: npm run build:cv
 */
import { chromium } from 'playwright';
import { mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const outputDir = join(root, 'public', 'cv');
mkdirSync(outputDir, { recursive: true });

const shared = {
  name: 'Eduardo de Lima Paranhos',
  phone: '+55 11 94466-5292',
  email: 'contatoeduardoparanhos@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eduardo-de-lima-paranhos-910930263/',
  linkedinLabel: 'linkedin.com/in/eduardo-de-lima-paranhos-910930263',
  github: 'https://github.com/limaduzz11',
  githubLabel: 'github.com/limaduzz11',
  portfolio: 'https://portfolioeduardo.elptecnologia.com.br/',
  portfolioLabel: 'portfolioeduardo.elptecnologia.com.br',
};

const cv = {
  en: {
    ...shared,
    lang: 'en',
    title: 'Eduardo Paranhos — Software Developer | TOTVS Protheus',
    headline: 'Software Developer | TOTVS Protheus · ADVPL/TL++ · REST/SOAP · SQL Server',
    location: 'São Paulo, Brazil · Remote (UTC-3)',
    labels: {
      summary: 'Professional Summary',
      skills: 'Core Skills',
      experience: 'Experience',
      projects: 'Selected Projects',
      education: 'Education',
      languages: 'Languages',
      courses: 'Professional Development',
    },
    summary:
      'Software Developer with 5+ years of experience in TOTVS Protheus, ADVPL/TL++ and SQL Server. Delivered production back-office routines and REST/SOAP integrations across Finance, Billing, Purchasing, Inventory and Accounting. Experienced in building internal tools and open-source projects with Node.js, TypeScript, Flutter and Astro.',
    skills: [
      ['ERP', 'TOTVS Protheus (SIGAFIN, SIGAFAT, SIGACOM, SIGAEST, SIGACTB, APSDU)'],
      ['Languages', 'ADVPL, TL++, SQL/T-SQL, JavaScript, TypeScript'],
      ['Integration', 'REST, SOAP, JSON/XML, webhooks, authentication, logging, contingency'],
      ['Data', 'SQL Server, query tuning, indexes, execution plans, DBAccess/Profiler'],
      ['Web & tools', 'Angular, PO-UI, Astro, Node.js, Git/GitHub, Docker, Linux, Jobs & Schedules, MCP'],
    ],
    experience: [
      {
        role: 'Junior Developer Analyst',
        company: 'COMM',
        date: 'Jun 2024 – Present',
        bullets: [
          'Develop and maintain ADVPL/TL++ back-office routines with ExecAuto and Entry Points across Finance, Billing, Purchasing, Inventory and Accounting.',
          'Build REST/SOAP integrations with marketplaces (Anymarket, Shopee, Magalu, Casas Bahia), gateways and partners, covering authentication, JSON/XML, logging and contingency.',
          'Automate operational batches, closings and asynchronous syncs with Protheus Jobs and Schedules.',
          'Diagnose data inconsistencies and tune SQL Server queries (TCSQLExec, ChangeQuery) for high-volume reconciliations.',
        ],
      },
      {
        role: 'IT Intern',
        company: 'COMM',
        date: 'Nov 2023 – Jun 2024',
        bullets: [
          'Supported Protheus users and incidents, tracking fixes and corporate routine stability.',
          'Monitored integrations, logs, e-commerce and NF-e; supported ADVPL routines and SQL queries.',
          'Promoted to Developer Analyst in 7 months.',
        ],
      },
      {
        role: 'ADVPL / Protheus Developer',
        company: 'Freelancer',
        date: 'Apr 2021 – Nov 2023',
        bullets: [
          'Delivered ADVPL/TReport and SQL Server reports for financial titles, bank movements and reconciliation (SIGAFIN).',
          'Developed routines, Entry Points and support screens in Protheus; resolved data inconsistencies and tuned high-volume queries.',
        ],
      },
    ],
    projects: [
      {
        name: 'NOVA HUB WEB',
        desc: 'Private operations dashboard (Node.js, Express, WebSocket/PTY, Linux) with telemetry, in-browser SSH terminal and task orchestration; no public port.',
        link: 'https://github.com/limaduzz11/nova-hub',
        label: 'github.com/limaduzz11/nova-hub',
      },
      {
        name: 'VANTA Reader',
        desc: 'Local-first Flutter reader for EPUB/TXT/PDF and CBZ/CBR comics, with offline library, reading progress and public catalog; 216 automated tests.',
        link: 'https://github.com/limaduzz11/vanta-reader',
        label: 'github.com/limaduzz11/vanta-reader',
      },
      {
        name: 'NOVA CRM',
        desc: 'Single-tenant commercial CRM prototype (Astro, PHP, SQLite, SQL Server) with Kanban pipeline and Protheus integration.',
        link: 'https://elptecnologia.com.br/labs/nova-crm/',
        label: 'elptecnologia.com.br/labs/nova-crm',
      },
      {
        name: 'protheus-research',
        desc: 'TypeScript MCP server indexing Protheus syntax, routines, tables and rules for AI-assisted technical research.',
        link: 'https://github.com/limaduzz11/protheus-research',
        label: 'github.com/limaduzz11/protheus-research',
      },
      {
        name: 'OpenPantheon',
        desc: 'Independent technology publication (Astro, Cloudflare, Go) with articles, search, RSS and editorial operations.',
        link: 'https://openpantheon.com.br/',
        label: 'openpantheon.com.br',
      },
      {
        name: 'ELP Tecnologia',
        desc: 'Corporate website for the consultancy (Astro, technical SEO and responsive design).',
        link: 'https://elptecnologia.com.br/',
        label: 'elptecnologia.com.br',
      },
    ],
    education: {
      degree: 'Technology Degree in Systems Analysis and Development',
      school: 'Centro Universitário FMU (FIAM-FAAM), São Paulo',
      date: '2023 – 2026',
    },
    courses: 'ADVPL Programming (Udemy) · Algorithms and Programming Logic (Udemy)',
    languages: 'Portuguese — Native · English — Technical reading (documentation and RFCs)',
  },
  pt: {
    ...shared,
    lang: 'pt',
    title: 'Eduardo Paranhos — Desenvolvedor de Software | TOTVS Protheus',
    headline: 'Desenvolvedor de Software | TOTVS Protheus · ADVPL/TL++ · REST/SOAP · SQL Server',
    location: 'São Paulo, Brasil · Remoto (UTC-3)',
    labels: {
      summary: 'Resumo Profissional',
      skills: 'Competências Técnicas',
      experience: 'Experiência Profissional',
      projects: 'Projetos Selecionados',
      education: 'Formação',
      languages: 'Idiomas',
      courses: 'Cursos',
    },
    summary:
      'Desenvolvedor de Software com mais de 5 anos de experiência em TOTVS Protheus, ADVPL/TL++ e SQL Server. Atuação em rotinas de backoffice e integrações REST/SOAP em produção nas áreas Financeira, Faturamento, Compras, Estoque e Contábil. Experiência no desenvolvimento de ferramentas internas e projetos open source com Node.js, TypeScript, Flutter e Astro.',
    skills: [
      ['ERP', 'TOTVS Protheus (SIGAFIN, SIGAFAT, SIGACOM, SIGAEST, SIGACTB, APSDU)'],
      ['Linguagens', 'ADVPL, TL++, SQL/T-SQL, JavaScript, TypeScript'],
      ['Integrações', 'REST, SOAP, JSON/XML, webhooks, autenticação, logs e contingência'],
      ['Dados', 'SQL Server, tuning de consultas, índices, planos de execução, DBAccess/Profiler'],
      ['Ferramentas', 'Angular, PO-UI, Astro, Node.js, Git/GitHub, Docker, Linux, Jobs & Schedules, MCP'],
    ],
    experience: [
      {
        role: 'Analista Desenvolvedor Jr.',
        company: 'COMM',
        date: 'Jun 2024 – Atual',
        bullets: [
          'Desenvolve e sustenta rotinas de backoffice em ADVPL/TL++ com ExecAuto e Pontos de Entrada nas áreas Financeira, Faturamento, Compras, Estoque e Contábil.',
          'Implementa integrações REST e SOAP com marketplaces (Anymarket, Shopee, Magalu, Casas Bahia), gateways e parceiros, incluindo autenticação, JSON/XML, logs e contingência.',
          'Automatiza lotes operacionais, fechamentos e sincronizações assíncronas com Jobs e Schedules do Protheus.',
          'Diagnostica inconsistências de dados e otimiza consultas no SQL Server (TCSQLExec e ChangeQuery) em conciliações de alto volume.',
        ],
      },
      {
        role: 'Estagiário de TI',
        company: 'COMM',
        date: 'Nov 2023 – Jun 2024',
        bullets: [
          'Atendeu usuários e incidentes no Protheus, acompanhando correções e a estabilidade das rotinas corporativas.',
          'Monitorou integrações, logs, e-commerce e NF-e, com apoio em rotinas ADVPL e consultas SQL.',
          'Promovido a Analista Desenvolvedor em 7 meses.',
        ],
      },
      {
        role: 'Desenvolvedor ADVPL / Protheus',
        company: 'Freelancer',
        date: 'Abr 2021 – Nov 2023',
        bullets: [
          'Entregou relatórios ADVPL/TReport e SQL Server de títulos, movimentação bancária e conciliação (SIGAFIN).',
          'Desenvolveu rotinas, Pontos de Entrada e telas de apoio no Protheus; tratou inconsistências de dados e ajustou consultas de alto volume.',
        ],
      },
    ],
    projects: [
      {
        name: 'NOVA HUB WEB',
        desc: 'Dashboard privado de operações (Node.js, Express, WebSocket/PTY, Linux) com telemetria, terminal SSH no navegador e orquestração de tarefas; sem porta pública.',
        link: 'https://github.com/limaduzz11/nova-hub',
        label: 'github.com/limaduzz11/nova-hub',
      },
      {
        name: 'VANTA Reader',
        desc: 'Leitor local-first em Flutter para EPUB/TXT/PDF e quadrinhos CBZ/CBR, com biblioteca offline, progresso de leitura e catálogo público; 216 testes automatizados.',
        link: 'https://github.com/limaduzz11/vanta-reader',
        label: 'github.com/limaduzz11/vanta-reader',
      },
      {
        name: 'NOVA CRM',
        desc: 'Protótipo de CRM comercial single-tenant (Astro, PHP, SQLite, SQL Server) com pipeline Kanban e integração com o Protheus.',
        link: 'https://elptecnologia.com.br/labs/nova-crm/',
        label: 'elptecnologia.com.br/labs/nova-crm',
      },
      {
        name: 'protheus-research',
        desc: 'Servidor MCP em TypeScript que indexa sintaxe, rotinas, tabelas e regras do Protheus para pesquisa técnica assistida por IA.',
        link: 'https://github.com/limaduzz11/protheus-research',
        label: 'github.com/limaduzz11/protheus-research',
      },
      {
        name: 'OpenPantheon',
        desc: 'Publicação independente de tecnologia (Astro, Cloudflare, Go) com artigos, busca, RSS e operação editorial.',
        link: 'https://openpantheon.com.br/',
        label: 'openpantheon.com.br',
      },
      {
        name: 'ELP Tecnologia',
        desc: 'Site institucional da consultoria (Astro, SEO técnico e design responsivo).',
        link: 'https://elptecnologia.com.br/',
        label: 'elptecnologia.com.br',
      },
    ],
    education: {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      school: 'Centro Universitário FMU (FIAM-FAAM), São Paulo',
      date: '2023 – 2026',
    },
    courses: 'Programando em ADVPL (Udemy) · Algoritmos e Lógica de Programação (Udemy)',
    languages: 'Português — Nativo · Inglês — Leitura técnica (documentação e RFCs)',
  },
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const render = (data) => {
  const labels = data.labels;
  const jobs = data.experience
    .map(
      (job) => `
        <article class="job">
          <div class="job-head">
            <div class="job-heading">
              <span class="job-role">${escapeHtml(job.role)}</span>
              <span class="job-company"> — ${escapeHtml(job.company)}</span>
            </div>
            <span class="job-date">${escapeHtml(job.date)}</span>
          </div>
          <ul class="bullets">
            ${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
          </ul>
        </article>`,
    )
    .join('');

  const projects = data.projects
    .map(
      (project) => `
        <li class="project">
          <span class="project-name">${escapeHtml(project.name)}</span>
          <span class="project-desc"> — ${escapeHtml(project.desc)}</span>
          <a class="project-link" href="${escapeHtml(project.link)}">${escapeHtml(project.label)}</a>
        </li>`,
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="${data.lang}">
<head>
  <meta charset="utf-8" />
  <meta name="author" content="${escapeHtml(shared.name)}" />
  <meta name="description" content="${escapeHtml(data.title)}" />
  <title>${escapeHtml(data.title)}</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #fff; color: #161616; }
    body {
      width: 210mm;
      min-height: 297mm;
      padding: 13mm 15mm 12mm;
      font-family: Arial, Helvetica, "Liberation Sans", sans-serif;
      font-size: 8.7pt;
      line-height: 1.34;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    a { color: #161616; text-decoration: none; }
    .header { border-bottom: 1.5px solid #161616; padding-bottom: 5px; }
    .name {
      margin: 0;
      font-size: 20.5pt;
      line-height: 1;
      font-weight: 700;
      letter-spacing: -0.025em;
    }
    .headline {
      margin: 3px 0 0;
      font-size: 9.6pt;
      font-weight: 600;
      color: #303030;
    }
    .contact {
      margin-top: 4px;
      font-size: 7.8pt;
      line-height: 1.5;
      color: #3b3b3b;
    }
    .contact span, .contact a { margin-right: 8px; white-space: nowrap; }
    .contact a { text-decoration: underline; text-decoration-color: #bdbdbd; text-underline-offset: 1.5px; }
    section { margin-top: 7px; }
    h2 {
      margin: 0 0 3px;
      padding-bottom: 1.5px;
      border-bottom: 0.75px solid #bbbbbb;
      font-size: 8.1pt;
      font-weight: 700;
      letter-spacing: 0.075em;
      line-height: 1.2;
      text-transform: uppercase;
    }
    p { margin: 0; }
    .summary { font-size: 8.5pt; line-height: 1.38; }
    .skills { display: grid; gap: 1px; }
    .skill { display: grid; grid-template-columns: 78px 1fr; gap: 6px; }
    .skill strong { font-weight: 700; }
    .skill span { color: #303030; }
    .job { break-inside: avoid; margin-top: 5px; }
    .job:first-child { margin-top: 0; }
    .job-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
    .job-heading { min-width: 0; }
    .job-role { font-weight: 700; font-size: 9pt; }
    .job-company { color: #3b3b3b; }
    .job-date { flex: 0 0 auto; color: #555555; font-size: 7.8pt; white-space: nowrap; }
    .bullets { margin: 1px 0 0 13px; padding: 0; }
    .bullets li { margin: 0 0 1.2px; padding-left: 1px; }
    .projects { list-style: none; margin: 0; padding: 0; }
    .project { margin-bottom: 2.8px; font-size: 8.35pt; line-height: 1.35; }
    .project-name { font-weight: 700; }
    .project-link { font-size: 7.5pt; color: #444444; white-space: nowrap; }
    .project-link::before { content: " · "; color: #777777; }
    .education { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
    .education strong { font-size: 8.8pt; }
    .education span { color: #555555; font-size: 7.8pt; white-space: nowrap; }
    .school { margin-top: 1px; color: #303030; }
    .line { margin-top: 2px; font-size: 8.35pt; }
    .line strong { font-weight: 700; }
  </style>
</head>
<body>
  <header class="header">
    <h1 class="name">${escapeHtml(data.name)}</h1>
    <p class="headline">${escapeHtml(data.headline)}</p>
    <div class="contact">
      <span>${escapeHtml(data.location)}</span>
      <span>${escapeHtml(data.phone)}</span>
      <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>
      <a href="${escapeHtml(data.linkedin)}">${escapeHtml(data.linkedinLabel)}</a>
      <a href="${escapeHtml(data.github)}">${escapeHtml(data.githubLabel)}</a>
      <a href="${escapeHtml(data.portfolio)}">${escapeHtml(data.portfolioLabel)}</a>
    </div>
  </header>

  <section>
    <h2>${escapeHtml(labels.summary)}</h2>
    <p class="summary">${escapeHtml(data.summary)}</p>
  </section>

  <section>
    <h2>${escapeHtml(labels.skills)}</h2>
    <div class="skills">
      ${data.skills
        .map(
          ([label, value]) =>
            `<div class="skill"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></div>`,
        )
        .join('')}
    </div>
  </section>

  <section>
    <h2>${escapeHtml(labels.experience)}</h2>
    ${jobs}
  </section>

  <section>
    <h2>${escapeHtml(labels.projects)}</h2>
    <ul class="projects">${projects}</ul>
  </section>

  <section>
    <h2>${escapeHtml(labels.education)}</h2>
    <div class="education">
      <strong>${escapeHtml(data.education.degree)}</strong>
      <span>${escapeHtml(data.education.date)}</span>
    </div>
    <p class="school">${escapeHtml(data.education.school)}</p>
    <p class="line"><strong>${escapeHtml(labels.courses)}:</strong> ${escapeHtml(data.courses)}</p>
  </section>

  <section>
    <h2>${escapeHtml(labels.languages)}</h2>
    <p class="line">${escapeHtml(data.languages)}</p>
  </section>
</body>
</html>`;
};

const files = {
  en: join(outputDir, 'Eduardo-Paranhos-Software-Developer-CV-EN.pdf'),
  pt: join(outputDir, 'Eduardo-Paranhos-Desenvolvedor-Software-CV-PT.pdf'),
};

const browser = await chromium.launch({ headless: true });
try {
  for (const [lang, data] of Object.entries(cv)) {
    const page = await browser.newPage();
    await page.setContent(render(data), { waitUntil: 'load' });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: files[lang],
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });
    await page.close();
    console.log(`Generated ${files[lang]}`);
  }
} finally {
  await browser.close();
}

// Backward-compatible path used by older links.
copyFileSync(files.en, join(outputDir, 'eduardo-paranhos-cv.pdf'));
console.log(`Copied legacy alias to ${join(outputDir, 'eduardo-paranhos-cv.pdf')}`);
