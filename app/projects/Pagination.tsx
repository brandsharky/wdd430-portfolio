"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";



export default function Pagination({ totalPages, }: { totalPages: number; }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div>
      {currentPage > 1 && (
        <Link href={createPageURL(currentPage - 1)}>
          Previous
        </Link>
      )}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link href={createPageURL(currentPage + 1)}>
          Next
        </Link>
      )}
    </div>
  );
}