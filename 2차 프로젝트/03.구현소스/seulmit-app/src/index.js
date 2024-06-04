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
      <h1> 왜안대</h1>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );/////return
} //////layout

ReactDOM.render(<Layout />, document.querySelector("#root"));
