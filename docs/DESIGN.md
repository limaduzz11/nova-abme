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
- Matriz validada: 320 / 390 / 768 / 1024 / 1440 / 1920 sem overflow horizontal.

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
