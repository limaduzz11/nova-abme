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
      margin: 14mm 14mm 14mm 14mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 9.5pt;
      line-height: 1.38;
      color: #222222;
      background: #ffffff;
    }
    .header {
      border-bottom: 2px solid #1a1a1a;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    .name {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #111111;
      text-transform: uppercase;
    }
    .title {
      font-size: 11pt;
      font-weight: 600;
      color: #444444;
      margin-top: 2px;
    }
    .contact-line {
      margin-top: 6px;
      font-size: 8.5pt;
      color: #555555;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .contact-line span {
      display: inline-block;
    }
    .section {
      margin-bottom: 12px;
    }
    .section-title {
      font-size: 10pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #111111;
      border-bottom: 1px solid #cccccc;
      padding-bottom: 3px;
      margin-bottom: 6px;
    }
    .summary {
      font-size: 9pt;
      color: #333333;
      text-align: justify;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 16px;
      font-size: 8.5pt;
    }
    .skill-item strong {
      color: #111111;
    }
    .job {
      margin-bottom: 8px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    .job-role {
      font-weight: 700;
      font-size: 9.5pt;
      color: #111111;
    }
    .job-company {
      font-weight: 600;
      color: #444444;
    }
    .job-date {
      font-size: 8.5pt;
      color: #666666;
    }
    ul.job-bullets {
      list-style-type: disc;
      padding-left: 16px;
      font-size: 8.8pt;
      color: #333333;
    }
    ul.job-bullets li {
      margin-bottom: 2px;
    }
    .project-row {
      margin-bottom: 5px;
      font-size: 8.8pt;
    }
    .project-row strong {
      color: #111111;
    }
    .badge {
      display: inline-block;
      font-size: 7.5pt;
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
      <span><strong>E-mail:</strong> eduardodelimaparanhos@gmail.com</span>
      <span><strong>LinkedIn:</strong> linkedin.com/in/eduardo-de-lima-paranhos-910930263</span>
      <span><strong>GitHub:</strong> github.com/limaduzz11</span>
      <span><strong>Portfólio:</strong> nova-abme.pages.dev</span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Resumo Profissional</div>
    <p class="summary">
      Desenvolvedor de software focado no ecossistema corporativo TOTVS Protheus, com experiência prática na construção de rotinas customizadas em ADVPL/TL++, desenvolvimento e consumo de APIs REST/SOAP, automação de processamentos em lote (jobs e schedules) e administração de dados em SQL Server. Experiência sólida na modelagem e sustentação de regras de negócio em módulos críticos (Faturamento, Financeiro, Estoque e Compras), integração resiliente com canais de venda e marketplaces, e interfaces modernas em PO-UI/Angular. Foco em estabilidade operacional, código testável e soluções que funcionam no mundo real.
    </p>
  </div>

  <div class="section">
    <div class="section-title">Competências Técnicas</div>
    <div class="skills-grid">
      <div class="skill-item">
        <strong>Linguagens & ERP:</strong> ADVPL, TL++, TOTVS Protheus (SIGAFAT, SIGAFIN, SIGAEST, SIGACOM), Pontos de Entrada (PE), MVC (FWFormModel / FWFormView), Gatilhos, Validações.
      </div>
      <div class="skill-item">
        <strong>Integrações & Comunicação:</strong> APIs REST (JSON), Webservices SOAP (XML), Webhooks, integração com Marketplaces (Anymarket, Shopee, Mercado Livre), conciliação bancária (CNAB 240/400).
      </div>
      <div class="skill-item">
        <strong>Banco de Dados:</strong> Microsoft SQL Server, T-SQL, modelagem relacional, otimização de queries, criação de views, procedures, índices e diagnósticos via DBAccess/Profiler.
      </div>
      <div class="skill-item">
        <strong>Frontend & Ferramentas:</strong> PO-UI, Angular, TypeScript, Node.js, Flutter, Git, Linux, Docker, Model Context Protocol (MCP), automação de rotinas e scripts operacionais.
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
        <div class="job-date">São Paulo · Atuação Remota / Presencial</div>
      </div>
      <ul class="job-bullets">
        <li>Desenvolvimento, parametrização e sustentação de rotinas sob medida no Protheus para os módulos de Faturamento, Financeiro, Estoque, Custos e Compras.</li>
        <li>Construção e sustentação de integrações RESTful entre o ERP Protheus e sistemas terceiros, garantindo sincronismo automático de pedidos, notas fiscais, clientes e estoque.</li>
        <li>Implementação de rotinas em lote (schedules) e regras de processamento em background com tratamento preventivo de concorrência e integridade transacional.</li>
        <li>Automação de fluxos financeiros, incluindo emissão de boletos, conciliação de extratos e transmissão bancária CNAB sem intervenção manual.</li>
        <li>Análise, refatoração e otimização de consultas SQL Server em rotinas críticas de fechamento contábil e inventário, reduzindo expressivamente o tempo de processamento.</li>
        <li>Desenvolvimento de telas e relatórios dinâmicos utilizando framework MVC Protheus e PO-UI/Angular para áreas operacionais da empresa.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <div>
          <span class="job-role">Consultoria e Soluções Tecnológicas</span> — <span class="job-company">ELP Tecnologia</span>
        </div>
        <div class="job-date">Projetos & Consultoria Corporativa</div>
      </div>
      <ul class="job-bullets">
        <li>Estruturação e execução de projetos de software, automações e integrações de ERP voltadas para melhoria de processos corporativos e redução de atritos operacionais.</li>
        <li>Consultoria técnica em arquitetura de dados, mapeamento de processos e customizações avançadas em ambientes corporativos.</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Projetos Técnicos Selecionados</div>
    <div class="project-row">
      <strong>protheus-research (MCP Server)</strong> <span class="badge">TypeScript · Node.js · MCP</span><br>
      Servidor MCP para navegação estruturada e pesquisa técnica automatizada no ecossistema TOTVS Protheus por ferramentas e agentes de inteligência artificial.
    </div>
    <div class="project-row">
      <strong>protheus-rest-lab (Arquitetura REST)</strong> <span class="badge">ADVPL / TL++ · REST · JSON</span><br>
      Implementação de referência com padrões práticos para expor e consumir APIs REST no Protheus com paginação, controle de erro e serialização padronizada.
    </div>
    <div class="project-row">
      <strong>protheus-po-ui-template (Portal Web)</strong> <span class="badge">Angular · PO-UI · TypeScript</span><br>
      Template corporativo com design system PO-UI integrado a APIs do Protheus, permitindo criar portais rápidos e intuitivos para equipes operacionais.
    </div>
    <div class="project-row">
      <strong>nova-hub (Monitoramento & Telemetria)</strong> <span class="badge">Flutter · Dart · Linux</span><br>
      Painel multiplataforma desenvolvido para monitorar saúde de serviços, telemetria e disponibilidade operacional de sistemas distribuídos.
    </div>
  </div>

  <div class="section">
    <div class="section-title">Formação & Idiomas</div>
    <div class="skills-grid">
      <div><strong>Formação:</strong> Análise e Desenvolvimento de Sistemas / Tecnologia da Informação</div>
      <div><strong>Idiomas:</strong> Português (Nativo) · Inglês (Técnico / Leitura e Documentação)</div>
    </div>
  </div>
</body>
</html>
`;

writeFileSync(tempHtmlPath, cvHtml, 'utf8');
execSync(`libreoffice --headless --convert-to pdf "${tempHtmlPath}" --outdir "${outputDir}"`);
execSync(`mv "${join(outputDir, 'temp-cv.pdf')}" "${join(outputDir, 'eduardo-paranhos-cv.pdf')}"`);
execSync(`rm -f "${tempHtmlPath}"`);
