import { useQuery } from "@tanstack/react-query";
import { getHouseMembers } from "./requests";

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
