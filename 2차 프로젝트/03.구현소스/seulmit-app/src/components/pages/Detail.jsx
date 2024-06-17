//슬밋PJ 상품 디테일 페이지

import React from "react";
//css
import "../../css/shop.scss";
///module
import Category from "../modules/Category";
import SwiperPrdList from "../plugin/Swiper_prdList";
import ShopCustomCont from "../modules/ShopCustomCont";
import SwiperThumbsList from "../plugin/Swiper_ThumbsList";

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
          <SwiperThumbsList catName="face"/>
          {/*2. 오른쪽 배너: 상품 정보 */}
          <ShopCustomCont catName="face"/>
        </div>
        {/* top cont end */}

      </section>
      {/*5. 추천 아이템 */}
      <section id="prd-list" style={{overflow:"hidden"}}>
        <SwiperPrdList />
      </section>
    </>
  );
}
