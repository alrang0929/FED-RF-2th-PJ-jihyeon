import React, { useContext } from "react";
import $ from "jquery";
import { sCon } from "../pages/sCon";

//data
import { product, options, notiImg } from "../data/product";
import { Link, useLocation } from "react-router-dom";

//modules
import OptionBox from "./OptionBox";
import OptionTable from "./OptionTable";
///////////////import area////////////////////////

function ShopCustomCont({ catName, products }) {
  const myCon = useContext(sCon);
const {state} = useLocation();

  //catName 어떻게 연계시킬지 고민해야될듯
  const selData = product[catName][state.product-1];
  console.log("텍스트 데이터 선택", selData, state.product);

  //로컬스토리지값 정의
  const idx = selData.idx;
  const category = catName;
  const tit = selData.tit;
  const price = selData.price;

  console.log(idx, category, tit, price);

  //////코드리턴구역//////////////////////////////////////
  return (
    <>
      <div className="info-wrap">
        <div className="info-area">
          {/* 1. desc wrap */}
          <div className="desc-wrap custum-data">
            <p className="eng-pdtit bt-padding20">{selData.engtit}</p>
            <h4 className="kor-pdtit bt-padding20">{selData.tit}</h4>
            <p className="desc bt-padding80">{selData.txt}</p>
            {/* 2.  아이콘 박스 */}
            <ul className="iconbx fx-box bt-padding20 gap10">
              <li className="share-icon">
                <Link to="">
                  <span className="material-symbols-outlined">share</span>
                </Link>
              </li>
              <li className="like-icon">
                <Link to="">
                  <span className="material-symbols-outlined icon-favorite">
                    favorite
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* desc wrap end */}
          {/* 3. option area */}
          <OptionBox />
          {/* 4. 옵션 선택 표시 리스트 */}
          {/* 테이블 컴포넌트 */}
          <OptionTable />
          {/* 5. btn area */}
          <div className="btn-wrap bt-padding80">
            <button
              className="button-nomal"
              onClick={() => {
                // [ 로컬스 카트 데이터 넣기 ]
                // 1. 로컬스 없으면 만들어라!
                if (!localStorage.getItem("cart-data")) {
                  localStorage.setItem("cart-data", "[]");
                } //// if /////

                
                // 2. 로컬스 읽어와서 파싱하기
                let locals = localStorage.getItem("cart-data");
                locals = JSON.parse(locals);
                // console.log(typeof locals);

                // 3. 기존 데이터 중 동일한 데이터 거르기
                // 파싱된 로컬스 데이터 중 idx항목을 검사하여
                // idx로 넣을 상품 idx와 같은 것이 있으면
                // 메시지와 함께 리턴처리하여 입력을 막아준다!
                
                // [ 방법1 ]
                // 배열 중복검사시 사용하는 메서드: some()
                // -> some()은 중복데이터 발생시 true리턴
                // 시켜서 구분해준다!
                // let retSts = locals.some(v=>{
                  //   if(v.idx==idx) return true;
                  // });
                  
                  // [ 방법2 ]
                  // 배열.includes(비교값)
                  // 주의사항: 배열값이 단일값이어야 비교가된다!
                  // 예) let aa = [11,22,33]
                  // aa.includes(22) -> 있으면 결과 true!
                  
                  
                  console.log(locals.length);
                  if(locals.length > 0){
                    // idx값만 모아서 다른 배열만들기
                    let newLocals = locals.map((v) => v.idx);
                    console.log("idx새배열:", newLocals);
                    
                    // // 인클루드 비교
                    let retSts = newLocals.includes(idx);
                    
                    console.log("중복상태:", retSts);
                    if (retSts) {
                      // 메시지 보이기
                      alert("이미 선택하신 상품입니다!");
                      // 함수 나가기
                      return;
                    } ///// if //////
                    
                  }
                  
                  //   /************************** 
                  //   [데이터 구조정의]
                  //   1. idx : 상품고유번호
                  //   2. category : 카테고리
                  //   3. tit : 상품이름
                  //   4. cnt : 상품개수
                  //   5. price : 상품가격
                  // **************************/
                  // 4.로컬스에 객체 데이터 추가하기
                  locals.push({
                    idx: idx,
                    category: category,
                    tit: tit,
                    cnt: $("#sum").val(),
                    price: price,
                  });

                // 로컬스에 문자화하여 입력하기
                localStorage.setItem("cart-data", JSON.stringify(locals));

                // 로컬스 카트데이터 상태값 변경!
                myCon.setLocalsCart(localStorage.getItem("cart-data"));
                // 카트리스트 생성 상태값 변경!
                myCon.setCartSts(true);
              }}
            >
              장바구니 추가
            </button>
            <button className="button-main L-margin10">구매하기</button>
          </div>

          {/* 6. promotion area */}
          <div className="promotion-bx">
            <div className="title bt-padding20">Promotio</div>
            <div className="desc">
              5월 프로모션 | 자세한 사항은 PROMOTION 페이지에서 확인 가능합니다
              - 구매금액대별 슬밋 본품 증정 이벤트 진행중
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCustomCont;
