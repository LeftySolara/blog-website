import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Other Side of the IDE",
  description: "Julianne Adams' blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
