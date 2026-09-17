import { writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const tempHtmlPath = join(root, 'scripts', 'temp-cv.html');
const outputDir = join(root, 'public', 'cv');

const cvHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Currículo — Eduardo de Lima Paranhos</title>
  <style>
    @page {
      size: A4;
      margin: 10mm 12mm 10mm 12mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 8.7pt;
      line-height: 1.33;
      color: #222222;
      background: #ffffff;
    }
    .header {
      border-bottom: 2px solid #1a1a1a;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }
    .name {
      font-size: 18pt;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #111111;
      text-transform: uppercase;
    }
    .title {
      font-size: 10pt;
      font-weight: 600;
      color: #333333;
      margin-top: 2px;
    }
    .contact-line {
      margin-top: 5px;
      font-size: 8pt;
      color: #444444;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .contact-line span {
      display: inline-block;
    }
    .contact-line strong {
      color: #111111;
    }
    .section {
      margin-bottom: 7px;
    }
    .section-title {
      font-size: 9pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #111111;
      border-bottom: 1px solid #cccccc;
      padding-bottom: 2px;
      margin-bottom: 4px;
    }
    .summary {
      font-size: 8.4pt;
      color: #333333;
      text-align: justify;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3px 14px;
      font-size: 8.1pt;
    }
    .skill-item strong {
      color: #111111;
    }
    .job {
      margin-bottom: 5px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    .job-role {
      font-weight: 700;
      font-size: 8.9pt;
      color: #111111;
    }
    .job-company {
      font-weight: 600;
      color: #444444;
    }
    .job-date {
      font-size: 8pt;
      color: #666666;
    }
    ul.job-bullets {
      list-style-type: disc;
      padding-left: 14px;
      font-size: 8.1pt;
      color: #333333;
    }
    ul.job-bullets li {
      margin-bottom: 1.5px;
    }
    .project-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 12px;
    }
    .project-item {
      font-size: 8.1pt;
    }
    .project-item strong {
      color: #111111;
    }
    .badge {
      display: inline-block;
      font-size: 6.8pt;
      font-weight: 600;
      background: #eeeeee;
      padding: 1px 4px;
      border-radius: 2px;
      color: #333333;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">Eduardo de Lima Paranhos</div>
    <div class="title">Desenvolvedor de Software · TOTVS Protheus · ADVPL / TL++ · APIs REST · SQL Server</div>
    <div class="contact-line">
      <span><strong>Local:</strong> São Paulo, SP (Remoto / Híbrido)</span>
      <span><strong>WhatsApp:</strong> +55 11 94466-5292</span>
      <span><strong>E-mail:</strong> contatoeduardoparanhos@gmail.com</span>
      <span><strong>LinkedIn:</strong> linkedin.com/in/eduardo-de-lima-paranhos-910930263</span>
      <span><strong>GitHub:</strong> github.com/limaduzz11</span>
      <span><strong>Portfólio:</strong> nova-abme.pages.dev</span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Resumo Profissional</div>
    <p class="summary">
      Desenvolvedor de software especialista no ecossistema TOTVS Protheus, com experiência prática comprovada em customizações críticas em ADVPL/TL++, criação, manutenção e melhoria de integrações REST/SOAP, automação de processamentos em lote (jobs e schedules no AppServer Linux) e administração de banco de dados SQL Server e APSDU. Domínio técnico na sustentação de regras de negócio nos módulos Financeiro (SIGAFIN), Compras (SIGACOM), Contabilidade (SIGACTB), Faturamento (SIGAFAT) e manutenção de base, integração resiliente de ponta a ponta entre ERP e plataformas externas, e interfaces corporativas com PO-UI/Angular. Foco estrito em estabilidade transacional, código limpo e impacto mensurável de negócio.
    </p>
  </div>

  <div class="section">
    <div class="section-title">Competências Técnicas</div>
    <div class="skills-grid">
      <div class="skill-item">
        <strong>Linguagens & ERP:</strong> ADVPL, TL++, TOTVS Protheus (SIGAFIN, SIGACOM, SIGACTB, SIGAFAT, APSDU), Pontos de Entrada (PE), MVC (FWFormModel / FWFormView), Gatilhos, Validações Transacionais.
      </div>
      <div class="skill-item">
        <strong>Integrações & Comunicação:</strong> Criação, manutenção e melhoria de integrações (APIs REST/JSON, Webservices SOAP/XML), Webhooks, integração com plataformas externas, pipelines batch de ingestão e conciliação bancária (CNAB 240/400).
      </div>
      <div class="skill-item">
        <strong>Banco de Dados & Performance:</strong> Microsoft SQL Server, APSDU, T-SQL Avançado, modelagem relacional, planos de execução, criação de índices estratégicos e diagnósticos via DBAccess/Profiler.
      </div>
      <div class="skill-item">
        <strong>Frontend, Automação & DevOps:</strong> PO-UI, Angular, TypeScript, Node.js, Flutter/Dart, Git, Linux, Docker, AppServer Jobs/Schedules e Model Context Protocol (MCP).
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Experiência Profissional</div>

    <div class="job">
      <div class="job-header">
        <div>
          <span class="job-role">Desenvolvedor ADVPL / TOTVS Protheus</span> — <span class="job-company">Desenvolvimento & Integrações de Sistemas</span>
        </div>
        <div class="job-date">São Paulo · Remoto / Presencial</div>
      </div>
      <ul class="job-bullets">
        <li><strong>Criação, Manutenção e Melhoria de Integrações:</strong> Arquitetura e implementação de consumo automatizado de APIs externas via endpoints REST, persistência em tabelas temporárias indexadas e geração transacional em lote de Cliente (SA1), Pedido de Venda (SC5/SC6) e Faturamento (SF2/SD2), eliminando 100% da digitação manual de pedidos externos e prevenindo inconsistências operacionais.</li>
        <li><strong>Relatórios Analíticos de Alta Performance (.prw):</strong> Desenvolvimento de relatórios customizados em ADVPL puro com queries T-SQL estruturadas e filtros dinâmicos para conciliação financeira e análise de títulos, proporcionando tempo de resposta sub-segundo mesmo sobre bases com milhões de registros.</li>
        <li><strong>Otimização de Banco de Dados & DBAccess:</strong> Diagnóstico e refatoração de consultas críticas em SQL Server com criação de índices estratégicos sobre tabelas volumosas do Protheus (SIGAFIN/SIGAFAT/SIGACOM/SIGACTB), reduzindo o tempo de processamento em rotinas pesadas de fechamento em até 70%.</li>
        <li><strong>Processamento em Background (Jobs & Schedules):</strong> Automação e sustentação de rotinas agendadas no AppServer em ambiente Linux, com controle defensivo de concorrência, integridade transacional e rastreabilidade por logs de auditoria.</li>
        <li><strong>Interfaces Web Corporativas (PO-UI & Angular):</strong> Criação de portais e formulários web modernos consumindo backends REST em ADVPL/TL++, simplificando a operação de equipes corporativas.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <div>
          <span class="job-role">Consultoria e Soluções Tecnológicas</span> — <span class="job-company">ELP Tecnologia (PJ)</span>
        </div>
        <div class="job-date">Projetos Fechados & Consultoria B2B</div>
      </div>
      <ul class="job-bullets">
        <li>Estruturação e execução de demandas sob medida: criação, manutenção e melhoria de integrações entre ERP e plataformas externas, desenvolvimento de relatórios analíticos em ADVPL puro (.prw) e diagnósticos de banco de dados SQL Server / APSDU.</li>
        <li>Diagnósticos de performance em banco de dados SQL Server e sustentação de processos corporativos.</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Projetos Técnicos Selecionados</div>
    <div class="project-grid">
      <div class="project-item">
        <strong>NOVA HUB WEB</strong> <span class="badge">Flutter · Dart · Linux · REST</span><br>
        Painel central multiplataforma com 3 módulos integrados: <em>NEXUS</em> (tickets corporativos), <em>ARCADIA</em> (catálogo IGDB API) e <em>CORTEX</em> (core AI harness).
      </div>
      <div class="project-item">
        <strong>protheus-research (MCP Server)</strong> <span class="badge">TypeScript · Node.js · MCP</span><br>
        Servidor Model Context Protocol que indexa sintaxe ADVPL, rotinas e tabelas do Protheus para consultas estruturadas por agentes de IA e desenvolvedores.
      </div>
      <div class="project-item">
        <strong>protheus-rest-lab (Arquitetura REST)</strong> <span class="badge">ADVPL / TL++ · REST · JSON</span><br>
        Implementação de referência para construção de endpoints REST seguros e padronizados no Protheus: paginação, controle HTTP e tratamento consistente.
      </div>
      <div class="project-item">
        <strong>protheus-po-ui-template (Portal Web)</strong> <span class="badge">Angular · PO-UI · TypeScript</span><br>
        Base de aplicação corporativa completa utilizando o design system PO-UI sobre Angular, pronta para integração REST com o Protheus.
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Formação & Idiomas</div>
    <div class="skills-grid">
      <div><strong>Formação:</strong> Análise e Desenvolvimento de Sistemas / Tecnologia da Informação</div>
      <div><strong>Idiomas:</strong> Português (Nativo) · Inglês (Técnico / Leitura de Documentações e RFCs)</div>
    </div>
  </div>
</body>
</html>
`;

writeFileSync(tempHtmlPath, cvHtml, 'utf8');
execSync(`libreoffice --headless --convert-to pdf "${tempHtmlPath}" --outdir "${outputDir}"`);
execSync(`mv "${join(outputDir, 'temp-cv.pdf')}" "${join(outputDir, 'eduardo-paranhos-cv.pdf')}"`);
execSync(`rm -f "${tempHtmlPath}"`);
console.log('CV PDF gerado com sucesso em:', join(outputDir, 'eduardo-paranhos-cv.pdf'));
