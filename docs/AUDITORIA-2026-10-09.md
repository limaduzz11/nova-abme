# Auditoria do Portfólio — 2026-10-09

> Documento de auditoria (Fases 1–2). Baseline git: tag `baseline-pre-audit-2026-10-09` (commit `2d27720`).
> Escopo: código local, produção HTTPS, assets, repositórios GitHub vinculados, currículo PDF e evidências de teste.

## 1. Diagnóstico geral

O portfólio está em estado **funcional e tecnicamente sólido**, com posicionamento de nicho claro
(ADVPL / TOTVS Protheus / Integrações / SQL Server). Os problemas concentram-se em **(a) um defeito de
configuração de deploy que degrada o SEO real**, **(b) divergências de conteúdo entre site, GitHub e
currículo** e **(c) ausência de evidências verificáveis** (métricas, artefatos visuais, timeline).

Notas externas recebidas (4 análises de IA): 9,5 / 7,2 / 8,4 / 6,4 — todas convergem para
"prova e consistência", não para "redesign radical".

## 2. Problemas comprovados (com evidência)

### P0 — Canonical, OG e sitemap apontam para `nova-abme.pages.dev` em PRODUÇÃO
- Evidência: `curl` em `https://portfolioeduardo.elptecnologia.com.br/` retorna
  `<link rel="canonical" href="https://nova-abme.pages.dev/">`, `og:url` e `og:image` idem;
  `sitemap-index.xml` lista `https://nova-abme.pages.dev/sitemap-0.xml`.
- O **build local está correto** (canonical → domínio próprio) — o defeito está no ambiente do
  Cloudflare Pages: **variável `PUBLIC_SITE_URL` configurada com o valor antigo** sobrescreve o
  `astro.config.mjs`. Confirmação: o CV PDF em produção já contém o URL novo (commit `2d27720` foi
  deployado), logo o build de produção está atual — apenas a env var está errada.
- Impacto: o Google pode indexar `nova-abme.pages.dev` como canônica, tratando o domínio próprio
  como duplicata (perda de autoridade e de descoberta).

### P1 — Vazamento de terminologia interna ao público
- `public/og-image.svg` exibe **"NOVA ABME / PERFIL 001"** (nome de produto interno).
- `src/pages/404.astro` exibe **"NOVA ABME / ROUTER"**.
- Impacto: confusão do visitante; quebra de marca pessoal.

### P1 — Divergência site × GitHub no card `NOVA HUB WEB`
- Site: "Flutter · Dart · Linux · REST · Architecture" + NEXUS como "integração com plataforma de
  tickets/chamados" + CORTEX como "Engineering AI Harness".
- README real: Node.js 22 / Express 5 / Vanilla JS (migrado do Flutter na V5); "Kanban orchestration",
  terminal SSH/PTY, telemetria; sem "Harness".
- Impacto: quem clica em "Ver no GitHub" encontra história diferente — perda de confiança.

### P1 — Divergência site × currículo na senioridade
- Site: "Desenvolvedor **especialista** em TOTVS Protheus" (hero) e "Desenvolvedor **Especialista**
  Protheus" (consultoria); vCard NOTE idem.
- Currículo: "**Analista Desenvolvedor Jr | COMM**" (desde jun/2024; promoção de estágio em 7 meses).
- Impacto: inconsistência custa credibilidade numa leitura cruzada.

### P2 — Claims sem evidência (linguagem de marketing)
- "**100% Automático**" (marketplaces), "**Alta Performance**" (SQL e relatórios),
  "reduzindo **expressivamente** o tempo" — sem números, cenário ou medição.
- Impacto: 4/4 análises externas apontaram; público técnico descarta adjetivos sem prova.

### P2 — Evidências ausentes nos projetos
- 4 cards de projeto com link apenas para repositórios (0 stars, sem CI, sem demo, sem diagrama).
- Nenhum screenshot/GIF/diagrama no site; `nova-hub` e `protheus-*` são descobertos só pelo README.
- `protheus-rest-lab`: README com `Security=0` + `ENVIRONMENT_PROD` sem disclaimer de que é laboratório.
- Nenhum dos 4 repos possui GitHub Actions.

### P2 — Conteúdo ausente que o próprio CV já possui (fonte verificável)
- Timeline de experiência: freelancer ADVPL desde abr/2021; COMM desde nov/2023; promoção em 7 meses.
- Marketplaces: Anymarket, Shopee, Magalu, Casas Bahia (públicos no CV).
- Módulo SIGAEST (Estoque) presente no CV; site lista FIN/COM/CTB/FAT/APSDU.

