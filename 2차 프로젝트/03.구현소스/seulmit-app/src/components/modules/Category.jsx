import React from "react";
import { product } from "../data/product"; 
import "../../css/category.scss";
import { Link } from "react-router-dom";

function Category({onCat, selCat}) {
  //onCat : 현재 클릭한 카테고리
  //selCat : 선택되어 있는 카테고리

  const selData = Object.keys(product);
  // console.log(selData);

  return (
    <>
      {/* 상단 메뉴 리스트 */}
      <div className="category">
        <ul className="fx-box cgmenu">
          {selData.map((v, i) => (
            <li key={v} className="cgitem link-box2">
              <Link to=""
              // {`/shop/${v}`} 
              className={v === selCat ? "on" : ""} 
              onClick={()=> onCat(v)}
              // state={{}}
              >
              {v}
              </Link>
            </li>
          ))}
        </ul>
        <div className="under-line"></div>
      </div>
    </>
  );
}

export default Category;
