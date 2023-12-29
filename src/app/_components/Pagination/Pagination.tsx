"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PaginationLink } from "@/app/_components/Pagination/PaginationLink";
import styles from "./Pagination.module.scss";
import linkStyles from "./PaginationLink.module.scss";

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
  const pageNumbers = pageNumberRange.slice(
    currentPage - pageNumberRange[currentPage - 1],
    currentPage + 5,
  );

  const nextPageUrl = createPageURL(currentPage + 1);
  const prevPageUrl = createPageURL(currentPage - 1);

  return (
    <div className={styles.pagination}>
      <PaginationLink
        url={prevPageUrl}
        pageRelation="prev"
        visible={currentPage > 1}
      />
      <ul className={styles["pagination-list"]}>
        {pageNumbers.map((pageNumber) => {
          const url = createPageURL(pageNumber);

          return pageNumber === currentPage ? (
            <li
              className={`${linkStyles["pagination-link"]} ${linkStyles["page-number"]} ${linkStyles.current}`}
              key={pageNumber}
            >
              {pageNumber}
            </li>
          ) : (
            <li key={pageNumber}>
              <Link
                href={url}
                className={`${linkStyles["pagination-link"]} ${linkStyles["page-number"]}`}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}
      </ul>
      <PaginationLink
        url={nextPageUrl}
        pageRelation="next"
        visible={currentPage < totalPages}
      />
    </div>
  );
};
