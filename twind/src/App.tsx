import { tw } from "twind";

const style1 = tw`m-8 p-8 bg-pink-600 text-2xl rounded hover:text-white`;
const style2 = tw`m-8 p-8 bg-pink-600 text-2xl rounded hover:text-white`;
const genStyle = (bgcolor: string) =>
  tw`m-8 p-8 ${bgcolor} text-2xl rounded hover:text-white`;

export default function App() {
  return (
    <>
      <div className={style1}>class=&quot;{style1}&quot;</div>
      <div className={style2}>class=&quot;{style2}&quot;</div>
      <div className={style2}>class=&quot;{style2}&quot;</div>
      <div className={genStyle("bg-pink-600")}>
        class=&quot;{genStyle("bg-pink-600")}&quot;
      </div>
      <div className={genStyle("bg-pink-600")}>
        class=&quot;{genStyle("bg-pink-600")}&quot;
      </div>
    </>
  );
}
