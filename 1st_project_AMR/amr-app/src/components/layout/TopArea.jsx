import React, { useEffect, useRef, useState } from "react";
import { gnbData } from "../data/common_data";
import { Link } from "react-router-dom";
import "../../css/top_area.scss";
import { IoIosSearch } from "react-icons/io";
function TopArea(props) {
  // 화면랜더링구역//////////////////////////////////////////

  //코드리턴구역////////////////////////////////////////////////////
  return (
    <>
    <header className="fxbox">
      {/* <!-- 로고박스 --> */}
      <Link to="/">
        <h1 className="logo">
          <img
            src={process.env.PUBLIC_URL + "/images/ci.png"}
            alt="아모레퍼시픽 로고"
          />
        </h1>
      </Link>
      <nav>
        <ul className="menu-wrap fxbox">
          {Object.keys(gnbData).map((category, index) => (
            // 각 서브 메뉴마다 새로운 ref 생성

            <li key={index} className="link-box">
              <Link to={"/Brand"}>{category}</Link>

              {gnbData[category] !== "없음" && (
                <ol className="sub-menu">
                  {gnbData[category].map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link to={"/Brand"}>{submenu}</Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </nav>
        <div className="search-box fxbox">
          <a href=""
          onClick={(e)=> e.preventDefault }
          >
            <IoIosSearch className="search-icon" />
          </a>
            <input 
            type="text"
            defaultValue={"검색어를 입력해주세요"}
            />
        </div>
      <div className="ham-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    </>
  );
}

export default TopArea;
