import { PostInfo } from "@/app/_components/PostList/PostListItem";
import { PostInfoArray, PostList } from "@/app/_components/PostList/PostList";
import { fetchPostsPaginated } from "@/app/_utils/fetchPostsPaginated";
import { Post } from "@/app/_types/post";
import styles from "./page.module.scss";

const PostsPage = async () => {
  const data: Array<Post> = await fetchPostsPaginated(1, 10);
  const posts: PostInfoArray = data.map((post: Post): PostInfo => {
    const { title, datePublished, slug } = post;

    return {
      title,
      dateString: datePublished.toString(),
      href: `/posts/${slug}`,
    };
  });

  return (
    <div className={styles["posts-page"]}>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default PostsPage;
