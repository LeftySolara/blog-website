import React from "react";
import { Header } from "@/app/_components/Header/Header";
import { Footer } from "@/app/_components/Footer/Footer";

/**
 * Layout for the entire site.
 */
const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default BlogLayout;
