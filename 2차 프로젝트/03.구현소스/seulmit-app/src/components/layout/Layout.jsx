import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useEffect, useState } from "react";
import { sCon } from "../pages/sCon";
///////import area///////////////////////////////////

export default function Layout() {
  ///[상태관리변수]///////////////////////////////////////////
  //1. 인트로 상태관리 변수
  const [introSts, setIntroSts] = useState(true);
  //2. 로그인 상태관리변수
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem(""));

  
  //selCat = 선택된 카테고리
  const [selCat, setSelCat] = useState("face");
  useEffect(() =>{
    // console.log(introSts)
  });

  // 코드리턴구역 ///////////////
  return (
    <sCon.Provider value={{setIntroSts,selCat,setSelCat}}>
      <TopArea />
      <MainArea />
      <FooterArea ival = {introSts} />
    </sCon.Provider>
  ); /////return
} //////layout
