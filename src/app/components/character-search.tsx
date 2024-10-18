"use client";
import { useCallback, useState } from "react";
import { Button } from "./base/button";
import { useCharacterSearch } from "../api/hooks";
import { debounce } from "../utils/debounce";

export const CharacterSearch = () => {
  const [characterName, setCharacterName] = useState("");
  const [debouncedCharacterName, setDebouncedCharacterName] = useState("");

  const {
    data: character,
    error,
    isLoading,
  } = useCharacterSearch(toTitleCase(debouncedCharacterName));

  // Debounce the character name input
  const debouncedSetCharacterName = useCallback(
    debounce((...args: unknown[]) => {
      const name = args[0] as string;
      setDebouncedCharacterName(name);
    }, 800),
    []
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
    debouncedSetCharacterName(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Character Search</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={characterName}
          onChange={handleInputChange}
          placeholder="Enter character name"
          className="p-2 border border-gray-300 rounded text-black"
        />
        <Button type="submit" disabled={isLoading}>
          Search
        </Button>
      </div>
      {isLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      {character && (
        <div>
          <h3 className="text-lg font-bold">{character.name}</h3>
          <p>
            Status:{" "}
            {character.died ? (
              <span className="text-red-500">Dead</span>
            ) : (
              <span className="text-green-500">Alive</span>
            )}
          </p>
          {character.died && <p>Died: {character.died}</p>}
        </div>
      )}
    </div>
  );
};

const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
