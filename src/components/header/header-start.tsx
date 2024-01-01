import * as stylex from "@stylexjs/stylex";

import Logo from "../logo";

const styles = stylex.create({
  headerStart: {
    gridColumn: "1 / 2",
    display: "flex",
    justifyContent: "flex-start",
  },
});

const HeaderStart = () => {
  return (
    <div {...stylex.props(styles.headerStart)}>
      <Logo />
    </div>
  );
};

export default HeaderStart;
