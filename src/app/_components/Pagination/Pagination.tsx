"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  totalPages: number;
}

interface PageNavigationLinkProps {
  url: string;
  pageRelation: "prev" | "next";
  visible: boolean;
}

const PageNavigationLink = (props: PageNavigationLinkProps) => {
  const { url, pageRelation, visible } = props;

  return (
    <Link
      href={url}
      className={`${styles["page-navigation-link"]} ${
        !visible ? styles.invisible : ""
      }`}
    >
      {pageRelation === "prev" && <Icon icon="ph:arrow-left" color="#85c1dc" />}
      &nbsp;{pageRelation.toString()} Page&nbsp;
      {pageRelation === "next" && (
        <Icon icon="ph:arrow-right" color="#85c1dc" />
      )}
    </Link>
  );
};

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

  const nextPageUrl = createPageURL(currentPage + 1);
  const prevPageUrl = createPageURL(currentPage - 1);

  return (
    <div className={styles.pagination}>
      <PageNavigationLink
        url={prevPageUrl}
        pageRelation="prev"
        visible={currentPage > 1}
      />
      <ul className={styles["pagination-list"]}>
        {pageNumbers.map((pageNumber) => {
          const url = createPageURL(pageNumber);

          return pageNumber === currentPage ? (
            <li
              className={`${styles["page-navigation-link"]} ${styles["page-number"]} ${styles.current}`}
            >
              {pageNumber}
            </li>
          ) : (
            <li key={pageNumber}>
              <Link
                href={url}
                className={`${styles["page-navigation-link"]} ${styles["page-number"]}`}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}
      </ul>
      <PageNavigationLink
        url={nextPageUrl}
        pageRelation="next"
        visible={currentPage < totalPages}
      />
    </div>
  );
};