### P3 — Manutenibilidade: CSS morto
- 62 classes definidas em `global.css` sem uso nos componentes (~460 linhas, ~20% do arquivo).
  Resíduos de versões anteriores (audience switcher, work-row, router, status pills, hero-aside…).

### P3 — Acessibilidade: itens menores
- Axe: 0 violações; 3 incompletos: `aria-label` em `div.hero-actions` sem role (corrigível em 1 linha);
  `aria-controls` do botão do menu com `<dialog>` fechado (falso positivo a documentar);
  contraste de glifos decorativos ↓/→ (falso positivo).
- `--muted` (3.72:1) usado apenas no numeral decorativo do 404 — sem risco textual.

### P3 — Estado/consistência das iniciativas VANTA
- Cards misturam "EM EVOLUÇÃO", "EM DESENVOLVIMENTO" e "CONCEITO EM LABORATÓRIO" com o mesmo peso
  visual e sem links. O VANTA Reader, por exemplo, tem API v0.2 implementada (fonte: Vault NOVA);
  o XNOVA tem host B1–B6 validado em potência (fonte: DOCUMENTO.md).

### Verificado e OK (não são problemas)
- Canonical local, JSON-LD `ProfilePage`+`Person` (já implementado — sugestão de IA superada).
- `LICENSE` presente no `protheus-research` (o relatório externo apontou ausência — hoje existe).
- Headers de segurança fortes (CSP, HSTS, X-Frame-Options DENY, Permissions-Policy, nosniff).
- CV e vCard em produção = byte a byte iguais ao build local (hashes SHA-256 conferidos).
- Links externos principais com resposta OK (GitHub 200, ELP 200, WhatsApp 302, LinkedIn 301).

## 3. Pontos positivos a preservar

1. **Posicionamento de nicho** — headline "SOFTWARE QUE FUNCIONA NO MUNDO REAL." + especialidade
   explícita; diferencial real no mercado ADVPL.
2. **Performance excepcional** — Lighthouse mobile: **99–100** com LCP 1,4 s, TBT 0 ms, CLS 0,
   76 KiB no local / 21 KiB em produção. Build estático leve (188 KB no total).
3. **Acessibilidade** — Axe 0 violações, Lighthouse A11y 100, skip-link, teclado no menu (Ctrl+K),
   reduced-motion respeitado, tablist acessível.
4. **Segurança de entrega** — CSP restritiva, HSTS, headers completos; sem tracker; sem cookies.
5. **Arquitetura de código** — Astro estático, dados centralizados em `src/data/site.ts`, componentes
   pequenos e coesos, JS progressivo (`gateway.ts`), sem dependências supérfluas (2 deps).
6. **Qualidade automatizada** — `npm run verify` verde (lint+typecheck+secret scan+build+5 testes),
   Playwright 7/7 (inclui a11y), CI no GitHub Actions.
7. **Canais de conversão** — CV PDF (texto selecionável/ATS), vCard, WhatsApp com mensagem
   pré-preenchida, e-mail com copiar, LinkedIn, GitHub; divisão CLT/PJ e ELP B2B clara.
8. **Estrutura editorial** — hierarquia por seções com progressão lógica e legibilidade alta.

## 4. Avaliação de apresentação profissional e UX

| Dimensão | Estado | Comentário |
|---|---|---|
| Clareza de posicionamento | Forte | Especialidade visível na 1ª dobra |
| Credibilidade factual | **Fraca** | Divergências site×GitHub×CV; claims sem prova |
| Hierarquia visual | Boa | Monocromática, consistente; pouco destaque de prioridade |
| Identidade visual | Média | "Ink Wash" própria e sóbria, porém sem acento de cor/atitude memorável |
| Prova visual (projetos) | **Fraca** | Nenhum diagrama/screenshot/demo |
| Humanização | Fraca | Sem foto/bio/timeline no site |
| Navegação/CTA | Forte | Ctrl+K, âncoras, CTAs redundantes e úteis |
| Responsividade | Boa | Matriz 320–1920 testada; sem overflow |
| A11y | Forte | Axe 0; 3 incompletos menores |
| SEO técnico | **Defeituoso em produção** | Canonical/OG/sitemap no domínio pages.dev |

## 5. Melhorias técnicas recomendadas

