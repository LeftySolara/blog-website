import { Metadata } from "next";
import Link from "next/link";
import { fetchCategories } from "@/app/_utils/fetchCategories";
import { fetchPostsByCategory } from "@/app/_utils/fetchPostsByCategory";
import { Post } from "@/app/_types/post";
import { metadataCategoriesPage } from "@/app/_utils/metadata";
import styles from "./page.module.scss";

export const metadata: Metadata = metadataCategoriesPage;

interface CategorySectionProps {
  categoryName: string;
}

const CategorySection = async (props: CategorySectionProps) => {
  const { categoryName } = props;
  let posts: Array<Post>;

  try {
    posts = await fetchPostsByCategory(categoryName);
  } catch (err: unknown) {
    posts = [];
  }

  // Remove spaces from category name so we can use it as an anchor link.
  const sectionId = categoryName.replace(/\s/g, "-").toLowerCase();

  return (
    posts.length > 0 && (
      <section id={sectionId}>
        <h3 className={styles["category-heading"]}>{categoryName}</h3>
        <ul className={styles["post-link-list"]}>
          {posts.map((post: Post) => (
            <li key={post.uid}>
              <Link
                href={`/posts/${post.slug}`}
                className={styles["post-title"]}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

const CategoriesPage = async () => {
  let categories: Array<string>;

  try {
    categories = await fetchCategories();
  } catch (err: unknown) {
    categories = [];
  }

  return (
    <div id={styles["categories-page"]}>
      <header>
        <h2 id={styles["main-heading"]}>Categories</h2>
        <p className={styles["body-text"]}>
          This is a list of my blog posts, grouped by topic.
        </p>
      </header>
      <div id={styles["category-index-container"]}>
        <header>
          <h3 className={styles["index-heading"]}>Index</h3>
        </header>
        <ul id={styles["category-index-list"]}>
          {categories.map((category) => (
            <li className={styles["category-index-item"]} key={category}>
              <Link
                href={`#${category.replace(/\s/g, "-").toLowerCase()}`}
                className={styles["category-index-item"]}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div id={styles["category-list-container"]}>
        {categories.map((category: string) => (
          <CategorySection categoryName={category} key={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
