export function ContactSkeleton() {
  return (
    <div className="min-h-[400px] bg-green-100 animate-pulse">
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="h-8 w-96 bg-gray-300 rounded-lg mx-auto" />
          <div className="h-12 w-48 bg-gray-400 rounded-lg mx-auto" />
          <div className="h-6 w-64 bg-gray-200 rounded mx-auto" />
        </div>
      </div>
    </div>
  );
}
