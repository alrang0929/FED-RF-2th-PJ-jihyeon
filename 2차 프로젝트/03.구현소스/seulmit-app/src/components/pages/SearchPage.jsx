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
      <h2 className="s-title">
        검색결과
      </h2>
      <div className="result-text"><span>"{keyword}"</span>에 대한 검색결과 입니다.</div>
      <section className="searching-wrap cont-box">
        <Searching kword={keyword} />
      </section>
    </>
  );
}

export default SearchPage;
