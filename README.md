This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Este projeto está otimizado para deploy na **Vercel**, que oferece:

- ✅ **CDN Global**: Edge Network em 100+ localizações
- ✅ **Otimizações Automáticas**: Imagens, fonts e JS otimizados automaticamente
- ✅ **Melhor Performance**: Core Web Vitals superiores
- ✅ **Deploy Automático**: Integração direta com GitHub

### Passos para Deploy

1. **Criar conta na Vercel**

   - Acesse: https://vercel.com
   - Faça login com GitHub

2. **Importar Projeto**

   - Clique em "Add New Project"
   - Selecione este repositório
   - A Vercel detecta automaticamente Next.js

3. **Configurações Recomendadas**

   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Build Command**: `pnpm build` (ou `npm run build`)
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `pnpm install` (ou `npm install`)

4. **Variáveis de Ambiente** (se necessário)

   - Adicione em: Settings → Environment Variables

5. **Deploy**
   - Clique em "Deploy"
   - A Vercel fará o build e deploy automaticamente
   - Cada push para `main` gera um novo deploy

### Otimizações Aplicadas

- ✅ Removido `output: "export"` para habilitar otimizações da Vercel
- ✅ Removido `images: { unoptimized: true }` para otimização automática
- ✅ Imagens usando `next/image` com otimização automática (AVIF/WebP)
- ✅ Headers de cache configurados para melhor performance
- ✅ Code splitting otimizado para reduzir bundle inicial

### Performance Esperada

Com as otimizações da Vercel, você pode esperar:

- **LCP**: Redução de 20-40%
- **INP**: Redução de 10-20%
- **FCP**: Redução de 15-30%
- **PageSpeed Score**: 90-100

### Domínio Customizado

Para adicionar um domínio customizado:

1. Vá em Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções da Vercel

---

**Nota**: Este projeto também pode ser deployado no GitHub Pages (via Actions), mas a performance será inferior devido às limitações de CDN e falta de otimizações automáticas.
