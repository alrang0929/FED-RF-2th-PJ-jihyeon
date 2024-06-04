//index js
import React from "react";
import ReactDOM from "react-dom/client";
//sass 패키지 호출
import "./css/main.scss";
//컴포넌트 호출
// import "./components/layout/Intro";
import TopArea from "./components/layout/TopArea";
import MainArea from "./components/layout/MainArea";
import FooterArea from "./components/layout/FooterArea";
///////import area///////////////////////////////////

function Layout() {
  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );/////return
} //////layout
/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<Layout />);
