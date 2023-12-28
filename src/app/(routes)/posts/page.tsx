import { PostInfo } from "@/app/_components/PostList/PostListItem";
import { PostList } from "@/app/_components/PostList/PostList";
import {
  fetchPostsPaginated,
  FetchPostsPaginatedResponse,
} from "@/app/_utils/fetchPostsPaginated";
import { Pagination } from "@/app/_components/Pagination/Pagination";
import styles from "./page.module.scss";

const PostsPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const currentPage = Number(searchParams?.page) || 1;
  const postsPerPage = 2;

  const data: FetchPostsPaginatedResponse = await fetchPostsPaginated(
    currentPage,
    postsPerPage,
  );
  const { posts: rawPosts, pageCount: totalPages } = data;

  const posts = rawPosts.map(
    (post): PostInfo => ({
      title: post.title,
      dateString: post.datePublished.toString(),
      href: `/posts/${post.slug}`,
    }),
  );

  return (
    <div className={styles["posts-page"]}>
      <h2>All Posts</h2>
      <PostList posts={posts} />
      <Pagination totalPages={Number(totalPages)} />
    </div>
  );
};

export default PostsPage;
