import {
  PostListItem,
  PostInfo,
} from "@/app/_components/PostList/PostListItem";
import styles from "./Postlist.module.scss";

export type PostInfoArray = Array<PostInfo>;

/**
 * A list of posts.
 *
 * @param posts An array of {@link PostInfo} objects.
 *
 * @category Component
 */
export const PostList = ({ posts }: { posts: PostInfoArray }) => (
  <div>
    {posts.length > 0 ? (
      <ul className={styles["post-list"]}>
        {posts.map((post) => (
          <PostListItem postInfo={post} key={post.title} />
        ))}
      </ul>
    ) : (
      <p className={styles["not-found-message"]}>No posts found.</p>
    )}
  </div>
);
