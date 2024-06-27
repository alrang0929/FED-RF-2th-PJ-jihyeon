//슬밋pj - 인트로페이지 jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

////module
import { sCon } from "./sCon";
import introFn from "../func/intro";

import "../../css/intro.scss";
//////////////////import area///////////////////////

export default function Intro() {
    const bar = $(".loading");
    // console.log("로딩바", bar);
    const [IsLoading, setIsLoading] = useState(true);

    // const introArea = document.getElementById('intro-area');
    // introArea.style.cursor = `url('/images/cursor.svg'), auto`; // 커서 이미지 경로 설정
    
    useEffect(() => {
        
      const checkResourcesLoaded = async () => {
        // 이미지, 비디오 등 외부 리소스 로딩 확인 로직
        await Promise.all([
          new Promise((resolve) => {
            const img = new Image();
            img.src = process.env.PUBLIC_URL+"/images/icon-sim-white.svg";
            img.onload = resolve;
          }),
          // ... (다른 리소스 로딩 확인)
        ]);
    
        setIsLoading(false); // 모든 리소스 로딩 완료 후 state 변경
      };
    
      checkResourcesLoaded();
    }, []);
    let myCon = useContext(sCon);

    ////// 코드 리턴구역 //////////////
    return (
        <>
            <div id="intro-area">
                {!IsLoading && (
                    <Link
                        to="/"
                        onClick={(e) => {
                            e.preventDefault();
                            myCon.setIntroSts(false);
                        }}
                    >
                        <div className="cont-wrap">
                            <span>
                                <img src={`${process.env.PUBLIC_URL}/images/icon-sim-white.svg`} alt="" />
                            </span>
                            <img src={`${process.env.PUBLIC_URL}/images/logo_ko.svg`} alt="" />
                            <div className="desc">
                                로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은
                                출판이나 그래픽 디자인 분야에서 폰트,
                                타이포그래피, 레이아웃 같은
                            </div>
                            <div className="loading"></div>
                        </div>
                        <div className="bg">
                            <video id="myvid" muted autoPlay loop>
                                <source
                                    src={`${process.env.PUBLIC_URL}/images/intro_bg1.mp4`}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </Link>
                )}
            </div>
        </>
    ); ///////return
}
