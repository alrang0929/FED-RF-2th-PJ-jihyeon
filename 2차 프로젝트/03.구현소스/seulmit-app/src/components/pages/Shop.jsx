// shop 페이지 컴포넌트 ///
import { Link } from "react-router-dom";
import { product } from "../data/product";
import { useContext, useEffect, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
//컨텍스트
import { sCon } from "./sCon";
//CSS
import "../../css/shop.scss";

//module
import Category from "../modules/Category";
import ShopPdList from "../modules/ShopPdList";
import SubTitle from "../modules/SubTitle";
// import Pagination from "../modules/Pagination";
// import { productListState } from "../modules/atom";

/////import area/////////////////////////////////////////////////

export default function Shop() {
  //콘텍스트 사용
  const myCon = useContext(sCon);

  //activeCat = 클릭된 카테고리
  const activeCat = (cat) => {
    myCon.setSelCat(cat); // 클릭된 카테고리로 상태 업데이트
  };

  //// 코드 리턴구역 //////////////
  return (
    <>
      <SubTitle selCat="SHOP" />
      <section id="sell-pd-list" className="cont-box">
        {/* 메뉴 리스트 */}
        <Category onCat={(cat) => activeCat(cat)} selCat={myCon.selCat} />
        {/* 상품리스트 컴포넌트*/}
        <ShopPdList products={product[myCon.selCat]} />
        {/* 페이지네이션 */}
        {/* {pageCount > 0 && (
          <Pagination
            pageCount={Math.max(1, pageCount - 1)}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        )} */}
      </section>
    </>
  );
} /////////// Shop /////////////////////
