import { useQuery } from "@tanstack/react-query";
import { getHouseMembers } from "./requests";

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
