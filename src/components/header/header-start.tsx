import * as stylex from "@stylexjs/stylex";

import Logo from "../logo";

const SM = "@media (min-width: 600px)";
const MD = "@media (min-width: 905px)";

const styles = stylex.create({
  headerStart: {
    gridColumn: {
      default: "1 / span 2",
      [SM]: "1 / span 4",
      [MD]: "1 / span 6",
    },
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
