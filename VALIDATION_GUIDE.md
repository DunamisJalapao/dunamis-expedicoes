# Guia de Validação LCP - Dunamis Expedições

## 🎯 Objetivo

Validar que as otimizações LCP reduziram o tempo de **Largest Contentful Paint** para ≤2.5s p75 em Mobile.

---

## 📋 Checklist de Validação

### 1. Build e Deploy

- [ ] `pnpm build` executa sem erros
- [ ] Build gera arquivos estáticos corretamente
- [ ] Deploy no GitHub Pages bem-sucedido

### 2. Teste Local (DevTools)

#### A. Lighthouse Mobile

1. Abrir `http://localhost:3000` no Chrome
2. DevTools > Lighthouse
3. Configurar:
   - **Device**: Mobile
   - **Throttling**: Simulated Slow 4G
   - **Categories**: Performance
4. Executar auditoria

**Resultados Esperados:**

- ✅ LCP ≤ 2.5s
- ✅ FCP ≤ 1.8s
- ✅ TBT ≤ 200ms
- ✅ CLS ≤ 0.1

#### B. Performance Trace

1. DevTools > Performance
2. Gravar carregamento da página (recarregar)
3. Verificar timeline:

**Marcadores Esperados:**

- ✅ **LCP**: < 2.5s após `navigationStart`
- ✅ **FCP**: < 1.8s
- ✅ **TTFB**: < 800ms
- ✅ Imagem LCP (`home2-*.avif`) inicia download imediatamente

#### C. Network Waterfall

1. DevTools > Network
2. Filtrar por "Img"
3. Recarregar página
4. Verificar:

**Verificações:**

- ✅ `home2-768x432.avif` (ou tamanho apropriado) aparece no topo
- ✅ `fetchPriority: high` aplicado
- ✅ Preload no `<head>` funciona (request inicia cedo)
- ✅ Tamanho correto carregado por viewport:
  - Mobile (≤768px): 768x432 (~54KB)
  - Tablet (769-1280px): 1280x720 (~123KB)
  - Desktop (≥1281px): 1920x1080 (~217KB)

### 3. PageSpeed Insights (CrUX)

#### A. Teste em Produção

```
URL: https://dunamisexpedicoes.com.br
```

**Verificações:**

- ✅ LCP p75 Mobile ≤ 2.5s (dados CrUX reais)
- ✅ LCP p75 Desktop ≤ 1.5s
- ✅ Redução ≥ 25% no transfer size do LCP resource

#### B. Comparação Antes/Depois

- [ ] Screenshot do PageSpeed Insights ANTES
- [ ] Screenshot do PageSpeed Insights DEPOIS
- [ ] Comparar métricas CrUX

### 4. Validação Técnica

#### A. HTML Source

```bash
curl https://dunamisexpedicoes.com.br | grep -A 5 "preload"
```

**Verificar:**

- ✅ Preload links presentes no `<head>`
- ✅ `fetchPriority="high"` aplicado
- ✅ Media queries corretas

#### B. Resource Hints

```bash
curl -I https://dunamisexpedicoes.com.br
```

**Verificar Headers:**

- ✅ `Cache-Control` para imagens/fontes
- ✅ Compressão habilitada

### 5. Validação Visual

#### A. Primeira Renderização

- [ ] Imagem hero aparece imediatamente (sem delay)
- [ ] Texto "Conheça as MARAVILHAS" visível rapidamente
- [ ] Sem "flash" de conteúdo não estilizado

#### B. Carousel

- [ ] Primeira imagem estática por ~200ms
- [ ] Carousel inicia suavemente após
- [ ] Sem "jump" visual quando carousel carrega

---

## 🔍 Troubleshooting

### Problema: LCP ainda > 2.5s

**Verificações:**

1. Preload está funcionando? (Network tab)
2. Imagem está sendo servida do cache? (verificar headers)
3. TTFB está alto? (verificar servidor/CDN)
4. Há scripts bloqueando renderização?

**Soluções:**

- Verificar se preload está no `<head>` correto
- Adicionar `preconnect` para domínio de imagens
- Verificar compressão do servidor
- Revisar scripts síncronos

### Problema: Imagem errada sendo carregada

**Verificações:**

1. Media queries do preload estão corretas?
2. `sizes` attribute está correto?
3. Viewport está sendo detectado corretamente?

**Soluções:**

- Testar em diferentes viewports
- Verificar `sizes="100vw"` no Image component
- Confirmar media queries no preload

### Problema: Carousel não funciona

**Verificações:**

1. CSS do carousel está sendo carregado?
2. JavaScript do carousel está disponível?
3. Erros no console?

**Soluções:**

- Verificar import dinâmico do carousel
- Confirmar que CSS lazy-load está funcionando
- Verificar erros no console

---

## 📊 Métricas de Sucesso

### Antes das Otimizações

- LCP Mobile: ~12.3s
- Element Render Delay: ~1300ms
- Resource Load Delay: ~200ms
- Resource Load Duration: ~1200ms

### Depois das Otimizações (Esperado)

- LCP Mobile: **≤2.5s** ✅
- Element Render Delay: **<100ms** ✅
- Resource Load Delay: **<50ms** ✅
- Resource Load Duration: **~600ms** ✅

---

## 📝 Relatório de Validação

Após validação, preencher:

```
Data: ___________
Ambiente: [ ] Local [ ] Produção

Lighthouse Mobile:
- LCP: _____s
- FCP: _____s
- TBT: _____ms
- CLS: _____

PageSpeed Insights CrUX:
- LCP p75 Mobile: _____s
- LCP p75 Desktop: _____s

Network Waterfall:
- Tamanho imagem LCP carregada: _____KB
- Tempo de download: _____ms
- Início do download: _____ms após navigationStart

Observações:
_______________________________________
_______________________________________
```

---

## ✅ Critérios de Aceitação Final

- [ ] LCP p75 Mobile ≤ 2.5s (PageSpeed Insights CrUX)
- [ ] Resource load delay < 10% do LCP total
- [ ] Element render delay < 10% do LCP total
- [ ] Imagem LCP descoberta no HTML inicial (waterfall)
- [ ] Redução ≥ 25% no transfer size do LCP resource (mobile)
- [ ] Build e deploy sem erros
- [ ] Funcionalidade visual mantida (carousel funciona)
