"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ReactNode } from "react";

/**
 * Componente wrapper para lazy load de seções usando Intersection Observer
 * Renderiza children apenas quando a seção fica visível no viewport
 */
export function LazySection({
  children,
  fallback,
  className,
  id,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  id?: string;
}) {
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "100px", // Carrega 100px antes de ficar visível
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={className} id={id}>
      {isIntersecting ? children : fallback}
    </div>
  );
}
