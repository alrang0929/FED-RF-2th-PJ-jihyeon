//서치박스 내용물
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

//숫자 콤마 추가
import { BoxCloseFn, addComma } from "../func/common_fn";

//css
import "../../css/cart_list.scss";
import { sCon } from "../pages/sCon";
//////import area/////////////////////////////////////////

function CartList() {
  //콘텍스트 사용
  const myCon = useContext(sCon);
  //로컬스 데이터 가져오기
  const selData = JSON.parse(myCon.localsCart);
  //닫을 대상 선정을 위한 참조변수
  const tgRef = useRef(null);

  const closeHandler = (tgRef, selData)=>{
    BoxCloseFn(tgRef, selData)
  };

  useEffect(() => {
    console.log("tgRef:", tgRef);
  });

  //상태변수///////////////////////////////////////

  ///////코드리턴구역 /////////////////////////////
  return (
    <>
      <div className="cart-list" ref={tgRef}>
        {/* 닫기버튼 */}
        <button className="close-btn" onClick={()=>{closeHandler(tgRef, selData)}}>
          <span className="icon-img material-symbols-outlined search-btn">
            close
          </span>
        </button>
      </div>
      <div className="blocking-bg"></div>
    </>
  );
}

export default CartList;
