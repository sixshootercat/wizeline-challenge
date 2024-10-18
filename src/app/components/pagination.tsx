"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./button";
import type { PaginationLinks } from "../api/types.api";

export const Pagination = ({ pagination }: { pagination: PaginationLinks }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePagination = (url: string | undefined) => {
    if (!url) return;

    const urlObj = new URL(url);
    const page = urlObj.searchParams.get("page");

    if (page) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page);
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <div className="flex justify-center gap-4">
      <Button
        type="button"
        disabled={!pagination.first}
        onClick={() => handlePagination(pagination.first)}
      >
        First
      </Button>
      <Button
        type="button"
        disabled={!pagination.prev}
        onClick={() => handlePagination(pagination.prev)}
      >
        Previous
      </Button>
      <Button
        type="button"
        disabled={!pagination.next}
        onClick={() => handlePagination(pagination.next)}
      >
        Next
      </Button>
      <Button
        type="button"
        disabled={!pagination.last}
        onClick={() => handlePagination(pagination.last)}
      >
        Last
      </Button>
    </div>
  );
};
