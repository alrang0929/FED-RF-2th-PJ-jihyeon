import React from "react";
import { Link } from "react-router-dom";
import {newsData} from "../data/news_data";
import "./css/list_garrery.scss";

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
function ListGallery({selectData}) {
    /****************************************************** 
    [props list]
    1. selectData : 선택된 데이터, 외부 컴포넌트에서 데이터 들고옴
    
    ******************************************************/
  //코드리턴구역/////////////////////////////////////////////////
  return (
    <>
      <div className="gallery-list-wrap">
        <ul className="gallery-list-inner fxbox">
          {selectData.map((item, idx) => (
            <li key={idx}>
              <Link to="/Detail">
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGallery;
