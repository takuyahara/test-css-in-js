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

export const App = () => {
  return (
    <>
      <div class={style}>class="{style}"</div>
      <div class={style}>class="{style}"</div>
      <div class={style2}>class="{style2}"</div>
      <div class={genStyle("hotpink")}>class="{genStyle("hotpink")}"</div>
      <div class={genStyle("hotpink")}>class="{genStyle("hotpink")}"</div>
    </>
  );
};
