// shop 페이지 컴포넌트 ///
//데이터 임시호출
import { bestItemData } from "../data/slide_item_data";
import { sCon } from "./sCon";
//CSS
import "../../css/shop.scss";
import Category from "../modules/Category";
import { Link } from "react-router-dom";
import ShopPdList from "../modules/ShopPdList";
import { product } from "../data/product";
import { useContext, useState } from "react";
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
      <div className={`sub-header bg1 cbx bgi`}>
        <div className="title">
          <div className="icon">
            <img src="/images/icon-sim-black.svg" alt="" />
          </div>
          <h3>NOTICE</h3>
          <span>슬밋의 공지사항을 확인하세요</span>
        </div>
      </div>

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
