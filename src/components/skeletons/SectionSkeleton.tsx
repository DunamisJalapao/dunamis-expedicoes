/**
 * Skeleton loader genérico para seções
 */
export function SectionSkeleton({
  height = "400px",
  className = "",
}: {
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse bg-gray-200 ${className}`}
      style={{ minHeight: height }}
      aria-label="Carregando conteúdo..."
      role="status"
    >
      <span className="sr-only">Carregando conteúdo...</span>
    </div>
  );
}
