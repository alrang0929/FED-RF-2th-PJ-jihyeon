import React, { useContext, useEffect, useRef, useState } from "react";
import { sCon } from "../pages/sCon";
import $ from "jquery";

//data
// props 값으로 외부에서 받아옴 : 옵션 테이블, 옵션 박스에서 공유하기 때문
// import { options, product } from "../data/product";

//module
import { addComma } from "../func/common_fn";
//css
import "../../css/cart_list.scss";
/////import area////////////////////////////

function OptionTable({
  selData,
  optData,
  selectedOpt,
  setSelectedOpt,
  selOptData,
  setSelOptData,
}) {
  //OptionTable 컴포넌트 역할: potionBox 에서 값 전달받아 (selOptData,
  //setSelOptData) 상세페이지 상품 데이터 + 옵션 추가 데이터 합산하여
  // ShopCustomCont 컴포넌트에서 장바구니 버튼 클릭시 localCart 에 저장

  // props list
  //1. selData : 선택된 제품 데이터(현 상세페이지 상품)
  //2. optData : 데이터
  //3. selectedOpt: 전역변수, 데이터 저장 및 전달
  //4. setSelectedOpt : 전역변수, 상태 감시하다 값 변경되면 로컬에 저장
  //5. selOptData, setSelOptData : 변경된 데이터를 담아 전달

  // console.log("테이블 selOptData:", selOptData);
  // console.log("테이블 setSelectedOpt 값은?:", selectedOpt.value);
  // console.log("선택 데이터", selData);

  //참조변수 리스트
  //1. 가격정보 저장 참조변수
  const priceRef = useRef([]);
  //2. 각 옵션의 수량을 저장하는 참조변수
  const optRef = useRef([]);
  // console.log("참조변수 안에 뭐있음?2", priceRef.current);


  //화면 랜더링 구역(한번만)//////////////////////////////////
  useEffect(() => {
    //1. 대상선정

    //1)수량 대상요소
    const sum = $(".sum");
    //2) 증감 버튼 // 일단 수량 체크부터하고..
    const numBtn = $(".chg_num img");
    console.log("증감 버튼 잡힘?", numBtn);
    console.log("증감 버튼 몇개?", numBtn.length);
    //3) 총합계
    const total = $("#total");

    //4) price 값 숫자로 변환 후 each 문 돌아 priceNum 에 배열 담기
    $(".price-num").each((i, price) => {
      //(1) 원본 데이터 가져오기
      const priceText = $(price).text();
      console.log("값 확인2", priceText);

      //(2) priceText 숫자형으로 재할당
      const priceNum = parseInt(priceText.replace(/[^0-9]/g, ""), 10); // 쉼표 제거하고 숫자로 변환

      //(3) 변환 시킨 priceNum을 참조변수 priceRef에 담기
      priceRef.current[i] = priceNum;

    }); // each
    console.log("참조변수 안에 뭐있음?3", priceRef.current);
    const refNum = priceRef.current;

    //2. 수량증가 이벤트 함수
    const numBtnFn = ()=>{
      numBtn.off("click").on("click", (e) => {
        //1) 이미지 순번 구분 (0 증가 / 1 감소)
        let seq = $(e.currentTarget).index();
        let pseq = $(e.currentTarget).parents("tr").index();
        console.log("대상 잡힘?", seq, e.currentTarget,pseq);
  
        //2-1. 옵션별 수량 곱한 후 합산하여 total 값에 반영
  
        optRef.current[pseq] = Number(sum.eq(pseq).val());
        $(e.currentTarget).parent().prev("input").val(seq == 0 ? ++optRef.current[pseq] : optRef.current[pseq] == 1 ? 1 : --optRef.current[pseq]);
        console.log("현재 숫자", optRef.current[pseq]);
  
        console.log("refNum 값 :", refNum);
        //5) priceNum에 담긴 배열값들을 전부 더해서 resNum 에 담기
        const resPrice = refNum.reduce((acc, cur) => acc + cur * optRef.current[pseq], 0);
        total.text(addComma(resPrice));
        console.log("total값은?", total);
      }); //click

    };
    numBtnFn();
  });



  //코드리턴구역/////////////////////////////////////////////
  return (
    <>
      <table>
        {/* 헤더 */}
        <thead style={{ display: "none" }}>
          <tr>
            <th scope="col">상품명</th>
            <th scope="col">상품수</th>
            <th scope="col">가격</th>
            <th scope="col">삭제</th>
          </tr>
        </thead>
        <tbody>
          {/* 상세페이지 상품 가격 */}
          <tr className="default-option">
            {/* 1. 옵션 이름 */}
            <td>{selData.tit}</td>
            {/* 2. 옵션 수량 */}
            <td className="cnt-part">
              <span>
                <input type="text" className="sum" defaultValue="1" />
                <b className="chg_num">
                  <img
                    src={process.env.PUBLIC_URL + "/images/cnt_up.png"}
                    alt="증가"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/cnt_down.png"}
                    alt="감소"
                  />
                </b>
              </span>
            </td>
            {/* 3. 옵션 가격 */}
            <td>
              <span
                className="price-num"
                ref={(ele) => (priceRef.current[0] = ele)}
              >
                {addComma(selData.price)}
              </span>
              원
            </td>
          </tr>
          {/* {value: "쇼핑백 추가", price: "2000", IsSoldOut: false} */}
          {selOptData.length > 0 &&
            selOptData.map((v, i) => (
              <tr className="add-option" key={i}>
                {/* 1. 옵션 이름 */}
                <td>{v.value}</td>
                {/* 2. 옵션 수량 */}
                <td className="cnt-part">
                  <span>
                    <input type="text" className="sum" defaultValue="1" />
                    <b className="chg_num">
                      <img
                        src={process.env.PUBLIC_URL + "/images/cnt_up.png"}
                        alt="증가"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/images/cnt_down.png"}
                        alt="감소"
                      />
                    </b>
                  </span>
                </td>
                {/* 3. 옵션 가격 */}
                <td>
                  <span
                    className="price-num"
                    ref={(ele) => (priceRef.current[i + 1] = ele)}
                  >
                    {addComma(v.price)}
                  </span>
                  원
                </td>
              </tr>
            ))}
        </tbody>
        {/* 기본 옵션영역 */}
      </table>
      {/* 총합계 가격 */}
      <div
        
        className="total-price"
        
      >
        총<span id="total">{addComma(selData.price)}</span>원
      </div>
    </>
  );
}

export default OptionTable;
