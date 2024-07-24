//슬밋pj - 인트로페이지 jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

////module
import { sCon } from "./sCon";

import "../../css/intro.scss";
//////////////////import area///////////////////////

export default function Intro() {
    //[상태관리변수]//////////////////////
    //로딩확인
    const [IsLoading, setIsLoading] = useState(true);
    
    $("html").addClass("scbar-display-none");
    $("#intro-area").click(() => {
        $("html").removeClass("scbar-display-none");
    });

    useEffect(() => {
        const checkResourcesLoaded = async () => {
            // 이미지, 비디오 등 외부 리소스 로딩 확인 로직
            await Promise.all([
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = `${process.env.PUBLIC_URL}/images/icon-sim-white.svg`;
                    img.onload = resolve;
                }),
                // ... (다른 리소스 로딩 확인)
            ]);
            setIsLoading(false); // 모든 리소스 로딩 완료 후 state 변경
        };

        checkResourcesLoaded();

        return()=>{
            window.scrollTo(0,0);
        }

    }, []);
    let myCon = useContext(sCon);

    ////// 코드 리턴구역 //////////////
    return (
        <>
            <div id="intro-area" >
                {!IsLoading && (
                    <Link
                        to="/"
                        onClick={(e) => {
                            e.preventDefault();
                            myCon.setIntroSts(false);
                            // clickClose(e);
                        }}
                    >
                        <div className="cont-wrap">
                            <span>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/icon-sim-white.svg`}
                                    alt=""
                                />
                            </span>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logo_ko.svg`}
                                alt=""
                            />
                            <div className="desc">
                                로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은
                                출판이나 그래픽 디자인 분야에서 폰트,
                                타이포그래피, 레이아웃 같은
                                <div className="click-text">
                                    화면을 클릭해주세요
                                </div>
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
