export function PacksSkeleton() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] animate-pulse">
      <div className="container mx-auto px-4 py-16">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-12 w-64 bg-gray-300 rounded-lg mx-auto mb-4" />
          <div className="h-6 w-96 bg-gray-200 rounded mx-auto" />
        </div>
        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 bg-gray-300" />
              <div className="p-6">
                <div className="h-6 w-3/4 bg-gray-300 rounded mb-4" />
                <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
