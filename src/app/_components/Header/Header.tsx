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

export const Header = ({ links }: { links: Array<HeaderLink> }) => (
  <header>
    <h1>The Other Side of the IDE</h1>
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
