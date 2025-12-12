export function GallerySkeleton() {
  return (
    <div className="min-h-[400px] bg-[#f8f8f8] animate-pulse">
      <div className="container mx-auto px-4 py-16">
        <div className="h-10 w-64 bg-gray-300 rounded-lg mx-auto mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-gray-300 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
