# DESIGN.md — NOVA Abme / Portfólio Eduardo Paranhos

> Memória visual do projeto. Consultar antes de qualquer alteração de interface.
> Atualizado: 2026-10-09 (auditoria + upgrade "Blueprint Editorial").

## Identidade e personalidade

- **Produto**: portfólio profissional de Eduardo de Lima Paranhos (Profile 001 do NOVA Abme).
- **Público**: recrutadores técnicos, tech leads e gestores de contratação (CLT/PJ) + clientes B2B (ELP Tecnologia).
- **Personalidade**: engenharia editorial, sóbria, precisa, sem ornamento. "Soft blueprints" — o site parece um documento técnico bem composto, não um template de marketing.
- **Tom**: direto, verificável, sem adjetivos inflados.

## Direção estética (nomeada)

**"Blueprint Editorial"** — evolução da identidade "Ink Wash".

- Fundo escuro grafite, grid técnico sutil de fundo, composição editorial com muito espaço em branco.
- Tipografia display com personalidade (Archivo), caixa alta, contraste de peso.
- **Acento único âmbar técnico** usado com disciplina: estados ativos, marcadores de decisão (timeline), micro-elementos e links em hover. Nunca como decoração de fundo.
- Nenhum gradiente, nenhuma sombra difusa, nenhuma animação gratuita.
- O elemento memorável: a régua de trajetória (timeline) e os diagramas de arquitetura em SVG, que materializam "software que funciona no mundo real".

### O que o design deliberadamente NÃO faz (restraint)

- Não usa foto de fundo, glassmorphism, glow ou neon.
- Não usa mais de um acento de cor; o estado normal é monocromático.
- Não repete cards com o mesmo peso visual para conteúdos de maturidades diferentes (projetos executáveis ≠ conceitos).
- Não usa ícones decorativos sem função.

## Tokens (fonte única de valores — `:root` em `src/styles/global.css`)

| Token | Valor | Papel semântico |
|---|---|---|
| `--ink` | `#252525` | Superfície base (fundo) |
| `--paper` | `#cfcfcf` | Texto principal (9,84:1) |
| `--bright` | `#e4e4e4` | Texto de ênfase (12,06:1) |
| `--quiet` | `#a7a7a7` | Texto secundário (6,37:1) |
| `--muted` | `#7d7d7d` | Numeral decorativo / não-texto (3,72:1) |
| `--line` | `#545454` | Bordas e réguas (não-texto) |
| `--accent` | `#e8b44a` | Acento âmbar técnico (8,3:1) |
| `--accent-soft` | `rgba(232,180,74,.14)` | Fundo sutil de destaque |
| `--font-display` | `'Archivo', 'Arial', sans-serif` | Títulos e display (self-hosted, subset latin) |
| `--font-body` | system stack | Corpo (performance, sem download) |

- Escala tipográfica: display `clamp()` por seção (h1 2,1→3,6rem; h2 1,75→2,6rem); corpo 0,92→1,06rem.
- Espaço: `--gutter: clamp(1rem, 4vw, 4rem)`; ritmo vertical por seção (5–7rem).
- Raio: 0 (cantos retos — identidade editorial). Sombra: nenhuma.
- Movimento: reveal por IntersectionObserver (opacity/translate 12px), `prefers-reduced-motion` respeitado; transições 160–320ms `cubic-bezier(0.2, 0.8, 0.2, 1)`.

## Idiomas (PT/EN/ES)

- Rotas dedicadas: `/` (pt), `/en/`, `/es/` — com `hreflang` + `x-default` e canonical próprio.
- **Lang switch**: pill no header (PT/EN/ES) com transição **wipe** (overlay claro `--paper` + código do idioma
  em display `--ink`, borda `--accent`, `transform: scaleX` com `cubic-bezier(0.76,0,0.24,1)`; revelação no load
  via `sessionStorage`; desativado em `prefers-reduced-motion`).
- Conteúdo 100% traduzido em `src/data/i18n.ts`; dados neutros em `src/data/site.ts`; WhatsApp pré-preenchido por idioma.

## Seções de destaque (2026-10-09)

