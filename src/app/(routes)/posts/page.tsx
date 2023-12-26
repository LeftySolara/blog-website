"use client";

import { useEffect, useState } from "react";
import { PostInfo } from "@/app/_components/PostList/PostListItem";
import { PostInfoArray, PostList } from "@/app/_components/PostList/PostList";
import { fetchPostsPaginated } from "@/app/_utils/fetchPostsPaginated";
import { Post } from "@/app/_types/post";
import styles from "./page.module.scss";

const PostsPage = () => {
  const initialPosts: PostInfoArray = [];

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(initialPosts);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data: Array<Post> = await fetchPostsPaginated(page, pageSize);

      const postList: PostInfoArray = data.map((post: Post): PostInfo => {
        const { title, datePublished, slug } = post;

        return {
          title,
          dateString: datePublished.toString(),
          href: `/posts/${slug}`,
        };
      });

      setPosts([...postList]);
    };

    fetchData();
  }, [page]);

  return (
    <div className={styles["posts-page"]}>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default PostsPage;
