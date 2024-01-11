/**
 * Blog post information.
 *
 * @property slug The slug used in the post's url.
 * @property content The original markdown content of the post.
 * @property title The post's title.
 *
 * @interface
 */
export interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: Date;
}

export const fetchPost = async (slug: string): Promise<BlogPostData | null> => {
  let response;

  try {
    response = await fetch(
      `${process.env.STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    );

    const json = await response.json();
    const posts = json.data;

    // Post not found or multiple posts match the slug.
    if (posts.length !== 1) {
      throw new Error("Post not found.");
    }

    const { content, title, description, date } = posts[0].attributes;

    return {
      slug,
      content,
      title,
      description,
      date: new Date(date),
    };
  } catch (err: unknown) {
    console.log(err);
    return null;
  }
};