- **MEUS PROJETOS** (vitrine de um projeto por vez): palco full-width com captura real da interface (ou
  diagrama declarado para projetos sem GUI), barra "Captura real", zoom em `<dialog>` nativo, categoria,
  nome, título, descrição, métricas, stack, nota de proveniência, `<details>` "Arquitetura técnica" e links.
  Contador `01/07`, progress bar, navegação por setas, sete números acessíveis (`aria-current`), teclado no
  viewport (←/→/Home/End) e swipe nativo por `scroll-snap`. Slides inativos recebem `inert`; o status é
  anunciado em `aria-live`. O NOVA HUB usa uma galeria interna com 4 módulos (LINK, NEXUS, ARCADIA,
  N.A.H.I); "Desenvolvimento Web" usa a mesma galeria com OpenPantheon/ELP Tecnologia. No mobile cada card dimensiona pela própria altura; no desktop os cards
  compartilham a altura do maior slide. Movimento reduzido desativa o smooth scroll.
- **MINHAS TECNOLOGIAS** (integrada à seção Experiência): 18 orbs com ícones (Simple Icons CC0 +
  geometrias próprias em `src/data/icons.ts`), hover eleva o orb com borda `--accent`.
- **Trajetória**: régua com marcador `--accent` no período atual; bullets curtos (2–3 por item).
- **Dourado (`--accent`)**: reservado a pequenos detalhes — hover de botões/links, marcadores do carousel
  (progress, dots, categoria, borda de métricas), timeline atual, wipe de idioma, hover de orbs. Nunca em texto corrido.

## Componentes e estados

- **Header**: brand EP + nav + botão Menu (Ctrl+K). States: hover sublinha; focus-visible outline `--paper`.
- **Botões**: `.button` (borda `--line`, hover borda/`--accent`); `.button-primary` (fundo `--paper`, texto `--ink`, hover fundo `--accent`); `.button-copy` (feedback "Copiado! ✓").
- **Tablist de especialidades**: `role=tablist`, setas ↑↓ Home End, `aria-selected`, painel único.
- **Cards de projeto**: número, badge, nome, papel, descrição, stack, diagrama opcional, link GitHub.
- **Resultados**: cards com tag, métrica-categoria, título e descrição técnica (sem números não medidos).
- **Timeline**: régua vertical com marcador âmbar no ponto atual; períodos, papel, empresa e contribuições.
- **VANTA Labz**: agrupado por maturidade (em evolução / em desenvolvimento / conceito).
- **Contato**: 6 canais; e-mail com copiar; downloads com `download`.
- **Command palette**: `<dialog>`, filtro por texto, setas e Enter, Esc fecha e devolve foco.
- **404**: código 404 decorativo `--muted`, sem terminologia interna.

## Regras responsivas

- 1 coluna < 820px (grids); nav colapsa em ≤880px; gutter fluido; alvos de toque ≥44px nos botões.
- Vitrine: 2 colunas no desktop; 1 coluna e cards de altura natural em ≤900px; tabs da galeria
  quebram em 2 colunas em ≤900px; números de navegação com 44px em ≤680px.
- Matriz validada: 320 / 390 / 768 / 1024 / 1440 / 1920 sem overflow horizontal.

## Capturas reais (2026-11-08)

- **Regra**: projetos com interface gráfica usam screenshot real; projetos sem GUI usam diagrama declarado
  (`kind: 'diagram'`) e nunca são rotulados como captura. Nenhuma imagem gerada por IA ou mockup genérico.
- **Formatos**: AVIF + WebP em 1440w/720w (ou 1280w/720w para o VANTA), `<picture>` com `srcset`/`sizes`,
  `width`/`height` explícitos, `loading="lazy"` e `decoding="async"`.
- **Proveniência e mascaramento**: ver `docs/PROJECTS-SHOWCASE-2026-11-08.md`.
- **Pendência**: captura do `protheus-po-ui-template` depende do pacote TOTVS não público; registrada no
  painel de transparência da própria seção.

## Referências e decisões

- Identidade original "Ink Wash" (ADR-001..004): dark-first, estático, sem tracker.
- Modelos consultados: literatura de portfólios de engenharia (estrutura problema→solução→evidência), WCAG 2.2 AA, Core Web Vitals.
- Decisões da auditoria 2026-10-09: título "Desenvolvedor de Software | TOTVS Protheus" (consistente com CV); acento âmbar; sem métricas não medidas.

## Restrições a preservar

1. Sem dependências de runtime além de Astro + sitemap.
2. Sem fonts de terceiros em CDN (self-hosted, subset, `font-display: swap`, preload).
3. Headers de segurança do Cloudflare Pages (`_headers`) intocados.
4. Conteúdo em pt-BR; `lang="pt-BR"`.
5. Lighthouse mobile ≥ 95 em todas as categorias (baseline atual 99–100).
