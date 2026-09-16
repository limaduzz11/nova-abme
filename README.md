# NOVA Abme

**NOVA Abme** é um gateway estático de engenharia. O primeiro perfil público é o
de **Eduardo de Lima Paranhos**: um espaço direto para conhecer sua trajetória,
seu trabalho público, sua experiência e os caminhos de contato com a ELP Tecnologia.

Não é um currículo convencional. É uma pequena experiência de produto que mantém
o conteúdo do perfil separado em arquivos de dados. Assim, novos perfis podem ser
adicionados no futuro sem criar um backend ou mudar a forma de entrega.

## Arquitetura

```text
GitHub repository
        │ push
        ▼
Astro static build (dist/)
        │
        ▼
Cloudflare Pages / global CDN
        │
        ▼
Browser over HTTPS
```

Não há renderização no servidor, rota de API, banco, sessão, autenticação, segredo
de runtime ou processo que precise ficar online. O JavaScript é apenas uma camada
leve de melhoria progressiva para os caminhos do perfil, o destaque por objetivo,
o menu de navegação, as entradas em cena e o cursor sutil em dispositivos com
ponteiro preciso.

## Tecnologias

- Astro 7, gerado estaticamente (`output: 'static'`)
- TypeScript para o código e as melhorias no navegador
- HTML, CSS e Web APIs nativos
- `@astrojs/sitemap` para gerar o sitemap
- `@playwright/test` + `@axe-core/playwright` para QA de navegador e acessibilidade durante o desenvolvimento
- Sem analytics, cookies de marketing, formulários de terceiros ou chamadas de API em runtime

## Desenvolvimento local

Requisitos: Node.js `>=22.12.0` e npm.

```bash
npm ci
npm run dev
```

O servidor de desenvolvimento fica disponível em `127.0.0.1:4321` apenas durante
o desenvolvimento. Ele não faz parte da produção. Para visualizar o artefato gerado:

```bash
npm run build
npm run preview
```

O servidor de preview usa `127.0.0.1:4322` e deve ser encerrado após a validação.

## Comandos de qualidade

```bash
npm run lint
npm run typecheck
npm run security:scan
npm run audit:deps
npm run verify
```

`verify` executa o lint local, as verificações Astro/TypeScript, a varredura de
segredos, o build estático e os smoke tests de comportamento contra `dist/`.

## Deploy

Cloudflare Pages é o host principal. O projeto já está publicado em:
`https://nova-abme.pages.dev/`. Para reproduzir a configuração, use:

| Setting | Value |
|---|---|
| Branch de produção | `main` |
| Comando de build | `npm run build` |
| Diretório de saída | `dist` |

O slug confirmado é `nova-abme`, com deploy real respondendo por HTTPS. Um domínio
próprio futuro deve atualizar `PUBLIC_SITE_URL` e o sitemap antes da publicação.

Veja [docs/DEPLOY.md](docs/DEPLOY.md) para Cloudflare Pages, o fallback no GitHub
Pages e a migração para domínio próprio.

## Configuração pública

O build aceita duas configurações públicas opcionais:

- `PUBLIC_SITE_URL`: origem canônica do site, por exemplo `https://example.com`;
- `PUBLIC_BASE_PATH`: prefixo de caminho para um projeto GitHub Pages, por exemplo
  `/nova-abme/`.

Nenhum dos dois valores é secreto. Não adicione credenciais, tokens ou endpoints
privados. O Cloudflare Pages usa os padrões para o site na raiz; o workflow de
fallback define explicitamente os valores do GitHub Pages.

## Project structure

```text
src/
├── components/     # interface por seção e menu de navegação
├── data/           # perfil público, links, tecnologias e projetos
├── layouts/        # estrutura do documento e metadados
├── pages/          # rotas estáticas e 404
├── scripts/        # melhorias leves no navegador
└── styles/         # sistema visual Ink Wash
public/             # favicon, card social, robots e headers estáticos
docs/               # arquitetura, pesquisa, deploy, ADRs e screenshots
scripts/            # verificações locais determinísticas
tests/              # smoke tests estáticos e de navegador
```

## Atualizando o perfil

O conteúdo público fica em `src/data/site.ts` e nos componentes das seções.
Adicione apenas links e informações profissionais já aprovados para divulgação.
Código corporativo, informações de clientes, infraestrutura interna e detalhes de
implementação da NOVA não pertencem a este repositório.

## Licença

Publicado sob a [Licença MIT](LICENSE).
