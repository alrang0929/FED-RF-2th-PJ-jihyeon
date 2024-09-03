import React from 'react';
import ReactDOM from "react-dom/client";

import { Routes, Route, } from "react-router-dom";
import Layout from './components/layout/Layout';
import Main from './components/pages/Main';
import Brand from './components/pages/Brand';

export default function MainComponent(){
  return(
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path='/Brand' element={<Brand/>}/>
      </Route>
    </Routes>
    </>
  );
}

//root객체 생성
const root = ReactDOM.createRoot(document.querySelector('#root'));

//출력하기
root.render(<MainComponent />);