//슬밋pj 검색페이지
import React from "react";
import { useLocation } from "react-router-dom";
//module
import SwiperPrdList from "../plugin/Swiper_prdList";
//css
import "../../css/search.scss";

//data
import { product } from "../data/product";
import SearchInner from "../modules/SearchInner";

///import area/////////////////////////////////////

function SearchPage() {

const loc = useLocation();

  const keyword = loc.state.keyword;
console.log("검색어:", keyword)


  //코드리턴구역
  return (
    <>

<SearchInner/>

        <section id="prd-list">
          <SwiperPrdList />
        </section>
    </>
  );
}

export default SearchPage;
