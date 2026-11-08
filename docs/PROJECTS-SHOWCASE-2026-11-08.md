# Vitrine de Projetos — implementação e proveniência (2026-11-08)

## Escopo

Reformulação da seção **Meus Projetos** do portfólio
`https://portfolioeduardo.elptecnologia.com.br/` para apresentar **um projeto por vez**, com capturas
reais das interfaces, galeria interna para os sites publicados e transparência sobre projetos sem GUI.

O escopo original citava "NOVA VRM". O usuário confirmou que o projeto correto é **NOVA CRM**; não
existe um projeto separado com o nome NOVA VRM no acervo local, no GitHub autenticado ou nos discos
montados.

## Arquitetura alterada

| Arquivo | Mudança |
|---|---|
| `src/components/SelectedWork.astro` | Vitrine de um slide por vez; mídia real, galerias internas (NOVA HUB com 4 módulos e sites com 2), lightbox `<dialog>`, dots numerados, status, notas e painel de transparência |
| `src/data/site.ts` | Modelo `ProjectMedia` (screenshot/gallery/diagram), 7 projetos, links e stacks |
| `src/data/i18n.ts` | Conteúdo PT/EN/ES dos 7 projetos, estados, rótulos de captura, galeria e proveniência |
| `src/scripts/gateway.ts` | Scroll-snap com setas/teclado/dots, `inert`, anúncio `aria-live`, galerias independentes em tablist e lightbox |
| `src/styles/global.css` | Layout dois-columns no desktop e uma coluna no mobile, mídia 16:10 sem corte, tabs, lightbox, estados de foco e movimento reduzido |
| `public/images/projects/` | AVIF + WebP em duas larguras (1440/720) |
| `tests/static-smoke.test.mjs` | 7 slides, ativos reais, CSP sem style inline, projetos nos 3 idiomas |
| `tests/browser/gateway.spec.ts` | Um projeto por view, teclado, galeria, lightbox, mobile e acessibilidade |
| `docs/DESIGN.md` | Direção visual e regra de capturas reais |
| `docs/screenshots/` | Referências desktop/mobile regeneradas pela suíte |

## Projetos e origem das capturas

| Projeto | Estado | Interface | Origem da captura | Tratamento |
|---|---|---|---|---|
| **NOVA HUB WEB** | Em produção privada | Dashboard web com 4 módulos | HUB em execução, Chromium/Playwright, 1440×900, 2026-11-08. Quatro capturas: **LINK** (telemetria), **NEXUS** (Kanban), **ARCADIA** (biblioteca) e **N.A.H.I** (arquitetura). | Interface real com dados de demonstração; usuário/IP do host mascarados no DOM; capas de jogos reais carregadas no ARCADIA. CORTEX removido do texto e substituído por N.A.H.I. |
| **VANTA Reader** | Em evolução | App Flutter desktop/Android | Build Linux `build/linux/x64/debug/bundle/vantareader`, executado em display Xephyr isolado; captura 1440×900 | Catálogo público carregado; obra de domínio público (Frankenstein, Project Gutenberg) na biblioteca local; sem dados pessoais |
| **Desenvolvimento Web — OpenPantheon** | Em produção | Site editorial | `https://openpantheon.com.br/`, Chromium/Playwright, 1440×900, 2026-11-08 | Banner de cookies dispensado; conteúdo público |
| **Desenvolvimento Web — ELP Tecnologia** | Em produção | Site institucional | `https://elptecnologia.com.br/`, Chromium/Playwright, 1440×900, 2026-11-08 | Conteúdo público |
| **NOVA CRM** | Protótipo funcional/homologação | Dashboard CRM | `https://elptecnologia.com.br/labs/nova-crm/app/`, Chromium/Playwright, 1440×900, 2026-11-08 | Nome do cliente, usuário, contato e iniciais substituídos por rótulos demo no DOM antes da captura; nenhuma credencial persistida |
| **protheus-research** | Laboratório | Sem GUI (MCP/stdio) | Diagrama de arquitetura original | Rotulado como diagrama, não como screenshot |
| **protheus-rest-lab** | Laboratório | Sem GUI (ADVPL/REST) | Diagrama de arquitetura original | Rotulado como diagrama, não como screenshot |
| **protheus-po-ui-template** | Template arquitetural | GUI Angular/PO-UI | Captura não executada | `npm install` falhou: `@totvs/protheus-lib-core@^1.0.0` não publicado; conflito de peer `zone.js`; pendência declarada no card |

