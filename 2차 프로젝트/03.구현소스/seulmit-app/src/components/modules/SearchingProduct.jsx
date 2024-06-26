//슬밋pj 검색결과 리스트 컴포넌트 ////////////////

import React from "react";
import { Link } from "react-router-dom";

//css
import "../../css/search.scss";
import SwiperPrdList from "../plugin/Swiper_prdList";
///import area//////////////////////////////

function SearchingProduct({ dt }) {
  //dt : 검색배열 데이터
  //total = 검색된 배열데이터 개수
  const total = dt.length;
  console.log("데이터수", total);

  //dt: Searching에서 결과값 전달받음
  return (
    <>
      {/* case1. 데이터 개수 有 */}
      {total > 0 && (
        <ul className="plist">
          {dt.map((v, i) => (
            <li key={i}>
              <Link
                to="/detail"
                state={{
                  engtit: v.engtit,
                  tit: v.tit,
                  txt: v.txt,
                }}
              >
                <div className="desc-wrap">
                  <div className="eng-pdtit">{v.engtit}</div>
                  <div className="kor-pdtit">{v.tit}</div>
                  <div className="desc">{v.txt}</div>
                </div>
                <div className="img-wrap">
                  <div className="imgbx">
                    <img
                      src={`/images/product/${v.category}/${v.img}.jpg`}
                      alt={`"${v.tit}"`}
                    />
                  </div>
                  <div className="blur">
                    <img
                      src={`/images/product/${v.category}/${v.img}_detail.jpg`}
                      alt={`"${v.tit}"`}
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* case2. 데이터 없는 경우 */}
      {total == 0 && (
        <>
          <h2>검색 결과가 존재하지 않습니다.</h2>
          <section id="prd-list">
            <div className="desc-box">
              <div className="tit">lorem ipsum</div>
              <span className="desc">
                로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나
              </span>
            </div>
            {/* 베스트상품 리스트 swiper : Swiper_prd-list */}
            <SwiperPrdList />
          </section>
        </>
      )}
    </>
  );
}

export default SearchingProduct;
