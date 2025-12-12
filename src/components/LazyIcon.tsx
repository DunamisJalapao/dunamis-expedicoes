"use client";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

/**
 * Componente para lazy load de ícones do react-icons
 * Carrega apenas quando necessário para reduzir bundle inicial
 */
export function createLazyIcon<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) {
  return dynamic(importFn, {
    ssr: false,
    loading: () => <span className="inline-block w-4 h-4" />,
  });
}

// Lazy load dos ícones específicos usados
export const LazyFaWhatsapp = createLazyIcon(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaWhatsapp }))
);

export const LazyFaInstagram = createLazyIcon(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaInstagram }))
);

export const LazyFaTiktok = createLazyIcon(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaTiktok }))
);

export const LazyFaYoutube = createLazyIcon(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaYoutube }))
);

export const LazyCgMenuRight = createLazyIcon(() =>
  import("react-icons/cg").then((mod) => ({ default: mod.CgMenuRight }))
);
