export function AboutSkeleton() {
  return (
    <div className="min-h-[400px] bg-[#f8f8f8] animate-pulse">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="h-10 w-64 bg-gray-300 rounded-lg mb-6" />
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
