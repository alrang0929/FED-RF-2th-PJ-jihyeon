import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Brand from "./components/pages/Brand";
import Amorepacific from "./components/pages/Amorepacific";
import ResearchnInnovatio from "./components/pages/ResearchnInnovatio";
import VisualIdentity from "./components/pages/VisualIdentity";
import News from "./components/pages/News";

export default function MainComponent() {
  //////코드 리턴구역/////////////////
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} /> 
            <Route path='/Brand' element={<Brand />} /> 
            <Route path='/Amorepacific' element={<Amorepacific />} /> 
            <Route path='/ResearchnInnovatio' element={<ResearchnInnovatio />} /> 
            <Route path='/VisualIdentity' element={<VisualIdentity />} /> 
            <Route path='/News' element={<News />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// fldorxm 객체 생성
const root = ReactDOM.createRoot(document.querySelector("#root"));
//출력하기
root.render(<MainComponent />);
