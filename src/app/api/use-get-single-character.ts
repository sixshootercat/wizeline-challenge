import { getCharacterById } from "./requests";
import { useQuery } from "@tanstack/react-query";

export const useGetCharacterById = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById({ id }),
  });

  return { character: data, isLoading, error };
};
