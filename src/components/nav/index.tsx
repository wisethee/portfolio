import "./index.css";

const navItems = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Work",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Nav = () => {
  return (
    <nav className="mp-nav">
      <ul>
        {navItems.map((item) => {
          const { name, href } = item;

          return (
            <li key={name}>
              <a href={href} className="">
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
