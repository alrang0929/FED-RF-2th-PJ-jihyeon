import React from "react";
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
// import { aCon } from "./aCon";

function Layout(props) {

  // 상태관리변수 :
  // 1. menuName을 가져오기 위한 상태관리변수
  // const [catchMenu, setCatchMenu] = useState(null);
  //////코드리턴구역////////////////////////////
  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}

export default Layout;
