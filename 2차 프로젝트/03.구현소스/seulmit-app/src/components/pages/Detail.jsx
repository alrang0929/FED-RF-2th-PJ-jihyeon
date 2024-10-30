//슬밋PJ 상품 디테일 페이지

import React, { useContext, useEffect } from "react";

//css
import "../../css/shop.scss";
///module
import Category from "../modules/Category";
import SwiperPrdList from "../plugin/Swiper_prdList";
import ShopCustomCont from "../modules/ShopCustomCont";
import SwiperThumbsList from "../plugin/Swiper_ThumbsList";
// import TabBox from "../modules/Tabbox";

import { sCon } from "./sCon";

//data
import { product, notiImg } from "../data/product";
import { useParams, useLocation } from "react-router-dom";

////////import area//////////////////////////////////

export default function Detail() {
  
  const myCon = useContext(sCon);
  //state값
  // const initialProduct = product[Object.keys(product)[0]][0];
  // const nav = useLocation();
  // const { productId } = useParams(); // url 피라미터에서 상품 id 로드
  const { state } = useLocation(); // state에서 상품 데이터 가져오기

 // 전달값 정리 /////////
 // 1. 카테고리
 let topCat = state.topcat;
 if(topCat == "home") topCat = "homefragrance";
 // 2. 상품순번
 let prodIdx =  state.product;
 // 3. 


  // console.log(topCat);
  // console.log("요기~~prodIdx:",prodIdx);
  // console.log(product[topCat]);

  // engtit: v.engtit, // 상품 영문 타이틀
  //                   tit: v.tit, // 한글 타이틀
  //                   txt: v.txt, // 상세내용
const selData =
    product[topCat].find((item) => 
    item.idx === prodIdx); //product에서 상품 데이터 찾기

  const notiData = notiImg;


  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  ///////코드리턴구역
  return (
    <>
      <section id="product-cont" className="cont-box">
        {/* <Category onCat={myCon.setSelCat} selCat={myCon.selCat} /> */}
        <div className="top-Cont fx-box">
          {/*1. 왼쪽 배너: 상품 썸네일 */}
          <section className="thumb-wrap">
          <SwiperThumbsList catName={topCat} seq={selData.idx} cnt={selData.thumbCnt} num={prodIdx} />
          </section>
          {/*2. 오른쪽 배너: 상품 정보 */}
          <ShopCustomCont catName={topCat} products={product[myCon.selCat]}/>
        </div>
      </section>
      {/* top cont end */}

      <section className="detail-wrap">
        {/* 3. 상세페이지 (tab) */}
        <div className="tab-btn-wrap fx-box">
          <button>detail</button>
          <button>info</button>
        </div>
        <div className="detail-box">
          <img src={process.env.PUBLIC_URL+notiData[1].isrc} alt={notiData.tit} />
          {selData.detail.map((v, i) => (
            <img src={process.env.PUBLIC_URL+v} alt={selData.tit} key={i} />
          ))}
          {/* <TabBox/> */}
        </div>
      </section>

      {/*5. 추천 아이템 */}

      <section id="prd-list" style={{ overflow: "hidden" }}>
        <div className="desc-box">
          <div className="tit">lorem ipsum</div>
          <span className="desc">
            로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나
          </span>
        </div>
        <SwiperPrdList />
      </section>
    </>
  );
}