1. **Corrigir `PUBLIC_SITE_URL` no Cloudflare Pages** (produção) para
   `https://portfolioeduardo.elptecnologia.com.br` e re-buildar. Sem isso, nada de SEO importa.
2. Alinhar card NOVA HUB ao README real (Node/Express/Vanilla, Kanban, SSH/PTY) ou generalizar.
3. Substituir "especialista" por título consistente com o CV.
4. Reescrever claims em linguagem técnica verificável (métricas somente se comprovadas).
5. Adicionar timeline de experiência + marketplaces (fonte: CV).
6. Introduzir **blocos de evidência** nos projetos: diagrama de arquitetura (SVG inline) +
   descrição problema→solução→stack + link de código.
7. Remover branding interno da og-image e do 404.
8. Limpar CSS morto (62 classes) e corrigir `aria-label` do hero.
9. Reagrupar VANTA por maturidade com status reais (fontes: Vault NOVA).
10. Avaliar: foto/bio, depoimentos (LinkedIn), formulário/Calendly, dark/light, EN — todos dependem de
    material/decisão do usuário; **não inventar**.

## 6. Proposta de estrutura e direção visual

**Direção: "Blueprint Editorial" — evolução da identidade Ink Wash, não redesign.**
- Manter: fundo escuro, composição editorial, tipografia display condensada, grid visível.
- Elevar:
  - **Acento único** (1 cor ainda a definir com o usuário; candidatos: âmbar técnico `#E8B44A` ou
    verde terminal `#7EE787`) restrito a: eyebrows/estados, números de destaque e microelementos.
  - **Tipografia display** com personalidade (grotesk self-hosted, subset pt-BR; ex.: Archivo/Space
    Grotesk) substituindo Arial no display, mantendo system stack no corpo (performance).
  - **Blocos de evidência**: diagramas SVG de arquitetura inline nos cards de projeto; TL;DR de
    resultados com escopo técnico claro.
  - **Timeline de experiência** na seção Engenharia (dados do CV).
  - **Og-image/404** com marca pessoal (sem "NOVA ABME").
- Restraint: nenhuma animação gratuita além das atuais (reveal/reduced-motion), nenhum gradiente,
  nenhum card decorativo sem função.

## 7. Plano de execução priorizado

| # | Ação | Impacto | Risco | Dependência |
|---|---|---|---|---|
| 1 | Corrigir env var CF Pages + rebuild + validar canonical | Crítico | Baixo | **Acesso Cloudflare** |
| 2 | Og-image + 404 sem branding interno | Alto | Baixo | — |
| 3 | Conteúdo: HUB real, título, claims, timeline, marketplaces | Alto | Baixo | Decisões editoriais |
| 4 | Evidência visual: diagramas SVG por projeto | Alto | Baixo | — |
| 5 | CSS morto + a11y fix + limpezas | Médio | Baixo | — |
| 6 | VANTA por maturidade (status reais) | Médio | Baixo | — |
| 7 | Acento de cor + tipografia display | Médio | Médio | Decisão de design |
| 8 | Foto/bio/depoimentos/métricas/en | Alto condicional | Baixo | Material do usuário |

## 8. Riscos e reversão

- **Risco maior**: intervenção em produção (Cloudflare). Mitigação: mudança de 1 variável; rollback é
  reverter o valor + novo deploy; o conteúdo do site não é tocado pelo fix.
- Git: tag `baseline-pre-audit-2026-10-09` + GitHub = rollback por revert/checkout. Deploy de páginas
  estáticas é atômico e reversível no painel Cloudflare (redeploy de versão anterior).
- Nenhum banco, secret novo, cookie ou tracker é introduzido.
- Alterações de conteúdo são texto/markup: reversíveis por git.

## 9. Testes para validar (após mudanças)

- [ ] `npm run verify` (lint, typecheck, secret-scan, build, 5 testes estáticos)
- [ ] `npx playwright test` (7 testes browser: navegação, Ctrl+K, tabs, reduced motion, viewport matrix, a11y)
- [ ] Lighthouse mobile + desktop (local e produção) — comparar com baseline 99–100
- [ ] `curl` produção: canonical/og:url/og:image/sitemap no domínio próprio
- [ ] Link check dos 4 repos e canais de contato
- [ ] Grading manual: screenshots desktop 1440 / mobile 390 / tablet 768
- [ ] Regressão funcional: download CV, vCard, copiar e-mail, WhatsApp, LinkedIn, 404
