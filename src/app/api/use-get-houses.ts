import { useQuery } from "@tanstack/react-query";
import { getAllHouses } from "./requests";

export const useGetHouses = ({ page = 1 }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["houses"],
    queryFn: () => getAllHouses({ page }),
  });

  return { houses: data, isLoading, error };
};
