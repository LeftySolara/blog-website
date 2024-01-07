import { Metadata } from "next";
import Link from "next/link";
import { Post } from "@/app/_types/post";
import { fetchPostsBySeries } from "@/app/_utils/fetchPostsBySeries";
import { fetchSeries } from "@/app/_utils/fetchSeries";
import { blogTitle } from "@/app/_utils/metadata";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Series | ${blogTitle}`,
  description: "All blog posts, grouped by series",
};

interface SeriesSectionProps {
  seriesName: string;
}

const SeriesSection = async (props: SeriesSectionProps) => {
  const { seriesName } = props;
  let posts: Array<Post>;

  try {
    posts = await fetchPostsBySeries(seriesName);
  } catch (err: unknown) {
    posts = [];
  }

  return (
    posts.length > 0 && (
      <section>
        <h3 className={styles["series-heading"]}>{seriesName}</h3>
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

const SeriesPage = async () => {
  let series: Array<string>;

  try {
    series = await fetchSeries();
  } catch (err: unknown) {
    series = [];
  }

  return (
    <div id={styles["series-page"]}>
      <header>
        <h2 id={styles["main-heading"]}>Series</h2>
        <p className={styles["body-text"]}>
          This is a list of my blog posts, grouped by series.
        </p>
      </header>
      <div id={styles["series-list-container"]}>
        {series.map((seriesName: string) => (
          <SeriesSection seriesName={seriesName} key={seriesName} />
        ))}
      </div>
    </div>
  );
};

export default SeriesPage;
