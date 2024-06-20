import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useEffect, useState } from "react";
import { sCon } from "../pages/sCon";
///////import area///////////////////////////////////

export default function Layout() {
  const [introSts, setIntroSts] = useState(true);

  
  //selCat = 선택된 카테고리
  const [selCat, setSelCat] = useState("face");


  useEffect(() =>{
    console.log(introSts)});

  // 코드리턴구역 ///////////////
  return (
    <sCon.Provider value={{setIntroSts,selCat,setSelCat}}>
      <TopArea />
      <MainArea />
      <FooterArea ival = {introSts} />
    </sCon.Provider>
  ); /////return
} //////layout
