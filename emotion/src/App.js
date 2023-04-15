import React from "react";
import { css } from "@emotion/css";

const style = css`
  margin: 32px;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;
const style2 = css`
  margin: 32px;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;
const genStyle = (color) => css`
  margin: 32px;
  padding: 32px;
  background-color: ${color};
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;

export default function App() {
  return (
    <>
      <div className={style}>class="{style}"</div>
      <div className={style}>class="{style}"</div>
      <div className={style2}>class="{style2}"</div>
      <div className={genStyle("hotpink")}>class="{genStyle("hotpink")}"</div>
      <div className={genStyle("hotpink")}>class="{genStyle("hotpink")}"</div>
    </>
  );
}
