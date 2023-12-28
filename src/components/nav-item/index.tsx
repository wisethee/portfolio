import { useSpring, animated } from "@react-spring/web";

import "./index.css";

type NavItemProps = {
  name: string;
  href: string;
  activeItem: string;
  onHandleClick: (
    name: string
  ) => React.MouseEventHandler<HTMLAnchorElement> | void;
};

const NavItem = ({ name, href, activeItem, onHandleClick }: NavItemProps) => {
  const [springs, api] = useSpring(() => ({
    from: {
      x: 0,
    },
  }));

  const handleClick = () => {
    onHandleClick(name);

    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });

    api.start({
      from: {
        x: 100,
      },
      to: {
        x: 0,
      },
      delay: 500,
    });
  };

  return (
    <li className={activeItem === name ? "a" : "b"}>
      <animated.a href={href} onClick={handleClick} style={{ ...springs }}>
        <span>{name}</span>
      </animated.a>
    </li>
  );
};

export default NavItem;
