"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export const Pagination = (props: PaginationProps) => {
  const { totalPages } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const getNumberRange = (from: number, to: number): number[] =>
    new Array(to - from + 1).fill("").map((v, i) => i + from);

  const pageNumberRange = getNumberRange(1, totalPages);
  const pageNumbers = pageNumberRange.slice(currentPage - 5, currentPage + 5);

  return (
    <div>
      <ul>
        {pageNumbers.map((pageNumber) => {
          const url = createPageURL(pageNumber);

          return pageNumber === currentPage ? (
            <li>{pageNumber}</li>
          ) : (
            <li key={pageNumber}>
              <Link href={url}>{pageNumber}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
