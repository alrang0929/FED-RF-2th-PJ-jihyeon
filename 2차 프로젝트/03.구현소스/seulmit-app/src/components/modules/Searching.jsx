import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";

//module
//상품 결과 리스트 컴포넌트
import SearchingProduct from "./SearchingProduct";

//data
import { product } from "../data/product";
//css
import "../../css/search.scss";
//////import area/////////////////////////

function Searching({ kword }) {
  //kword: SearchPage 에서 keyword 로 전달받음
  //   console.log("data", product);
  //   console.log("타이틀검색 되나..?", product.tit);
  //   console.log("Object.val", Object.values(product));
  
  //키워드에 따라 검색결과가 달라짐 > 핵심 데이터 검색어로 상태관리 변수 생성
  
  //상태관리변수/////////////////////////////////////
  //1. 검색어 상태관리변수
  const [kw, setKw] = useState(kword); //초기값 셋팅: 검색어 변수 넣어줌
  //2. 정렬기준 상태관리변수
  const [sort, setSort] = useState("asc"); //오름차순: asc, 내림차순 - desc
  console.log("kword", kword,kw);


  //3. 참조변수
  const beforeKword = useRef(kword);
  //참조변수는 객체! 그래서 하위속성중
  //current 속성으로 값을 읽거나 업데이트 한다
  //상단메뉴 검색창에서 다시 검색할 경우 비교하여 동일할 경우 재검색x, 다를 경우 리렌더링 하도록 설정

  if(beforeKword.current != kword){
    //1. 컴포넌트 리렌더링(검색결과 변경)
    setKw(kword);

    //2. 다음 검색을 위해 다시 현재 검색어를 참조 변수에 저장
    beforeKword.current = kword;
    console.log(beforeKword.current,"==?",kword);

    //3. 상단 검색어를 현재 검색창에 넣기 (단순 업데이트)
    $("#schin").value = kword;

  }///if

  ///////////////////////////////////////////////////////////////////////////
  //검색결과 있는 데이터 필터 : filter()은 검색결과가 항상 배열로 나옴
  //flatMap: 배열을 합쳐주는 메서드

  //1. 배열값 머지
  const newList = Object.values(product).flatMap((v) => {
    // let newVal = v.cname.toLocaleLowerCase();
    // let key = kw.toLocaleLowerCase();
    console.log("flatMap 후 v값", v);

    //2. 머지시킨 배열값 필터
    //flatMap에 값을 반환하기위해 return (filter 안에서 return 한 값은 flatMap에 전달안됨)
    return v.filter((v) => {
      // console.log("filter의 v값", v);
      //1) 검색어 대소문자 통일
      let newVal = v.tit.toLocaleLowerCase();
      let key = kw.toLocaleLowerCase();

      //2) 문자열이 있는 값만 재수집
      // console.log("newVal.indexOf(key)",newVal.indexOf(key));

      if(newVal.indexOf(key) !== -1 ) return newVal.indexOf(key);

      //includes(): 문자열 안에 특정 문자열이 있는지 확인하는 것, true/false로 값 반환, but 위치값 안알려줌
      //indexOf(): 배열안 특정값이 있는지 확인 후 위치(index)알려줌, 0 / -0으로 값 반환
      
    }); //filter
  }); //newList

  //filteredList: 필터링된 데이터
  const filteredList = newList;

  // console.log("filteredList",filteredList);

  //[정렬기능 추가]////////////////////
  //case1. 오름차순일 경우
  if (sort == "asc") {
    filteredList.sort((a, b) => (a.tit > b.tit ? 1 : a.tit < b.tit ? -1 : 0));
  } //////if

  //case2. 내름차순일 경우
  else if (sort == "desc") {
    filteredList.sort((a, b) => (a.tit > b.tit ? -1 : a.tit < b.tit ? 1 : 0));
  }

  useEffect(()=>{
   $("#schin").val(kw);
   $(".result-text span").text(kw);
  });

  /////코드 리턴구역///////////////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        <div className="input-box fx-box">
          <input
            id="schin"
            type="text"
            placeholder="검색어를 입력하세요"
            defaultValue={kw}
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                //1. 검색어 상대값 변경
                setKw(e.target.value);
                //2. 처음 검색시 정렬은 기본정렬
                setSort("asc");
                //정렬선택박스 선택값 변경(DOM에서 보이는 것 변경)
                $("#sel").value = "asc";
              } //////if
            }}
          />
          <button className="search-btn">
            <span className="icon-img material-symbols-outlined search-btn">
              search
            </span>
          </button>
        </div>
      </section>
      <aside className="sortbx">
        <select
          name="sel"
          id="sel"
          className="sel"
          // 값을 변경할때 이벤트발생
          onChange={(e) => {
            console.log(e.target.value);
            // 정렬기준 상태변수 업데이트
            setSort(e.target.value);
          }}
        >
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </aside>
      <SearchingProduct dt={filteredList} />
    </>
  );
}

export default Searching;
