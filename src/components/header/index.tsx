import Logo from "../logo";

import "./index.css";

const Header = () => {
  return (
    <header className="mp-header">
      <div className="mp-header__start">
        <Logo />
      </div>
      <div className="mp-header__end">nav</div>
    </header>
  );
};

export default Header;
