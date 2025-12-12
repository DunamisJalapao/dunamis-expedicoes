"use client";
import { useEffect, useState } from "react";

/**
 * Hook para lazy load de fontes usando Intersection Observer
 * Carrega a fonte apenas quando necessário (quando elemento fica visível)
 */
export function useLazyFont(
  fontFamily: string,
  fontUrl: string,
  options?: { enabled?: boolean }
): boolean {
  const [fontLoaded, setFontLoaded] = useState(false);
  const enabled = options?.enabled ?? true;

  useEffect(() => {
    if (!enabled || fontLoaded) return;

    // Verifica se a fonte já está carregada
    if (document.fonts.check(`16px "${fontFamily}"`)) {
      setFontLoaded(true);
      return;
    }

    // Cria um @font-face style para carregar a fonte dinamicamente
    const styleId = `lazy-font-${fontFamily}`;

    // Verifica se já existe um style com essa fonte
    if (document.getElementById(styleId)) {
      setFontLoaded(true);
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @font-face {
        font-family: "${fontFamily}";
        src: url("${fontUrl}") format("woff2");
        font-display: optional;
        font-weight: 400;
        font-style: normal;
      }
    `;

    const fontFace = new FontFace(
      fontFamily,
      `url("${fontUrl}") format("woff2")`,
      {
        display: "optional",
      }
    );

    fontFace
      .load()
      .then(() => {
        document.fonts.add(fontFace);
        document.head.appendChild(style);
        setFontLoaded(true);
      })
      .catch(() => {
        // Se falhar, ainda adiciona o style para fallback
        document.head.appendChild(style);
        setFontLoaded(true);
      });

    return () => {
      // Cleanup: remove o style se o componente desmontar
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, [fontFamily, fontUrl, enabled, fontLoaded]);

  return fontLoaded;
}
