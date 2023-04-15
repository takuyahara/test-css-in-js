import { style } from "@vanilla-extract/css";

export const style2 = style({
  margin: 32,
  padding: 32,
  backgroundColor: "hotpink",
  fontSize: 24,
  borderRadius: 4,
  ":hover": {
    color: "white",
  },
});
