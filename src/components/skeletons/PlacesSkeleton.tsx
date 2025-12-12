export function PlacesSkeleton() {
  return (
    <div className="min-h-[400px] bg-[#f8f8f8] animate-pulse">
      <div className="container mx-auto px-4 py-16">
        <div className="h-10 w-64 bg-gray-300 rounded-lg mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 bg-gray-300" />
              <div className="p-4">
                <div className="h-5 w-3/4 bg-gray-300 rounded mb-2" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
