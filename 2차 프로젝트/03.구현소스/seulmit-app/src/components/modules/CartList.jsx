//서치박스 내용물
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

//숫자 콤마 추가
import { addComma } from "../func/common_fn";

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
                {/* 장바구니 시작 */}
                <caption>Cart List</caption>
                {/* 테이블 상단영역 */}
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>상품</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>합계</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                {/* 테이블 메인영역 */}
                <tbody>
                  <tr>
                    <td>
                      <div 
                      className="scbar"
                      style={{
                        overflowY:"auto",
                        height:"60vh",
                        width:"100%",
                      }}
                      >
                        {/* 내부 스크롤되는 테이블 */}
                        <table
                        style={{
                          margin:"0",
                          width:"100%",
                        }}
                        >
                          <tbody>
                        {/* 
                        카트 데이터 연동
                          idx: 번호

                        */}
                      

                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>

            </div>
            <div className="blocking-bg"></div>
        </>
    );
}

export default CartList;
