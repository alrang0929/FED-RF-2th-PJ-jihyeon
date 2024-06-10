import "../../css/intro.scss";
import introFn from "../func/intro";
import React from "react";

export default function Intro() {
  introFn();
  return (
  // React.useLayoutEffect(() => {
    <>
      <div id="intro-area">
        <a href="/">
          <div className="cont-wrap">
            <span>
              <img src="/images/icon-sim-white.svg" alt="" />
            </span>
            <img src="/images/logo_ko.svg" alt="" />
            <div className="desc">
              로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
              디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은
            </div>
            <div className="loading"></div>
          </div>
          <div className="bg">
            <video
              id="myvid"
              src="/images/intro_bg1.mp4"
              autoplay
              muted
              playsinline
            ></video>
          </div>
        </a>
      </div>
    </>
  // },[])
  ); ///////return
}
