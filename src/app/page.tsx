import { getAllHouses } from "./api/requests";
import { HousesList } from "./components/houses-list";
import { Pagination } from "./components/pagination";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data: houses, pagination } = await getAllHouses({
    page: Number(searchParams.page),
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">Dead or Alive?</h1>
      <HousesList houses={houses} />
      <Pagination pagination={pagination} />
    </div>
  );
}
