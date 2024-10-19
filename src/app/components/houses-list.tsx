"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import type { House } from "../api/types.api";
import { HouseCard } from "./house-card";

export const HousesList = ({ houses }: { houses: House[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pageParam = searchParams.get("page");
    const params = new URLSearchParams(searchParams.toString());

    if (!pageParam) {
      params.set("page", "1");
      router.push(`?${params.toString()}`);
    }
  }, [searchParams, router]);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {houses.map((house) => {
        return (
          <div key={house.url} className="w-full">
            <HouseCard house={house} />
          </div>
        );
      })}
    </div>
  );
};
