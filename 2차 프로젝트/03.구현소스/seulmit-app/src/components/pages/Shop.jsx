// shop 페이지 컴포넌트 ///
import { Link } from "react-router-dom";
import { product } from "../data/product";
import { useContext, useEffect, useState } from "react";
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
//컨텍스트
import { sCon } from "./sCon";
//CSS
import "../../css/shop.scss";

//module
import Category from "../modules/Category";
import ShopPdList from "../modules/ShopPdList";
import SubTitle from "../modules/SubTitle";
import  Pagination  from "../modules/Pagination";

/////import area/////////////////////////////////////////////////

export default function Shop({ totalPage, limit, page, setPage }) {
  //콘텍스트 사용
  const myCon = useContext(sCon);
  //activeCat = 클릭된 카테고리
  const activeCat = (cat) => {
    myCon.setSelCat(cat); // 클릭된 카테고리로 상태 업데이트
  };

  //페이지 셋팅
  
  ////화면리렌더링 구역/////////////////////////////
  //페이지네이션 된 상품 목록 서버 업데이트 (page 업데이트 될때 마다 새로운 상품 데이터 가져옴)
  //데이터: 로컬 내 product 배열
  useEffect(() => {

    //1. listPerPage: 한페이지당 노출할 페이지 수
    const listPerPage = 10;

    const startIdx = (page - 1) * listPerPage;
    const endIdx = startIdx + listPerPage;
    //카데고리에 해당되는 배열을 가져와 시작, 끝idx 계산
    const slicedProducts = product[myCon.selCat].slice(startIdx, endIdx);
  
    //자른 배열을 productList상태변수에 전달하여 업데이트
    setProductList(slicedProducts);

    //의존성에 product 데이터 추가 : 데이터 변경시 페이지 리스트 리렌더링
    }, [page, myCon.selCat, product]);


  //// 코드 리턴구역 //////////////
  return (
    <>
      <SubTitle />
      <section id="sell-pd-list" className="cont-box">
        {/* 메뉴 리스트 */}
        <Category onCat={(cat) => activeCat(cat)} selCat={myCon.selCat} />
        {/* 상품리스트 컴포넌트*/}
        <ShopPdList products={product[myCon.selCat]} />
        {/* page Num */}
        <Pagination
          totalPage={totalPage}
          limit={10}
          page={page}
          setPage={setPage}
        />
      </section>
    </>
  );
} /////////// Shop /////////////////////
