/**
 * Link to be displayed in the Header component.
 *
 * @property href Destination URI for the link.
 * @property label The text to display for the link.
 * @interface
 */
export interface HeaderLink {
  href: string;
  label: string;
}

const headerLinks: Array<HeaderLink> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Posts",
    href: "/posts",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "Series",
    href: "/series",
  },
];

export const Header = () => (
  <header>
    <h1>The Other Side of the IDE</h1>
    <div>
      <ul>
        {headerLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
