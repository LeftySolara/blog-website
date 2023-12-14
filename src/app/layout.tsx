import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Other Side of the IDE",
  description: "Julianne Adams' blog.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
