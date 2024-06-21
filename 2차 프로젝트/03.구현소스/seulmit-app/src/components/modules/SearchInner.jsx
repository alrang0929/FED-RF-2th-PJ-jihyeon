//서치박스 내용물
import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

//module
import Logo from "./Logo";

//css
import "../../css/search.scss";
import SwiperBestItem from "../plugin/Swiper_bestItem";
//////import area/////////////////////////////////////////

function SearchInner() {
  // $('body,html').css('overflow', 'hidden'); // body 스크롤 막기
  const searchClose = () => {
    //대상선정
    const tg = $('body,html');

    //1. 클릭시 오버플로우 히든 해제
    $(".close-btn").click(()=>{
      tg.css({overflow: 'auto'}); // body 스크롤 막기
    });

    //2. 버튼 클릭시 화면 밖으로 사라짐
    $(".search-inner").stop().animate({
      right: "-72vw",
    },500)
  };

  ///////코드리턴구역 /////////////////////////////
  return (
    <>
      <div className="search-inner">
        <div className="search-box">
          <div className="search-header fx-box">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo_en_B.png" alt="슬밋로고" />
              </Link>
            </div>
            <button 
            className="close-btn" 
            onClick={searchClose}
            >
              <span className="icon-img material-symbols-outlined search-btn">
                close
              </span>
            </button>
          </div>

          <div className="input-box fx-box">
            <input type="text" placeholder="검색어를 입력하세요" />
            <button className="search-btn">
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
        <SwiperBestItem />
      </div>
    </>
  );
}

export default SearchInner;
