import qs from "qs";
import { Post } from "@/app/_types/post";

interface Category {
  id: number;
  attributes: {
    name: string;
    uid: string;
    createdAt: string;
    updatedAt: string;
  };
}

/** Series and Category have the same types of object properties */
type Series = Category;

interface FetchedPost {
  id: number;
  attributes: {
    content: string;
    title: string;
    slug: string;
    summary: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    uid: string;
    categories: {
      data: Array<Category>;
    };
    series: {
      data: Series | null;
    };
  };
}

interface FetchAllPostsResponse {
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

export const fetchAllPosts = async (): Promise<Array<Post> | null> => {
  // TODO: create an interface for the response

  const paramsObject = {
    populate: {
      categories: { populate: "*" },
      series: {
        populate: "*",
      },
    },
    pagination: {
      page: 1,
      pageSize: 10,
    },
  };

  const queryString = qs.stringify(paramsObject, { encodeValuesOnly: true });

  let response: Response;

  try {
    response = await fetch(
      `${process.env.STRAPI_API_URL}/posts?${queryString}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    );

    const responseJSON: FetchAllPostsResponse = await response.json();
    const fetchedPosts: Array<FetchedPost> = responseJSON.data;

    const posts: Array<Post> = fetchedPosts.map(
      (fetchedPost: FetchedPost): Post => {
        const {
          title,
          content,
          summary,
          slug,
          uid,
        }: {
          title: string;
          content: string;
          summary: string;
          slug: string;
          uid: string;
        } = fetchedPost.attributes;

        const datePublished = new Date(fetchedPost.attributes.publishedAt);

        const series: string | null = fetchedPost.attributes.series.data
          ? fetchedPost.attributes.series.data.attributes.name
          : null;

        const categories = fetchedPost.attributes.categories.data.map(
          (category) => category.attributes.name,
        );

        return {
          title,
          content,
          summary,
          datePublished,
          slug,
          uid,
          categories,
          series,
        };
      },
    );

    return posts;
  } catch (err: unknown) {
    console.log(err);
    return null;
  }
};
