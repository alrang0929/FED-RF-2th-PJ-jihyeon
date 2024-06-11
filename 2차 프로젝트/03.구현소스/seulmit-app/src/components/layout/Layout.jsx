import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import Intro from "../pages/Intro";
import { useEffect, useState } from "react";
///////import area///////////////////////////////////

export default function Layout() {
  const [introSts, setIntroSts] = useState(true);

  useEffect(() =>{
    console.log(introSts);
  });

  // 코드리턴구역 ///////////////
  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
      {introSts&&<Intro hideFn={setIntroSts} />}
    </>
  ); /////return
} //////layout
