import React from "react";
import { Header } from "@/app/_components/Header/Header";

const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header links={[]} />
    <main>{children}</main>
  </>
);

export default BlogLayout;
