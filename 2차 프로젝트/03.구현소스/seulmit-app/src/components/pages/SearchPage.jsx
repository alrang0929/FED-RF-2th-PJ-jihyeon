//슬밋pj 검색페이지
import React from "react";
//변수값 받기위해 useLocation import
import { useLocation } from "react-router-dom";
import Searching from "../modules/Searching";

//css
import "../../css/search.scss";

//////import area /////////////////////////////////

///import area/////////////////////////////////////

function SearchPage() {
  //1. 라우터 전달값 받기 객체 생성
  const loc = useLocation();

  //2. 넘겨온 키워드 받기
  const keyword = loc.state.keyword;

  console.log("검색어:", keyword);

  //코드리턴구역////////////////////////////
  return (
    <>
      <h2 className="title">블라블라블라</h2>
      <section className="searching-wrap cont-box">
        <Searching kword={keyword} />
      </section>
    </>
  );
}

export default SearchPage;
