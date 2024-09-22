import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./css/index.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Brand from "./components/pages/Brand";
import Amorepacific from "./components/pages/Amorepacific";
import ResearchnInnovatio from "./components/pages/ResearchnInnovatio";
import VisualIdentity from "./components/pages/VisualIdentity";
import News from "./components/pages/News";
import Detail from "./components/pages/Detail";

export default function MainComponent() {
  //////코드 리턴구역/////////////////
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} /> 
            <Route path='/Brand' element={<Brand />} /> 
            <Route path='/Amorepacific' element={<Amorepacific />} /> 
            <Route path='/ResearchnInnovatio' element={<ResearchnInnovatio />} /> 
            <Route path='/VisualIdentity' element={<VisualIdentity />} /> 
            <Route path='/News' element={<News />} /> 
            <Route path='/Detail' element={<Detail />} /> 
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
// fldorxm 객체 생성
const root = ReactDOM.createRoot(document.querySelector("#root"));
//출력하기
root.render(<MainComponent />);
