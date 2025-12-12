"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ReactNode } from "react";

/**
 * Componente wrapper para lazy load de seções usando Intersection Observer
 * Renderiza children apenas quando a seção fica visível no viewport
 * Mostra skeleton enquanto carrega
 */
export function LazySectionWithSkeleton({
  children,
  skeleton,
  className,
  id,
  rootMargin = "200px", // Carrega 200px antes de ficar visível
}: {
  children: ReactNode;
  skeleton: ReactNode;
  className?: string;
  id?: string;
  rootMargin?: string;
}) {
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: `${rootMargin} 0px`,
    threshold: 0.01,
  });

  return (
    <div ref={ref} className={className} id={id}>
      {isIntersecting ? children : skeleton}
    </div>
  );
}
