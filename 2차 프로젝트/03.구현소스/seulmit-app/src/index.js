//index js
import React from 'react';
import ReactDOM from 'react-dom/client';
//sass 패키지 호출
import "./css/main.scss";
//컴포넌트 호출
// import "./components/layout/Intro";
import "./components/layout/TopArea";
import "./components/layout/MainArea";
import "./components/layout/FooterArea";
///////import area///////////////////////////////////

const root = ReactDOM.createRoot(
    document.getElementById('root'));
    root.render(
        <>
            <h1> 왜안대</h1>
        <TopArea />
        <MainArea />
        <FooterArea />
        </>
    );