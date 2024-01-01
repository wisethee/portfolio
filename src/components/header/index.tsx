import * as stylex from "@stylexjs/stylex";

import HeaderStart from "./header-start";
import HeaderEnd from "./header-end";

const styles = stylex.create({
  header: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gridTemplateRows: "1fr",
    gap: "0.5rem",
    width: "100%",
    zIndex: 30,
    paddingBlock: "var(--spacing--02)",
    paddingInline: "var(--spacing--inline)",
    position: "fixed",
    top: 0,
    left: 0,
  },
});

const Header = () => {
  return (
    <header {...stylex.props(styles.header)}>
      <HeaderStart />
      <HeaderEnd />
    </header>
  );
};

export default Header;
