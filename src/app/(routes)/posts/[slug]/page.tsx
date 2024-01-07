import { Metadata } from "next";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import { fetchPost } from "@/app/_utils/fetchPost";
import { blogTitle } from "@/app/_utils/metadata";
import styles from "./page.module.scss";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  let metadata: Metadata;

  try {
    const post = await fetchPost(slug);
    const title = post ? `${post.title} | ${blogTitle}` : "Post not found";

    metadata = {
      title,
    };
  } catch (err: unknown) {
    metadata = {
      title: "Post not found",
    };
  }

  return metadata;
}

const BlogPostPage = async ({ params }: Props) => {
  let htmlContent: string | TrustedHTML = "";
  let postDate: string = "";

  const postData = await fetchPost(params.slug);

  if (postData) {
    const processedContent = await remark().use(html).process(postData.content);
    htmlContent = processedContent.toString();
    postDate = moment(postData.date.toString()).format("MMM DD, YYYY");
  }

  return (
    <div>
      {postData ? (
        <>
          <div id={styles["post-header"]}>
            <h1 id={styles["post-title"]}>{postData.title}</h1>
            <em>
              <p id={styles["post-date"]}>{postDate}</p>
            </em>
          </div>
          <div
            className={styles["markdown-content"]}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </>
      ) : (
        <h1>Post not found.</h1>
      )}
    </div>
  );
};

export default BlogPostPage;
