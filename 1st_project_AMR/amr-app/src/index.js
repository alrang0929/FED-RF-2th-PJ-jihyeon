import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Brand from "./components/pages/Brand";
import MainArea from "./components/layout/MainArea";

export default function MainComponent() {
  //////코드 리턴구역/////////////////
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainArea />} /> 
            <Route path='/Brand' element={<Brand />} /> 
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
