import {
  SocialMediaButton,
  SocialMediaButtonProps,
} from "@/app/_components/SocialMediaButton/SocialMediaButton";
import styles from "./Footer.module.scss";

/**
 * An array of {@link SocialMediaButtonProps} objects.
 *
 * @interface
 */
export type SocialMediaButtonPropsArray = Array<SocialMediaButtonProps>;

const socialMediaButtonPropsArray: SocialMediaButtonPropsArray = [
  {
    iconName: "mdi:github",
    fontSize: "2em",
    color: "#626880",
    href: "https://github.com/LeftySolara",
  },
  {
    iconName: "mdi:linkedin",
    fontSize: "2em",
    color: "#85C1DC",
    href: "https://linkedin.com/in/julianneadams",
  },
  {
    iconName: "mdi:twitter",
    fontSize: "2em",
    color: "#85C1DC",
    href: "https://twitter.com/LeftySolara",
  },
];

/**
 * Footer component including copyright label and social media buttons.
 *
 * @category Component
 */
export const Footer = () => (
  <footer id={styles["main-footer"]}>
    <p id={styles["copyright-line"]}>
      © Julianne Adams {new Date().getFullYear()}
    </p>
    <div className={styles["social-buttons-container"]}>
      {socialMediaButtonPropsArray.map((propsObject) => (
        <SocialMediaButton
          buttonProps={propsObject}
          key={propsObject.iconName}
        />
      ))}
    </div>
  </footer>
);
