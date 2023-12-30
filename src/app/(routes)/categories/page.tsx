import Link from "next/link";
import { fetchCategories } from "@/app/_utils/fetchCategories";
import { fetchPostsByCategory } from "@/app/_utils/fetchPostsByCategory";
import { Post } from "@/app/_types/post";
import styles from "./page.module.scss";

interface CategorySectionProps {
  categoryName: string;
}

const CategorySection = async (props: CategorySectionProps) => {
  const { categoryName } = props;
  const posts: Array<Post> = await fetchPostsByCategory(categoryName);

  // Remove spaces from category name so we can use it as an anchor link.
  const sectionId = categoryName.replace(/\s/g, "-").toLowerCase();

  return (
    <section id={sectionId}>
      <h3>{categoryName}</h3>
      <ul className={styles["post-link-list"]}>
        {posts.map((post: Post) => (
          <li key={post.uid}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const CategoriesPage = async () => {
  const categories = await fetchCategories();

  return (
    <div>
      <header>
        <h2>Categories</h2>
        <p>This is a list of my blog posts, grouped by topic.</p>
      </header>
      <div id={styles["category-index-container"]}>
        <header>
          <h3>Index</h3>
        </header>
        <ul id={styles["category-index-list"]}>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`#${category.replace(/\s/g, "-").toLowerCase()}`}>
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
