import type { Character, HousesResponse, PaginationLinks } from "./types.api";

export const getAllHouses = async ({ page = 1 }): Promise<HousesResponse> => {
  const response = await fetch(
    `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=10`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch houses");
  }

  const data = await response.json();
  const linkHeader = response.headers.get("link");

  const pagination: PaginationLinks = {};

  if (linkHeader) {
    const links = linkHeader.split(",").map((link) => link.trim());
    for (const link of links) {
      const [urlPart, relPart] = link.split(";");
      const url = urlPart.slice(1, -1);
      const rel = relPart.split("=")[1].replace(/"/g, "");

      pagination[rel as keyof PaginationLinks] = url;
    }
  }

  return { data, pagination };
};

export const getCharacterById = async ({
  id,
}: {
  id: string;
}): Promise<HousesResponse> => {
  const response = await fetch(
    `https://anapioficeandfire.com/api/characters/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch character");
  }
  return response.json();
};

export const getHouseMembers = async (urls: string[]): Promise<Character[]> => {
  return Promise.all(
    urls.map((url) => fetch(url).then((response) => response.json()))
  );
};
