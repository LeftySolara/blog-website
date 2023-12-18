import { PostInfoArray, PostList } from "@/app/_components/PostList/PostList";
import styles from "./page.module.scss";

const Home = () => {
  const posts: PostInfoArray = [
    {
      dateString: "2021-09-01T15:21:39.862Z",
      title: "An Example Post",
      href: "#",
    },
    {
      dateString: "2021-09-01T15:21:39.862Z",
      title: "An Example Post",
      href: "#",
    },
    {
      dateString: "2021-09-01T15:21:39.862Z",
      title: "An Example Post",
      href: "#",
    },
    {
      dateString: "2021-09-01T15:21:39.862Z",
      title: "An Example Post",
      href: "#",
    },
  ];

  return (
    <>
      <section>
        <header>
          <h2>Hi, I&apos;m Jules.</h2>
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
      <section>
        <header>
          <h2 className={styles.heading}>Recent Posts</h2>
          <PostList posts={posts} />
        </header>
      </section>
    </>
  );
};

export default Home;
