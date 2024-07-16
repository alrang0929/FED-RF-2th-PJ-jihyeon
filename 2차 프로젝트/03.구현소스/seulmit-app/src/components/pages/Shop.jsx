// shop 페이지 컴포넌트 ///
import { Link } from "react-router-dom";
import { product } from "../data/product";
import { useContext, useEffect, useState, } from "react";
//컨텍스트
import { sCon } from "./sCon";
//CSS
import "../../css/shop.scss";

//module
import Category from "../modules/Category";
import ShopPdList from "../modules/ShopPdList";
import SubTitle from "../modules/SubTitle";
import { Pagination } from "../modules/Pagination";

/////import area/////////////////////////////////////////////////

export default function Shop() {
  //콘텍스트 사용
  const myCon = useContext(sCon);
  //activeCat = 클릭된 카테고리
  const activeCat = (cat) => {
    myCon.setSelCat(cat); // 클릭된 카테고리로 상태 업데이트
  };
  
  const [productList, setProductList] = useRecoilState(productListSts); //상품 데이터 목록
  const [page, setPage] = useState(1); //현재 페이지
  const listPerPage = 10; //페이지당 상품 개수
  const totalPage = Math.ceil(productList.length / listPerPage); // 전체 페이지 수
  //페이지 셋팅
  const ProductList = () => {


    //페이지네이션 된 상품 목록 서버 업데이트 (page 업데이트 될때 마다 새로운 상품 데이터 가져옴)
    useEffect(() => {
      //(async () => { ... })(); : 
      //즉시 실행함수 ()=>{}(),
      (async () => {
        const result = await Api.get(
          `products?location = ${location}&search =${searchInput}&offset=${
            (page - 1) * listPerPage
          }&count = ${listPerPage}`
        );
        setProductList({
          length: result.data.length,
          data: result.data.products,
        });
      })(); //////async///////////////
    }, [page]);
  }; /////ProductList///////////////////////

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
