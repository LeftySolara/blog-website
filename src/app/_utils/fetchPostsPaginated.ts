import { Post } from "@/app/_types/post";
import { fetchResource } from "./fetchResource";

interface FetchedPost {
  id: number;
  attributes: {
    title: string;
    date: string;
    slug: string;
    uid: string;
  };
}

interface FetchPostsResponse {
  data: Array<FetchedPost>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface FetchPostsPaginatedResponse {
  posts: Array<Post>;
  pageCount: number;
}

export const fetchPostsPaginated = async (
  page: number,
  pageSize: number,
): Promise<FetchPostsPaginatedResponse> => {
  try {
    const requestParams = {
      pagination: {
        page,
        pageSize,
      },
      sort: ["date:desc"],
      fields: ["title", "date", "slug", "uid"],
    };

    const response: FetchPostsResponse = await fetchResource(
      "posts",
      requestParams,
      {},
    );

    const { pageCount } = response.meta.pagination;

    const posts = response.data.map((post: FetchedPost): Post => {
      const { title, date, slug, uid } = post.attributes;

      return {
        title,
        datePublished: new Date(date),
        slug,
        uid,
      };
    });

    return { posts, pageCount };
  } catch (err: unknown) {
    throw new Error("Error fetching posts.");
  }
};
