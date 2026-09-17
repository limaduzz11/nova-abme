# NOVA Abme

<div align="center">

**Gateway Estático de Engenharia & Portfólio Pessoal**

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Edge-Cloudflare_Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Acessibilidade](https://img.shields.io/badge/A11y-WCAG_AAA-success?style=flat)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Status](https://img.shields.io/badge/Status-Portf%C3%B3lio_Pessoal-informational?style=flat)](#escopo-do-repositório)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-Propriet%C3%A1ria-red.svg?style=flat)](#licença)

<br />

[English](README.md) &nbsp;|&nbsp; **Português (Brasil)**

<br />

**Gateway em Produção:** [https://nova-abme.pages.dev](https://nova-abme.pages.dev)

</div>

> Gateway estático de engenharia de alta performance arquitetado com zero dependências de runtime, distribuição global em borda via Cloudflare Pages, acessibilidade WCAG AAA e design system minimalista.

---

## Sumário

- [Conceito & Visão Geral](#conceito--visão-geral)
- [Arquitetura & Entrega em Borda](#arquitetura--entrega-em-borda)
- [Design System & Acessibilidade](#design-system--acessibilidade)
- [Padrões de Engenharia](#padrões-de-engenharia)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Escopo do Repositório](#escopo-do-repositório)
- [Licença](#licença)

---

## Conceito & Visão Geral

O **NOVA Abme** é um gateway estático de engenharia e portfólio pessoal representativo de **Eduardo de Lima Paranhos**. O projeto apresenta uma visão técnica e estruturada de sua trajetória em sistemas corporativos (TOTVS Protheus, ADVPL/TL++), desenvolvimento de ferramentas no ecossistema Model Context Protocol (MCP), sistemas distribuídos e engenharia de software moderna.

Mais do que um currículo tradicional, o NOVA Abme foi concebido como um produto estático orientado a dados. Toda a trajetória profissional, matriz de competências, histórico de projetos e canais de contato residem em modelos de dados fortemente tipados, assegurando facilidade de manutenção e zero sobrecarga de runtime.

---

## Arquitetura & Entrega em Borda

A arquitetura adota uma filosofia estrita de zero backend e zero banco de dados:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           REPOSITÓRIO FONTE                                 │
│   • Componentes e Layouts Semânticos em Astro                               │
│   • Modelos de Dados Tipados (src/data/site.ts)                             │
│   • Design System CSS Modular Ink Wash                                      │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Build Estático (astro build)
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PACOTE ESTÁTICO GERADO (dist/)                        │
│   • Documentos HTML Semânticos Pré-renderizados                             │
│   • CSS Minificado & Estilos Críticos Inline                                │
│   • Micro-interações em TypeScript Puro (Sem Frameworks Volumosos)          │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Deploy em Borda Global
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CLOUDFLARE PAGES GLOBAL CDN                           │
│   • Cache de Borda & Roteamento Anycast em mais de 300 Cidades              │
│   • Protocolo HTTP/3 & Strict Transport Security (HSTS)                     │
│   • Endereçamento Imutável & Invalidação Instantânea de Cache               │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Entrega via HTTPS
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            NAVEGADOR CLIENTE                                │
│   • First Contentful Paint (FCP) abaixo de 100ms                            │
│   • Zero Segredos no Cliente / Zero Cookies / Zero Rastreadores             │
└─────────────────────────────────────────────────────────────────────────────┘
```

Não há processos de renderização no servidor, rotas dinâmicas de API, bancos de dados, sessões de usuário ou servidores de aplicação. O JavaScript atua exclusivamente como uma camada leve de melhoria progressiva para gerenciamento de foco na navegação, destaques guiados por objetivo e interações sutis com o ponteiro do mouse.

---

## Design System & Acessibilidade

- **Estética Ink Wash:** Design system monocromático de alto contraste projetado para máxima legibilidade, hierarquia visual clara e foco técnico.
- **Conformidade WCAG AAA:** Contrastes de cores, escalas tipográficas e alvos de toque atendem integralmente aos critérios de nível AAA das Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2).
- **Melhoria Progressiva:** A interface permanece 100% funcional, estruturada e legível mesmo com a execução de JavaScript totalmente desabilitada no navegador.
- **Respeito às Preferências do Usuário:** Suporte nativo a media queries de acessibilidade para `prefers-reduced-motion` e `prefers-color-scheme`.

---

## Padrões de Engenharia

| Padrão | Implementação | Benefício Técnico |
| :--- | :--- | :--- |
| **Entrega em Borda** | Rede Global Cloudflare Pages | Latência mínima mundial, TLS automatizado, zero cold-starts |
| **Geração Estática** | Astro 7 (`output: 'static'`) | HTML estático pré-compilado sem sobrecarga de hidratação |
| **Segurança de Tipos** | TypeScript 5.x | Validação em tempo de compilação de todos os dados do perfil |
| **Garantia de Acessibilidade** | Playwright + `@axe-core/playwright` | Testes automatizados de contraste e leitores de tela |
| **Privacidade & Segurança** | Zero Scripts Externos | Ausência de Google Analytics, pixels de marketing ou CDNs de terceiros |

---

## Estrutura do Projeto

```text
src/
├── components/     # Componentes semânticos de seção e navegação acessível
├── data/           # Dados tipados de perfil pessoal, tecnologias e projetos
├── layouts/        # Shell base do documento HTML e metadados OpenGraph
├── pages/          # Rotas estáticas (index, 404)
├── scripts/        # Scripts leves de melhoria progressiva no navegador
└── styles/         # Variáveis CSS e reset do design system Ink Wash
public/             # Favicons, cartões sociais OpenGraph e robots.txt
docs/               # Decisões de arquitetura, guias de design e auditorias
```

---

## Escopo do Repositório

Este repositório contém o código do portfólio pessoal e gateway de engenharia de Eduardo de Lima Paranhos. Por se tratar de um projeto pessoal privado, instruções de compilação para terceiros, comandos locais e pipelines de deploy são mantidos sob controle restrito do autor.

---

## Licença

Todos os direitos reservados. Software proprietário. Consulte [LICENSE](LICENSE) para termos.

---

<div align="center">
  <sub>Projetado e mantido por <b>Eduardo de Lima Paranhos</b></sub>
</div>
