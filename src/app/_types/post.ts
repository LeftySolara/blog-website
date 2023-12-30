/**
 * A blog post.
 *
 * @property title The post's title.
 * @property content The post's original markdown content.
 * @property summary A brief description of the post.
 * @property datePublished The date the post was published.
 * @property slug The URL slug of the post.
 * @property uid The post's unique identifier.
 * @property categories A list of categories attached to the post.
 * @property series The series the post belongs to.
 * @interface
 */
export interface Post {
  title: string;
  content?: string;
  summary?: string;
  datePublished: Date;
  slug: string;
  uid: string;
  categories?: Array<string>;
  series?: string;
}

export interface FetchedPost {
  id: number;
  attributes: {
    title: string;
    date: string;
    slug: string;
    uid: string;
  };
}

export interface FetchPostsResponse {
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
