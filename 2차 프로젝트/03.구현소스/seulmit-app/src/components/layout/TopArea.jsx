//상단영역 컴포넌트 - top_area.jsx
import {Link} from "react-router-dom";
import {menu} from "../data/common_data";

/////import area///////////////////////////////////////////////////////////

export default function TopArea(){

  const bentext = menu[rollbanData];
return(
  <>
   {/* <!--follow 버튼 --> */}
  <div className="" id="follow-button">
    {/* <!-- 탑버튼 --> */}
    <div className="imgbx" id="top-button">
      <a href="#">
        <span className="material-symbols-outlined"> arrow_upward </span>
      </a>
    </div>
    <div className="" id="talk-button">
      <a href="#">Talk</a>
    </div>
  </div>
<header id="header-area">
      {/* <!-- 롤링배너 --> */}
      <div className="roll-ben">
        <ul className="">
            {menu.map((v,i)=>{
          <li className="cont">
            <a href=""> {v.rollbanData}</a>
          </li>
            })}
        </ul>
      </div>
      {/* <!-- GNB area --> */}
      <div className="fx-box" id="gnb-area">
        {/* <!-- L menu --> */}
        <div className="fx-box" id="L-menu-wrap">
          <div className="menu-inner fx-box">
            <ul className="sub-menu">
              <a href="">1차 메뉴</a>
              <ul className="sub-inner">
                <li>
                  <a href="">2차 메뉴</a>
                  <a href="">2차 메뉴</a>
                  <a href="">2차 메뉴</a>
                </li>
              </ul>
            </ul>
            <ul className="sub-menu">
              <a href="">1차 메뉴</a>
              <ul className="sub-inner">
                <li>
                  <a href="">2차 메뉴</a>
                  <a href="">2차 메뉴</a>
                  <a href="">2차 메뉴</a>
                </li>
              </ul>
            </ul>
            <ul className="sub-menu">
              <a href="">1차 메뉴</a>
              <ul className="sub-inner">
                <li>
                  <a href="">2차 메뉴</a>
                  <a href="">2차 메뉴</a>
                  <a href="">2차 메뉴</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        {/* <!-- L menu end --> */}
        <div className="logo">
          <h1>
            <a href=""><img src="../images/logo_en.png" alt="슬밋 로고" /></a>
          </h1>
        </div>
        {/* <!-- R menu --> */}
        <div className="fx-box" id="R-menu-wrap">
          <ul className="fx-box">
            <li className="text-menu">
              <a href="">LOGIN</a>
              <a href="">NOTICE</a>
            </li>
            {/* <!-- icon box --> */}
            <ul className="icon-box fx-box">
              <li className="icon-item fx-box">
                <a href="">
                  <span className="icon-img mall material-symbols-outlined">
                    local_mall
                  </span>
                  {/* <!-- <span className="mall-cunt">(0)</span> --> */}
                </a>
              </li>
              <li className="icon-item">
                <a href="">
                  <span className="icon-img material-symbols-outlined">
                    person
                  </span>
                </a>
              </li>
              <li className="icon-item">
                <a href="">
                  <span className="icon-img material-symbols-outlined">
                    search
                  </span>
                </a>
              </li>
            </ul>
            {/* <!-- icon-box end --> */}
          </ul>
        </div>
        {/* <!-- R menu end --> */}
      </div>
    </header>
    </>
);


}/////TopArea컴포넌트////////////