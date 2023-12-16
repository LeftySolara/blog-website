import { Inconsolata, Gilda_Display } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Other Side of the IDE",
  description: "Julianne Adams' blog.",
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gilda-display",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={`${inconsolata.variable} ${gildaDisplay.variable}`}
  >
    <body>{children}</body>
  </html>
);

export default RootLayout;
