# Conversão de Fontes para WOFF2

Este guia explica como converter as fontes `.otf` e `.ttf` para `.woff2` para melhorar o desempenho.

## Pré-requisitos

Instale o `woff2` (ferramenta do Google):

### macOS

```bash
brew install woff2
```

### Linux

```bash
sudo apt-get install woff2
```

### Windows

Baixe de: https://github.com/google/woff2

## Conversão

Execute os seguintes comandos na raiz do projeto:

```bash
# Converter BardonStamp
woff2_compress public/fonts/BardonStamp-Regular.otf

# Converter BardonClean
woff2_compress public/fonts/BardonClean-Regular.otf

# Converter BLUEDREAM
woff2_compress public/fonts/BLUEDREAM-Regular.otf

# Converter WorkSans
woff2_compress public/fonts/WorkSans-Regular.ttf
```

Os arquivos `.woff2` serão gerados no mesmo diretório (`public/fonts/`).

## Verificação

Após a conversão, verifique se os seguintes arquivos existem:

- `public/fonts/BardonStamp-Regular.woff2`
- `public/fonts/BardonClean-Regular.woff2`
- `public/fonts/BLUEDREAM-Regular.woff2`
- `public/fonts/WorkSans-Regular.woff2`

## Nota

Os arquivos `.otf` e `.ttf` originais podem ser mantidos como backup, mas não serão mais usados pelo código após a migração para WOFF2.
