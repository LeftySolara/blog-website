import { FetchPostsResponse, FetchedPost, Post } from "@/app/_types/post";
import { fetchResource } from "./fetchResource";

export const fetchPostsByCategory = async (
  categoryName: string,
): Promise<Array<Post>> => {
  try {
    const requestParams = {
      pagination: {
        page: 1,
        pageSize: 99,
      },
      sort: ["date:desc"],
      filters: {
        categories: {
          name: {
            $containsi: categoryName,
          },
        },
      },
    };

    const response: FetchPostsResponse = await fetchResource(
      "posts",
      requestParams,
      {},
    );

    const posts = response.data.map((post: FetchedPost): Post => {
      const { title, date, slug, uid } = post.attributes;

      return {
        title,
        datePublished: new Date(date),
        slug,
        uid,
      };
    });

    return posts;
  } catch (err: unknown) {
    throw new Error("Error fetching posts by category.");
  }
};
