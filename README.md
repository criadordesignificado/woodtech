# WoodTech — Next.js

Landing page responsiva da **WoodTech** (kits porta pronta sob medida, portas maciças e soluções para projetos residenciais e profissionais na Bahia), estruturada em **Next.js (App Router)** puro, sem dependências visuais externas.

## Estrutura do Projeto
- `app/layout.tsx`: Metadados de SEO, configuração de viewport e fontes otimizadas (`DM Sans` e `Manrope` via `next/font/google`).
- `app/page.tsx`: Página principal com menu responsivo, filtro de catálogo, seleção automática de linha/perfil e integração de orçamento via WhatsApp.
- `app/globals.css`: Estilos CSS puros preservando a identidade visual original.
- `public/assets/`: Imagens de referência e logomarca oficial da WoodTech.

## Como executar localmente

```bash
npm install
npm run dev
```

Para gerar a build de produção:

```bash
npm run build
npm start
```
