import * as stylex from "@stylexjs/stylex";

import Nav from "../nav";

const styles = stylex.create({
  headerEnd: {
    gridColumn: "2 / 3",
    display: "flex",
    justifyContent: "flex-end",
  },
});

const HeaderEnd = () => {
  return (
    <div {...stylex.props(styles.headerEnd)}>
      <Nav />
    </div>
  );
};

export default HeaderEnd;
