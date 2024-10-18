import { HousesListSkeleton } from "./components/houses-loading-skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center mb-16">Dead or Alive?</h1>
      <HousesListSkeleton />
    </div>
  );
}
