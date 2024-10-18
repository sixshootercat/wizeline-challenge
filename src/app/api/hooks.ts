import { useQuery } from "@tanstack/react-query";
import { getAllHouses, getHouseMembers } from "./requests";
import { getCharacterByName } from "../api/requests";
import type { Character } from "../api/types.api";

/**
 * Custom hook to fetch house members data.
 * @param urls - An array of URLs to fetch data from.
 * @param enabled - A boolean indicating whether the data should be fetched.
 * @param name - The name of the house to fetch members for.
 */
export const useGetHouseMembers = ({
  urls,
  enabled,
  name,
}: {
  urls: string[];
  enabled: boolean;
  name: string;
}) => {
  return useQuery({
    queryKey: ["swornMembers", name],
    queryFn: () => getHouseMembers(urls),
    enabled,
  });
};

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

export const useCharacterSearch = (name: string) => {
  const { data, isLoading, error } = useQuery<Character, Error>({
    queryKey: ["character", name],
    queryFn: () => getCharacterByName(name),
    enabled: !!name,
    retry: false,
  });

  return { data, isLoading, error };
};
