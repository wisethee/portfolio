import * as stylex from "@stylexjs/stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  primary: { default: "#e9624a", [DARK]: "#e9624a" },
  onPrimary: { default: "#ffffff", [DARK]: "#000000" },
  surface: { default: "#ffffff", [DARK]: "#201d1d" },
  onSurface: { default: "#000000", [DARK]: "#ffffff" },
  surfaceVariant: { default: "#fef7f5", [DARK]: "#292120" },
  onSurfaceVariant: { default: "#453936", [DARK]: "#fcefec" },
  disabled: { default: "#f7e7e3", [DARK]: "#5e4e49" },
  onDisabled: { default: "#caafa8", [DARK]: "#89726c" },
  outline: { default: "#ead4cd", [DARK]: "#5e4e49" },
});
