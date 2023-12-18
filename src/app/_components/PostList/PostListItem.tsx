import moment from "moment";
import styles from "./PostListItem.module.scss";

/**
 * An object containing info about a post.
 *
 * @property dateString A string containing a post's posting date.
 * @property title The post's title.
 * @property href A link to the post.
 *
 * @interface
 */
export interface PostInfo {
  dateString: string;
  title: string;
  href: string;
}

/**
 * An item in a {@link PostList}.
 * Displays a post's posting date and title.
 *
 * @param postInfo A {@link PostInfo} object.
 *
 * @category Component
 */
export const PostListItem = ({ postInfo }: { postInfo: PostInfo }) => {
  const { dateString, title, href } = postInfo;
  const formattedDate = moment(dateString).format("MMM DD, YYYY");

  return (
    <li className={styles["post-list-item"]}>
      <p>{formattedDate}</p>
      <a href={href} className={styles["post-link"]}>
        {title}
      </a>
    </li>
  );
};
