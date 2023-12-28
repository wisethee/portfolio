import { useState } from "react";

import NavItem from "../nav-item";

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
  const defaultActiveItem = navItems[0].name;
  const [activeItem, setActiveItem] = useState(defaultActiveItem);

  const handleClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <nav className="mp-nav">
      <ul className="mp-nav-items">
        {navItems.map((item) => {
          const { name, href } = item;

          return (
            <NavItem
              key={name}
              name={name}
              href={href}
              activeItem={activeItem}
              onHandleClick={handleClick}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
