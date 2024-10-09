import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/list_gallery.scss";

/************************************************ 
[갤러리 리스트 타입 컴포넌트]
    
1. 외부에서 카테고리값 받아와서 데이터 셋팅
2. 데이터 형식은 아래로 통일
    1) 상위메뉴
    2) 카테고리
    3) 이미지, alt
    4) date
    5) title
2-1. 작동은 어떻게?
    1. 리스트 생성: 상위메뉴 값을 불러와 생성
        1-1) 그 안의 리스트는? 
            : 상위 카테고리 + idx 값으로 고유값 생성
                ㄴ> 클릭시 그 고유값으로 이동, 카테고리에 해당되는 <<< 기존에 했던 방법인데 복잡함..!!
                
                    디테일 페이지로 이동. ->  조건문으로 구현해야되나? > MavLink로 Linkstate 값 /Brand 컴포넌트로 전달하여 구현
************************************************/
function ListGallery({ selectData }) {
  /****************************************************** 
    [props list]
    1. selectData : 선택된 데이터, 외부 컴포넌트에서 데이터 들고옴
    ******************************************************/
  //  대상선정///////////////////////////////////////////////////////////////////////////////////////
  //  1. 선택 데이터
  const selData = selectData;
  // console.log("selData", selData);

  // 2.네비게이트 훅사용
  const navigate = useNavigate(); // useNavigate 훅 사용
  // 상태관리변수
  // 1. 화면넓이 감시
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // categoryData에서 카테고리 목록 추출
  /**************************************************************************** 
  1. new : 인스턴스 생성
  2. Set : 중복되지 않는 유일한 값들의 집합을 다루는데 사용되는 자료구조
          특징: 여러값이 들어가도 하나만 저장! 추가한 순서 기억x(순서 보장 ㄴㄴ)
                다양한 타입 허용(숫자, 문자열, 객체, 다른set도 취급)
  
해석: 
    const categories = Array.from(new Set(selData.map((item) => item.category)));
  categories.unshift("전체");

  const categories에는 이 내용들을 담아라

  1. selData.map((item) => item.category) : selData배열의 각 뉴스 데이터에서 category를 뽑아
    새로운 배열을 만들어라
  2. new Set(...) : Set 객체를 이용해 중복 카테고리를 제거해
  3. Array.from(...) : Set객체를 다시 배열로 반환해
  4. categories.unshift("전체") : 전체 카테고리를 맨 앞에 추가해!
  ( unshift : 맨앖, push: 맨뒤 // 이놈들은 원본 배열을 변경하기 때문에 원본 보존을 위해 new로 인스턴스 생성 후 진행함 )

  ****************************************************************************/
  const categories = Array.from(new Set(selData.map((item) => item.category)));
  categories.unshift("전체");
  // console.log("categories", categories);

  // 상태관리변수/////////////////////////////////
  // 1. 선택된 카테고리 관리
  const [selectedCategory, setSelectedCategory] = useState("전체");
  // 2. 필터링된 데이터 관리
  const [filteredData, setFilteredData] = useState(selData);

  // 화면 랜더링 구역/////////////////////////////////////
  useEffect(() => {
    if (selectedCategory === "전체") {
      // 해석: 선택된 카테고리의 상태가 전체냐? 그럼 기본값(전체 리스트)를 보여줘라
      setFilteredData(selData);
    } else {
      // if를 통과할 시 = 선택된 카테고리가 전체가 아닐 시
      // 1. 일치하는 데이터 : 가져온 데이터를 필터링해라,
      // 1-2. 각 데이터의 category가 선택된 카테고리와 일치하는가? FilteredData에 담아라
      // 2. setFilteredData의 상태를 FilteredData로 변경해라
      const filteredData = selData.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredData(filteredData);
    }
  }, [selectedCategory]);
  //코드리턴구역/////////////////////////////////////////////////
  return (
    <>
      {/* 카테고리 목록 렌더링 */}
      <div className="category-wrap">
        <ul className="category-list fxbox">
          {categories.map((category, i) => (
            <li
              key={category + i}
              //선택된 카테고리랑 카테고리명이 같냐? activ 클래스 추가
              className={selectedCategory === category ? "active" : ""}
              // 그리고 선택카테고리 상태관리를 category를 담아서 보내라
              onClick={() => setSelectedCategory(category)}
            >
              {/*  */}
              {category}
            </li>
          ))}
        </ul>

      </div>
      <div className="gallery-list-wrap">
        <ul className="gallery-list-inner fxbox">
          {filteredData.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to="/Detail"
                onClick={(e) => {
                  e.preventDefault();
                  // location.state로 /Detail에 클릭된 item값 전달 
                  navigate("/Detail", { state: { selectedData: item } });
                //  console.log("item",item);
                }}
              >
                {/* 1. 이미지 */}
                <div className="img-box">
                  <img
                    src={process.env.PUBLIC_URL + item.isrc.img}
                    alt={item.isrc.alt}
                  />
                </div>
                {/* 2. info-wrap */}
                <div className="info-wrap">
                  {/* 1)카테고리 */}
                  <div className="category">{item.category}</div>
                  {/* 2)타이틀 */}
                  <div className="title">{item.title}</div>
                  {/* 3) date */}
                  <div className="date">{item.date}</div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGallery;
