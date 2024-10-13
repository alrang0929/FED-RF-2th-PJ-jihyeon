import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./css/list_brand.scss";

function ListBrand({ selectData }) {
  /****************************************************** 
    [props list]
    1. selectData : 선택된 데이터, 외부 컴포넌트에서 데이터 들고옴
    ******************************************************/

  //  대상선정///////////////////////////////////////////////////////////////////////////////////////
  //  1. 선택 데이터

  // categoryData에서 카테고리 목록 추출
  const categories = Array.from(new Set(selectData.map((item) => item.category)));
  categories.unshift("전체");
  // console.log("categories", categories);

  // 상태관리변수/////////////////////////////////
  // 1. 선택된 카테고리 관리
  const [selectedCategory, setSelectedCategory] = useState("전체");
  // 2. 필터링된 데이터 관리
  const [filteredData, setFilteredData] = useState(selectData);
  // 3. 화면 넓이 관리
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // 4. 클릭여부 확인
  const [isClick, setIsClick] = useState(false);

  //  클릭에 따른 상태 토글
  const handleClickToggle = () => {
    setIsClick(!isClick); //토글
    // console.log("isClick sts", isClick);
  }; //handleClick
  // 화면넓이 감시자
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 화면 랜더링 구역/////////////////////////////////////
  useEffect(() => {
    if (selectedCategory === "전체") {
      setFilteredData(selectData);
    } else {
      // 1. 선택된 카테고리와 일치하는 데이터 필터링
      const matchingData = selectData.filter(
        (item) => item.category === selectedCategory
      );

      // 2. 선택된 카테고리와 일치하지 않는 데이터 필터링
      const otherData = selectData.filter(
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
      {windowWidth > 999 ? (
        // 윈도우 넓이가 999 이상이냐?
        <div className="category-wrap">
          <ul className="category-list fxbox">
            {categories.map((category, i) => (
              <li
                key={category + i}
                className={selectedCategory === category ? "active" : ""}
                onClick={() =>{ setSelectedCategory(category)
                  
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // pc 외 해상도일 경우
        <div className="select-wrap">
          <button
            onClick={(e) => {
              handleClickToggle();
            }}
            
          >

            {selectedCategory == "전체" ? "전체" :  selectedCategory}

            {isClick ? (
              <IoIosArrowUp className="arrow" />
            ) : (
              <IoIosArrowDown className="arrow" />
            )}
          </button>
          <ul className={"category-select" + (isClick ? " " + "on" : "")}>
            {categories.map((category, i) => (
              <li
                key={category + i}
                className={selectedCategory === category ? "active-select" : ""}
                onClick={() => {
                  setSelectedCategory(category)
                  setIsClick(false);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="brand-list-wrap">
        <ul className="brand-list-inner fxbox">
          {filteredData.map((item, idx) => (
            <li
              key={idx}
              // item 카테고리가 전체이거나, 선택된 카테고리와 일치하느냐? 빈거, 아니냐? other-data
              className={
                selectedCategory == "전체" || item.category == selectedCategory
                  ? ""
                  : "other-data"
              }
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
