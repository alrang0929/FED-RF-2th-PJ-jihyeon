//슬밋pj 검색페이지

import React from "react";
//module
import SwiperPrdList from "../plugin/Swiper_prdList";
//css
import "../../css/search.scss";

//data
import { product } from "../data/product";

///import area/////////////////////////////////////

function SearchPage(props) {
  //코드리턴구역
  return (
    <>
      <div className="search-pg">
        <div className="input-box fx-box">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>
            <span className="icon-img material-symbols-outlined">search</span>
          </button>
        </div>

        <section id="prd-list">
          <SwiperPrdList />
        </section>
      </div>
    </>
  );
}

export default SearchPage;