### Verificações de conteúdo

- **OpenPantheon**: site Astro estático publicado em Cloudflare; coletor e operação em Go; artigos, busca, RSS e página de apoio. Fontes: `02-PROJECTS/OPEN.PANTHEON/PROJECT.md` e `repository/site`.
- **ELP Tecnologia**: site institucional Astro com SEO técnico, soluções, cases, Labs, metodologia e insights. Fontes: `02-PROJECTS/ELP-TECNOLOGIA/PROJECT.md`, `ELP-REDESIGN-2026-10-09.md` e o site em produção.
- **VANTA Reader**: leitura local-first de EPUB/TXT/PDF e quadrinhos CBZ/CBR, progresso, downloads, catálogo público e perfis. Fontes: `PROJECT.md`, `docs/audit/VANTA-RELEASE-GATE.md` e código em `lib/`.
- **NOVA CRM**: Astro + PHP + SQLite + SQL Server, pipeline Kanban, oportunidades, atividades, relatórios e integração Protheus. Fontes: `NOVA-CRM/README.md`, `NOVA-CRM-RESUMO-EXECUTIVO.md` e o protótipo em produção.

## Formatos e performance

- `<picture>` com AVIF e WebP; `srcset`/`sizes`; `width`/`height` explícitos; `loading="lazy"`; `decoding="async"`.
- Tamanhos: 1440w/720w para todas as capturas (NOVA HUB, VANTA Reader, OpenPantheon, ELP e NOVA CRM).
- Nenhuma imagem fictícia, mockup genérico ou captura de terceiros.
- Todas as capturas estão em **16:10 (1440×900)**, então preenchem 100% do frame sem letterbox/barras pretas, como o OpenPantheon.
- Cards sem corte: mídia 16:10 com `object-fit: contain`; texto sem truncamento; altura natural no mobile.
- CSP `style-src 'self'`: a barra de progresso usa `data-progress` + classes CSS, sem `style` inline.

## Testes executados

| Verificação | Resultado |
|---|---|
| `npm run typecheck` | 0 erros, 0 avisos |
| `npm run build` | 4 páginas geradas |
| `npm test` | 9/9 testes estáticos |
| `npm run test:browser` | 14/14 testes Playwright (Firefox) |
| Axe (WCAG 2.0/2.1 A/AA) | 0 violações em 1440×1000 e 390×844 |
| Um slide por view | Largura do slide = largura do viewport em desktop e mobile |
| Teclado | ←/→/Home/End no viewport; tabs da galeria com setas; `inert` nos slides inativos |
| Lightbox | Abre, amplia, fecha com Esc e devolve foco ao gatilho |
| Reduced motion | `scroll-behavior: auto` e troca imediata de slide |
| Console | Sem erros nas capturas e interações |
| Responsividade | Matriz 320/375/390/430/768/1024/1280/1440/1920 sem overflow horizontal |
| Lighthouse mobile (Chrome headless) | Performance 97 · Acessibilidade 100 · Boas práticas 100 · SEO 100; LCP 2,0 s, CLS 0 |
| Lighthouse desktop (Chrome headless) | Performance 100 · Acessibilidade 100 · Boas práticas 100 · SEO 100; LCP 0,3 s, CLS 0 |

## Pendências

1. **`protheus-po-ui-template`**: captura executável pendente. O template depende de
   `@totvs/protheus-lib-core@^1.0.0`, não publicado no npm, e o lockfile atual conflita com `zone.js`.
   O card exibe diagrama e declara a pendência. Para capturar, é necessário fornecer o pacote TOTVS
   privado ou um build estático pronto.
2. **NOVA CRM**: a captura usa dados de homologação mascarados. Se houver uma versão pública com dados
   fictícios próprios, a captura pode ser substituída por uma sem mascaramento.
3. **NOVA VRM**: confirmado como NOVA CRM; nenhum projeto separado foi incluído.

## Sugestões de evolução

- Substituir os dados de homologação do NOVA CRM por um seed público determinístico.
- Adicionar uma captura do VANTA Reader em viewport mobile real (o build desktop valida a UI, mas não o
  layout Android).
- Quando o pacote TOTVS estiver disponível, gerar a captura do PO-UI e remover a pendência.
- Avaliar um `project index` textual abaixo da vitrine para leitura rápida dos 7 projetos sem depender
  de swipe.
