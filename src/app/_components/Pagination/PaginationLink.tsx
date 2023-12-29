import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./PaginationLink.module.scss";

interface PaginationLinkProps {
  url: string;
  pageRelation: "prev" | "next";
  visible: boolean;
}

export const PaginationLink = (props: PaginationLinkProps) => {
  const { url, pageRelation, visible } = props;

  return (
    <Link
      href={url}
      className={`${styles["pagination-link"]} ${
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
