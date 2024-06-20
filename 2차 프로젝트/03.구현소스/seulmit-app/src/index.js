//index js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

//page 호출
// import Intro from "./components/pages/Intro";
import Main from "./components/pages/Main";
import Shop from "./components/pages/Shop";
import Inside from "./components/pages/Inside";
import Taste from "./components/pages/Taste";
import Benefit from "./components/pages/Benefit";
import Login from "./components/pages/Login";
import Notice from "./components/pages/Notice";
import Detail from "./components/pages/Detail";

//sass 패키지 호출
import "./css/index.scss";
import SearchPage from "./components/pages/Search";

//컴포넌트 호출
// import "./components/layout/Intro";
/////////////////////import area/////////////////////////////

/// 컴포넌트 출력 ///
export default function MainComponent() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 중요! 레이아웃 컴포넌트를 루트로 설정!!
          홀로 당기기 ㄴㄴ 반드시 하위 라우트 감싸기 */}

          <Route path="/" element={<Layout />}>
            {/* 하위라우트 셋팅: path 대신
            index로 설정하면 첫 페이지로 */}
            {/* <Route index element={<Intro />} /> */}
            <Route index element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/inside" element={<Inside />} />
            <Route path="/taste" element={<Taste />} />
            <Route path="/benefit" element={<Benefit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/Detail" element={<Detail/>} />
            <Route path="/search" element={<SearchPage/>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
