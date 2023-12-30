import { PostInfo } from "@/app/_components/PostList/PostListItem";
import { PostList } from "@/app/_components/PostList/PostList";
import {
  FetchPostsPaginatedResponse,
  fetchPostsPaginated,
} from "@/app/_utils/fetchPostsPaginated";
import styles from "./page.module.scss";

const HomePage = async () => {
  const data: FetchPostsPaginatedResponse = await fetchPostsPaginated(1, 5);
  const { posts: rawPosts } = data;

  const posts = rawPosts.map(
    (post): PostInfo => ({
      title: post.title,
      dateString: post.datePublished.toString(),
      href: `/posts/${post.slug}`,
    }),
  );

  return (
    <>
      <section className={styles["content-section"]}>
        <header>
          <h2 className={styles.heading}>Hi, I&apos;m Jules.</h2>
        </header>
        <p>
          I&apos;m a highly-motivated IT professional with an interest in
          software engineering.
        </p>
        <p>
          This is my blog. Here I chronicle my thoughts on various topics that I
          would like to share with the world.
        </p>
        <p>
          For more information about me, please visit my{" "}
          <a href="https://julianneadams.dev">main website</a>.
        </p>
      </section>
      <section className={styles["recent-posts-section"]}>
        <header>
          <h2 className={styles.heading}>Recent Posts</h2>
        </header>
        <PostList posts={posts} />
      </section>
    </>
  );
};

export default HomePage;
