// AMR pj - detail page
import React from "react";
import "./css/detail.scss";

//더미데이터
import newsData from "../data/news_data";
function Detail(props) {
  /********************************************************** 


**********************************************************/

  const testData = newsData[0];
  // 코드리턴구역//////////////////////////////////////////////////
  return (
    <>
      <div className="detail-page">
        <div className="title-wrap fxbox">
          {/* 1. title */}
          <div className="title">{testData.title}</div>
          {/* 2. data-wrap (category, date) */}
          <div className="data-wrap">
            <span className="category">{testData.category}</span>
            <span className="bar">┃</span>
            <span className="date">{testData.date}</span>
          </div>
        </div>

<div className="contents-wrap">
        {/* 3. 요약 */}
        <div className="annotation">
            {testData.annotation.split("^").map((item,i)=>
            <span key={i}>-{item}</span>
            )}
        </div>
        <figure className="img-wrap">
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + testData.contents.isrc}
              // {process.env.PUBLIC_URL+testData.contents.isrc}
              alt={testData.title}
            />
          </div>
          {/* 4. img-wrap */}
          <figcaption>{testData.contents.figure}</figcaption>
        </figure>
        {/*5. 내용 */}
        <div className="desc">
          {testData.contents.desc.split("^").map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Detail;
