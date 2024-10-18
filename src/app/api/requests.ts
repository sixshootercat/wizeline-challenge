import type { Character, HousesResponse, PaginationLinks } from "./types.api";

// this would typically go in a config file or env for multiple environments
const API_BASE_URL = "https://anapioficeandfire.com/api";

/**
 * supports paginatation with page size of 10
 */
export const getAllHouses = async ({ page = 1 }): Promise<HousesResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/houses?page=${page}&pageSize=10`
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

export const getCharacterByName = async (name: string): Promise<Character> => {
  const response = await fetch(`${API_BASE_URL}/characters?name=${name}`);
  if (!response.ok) {
    throw new Error("Failed to fetch character");
  }
  const data = await response.json();
  if (!data.length) {
    throw new Error("No character found");
  }
  return data[0];
};

export const getCharacterById = async ({
  id,
}: {
  id: string;
}): Promise<HousesResponse> => {
  const response = await fetch(`${API_BASE_URL}/characters/${id}`);
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
