import { style1 } from "./Style1.css";
import { style2 } from "./Style2.css";

export default function App() {
  return (
    <>
      <div className={style1}>class=&quot;{style1}&quot;</div>
      <div className={style2}>class=&quot;{style2}&quot;</div>
      <div className={style2}>class=&quot;{style2}&quot;</div>
    </>
  );
}
