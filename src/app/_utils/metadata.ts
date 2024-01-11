/**
 * Page Metadata
 *
 * This is a collection of variables representing metadata for
 * the various pages on the site. These are primarily used for SEO
 * purposes.
 */

import { Metadata } from "next";

interface OpenGraphImage {
  url: string;
  secureUrl: string;
  type: "image/jpeg" | "image/png" | "image/svg+xml" | "image/avif";
  width: number;
  height: number;
  alt: string;
}

// Re-usable variables.
const blogTitle: string = "The Other Side of the IDE";
const blogDescription: string =
  "The blog of Julianne Adams, where she discusses life, software, and writing.";
const blogSecureUrl: string = "https://blog.julianneadams.dev";

// An Open Graph image. Since we're using the same one
// on every page, we'll just define it here and re-use it.
const defaultOpenGraphImage: OpenGraphImage = {
  url: "http://blog.julianneadams.dev/opengraph-image.png",
  secureUrl: "https://blog.julianneadams.dev/opengraph-image.png",
  type: "image/png",
  width: 64,
  height: 64,
  alt: "The letter J.",
};

// Home page metadata
export const metadataHomePage: Metadata = {
  title: blogTitle,
  description: blogDescription,
  openGraph: {
    title: blogTitle,
    description: blogDescription,
    type: "website",
    images: defaultOpenGraphImage,
    url: blogSecureUrl,
    siteName: blogTitle,
  },
};

// Posts page metadata.
const postsPageTitle: string = `All Posts | ${blogTitle}`;
const postsPageDescription: string = "All of my blog posts.";

export const metadataPostsPage: Metadata = {
  title: postsPageTitle,
  description: postsPageDescription,
  openGraph: {
    title: postsPageTitle,
    description: postsPageDescription,
    type: "website",
    images: defaultOpenGraphImage,
    url: `${blogSecureUrl}/posts`,
    siteName: blogTitle,
  },
};

// Categories page metadata.
const categoriesPageTitle: string = `Categories | ${blogTitle}`;
const categoriesPageDescription: string =
  "All of my blog posts, grouped by category.";

export const metadataCategoriesPage: Metadata = {
  title: categoriesPageTitle,
  description: categoriesPageDescription,
  openGraph: {
    title: categoriesPageTitle,
    description: categoriesPageDescription,
    type: "website",
    images: defaultOpenGraphImage,
    url: `${blogSecureUrl}/categories`,
    siteName: blogTitle,
  },
};
