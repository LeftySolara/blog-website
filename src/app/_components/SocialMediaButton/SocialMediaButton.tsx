"use client";

import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

/**
 * Props for the {@link SocialMediaButton} component.
 *
 * @property iconName The name of the icon as specified in Iconify.
 * @property fontSize Size of the icon. Can be specified in units of 'px' or 'em'.
 * @property color The color to make the icon. NOTE: only works on icons that were originally monotone.
 * @property href Link to social media profile.
 *
 * @category Component Props
 *
 * @interface
 */
export interface SocialMediaButtonProps {
  iconName: string;
  fontSize: string;
  color: string;
  href: string;
}

/**
 * Social media button with icon and link.
 *
 * @property SocialMediaButtonProps A {@link SocialMediaButtonProps} object containing button information.
 *
 * @returns A React component that renders a social media button.
 *
 * @category Component
 */
export const SocialMediaButton = ({
  buttonProps,
}: {
  buttonProps: SocialMediaButtonProps;
}) => {
  const { iconName, fontSize, color, href } = buttonProps;

  return (
    <Link href={href}>
      <Icon icon={iconName} style={{ color, fontSize }} />
    </Link>
  );
};
