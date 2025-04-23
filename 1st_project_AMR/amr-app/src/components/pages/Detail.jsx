// AMR pj - detail page
import React from "react";
import "./css/detail.scss";

//더미데이터
import { useLocation } from "react-router-dom";
import MoveButton from "../modules/Move_button";
function Detail(props) {

  /********************************************************** 


**********************************************************/
const location = useLocation();
const { selectedData } = location.state || {}; // state가 없을 경우 빈 객체 처리

  // 코드리턴구역//////////////////////////////////////////////////
  return (
    <>
        <div className="detail-page">
      <div className="contents-wrap">
        <div className="title-wrap fxbox">
          {/* 1. title */}
          <div className="title">{selectedData.title}</div>
          {/* 2. data-wrap (category, date) */}
          <div className="data-wrap">
            <span className="category">{selectedData.category}</span>
            <span className="bar">┃</span>
            <span className="date">{selectedData.date}</span>
          </div>
        </div>


        {/* 3. 요약 */}
        <div className="annotation">
            {selectedData.annotation.split("^").map((item,i)=>
            <span key={i}>-{item}</span>
            )}
        </div>
        <figure className="img-wrap">
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + selectedData.contents.isrc}
              // {process.env.PUBLIC_URL+selectedData.contents.isrc}
              alt={selectedData.title}
            />
          </div>
          {/* 4. img-wrap */}
          <figcaption>{selectedData.contents.figure}</figcaption>
        </figure>
        {/*5. 내용 */}
        <div className="desc">
          {selectedData.contents.desc.split("^").map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
      <MoveButton text={'목록으로 돌아가기'} link={'/News'}/>
      </div>
    </>
  );
}

export default Detail;
