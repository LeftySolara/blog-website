import path from "path";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import styles from "./page.module.scss";

interface BlogPostData {
  slug: string;
  content: string;
  contentHtml: string;
  title: string;
}

// Temporarily using markdown files to test post rendering.
// Eventually we will pull content from a Strapi server.
const postsDirectory = `${process.cwd()}/src/app/_posts`;

const getPostData = async (slug: string): Promise<BlogPostData> => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    content: matterResult.content,
    title: matterResult.data.title,
  };
};

const BlogPostPage = async () => {
  const postData = await getPostData("exampleBlogPost");

  return (
    <div>
      <h1>{postData.title}</h1>
      <div
        className={styles["markdown-content"]}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
};

export default BlogPostPage;
