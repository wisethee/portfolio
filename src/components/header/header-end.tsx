import * as stylex from "@stylexjs/stylex";

import Nav from "../nav";

const SM = "@media (min-width: 600px)";
const MD = "@media (min-width: 905px)";

const styles = stylex.create({
  headerEnd: {
    gridColumn: {
      default: "3 / span 2",
      [SM]: "5 / span 4",
      [MD]: "7 / span 6",
    },
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
