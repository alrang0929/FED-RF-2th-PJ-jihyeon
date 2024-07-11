// shop 페이지 컴포넌트 ///
import { Link } from "react-router-dom";
import { product } from "../data/product";
import { useContext, useState } from "react";
//컨텍스트
import { sCon } from "./sCon";
//CSS
import "../../css/shop.scss";

//module
import Category from "../modules/Category";
import ShopPdList from "../modules/ShopPdList";
import SubTitle from "../modules/SubTitle";
/////import area/////////////////////////////////////////////////

export default function Shop() {
  const myCon = useContext(sCon);


  //activeCat = 클릭된 카테고리
  const activeCat = (cat) =>{
    myCon.setSelCat(cat); // 클릭된 카테고리로 상태 업데이트
  }


  //// 코드 리턴구역 //////////////
  return (
    <>
    <SubTitle/>
      <section id="sell-pd-list" className="cont-box">
        {/* 메뉴 리스트 */}
          <Category onCat={(cat)=>activeCat(cat)} selCat={myCon.selCat}/>
        {/* 상품리스트 컴포넌트*/}
        <ShopPdList products={product[myCon.selCat]}/>
        {/* page Num */}
        <div className="page-num fx-box">
          <div className="prev">
            <span className="icon-img material-symbols-outlined">
              chevron_left
            </span>
          </div>
          <ul className="fx-box">
            <li className="select-ef">
              <Link to="">1</Link>
            </li>
            <li>
              <Link to="">2</Link>
            </li>
            <li>
              <Link to="">3</Link>
            </li>
            <li>
              <Link to="">4</Link>
            </li>
            <li>
              <Link to="">5</Link>
            </li>
          </ul>
          <div className="next">
            <span className="icon-img material-symbols-outlined">
              chevron_right
            </span>
          </div>
        </div>
      </section>
    </>
  );
} /////////// Shop /////////////////////
