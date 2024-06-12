//상단영역 컴포넌트 - top_area.jsx
import { Link } from "react-router-dom";

/////////data
import Logo from "../modules/Logo";
import { gnbData, gnbDataR } from "../data/gnb_data";
import { rollBanner } from "../data/rollbanner_data";

/////import area///////////////////////////////////////////////////////////

export default function TopArea() {
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
            <ul className="menu-inner fx-box">
              {gnbData.map((v, i) => (
                <li key={i} className="sub-menu">
                  {
                    //하위메뉴 有: a요소 cnffur / 無: Link 라우팅 출력
                    v.sub ? (
                      <a href="#">{v.txt}</a>
                    ) : (
                      <Link t0={v.link}>{v.txt}</Link>
                    )
                  }
                  {
                    //서브메뉴 데이터 ㅇ > 하위 메뉴 생성
                    v.sub && (
                      <div className="sub-inner">
                        <ol>
                          {
                          v.sub.map((v, i) => 
                            <li key={i}>
                              <Link to={v.link}>
                                {v.txt}
                                </Link>
                            </li>
                          )}
                        </ol>
                      </div>
                    )
                  }
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- L menu end --> */}
          <div className="logo">
            <h1>
              <Logo logoStyle="top" />
            </h1>
          </div>
          {/* <!-- R menu --> */}
          <div className="fx-box" id="R-menu-wrap">
            <ul className="fx-box sub-menu">
              {gnbDataR.map((v, i) => (
                <li className="">
                  <a href={v.link}>{v.txt}</a>
                </li>
              ))}
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
