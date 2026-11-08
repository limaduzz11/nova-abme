# Currículo — padrões de mercado e decisões (2026-11-08)

## Objetivo

Produzir um currículo ATS-friendly para os mercados **americano** e **europeu**, com uma versão
em português para o mercado brasileiro, e disponibilizá-lo no portfólio com links por idioma.

## Pesquisa — fontes consultadas

| Fonte | O que foi adotado |
|---|---|
| [Harvard FAS — Create a Strong Resume](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/) | Linguagem específica, ativa e baseada em fatos; sem foto, idade ou gênero; ordem reversa dentro das seções; sem pronomes pessoais; fácil de escanear/ATS |
| [Harvard College Resume Example — Tech](https://careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2024/08/2024-Harvard-College-CS-Resume-Example-edited.pdf) | Estrutura de uma página, contato no topo, experiência, skills/projetos, educação |
| [Tech Interview Handbook — Resume](https://www.techinterviewhandbook.org/resume/) | Headings padrão, uma página, keywords da vaga, ATS, experiência antes de educação para quem já tem experiência |
| [Pluralsight — Software Engineer Resume](https://www.pluralsight.com/resources/blog/upskilling/writing-great-software-engineer-resume-guide) | Uma página com menos de 10 anos; sem foto; coluna única; PDF; fontes limpas; sem gráficos/tabelas |
| [Blind — Software Engineer Resume Guide](https://www.teamblind.com/resources/software-engineer-resume-guide-real-advice-from-tech-professionals-on-blind) | Header com e-mail/GitHub/LinkedIn; skills agrupadas; experiência com impacto; projetos; educação ao final; uma página com menos de 7 anos |
| [Europass — Create your Europass CV](https://europass.europa.eu/en/create-europass-cv) e [template oficial](https://www.eeas.europa.eu/sites/default/files/documents/2025/Europass-cv-en%20template_0.pdf) | Referência europeia: seções de experiência/educação/idiomas, CEFR, foto opcional, A4, até 2 páginas. Usado como referência de conteúdo, não como template rígido |
| [Drivetube — Europe CV Format](https://drivetube.ai/docs/resume/europe-cv-format) e [EZProCV — Europass](https://ezprocv.com/cv-format/europass) | A Europa não tem um único padrão; tech privado prefere CV limpo de 1–2 páginas; Europass é mais adequado a instituições públicas/UE; foto varia por país e deve ser omitida no Reino Unido, Irlanda, Países Baixos e Nórdicos |
| [Resume.io — Europass](https://resume.io/blog/europass-cv) | Seções e idiomas do padrão europeu; foto opcional |

## Decisões aplicadas

### Formato
- **Uma página A4**, coluna única, margens de 15 mm, texto real (sem imagens, tabelas ou gráficos).
- Fonte **Arial/Helvetica/Liberation Sans** (metricamente compatível), 8,7 pt no corpo, 20,5 pt no nome.
- **Sem foto, data de nascimento, estado civil, nacionalidade ou endereço completo.**
- Links clicáveis para e-mail, LinkedIn, GitHub, portfólio e projetos.
- PDF exportado pelo Chromium, com texto extraível e uma página.

### Conteúdo
- **Cabeçalho:** nome, headline, localização remota (UTC-3), telefone, e-mail, LinkedIn, GitHub e portfólio.
- **Professional Summary / Resumo Profissional:** 3–4 linhas com anos de experiência, domínio Protheus/ADVPL/SQL e integrações.
- **Core Skills / Competências Técnicas:** ERP, linguagens, integrações, dados e ferramentas — agrupadas, sem barras de proficiência.
- **Experience / Experiência:** ordem reversa; cargo, empresa, datas e bullets com verbos de ação e resultados verificáveis.
- **Selected Projects / Projetos Selecionados:** NOVA HUB, VANTA Reader, NOVA CRM, protheus-research, OpenPantheon e ELP Tecnologia, com links.
- **Education / Formação:** tecnólogo em Análise e Desenvolvimento de Sistemas (FMU, 2023–2026) e cursos.
- **Languages / Idiomas:** português nativo; inglês em leitura técnica (documentação/RFCs), conforme o CV anterior. Ajustar se o nível real for superior.

### O que foi evitado
- Métricas não medidas ou inventadas.
- Foto, idade, gênero, estado civil e endereço completo.
- Tabelas, ícones, colunas, gráficos e skill bars que quebram ATS.
- “Fluent” sem referência; níveis CEFR não comprovados.
- Currículo de 2 páginas: com ~5 anos de experiência, 1 página é o padrão mais aceito.

### Idiomas
- **EN:** mercado dos EUA/Europa (arquivo principal).
- **PT:** mercado brasileiro.
- **ES:** usa a versão EN, com aviso no site (“PDF en inglés”).
- O caminho legado `public/cv/eduardo-paranhos-cv.pdf` continua existindo como cópia do EN.

## Geração e validação

```bash
npm run build:cv
```

Saídas:
- `public/cv/Eduardo-Paranhos-Software-Developer-CV-EN.pdf`
- `public/cv/Eduardo-Paranhos-Desenvolvedor-Software-CV-PT.pdf`
- `public/cv/eduardo-paranhos-cv.pdf` (alias legado do EN)

Validação executada:
- `pdfinfo`: **1 página A4** nos dois arquivos.
- `pdftotext -layout`: seções, cargos, datas e skills extraídos na ordem correta.
- `pdftohtml -xml`: links `mailto:`/`https://` presentes.
- `npm test`: 9/9 testes estáticos, incluindo existência e vinculação dos PDFs.
- `npm run test:browser`: 14/14, incluindo download e `Content-Type: application/pdf`.
- `npm run verify`: exit 0 (lint, typecheck, security scan, build e testes).

## Observações para o autor

1. Confirmar o nível real de inglês. O CV atual declara **leitura técnica**; se houver fluência
   profissional, trocar para “Professional working proficiency” ou um nível CEFR comprovável.
2. Confirmar se a atuação PJ via **ELP Tecnologia** deve entrar como experiência separada. Nesta
   versão, ela aparece nos projetos (site institucional, OpenPantheon, NOVA CRM) para não sobrepor
   o vínculo COMM.
3. Revisar se os bullets de experiência representam exatamente o escopo atual antes de publicar.
