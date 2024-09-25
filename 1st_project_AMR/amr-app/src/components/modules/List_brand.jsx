import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./css/list_brand.scss";

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
                ㄴ> 클릭시 그 고유값으로 이동, 카테고리에 해당되는
                    디테일 페이지로 이동. ->  조건문으로 구현해야되나?
************************************************/
function ListBrand({ selectData }) {
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

  // categoryData에서 카테고리 목록 추출
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
      setFilteredData(selData);
    } else {
      // 1. 선택된 카테고리와 일치하는 데이터 필터링
      const matchingData = selData.filter(
        (item) => item.category === selectedCategory
      );

      // 2. 선택된 카테고리와 일치하지 않는 데이터 필터링
      const otherData = selData.filter(
        (item) => item.category !== selectedCategory
      );

      // 3. 두 배열을 합쳐서 filteredData 상태 업데이트 (선택된 카테고리 데이터가 먼저 오도록)
      setFilteredData([...matchingData, ...otherData]);
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
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="brand-list-wrap">
        <ul className="brand-list-inner fxbox">
          {filteredData.map((item, idx) => (
            <li
              key={idx}
              // item 카테고리가 전체이거나, 선택된 카테고리와 일치하느냐? 빈거, 아니냐? other-data
              className={selectedCategory=="전체" || item.category == selectedCategory ? "" : "other-data"}
            >
              {/* 1. 이미지 */}
              <div className="cont-wrap">
                {/* 2. info-wrap */}
                <div className="text-wrap">
                  <div className="info-wrap">
                    {/* 3) date */}
                    <div className="desc">
                      {item.desc.split("^").map((item, i) => (
                        <span key={item + i}>{item}</span>
                      ))}
                    </div>
                    {/* 2)타이틀 */}
                    <div className="title">{item.title}</div>
                  </div>
                </div>
                <div className="img-box">
                  <img
                    src={process.env.PUBLIC_URL + item.img}
                    alt={item.title}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListBrand;
