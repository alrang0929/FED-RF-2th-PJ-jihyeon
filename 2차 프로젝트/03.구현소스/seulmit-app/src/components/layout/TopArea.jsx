//상단영역 컴포넌트 - top_area.jsx
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

//module
import Logo from "../modules/Logo";
import Topbtn from "../modules/Topbtn";
import SwiperRollben from "../plugin/Swiper_rollben";

/////////data
import { gnbData, gnbDataR } from "../data/gnb_data";
import SearchInner from "../modules/SearchInner";
import { memo } from "react";
import CartList from "../modules/CartList";

/////import area///////////////////////////////////////////////////////////

export const TopArea = memo(
  ({
    loginMsg,
    loginSts,
    logoutFn,
    goPage,
    setRecentSearches,
    recentSearches,
    cartSts,
  }) => {
    //전달값
    //1. loginMsg - 로그인 메시지변수
    //2. loginSts - 로그인 상태변수
    //3. logoutFn - 로그아웃 함수
    //4. goPage - 페이지 이동 라우팅 함수
    // const goNav = useNavigate();
    // 사용시 goNav(라우터주소,{전달객체})

    const searchShowMenu = (e) => {
      //서치박스 위치값 이동
      const tg = $(".search-inner");
      tg.stop().animate(
        {
          right: 0,
        },
        500
      );

      $(".blocking-bg")
        .show()
        .css({
          display: "block",
        })
        .animate({ opacity: 1 }, 200);

      //서치 버튼을 클릭시 스크롤 막기
      // $("body,html").css({ overflow: "hidden" }); // body 스크롤 막기

      const searchLog = JSON.parse(
        sessionStorage.getItem("search-Log") || "[]"
      );
      setRecentSearches(searchLog);
    };

    const showMenu = () => {
      const tg = $(".toggle-menu-box");
      tg.stop().animate(
        {
          right: 0,
        },
        500
      );

      //가림막 BG 등장
      $(".blocking-bg")
        .show()
        .css({
          display: "block",
        })
        .animate({ opacity: 1 }, 200);
    };

    //카트박스 보이기
    const showCart = () => {
      const tg = $(".cart-list");
      tg.stop().animate(
        {
          right: 0,
        },
        500
      );

      //가림막 BG 등장
      $(".blocking-bg")
        .show()
        .css({
          display: "block",
        })
        .animate({ opacity: 1 }, 200);
    };

    const hideMenu = () => {
      $(".blocking-bg").fadeOut(200);

      //2. 버튼 클릭시 화면 밖으로 사라짐
      $(".toggle-menu-box").stop().animate(
        {
          right: "-72vw",
        },
        500
      );
    };

    /////코드리턴구역
    return (
      <>
        {/* <!--follow 버튼 --> */}
        <Topbtn />
        {/* 카트리스트 : 카트상태값 true 출력 */}
        <CartList />
        {/* 서치버튼 클릭시 search-inner 우 > 좌 등장 */}
        <SearchInner />
        <header id="header-area">
          {/* <!-- 롤링배너 --> */}
          <SwiperRollben />
          {/* <!-- GNB area --> */}
          <div className="fx-box" id="gnb-area">
            {/* <!-- L menu --> */}
            <div className="fx-box toggle-menu-box" id="L-menu-wrap">
              <ul className="menu-inner fx-box">
                <button className="close-btn" onClick={hideMenu}>
                  <span className="icon-img material-symbols-outlined search-btn">
                    close
                  </span>
                </button>
                {gnbData.map((v, i) => (
                  <li key={i} className="sub-menu link-box">
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
                              <li key={i} className="link-box">
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
                  <li className="icon-item">
                    {
                      /* 로그인 상태에 따른 메뉴 분기*/

                      //로그인 상태일 때
                      loginSts ? (
                        <>
                          <a
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                              logoutFn();
                            }}
                          >
                            LOGOUT
                          </a>
                        </>
                      ) : (
                        //로그인 상태가 아닐때
                        <>
                          <Link to="/login">
                            <span className="icon-img material-symbols-outlined">
                              person
                            </span>
                          </Link>
                        </>
                      )
                    }
                  </li>
                  <li className="icon-item fx-box">
                    <span
                      style={{ color: "#ffffff", cursor: "pointer" }}
                      className="icon-img mall material-symbols-outlined"
                      onClick={() => {
                        showCart();
                      }}
                    >
                      local_mall
                    </span>
                    {/* <!-- <span className="mall-cunt">(0)</span> --> */}
                  </li>
                  <li className="icon-item search-box">
                    {/* <Link to=""> */}
                    <span
                      className="icon-img material-symbols-outlined search-btn"
                      onClick={searchShowMenu}
                    >
                      search
                    </span>
                    {/* </Link> */}
                  </li>
                  <button className="ham-btn" onClick={showMenu}>
                    <span className="icon-img material-symbols-outlined search-btn">
                      menu
                    </span>
                  </button>
                </ul>
                {/* <!-- icon-box end --> */}
              </ul>
            </div>
            {/* <!-- R menu end --> */}
          </div>
        </header>
        <div className="blocking-bg"></div>
      </>
    );
  }
);
