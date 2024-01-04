import { remark } from "remark";
import html from "remark-html";
import { fetchPost } from "@/app/_utils/fetchPost";
import styles from "./page.module.scss";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  let htmlContent: string | TrustedHTML = "";

  const postData = await fetchPost(params.slug);

  if (postData) {
    const processedContent = await remark().use(html).process(postData.content);
    htmlContent = processedContent.toString();
  }

  return (
    <div>
      {postData ? (
        <>
          <h1 id={styles["post-title"]}>{postData.title}</h1>
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
