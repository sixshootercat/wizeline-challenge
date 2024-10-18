import { useQuery } from "@tanstack/react-query";
import { getAllHouses } from "./requests";

/**
 * Custom hook to fetch houses data.
 *
 * @param {Object} params - Parameters for fetching houses.
 * @param {number} [params.page=1] - The page number to fetch.
 */
export const useGetHouses = ({ page = 1 }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["houses"],
    queryFn: () => getAllHouses({ page }),
  });

  return { houses: data, isLoading, error };
};
