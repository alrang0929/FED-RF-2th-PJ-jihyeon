//서치박스 내용물
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

//module
import Logo from "./Logo";

//css
import "../../css/search.scss";
import SwiperBestItem from "../plugin/Swiper_bestItem";
//////import area/////////////////////////////////////////

function SearchInner() {
  const goNav = useNavigate();

  // $('body,html').css('overflow', 'hidden'); // body 스크롤 막기
  const searchClose = () => {
    //대상선정
    // const tg = $("body,html");
    //가림막 BG 히든
    $(".blocking-bg").fadeOut(200);

    //2. 버튼 클릭시 화면 밖으로 사라짐
    $(".search-inner").stop().animate(
      {
        right: "-72vw",
      },
      500
    );
    $("body,html").css({ overflowX: "hidden" });
  };

  //2. 검색창에 엔터키 누르면 검색함수 호출
  const enterkey = (e) => {
    //e,keyCode = 숫자로 리턴
    //e,key = 문자로 리턴
    // console.log(e.keyCode);
    if (e.key == "Enter") {
      //입력창에 입력값 읽어오기 : val()사용
      let txt = $(e.target).val().trim();
      console.log(txt);

      //빈값이 아니면 검색함수 호출(검색어 전달)
      if (txt != "") {
        //입력창 비우고 부모박스 닫기
        $(e.target).val("").parent().parent().parent().css({right:"-72vw"});
        console.log("검색창 부모는?", e.target);
        //검색 보내기
        goSearch(txt);
        $(".blocking-bg").fadeOut(200);

        // $("body,html").css({ overflowX: "hidden" });
      } ///if
    } ////if
  };

  //3. 검색페이지로 검색어와 함께 이수하기함수
  const goSearch = (txt) => {
    console.log("검색하러 갑니당 ^-^");
    //라우터 이동함수로 이동하기
    //네비게이트 메서드 (라우터주소,{state:{보낼객체}})
    goNav("search", { state: { keyword: txt } });
  };

  ///////코드리턴구역 /////////////////////////////
  return (
    <>
      <div className="search-inner">
        <div className="search-box">
          <div className="search-header fx-box">
            <div className="logo">
              <Link to="/">
                <img src={process.env.PUBLIC_URL+"/images/logo_en_B.png"} alt="슬밋로고" />
              </Link>
              
            </div>
            <button className="close-btn" onClick={
              (e)=>{
                searchClose(e)

              }
              }>
              <span className="icon-img material-symbols-outlined search-btn">
                close
              </span>
            </button>
          </div>

          <div className="input-box fx-box">
            <input
              id="schinGnb"
              type="text"
              placeholder="검색어를 입력하세요"
              onKeyUp={enterkey}
              onClick={(e) => {
                let stxt = e.currentTarget.nextElementSibling.value;
                //nextElementSibling: 부모로 지정된 요소 바로 뒤에 있거나 null지정된 요소가 목록의 마지막 요소인 경우 해당 요소를 반환
                if(stxt.trim!="")goSearch(stxt);
                else{
                  alert("검색어를 입력해주세요");
                }
                
              }}
            />
            <button className="search-btn"
            onClick={enterkey}
            >
              <span className="icon-img material-symbols-outlined search-btn">
                search
              </span>
            </button>
          </div>

          {/* 인기 검색어 or 최신 검색어 */}
          <div className="recent-search-list">
            <h4>최근 검색어</h4>
            <ul>
              <li>
                <Link to="">
                  <span>슬밋 솔 세럼</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span>슬밋 립밤</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span>숲 바디워시</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span>인센스 스틱</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <section className="best-item-ban">
          {/* <SwiperBestItem /> */}
        </section>
      </div>
      <div className="blocking-bg"></div>
    </>
  );
}

export default SearchInner;
