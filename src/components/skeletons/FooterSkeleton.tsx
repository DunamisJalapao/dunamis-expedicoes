export function FooterSkeleton() {
  return (
    <div className="min-h-[200px] bg-[#112126] animate-pulse">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="h-6 w-32 bg-gray-600 rounded" />
            <div className="h-4 w-full bg-gray-700 rounded" />
            <div className="h-4 w-5/6 bg-gray-700 rounded" />
          </div>
          <div className="space-y-4">
            <div className="h-6 w-32 bg-gray-600 rounded" />
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-700 rounded" />
              <div className="h-4 w-24 bg-gray-700 rounded" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-6 w-32 bg-gray-600 rounded" />
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 bg-gray-700 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
