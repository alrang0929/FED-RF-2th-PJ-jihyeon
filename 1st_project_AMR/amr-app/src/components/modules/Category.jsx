import React, { useEffect, useState } from "react";
import "./css/category.scss";
function Category({selectData}) {
    const selData = selectData;
  // categoryData에서 카테고리 목록 추출
  const categories = Array.from(new Set(selData.map((item) => item.category)));
  categories.unshift("전체");
  // 상태관리변수/////////////////////////////////
  // 1. 선택된 카테고리 관리
  const [selectedCategory, setSelectedCategory] = useState("전체");
    // 2. 필터링된 데이터 관리
    const [filteredData, setFilteredData] = useState(selData);
  // 3. 화면 넓이 관리
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // 4. 선택여부 확인
  const [isClick, setIsClick] = useState(false);
  //  클릭에 따른 상태 토글
  const handleClickToggle = (activeCategory) =>{
    setIsClick(!isClick); //토글
    //클릭한 카테고리가 "전체"가 아닐 경우만 카테고리 메뉴 변경
    if(activeCategory !=="전체"){
      categories[0] = activeCategory; 
      setSelectedCategory(activeCategory);
    }//if
  }//handleClick
  // 화면넓이 감시자
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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



    //화면리턴구역
  return (
    <>
      {/* 카테고리 목록 렌더링 */}
      <div
        className=
          {"category-wrap" + (windowWidth === 999 ? "accrodion":"") + (windowWidth === 999&&isClick?"on":"")}
        onClick={handleClickToggle}
      >
        <ul className="category-list fxbox">
          {categories.map((category, i) => (
            <li
              key={category + i}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => {
                setSelectedCategory(category);
                handleClickToggle(category);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Category;
