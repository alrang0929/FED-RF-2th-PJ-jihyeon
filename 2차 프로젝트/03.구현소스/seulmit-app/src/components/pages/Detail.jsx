//슬밋PJ 상품 디테일 페이지

import React from "react";
//css
import "../../css/shop.scss";
///module
import Category from "../modules/Category";
import SwiperPrdList from "../plugin/Swiper_prdList";
import ShopCustomCont from "../modules/ShopCustomCont";

//data

////////import area//////////////////////////////////

export default function Detail() {
  ///////코드리턴구역
  return (
    <>
      <section id="product-cont" className="cont-box">
        <Category />
        <div className="top-Cont fx-box">
          {/*1. 왼쪽 배너: 상품 썸네일 */}
          <div className="imgbx">
            <img
              src="/images/product/skin/skin_MistSolSoul.jpg"
              alt="단잠 필로우 미스트 소울 던 50ml"
            />
          </div>
          {/*2. 오른쪽 배너: 상품 정보 */}
          <ShopCustomCont/>
        </div>
        {/* top cont end */}
        {/*4. 썸네일 미리보기 */}
        <div className="tumb-area">
          <ul className="fx-box">
            <li>
              <img
                src="/images/product/skin/skin_MistSolSoul.jpg"
                alt="단잠 필로우 미스트 소울 던 50ml"
              />
            </li>
            <li>
              <img
                src="/images/product/skin/skin_MistSolSoul.jpg"
                alt="단잠 필로우 미스트 소울 던 50ml"
              />
            </li>
            <li>
              <img
                src="/images/product/skin/skin_MistSolSoul.jpg"
                alt="단잠 필로우 미스트 소울 던 50ml"
              />
            </li>
          </ul>
        </div>
        <div className="tap-cont"></div>
      </section>
      {/*5. 추천 아이템 */}
      <section id="prd-list">
        <SwiperPrdList />
      </section>
    </>
  );
}
