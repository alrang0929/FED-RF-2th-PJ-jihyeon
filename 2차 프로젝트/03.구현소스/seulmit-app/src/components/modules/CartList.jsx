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
    //닫기 선정을 위한 참조변수
    const tgRef = useRef(null);

    //닫기 기능 함수
    const BoxCloseFn = ({ tg, selData }) => {
        //tg : 닫기 대상
        //selData : 초기화 데이터 대상
        //대상선정
            $(".blocking-bg").fadeOut(200);
            $(tg.current).stop().animate(
                {
                    right: "-72vw",
                },
                500
            );
    }; /////BoxCloseFn
    useEffect(() => {
        console.log("tgRef:", tgRef);
    });

    //상태변수///////////////////////////////////////

    ///////코드리턴구역 /////////////////////////////
    return (
        <>
            <div className="cart-list" ref={tgRef}>
                {/* 닫기버튼 */}
                <button
                    className="close-btn"
                    onClick={()=>{BoxCloseFn({ tg: tgRef, selData })}}
                >
                    <span className="icon-img material-symbols-outlined search-btn">
                        close
                    </span>
                </button>
                <h3>장바구니</h3>
                
            </div>
            <div className="blocking-bg"></div>
        </>
    );
}

export default CartList;
