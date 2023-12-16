import React from "react";
import { Header } from "@/app/_components/Header/Header";
import { Footer } from "@/app/_components/Footer/Footer";
import styles from "./layout.module.scss";

/**
 * Layout for the entire site.
 */
const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <div id={styles["blog-layout"]}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default BlogLayout;
