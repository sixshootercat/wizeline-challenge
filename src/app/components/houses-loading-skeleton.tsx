// src/app/components/houses-list-skeleton.tsx
export const HousesListSkeleton = () => {
  const skeletonItems = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {skeletonItems.map((_, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="p-4 border border-gray-200 rounded-lg shadow-md flex flex-col justify-between animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />
          <div className="h-10 bg-gray-300 rounded w-full" />
        </div>
      ))}
    </div>
  );
};
