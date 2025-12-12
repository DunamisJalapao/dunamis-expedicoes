"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Hook para lazy load com Intersection Observer
 * Carrega componentes apenas quando ficam visíveis no viewport
 */
export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Carrega 100px antes de ficar visível
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
}
