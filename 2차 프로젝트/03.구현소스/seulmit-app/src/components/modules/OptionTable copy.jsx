import React, { useContext, useEffect, useState } from "react";
import { sCon } from "../pages/sCon";
import $ from "jquery";

//data
// props  값으로 외부에서 받아옴 : 옵션 테이블, 옵션 박스에서 공유하기 때문
// import { options, product } from "../data/product";

//module
import { addComma } from "../func/common_fn";
//css
import "../../css/cart_list.scss";
/////import area////////////////////////////

function OptionTable({ optData, selectedOpt, setSelectedOpt }) {

  console.log("테이블 setSelectedOpt:", setSelectedOpt);

  //콘텍스트 사용
  const myCon = useContext(sCon);

  //상태변수 영역
  //선택된 데이터 배열 저장
  const [selData, setSelData] = useState([]);
  //상태 리렌더링을 위한 상태변수
  const [force, setForce] = useState(false);

  //화면 랜더링 구역 /////////////////////////////////
    //카트 로컬스 에러시 빈배열 할당
    // useEffect(() => {
    //   try {
    //     setSelData(JSON.parse(myCon.localsCart || "[]")); // 빈 문자열일 경우 빈 배열 사용
    //   } catch (error) {
    //     console.error("로컬 스토리지 데이터 파싱 에러:", error);
    //     setSelData([]); // 에러 발생 시 빈 배열 설정
    //   }
    // }, [myCon.localsCart]);

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
        <tbody className="default-option">

        {selData.map((v, i) => (
              <tr key={i}>
                {/* 번호 */}
                <td>{i + 1}</td>

                {/* 상품명 */}
                <td>{v.value}</td>
                {/* 가격 */}
                <td>{addComma(v.price)}원</td>
                {/* 수량 */}
                <td className="cnt-part">
                  <div>
                    {/* 수량 입력 및 버튼 */}
                    <span>
                      <input
                        type="text"
                        className="item-cnt"
                        readOnly
                        defaultValue={v.cnt}
                        onBlur={() => {}}
                      />
                      {/* 반영버튼 */}
                      <button
                        className="btn-insert"
                        onClick={(e) => {
                          /// 1. 클릭시 실제 데이터 수량변경 반영하기
                          // 대상: selData -> 배열변환데이터
                          // i는 배열순번임!(map 돌때 i가 들어옴)
                          selData[i].cnt = $(e.currentTarget)
                            .siblings(".item-cnt")
                            .val();
                          console.log("수량업데이트:", selData);
                          // 2. 데이터 문자화하기 : 변경된 원본을 문자화
                          let res = JSON.stringify(selData);

                          // 3.로컬스 "cart-data"반영하기
                          localStorage.setItem("cart-data", res);

                          // 4. 카트리스트 전역상태변수 변경
                          myCon.setLocalsCart(res);

                          // 5. 반영버튼 숨기기
                          // $(e.currentTarget).css({width:"0"});
                          //-> 아래 6번은 리렌더링 하면 해결됨!
                          // 데이터변경 sync가 맞지 많는 경우가 생기게됨
                          //데이터값 변경에도 리렌더링이 안되는 이유:
                          //배열의 객체값이 변경되거나 배열 순서를 변경한 경우
                          //배열이 변경되었다고 체크되지 않음!
                          //따라서 이때 강제 리렌더링이 필요함
                          setForce(!force);

                          //6. 전체합계 다시 계산하기
                          // $(".total-num").text(addComma(totalFn()));
                        }}
                      >
                        반영
                      </button>
                      <button
                        className="btn-cancel"
                        onClick={(e) => {
                          $(e.currentTarget)
                            // .css({width:"0"})
                            .hide()
                            .prev() //반영버튼

                            // .css({width:"0"})
                            .hide()
                            .siblings("input")
                            .val(v.cnt);
                          //취소버튼 자신의 css를 변경하고(안보이게)
                          //이전버튼인 반영버튼도 안보이게 함, 형제요소중 input을 찾아
                          //기존값인 v.cnt를 넣는다!
                        }}
                      >
                        취소
                      </button>
                      <b
                        className="btn-cnt"
                        onClick={(e) => {
                          // 업데이트 대상(input박스)
                          let tg = $(e.currentTarget).siblings("input");

                          // 입력창의 blur이벤트 발생을 위해
                          // 강제로 포커스를 준다!
                          // tg.focus();

                          // 하위 클릭된 이미지 종류파악하기
                          // e.target으로 설정하여 하위요소인
                          // 이미지가 선택되게 해준다!
                          // e.currentTarget은 이벤트가 걸린
                          // 요소 자신이다!(비교할것!)
                          let btnAlt = $(e.target).attr("alt");
                          console.log(btnAlt);
                          // 증가감소 분기하여 숫자변경반영하기
                          if (btnAlt == "증가") {
                            // tg값을 읽어와서 1을 더한다!
                            tg.val(Number(tg.val()) + 1);
                          } //// if ///////
                          else if (btnAlt == "감소") {
                            // tg값을 읽어와서 1을 뺀다!
                            // 단, 1보다 작아지지 않게 한다!
                            tg.val(
                              Number(tg.val()) == 1 ? 1 : Number(tg.val()) - 1
                            );
                          } ///// else if ////////

                          // 클릭시 반영버튼 나타나기
                          $(e.currentTarget)
                            .siblings(".btn-insert")
                            .show()
                            .next()
                            .show();
                        }}
                      >
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
                  </div>
                </td>
                {/* 합계 */}
                <td>
                  <span className="sum-num1">
                    {addComma(v.price * (v.cnt ? v.cnt : 1))}
                  </span>
                  원
                  <input
                    className="sum-num2"
                    type="hidden"
                    defaultValue={v.price * (v.cnt ? v.cnt : 1)}
                  />
                </td>
                {/* 삭제 */}
                {i < 0 &&
                <>
                
                
                <td>
                  <button
                    className="cfn"
                    onClick={() => {
                      // confirm()의 "확인"클릭시 true
                      if (
                        window.confirm(
                          "선택항목을 삭제하시겠습니까?"
                        )
                      ) {
                        // console.log("삭제함!!!");
                        // console.log("현재객체:",selData);
                        // console.log("지울순번:",i);
                        // // splice 자체를 찍으면 지워진 요소가 찍힘
                        // console.log("지우기:",selData.splice(i,1));

                        // 지울 배열 순번은 map()에서 i로 들어옴
                        // 지울 배열은 selData임
                        // 1.데이터 지우기 :
                        selData.splice(i, 1);

                        // 2. 데이터 문자화하기 : 변경된 원본을 문자화
                        let res = JSON.stringify(selData);

                        // 3.로컬스 "cart-data"반영하기
                        localStorage.setItem("cart-data", res);

                        // 4. 카트리스트 전역상태변수 변경
                        myCon.setLocalsCart(res);

                        // 5. 데이터개수가 0이면 카트리스트
                        // 상태변수를 false로 변경하여
                        // 카트리스트 출력을 없앤다!
                        if (selData.length == 0) myCon.setCartSts(false);
                        
                        // let aa = [];
                        // aa.splice(지울순번,지울개수)
                      } //// if /////
                    }}
                  >
                    ×
                  </button>
                </td>
                </>
                
                
                }
              </tr>
            ))}

        </tbody>
        {/* 기본 옵션영역 */}
      </table>
      {/* 총합계 가격 */}
      <div className="total-price" style={{fontSize:"15px",marginBottom:"20px"}}>
        총<span style={{fontSize:"30px"}}>{addComma(selData.price)}</span>원
      </div>
    </>
  );
}

export default OptionTable;
