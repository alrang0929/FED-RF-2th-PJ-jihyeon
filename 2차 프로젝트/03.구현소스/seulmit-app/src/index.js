//index js
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import SearchPage from "./components/pages/SearchPage";
import Member from "./components/pages/Member";
import MainArea from "./components/layout/MainArea";

//컴포넌트 호출
/////////////////////import area/////////////////////////////

/// 컴포넌트 출력 ///
export default function MainComponent() {


  //////////화면랜더링 구역///////////////////////////////////////////////////////////
  return (
    // 라우터 루트로 라우터 구성시작
    // basename 속성은 package.json의 "homepage"속성값을
    // 읽어옴 (읽는 방법은 process.env.PUBLIC_URL)
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* 라우터 경로 변경시 최상단이동 컴포넌트 */}
        <ScrollTop />
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
            <Route path="/Detail" element={<Detail />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/member" element={<Member />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

/******************************************* 
  컴포넌트로 만들고 라우터 안에 넣고
  라우터 경로변경시 스크롤 최상단이동
*******************************************/
const ScrollTop = () => {
  // 라우터 경로 변경시 path 값 읽어오기
  // pathname 객체 속성에 담긴다!
  const { pathname } = useLocation();

  // 화면랜더링 구역에 스크롤상단이동 코드넣기
  useEffect(() => {
    // 스크롤 최상단 이동
    window.scrollTo(0, 0);
    // 변경된 라우터 경로값 확인
    // console.log("라우터경로:", pathname);
  }, [pathname]);
  // 의존성을 라우터 경로 변수로 설정한다!

  // 컴포넌트 리턴이 필요하나
  // 소스리턴이 아니므로 null를 쓴다
  return null;
}; /////////// ScrollTop 컴포넌트 ////////////

// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
