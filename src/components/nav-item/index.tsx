import { cls } from "../../utils";
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
  const handleClick = () => {
    onHandleClick(name);
  };

  return (
    <li className={cls("mp-nav-item", activeItem === name ? "is-active" : "")}>
      <a href={href} onClick={() => handleClick()}>
        <span className="mp-nav-item-inner">
          <span className="mp-nav-item--deep">{name}</span>
          <span className="mp-nav-item--active ">{name}</span>
        </span>
      </a>
    </li>
  );
};

export default NavItem;
