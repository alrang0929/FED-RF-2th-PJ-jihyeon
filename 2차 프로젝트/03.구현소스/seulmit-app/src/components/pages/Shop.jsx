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
import Pagination from "../modules/Pagination";
import { productListState } from "../modules/atom";

/////import area/////////////////////////////////////////////////

export default function Shop() {
  //콘텍스트 사용
  const myCon = useContext(sCon);
  //activeCat = 클릭된 카테고리
  const activeCat = (cat) => {
    myCon.setSelCat(cat); // 클릭된 카테고리로 상태 업데이트
  };

  const [productList, setProductList] = useRecoilState(productListState); // Recoil 상태 사용
  // Recoil 상태 사용
  const [page, setPage] = useState(1);
  const listPerPage = 4;
  const totalPage = Math.ceil(productList.length / listPerPage);

  useEffect(() => {
    setProductList(product[myCon.selCat]); // 초기 상품 목록 설정
}, [myCon.selCat]);

  //// 코드 리턴구역 //////////////
  return (
    <>
      <SubTitle  selCat="SHOP"/>
      <section id="sell-pd-list" className="cont-box">
        {/* 메뉴 리스트 */}
        <Category onCat={(cat) => activeCat(cat)} selCat={myCon.selCat} />
        {/* 상품리스트 컴포넌트*/}
        <ShopPdList products={productList} />
        {/* <ShopPdList products={productList} /> */}
        {/* page Num */}
        <Pagination
          totalPage={totalPage}
          limit={listPerPage}
          page={page}
          setPage={setPage}
          productList={productList} // productList 상태 전달
          setProductList={setProductList} // setProductList 함수 전달
        />
      </section>
    </>
  );
} /////////// Shop /////////////////////
