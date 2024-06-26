//슬밋pj - 상단영역 top버튼 모듈

import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";
//////////////////////import area//////////////////////////////////////////

function Topbtn(props) {
  //클릭시 이벤트 : 버튼 클릭하면 최상단 이동
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      <div className="" id="follow-button">
        {/* <!-- 탑버튼 --> */}
        <div className="imgbx" id="top-button">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              $("html,body").animate({scrollTop:"0px"},400);
            }}
          >
            <span className="material-symbols-outlined"> arrow_upward </span>
          </a>
        </div>
        <div className="" id="talk-button">
          <a href="#">Talk</a>
        </div>
      </div>
    </>
  );
}

export default Topbtn;
