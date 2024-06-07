//상단영역 컴포넌트 - top_area.jsx
import { Link } from "react-router-dom";

/////////data
import Logo from "../modules/Logo";
import { gnbData, gnbDataR } from "../data/gnb_data";
import { rollBanner } from "../data/rollbanner_data";

/////import area///////////////////////////////////////////////////////////

export default function TopArea({changeMenu}) {

    // 메뉴 변경하기 함수 ///////
    const chgMenuFn = (v) => {

      console.log(v);
  
      // 전달값 변경하기 : 소문자 변경
      v = v.toLowerCase();
  
      // 부모 메뉴변경 상태메서드로 메뉴변경
      changeMenu(v);
  
    }; ////////// chgMenuFn 함수 /////////

  return (
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
        <div className="roll-ben-wrap">
          {rollBanner.map((v,i)=>
          <div key={i} className="cont">
          <a href={v.link}> {v.txt}</a>
        </div>
          )}

        </div>
      </div>
      {/* <!-- GNB area --> */}
      <div className="fx-box" id="gnb-area">
        {/* <!-- L menu --> */}
        <div className="fx-box" id="L-menu-wrap">
          <div className="menu-inner fx-box">
            
            {gnbData.map((v,i)=>
            <ul className="sub-menu">
            <a href={v.link}>{v.txt}</a>
          </ul>
            )}
          </div>
        </div>
        {/* <!-- L menu end --> */}
        <div className="logo">
          <h1>
            <a href="/">
            <Logo logoStyle="top"/>
            </a>
          </h1>
        </div>
        {/* <!-- R menu --> */}
        <div className="fx-box" id="R-menu-wrap">
          <ul className="fx-box sub-menu">
          {gnbDataR.map((v,i)=>
            <li className="">
            <a href={v.link}>{v.txt}</a>
          </li>
            )}
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
} /////TopArea컴포넌트////////////
