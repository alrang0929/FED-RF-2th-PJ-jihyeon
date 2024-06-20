//상단영역 컴포넌트 - top_area.jsx
import { Link } from "react-router-dom";
import $ from "jquery";

//module
import Logo from "../modules/Logo";
import Topbtn from "../modules/Topbtn";

/////////data
import { gnbData, gnbDataR } from "../data/gnb_data";
import { rollBanner } from "../data/rollbanner_data";

//module
import SwiperRollben from "../plugin/Swiper_rollben";
import SwiperPrdList from "../plugin/Swiper_prdList";

import "../plugin/css/swiper_prd-list.scss";

/////import area///////////////////////////////////////////////////////////

export default function TopArea() {


  //search 버튼 클릭시 search-inner 박스 나타나기
//대상선정
//서치버튼
const searchBtn = $('.search-btn');
//서치박스
const tg = $('search-inner');
console.log(searchBtn,tg);


  /////코드리턴구역
  return (
    <>
      {/* <!--follow 버튼 --> */}
      <Topbtn />
      <header id="header-area">
        {/* <!-- 롤링배너 --> */}
        <SwiperRollben />
        {/* <div className="roll-ben">
        <div className="roll-ben-wrap">
          {rollBanner.map((v,i)=>
          <div key={i} className="cont">
          <Link to={v.link}> {v.txt}</Link>
        </div>
          )}

        </div>
      </div> */}
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
                      <Link to={v.link}>{v.txt}</Link>
                    ) : (
                      <Link to={v.link}>{v.txt}</Link>
                    )
                  }
                  {
                    //서브메뉴 데이터 ㅇ > 하위 메뉴 생성
                    v.sub && (
                      <div className="sub-inner">
                        <ol>
                          {v.sub.map((v, i) => (
                            <li key={i}>
                              <Link to={v.link}>{v.txt}</Link>
                            </li>
                          ))}
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
            <Link to="/">
              <Logo logoStyle="top" />
            </Link>
          </div>
          {/* <!-- R menu --> */}
          <div className="fx-box" id="R-menu-wrap">
            <ul className="fx-box sub-menu">
              {gnbDataR.map((v, i) => (
                <li key={i} className="">
                  <Link to={v.link}>{v.txt}</Link>
                </li>
              ))}
              {/* <!-- icon box --> */}
              <ul className="icon-box fx-box">
                <li className="icon-item fx-box">
                  <Link to="">
                    <span className="icon-img mall material-symbols-outlined">
                      local_mall
                    </span>
                    {/* <!-- <span className="mall-cunt">(0)</span> --> */}
                  </Link>
                </li>
                <li className="icon-item">
                  <Link to="">
                    <span className="icon-img material-symbols-outlined">
                      person
                    </span>
                  </Link>
                </li>
                <li className="icon-item search-box">
                  <Link to="">
                    <span className="icon-img material-symbols-outlined search-btn">
                      search
                    </span>
                    <div className="search-inner">
                      <div className="input-box fx-box">
                        <input type="text" placeholder="검색어를 입력하세요" />
                        <button>
                          <span className="icon-img material-symbols-outlined">
                            search
                          </span>
                        </button>
                      </div>

                      <section id="prd-list">
                        <SwiperPrdList />
                      </section>
                    </div>
                  </Link>
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
