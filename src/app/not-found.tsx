import Link from "next/link";
import styles from "./not-found.module.scss";

const NotFound = () => (
  <div>
    <h2 className={styles.heading}>Not Found</h2>
    <p className={styles["not-found-message"]}>
      Could not find the requested resource.
    </p>
    <Link href="/" className={styles["home-link"]}>
      Return Home
    </Link>
  </div>
);

export default NotFound;
