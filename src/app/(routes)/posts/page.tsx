import { PostInfoArray, PostList } from "@/app/_components/PostList/PostList";
import styles from "./page.module.scss";

const PostsPage = async () => {
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
    <div className={styles["posts-page"]}>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default PostsPage;
