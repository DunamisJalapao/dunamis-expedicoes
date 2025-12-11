# Refatoração de Core Web Vitals

Este documento descreve as mudanças implementadas para melhorar os Core Web Vitals do projeto.

## Mudanças Implementadas

### 1. Otimização de Imagens

- **Script de otimização**: `scripts/optimize-images.ts`

  - Gera versões AVIF e WebP de todas as imagens grandes
  - Cria múltiplos tamanhos para imagens responsivas (home1, home2, home3)
  - Otimiza packs (pack3, pack4, pack5) e logo
  - Qualidade AVIF: 55, WebP: 70

- **Imagens atualizadas**:
  - Hero images: `/images/home1-1920x1080.avif`, `/images/home2-1920x1080.avif`, `/images/home3-1920x1080.avif`
  - Pack images: `/images/pack3-665x887.avif`, `/images/pack4-665x887.avif`, `/images/pack5-665x887.avif`
  - Background: `/images/bg-1920x1080.avif`

### 2. Fontes WOFF2

- **Arquivo de fontes**: `src/app/fonts.ts`

  - Migração de `.otf`/`.ttf` para `.woff2`
  - `display: 'swap'` para todas as fontes
  - Preload apenas das fontes críticas (BardonStamp, BardonClean)
  - Fallbacks adequados

- **Conversão necessária**: Veja `scripts/convert-fonts-to-woff2.md`

### 3. Consentimento de Analytics

- **Componente**: `src/components/AnalyticsConsent.tsx`
  - Banner de consentimento acessível
  - Scripts de terceiros carregados apenas após consentimento
  - GTM, Google Analytics e Facebook Pixel com Consent Mode
  - Armazenamento local da preferência

### 4. Prevenção de Forced Reflow

- **Utils**: `src/utils/layout.ts`
  - Funções para separar read/write operations
  - `measureLayout`, `mutateLayout`, `measureAndMutate`
  - Batch operations para múltiplas leituras/escritas

### 5. Animações Otimizadas

- **CSS**: `src/app/globals.css`
  - Substituição de animações `box-shadow` por `transform`/`opacity`
  - `will-change: transform, opacity` adicionado
  - Animações compostadas pela GPU

### 6. Headers de Segurança

- **Middleware**: `src/middleware.ts`
  - HSTS (Strict-Transport-Security)
  - CSP (Content-Security-Policy) com domínios permitidos
  - COOP (Cross-Origin-Opener-Policy)
  - X-Frame-Options, X-Content-Type-Options
  - Referrer-Policy

### 7. Cache e Configuração

- **next.config.js**:
  - Suporte AVIF/WebP
  - Headers de cache para arquivos estáticos (1 ano, immutable)
  - Otimizações de bundle mantidas

### 8. Acessibilidade

- **Footer**: `src/components/screens/Footer.tsx`
  - `aria-label` descritivo em todos os links sociais
  - Labels específicos: WhatsApp, Instagram, TikTok, YouTube

### 9. CI/CD

- **GitHub Actions**: `.github/workflows/nextjs.yml`
  - Passo de otimização de imagens antes do build
  - Executa `pnpm ts-node scripts/optimize-images.ts`

## Instruções de Teste

### 1. Preparação Local

```bash
# Instalar dependências
pnpm install

# Converter fontes para WOFF2 (veja scripts/convert-fonts-to-woff2.md)
woff2_compress public/fonts/BardonStamp-Regular.otf
woff2_compress public/fonts/BardonClean-Regular.otf
woff2_compress public/fonts/BLUEDREAM-Regular.otf
woff2_compress public/fonts/WorkSans-Regular.ttf

# Otimizar imagens
pnpm ts-node scripts/optimize-images.ts
```

### 2. Executar em Desenvolvimento

```bash
pnpm dev
```

### 3. Validar com Lighthouse

1. Abra Chrome DevTools
2. Vá para a aba "Lighthouse"
3. Selecione "Performance" e "Accessibility"
4. Execute a auditoria
5. Verifique:
   - **LCP**: < 2.5s (deve melhorar significativamente)
   - **INP**: < 200ms (sem long tasks)
   - **TTFB**: < 800ms
   - **Acessibilidade**: Contraste de cores e aria-labels

### 4. Verificar Headers de Segurança

```bash
# Usando curl
curl -I https://dunamisexpedicoes.com.br

# Verificar:
# - Strict-Transport-Security
# - Content-Security-Policy
# - Cross-Origin-Opener-Policy
```

### 5. Testar Consentimento de Analytics

1. Limpe o localStorage: `localStorage.clear()`
2. Recarregue a página
3. Verifique se o banner aparece
4. Aceite/rejeite e verifique se os scripts são carregados corretamente

## Assets Necessários

### Fontes WOFF2

Os seguintes arquivos devem existir em `public/fonts/`:

- `BardonStamp-Regular.woff2`
- `BardonClean-Regular.woff2`
- `BLUEDREAM-Regular.woff2`
- `WorkSans-Regular.woff2`

### Imagens Otimizadas

O script `optimize-images.ts` gerará automaticamente em `public/images/`:

- Versões AVIF e WebP de todas as imagens grandes
- Múltiplos tamanhos para imagens responsivas

## Notas Importantes

1. **Fontes**: As fontes `.woff2` devem ser geradas antes do deploy. O código já está configurado para usá-las.

2. **Imagens**: O script de otimização deve ser executado antes de cada build em produção (já integrado no CI/CD).

3. **CSP**: Ajuste os domínios no `middleware.ts` conforme necessário para novos recursos de terceiros.

4. **Contraste**: O código laranja (#FF5A00) pode precisar de ajuste para melhorar contraste. Considere usar #E64A00 em textos sobre fundo branco.

5. **Static Export**: Como o projeto usa `output: "export"`, alguns headers são aplicados via middleware, mas podem não funcionar em todos os ambientes de hospedagem estática.

## Próximos Passos Recomendados

1. Converter fontes para WOFF2
2. Executar otimização de imagens
3. Testar localmente com Lighthouse
4. Verificar métricas de produção após deploy
5. Ajustar CSP se necessário após monitoramento
