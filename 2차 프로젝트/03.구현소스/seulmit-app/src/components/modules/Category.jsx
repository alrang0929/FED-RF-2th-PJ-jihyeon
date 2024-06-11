import React from "react";
import { gnbData } from "../data/gnb_data";
import "../../css/category.scss";
import { Link } from "react-router-dom";

function Category() {
  //catName = 카테고리명
  const selData = gnbData;

  return (
    <>
      {/* 상단 메뉴 리스트 */}
      <div className="category">
        <ul className="fx-box cgmenu">
          {selData.map((v, i) => (
            <li key={i} className={"cgitem"}>
              <Link to="" className={v.i == 0 ? "on" : ""} >
                {v.txt}
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
