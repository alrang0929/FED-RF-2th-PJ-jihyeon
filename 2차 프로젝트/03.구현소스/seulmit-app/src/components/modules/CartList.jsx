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

    //상태 리렌더링을 위한 상태변수
    const [force, setForce] = useState(false);

    //로컬스 데이터 가져오기
    const selData = JSON.parse(myCon.localsCart);
    console.log("카트로컬스", selData);

    //전체 데이터 개수
    const dataCnt = selData.length;

    // 총합계 함수///////////////
    const totalFn = () => {
        //합계금액은 모든 합계 히든필드 값을 더한다
        //제이쿼리 each 사용

        let result = 0;
        $(".snm-num2").each((idx, ele) => {
            result += Number($(ele).val());
        });
        // 호출한 곳에 합계리턴
        return result;
    }; //////totalFn

    // 화면랜더링 구역 : dataCnt의존성, 의존성 추가! 강제 리렌더링 상태변수(force) 등록/////////
    useEffect(() => {
        $(".total-num").text(addComma(totalFn()));
    }, [dataCnt, force]);

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
                    onClick={() => {
                        BoxCloseFn({ tg: tgRef, selData });
                    }}
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
                                    overflowY: "auto",
                                    height: "60vh",
                                    width: "100%",
                                }}
                            >
                                {/* 내부 스크롤되는 테이블 */}
                                <table
                                    style={{
                                        margin: "0",
                                        width: "100%",
                                    }}
                                >
                                    <tbody>
                                        {/* 
                        카트 데이터 연동
                          idx: 번호
                          item: 상품(이미지)
                          tit: 상품명
                          price : 가격
                          cnt : 수량
                          total: 합계
                          del : 삭제
                        */}
                                        {selData.map((v, i) => (
                                            //상품번호
                                            <tr key={i}>
                                                {/* 번호 */}
                                                <td>{i + 1}</td>
                                                {/* 상품이미지 */}
                                                <td className="img-bx">
                                                    <img
                                                        src={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            `/images/shop/${
                                                                v.category
                                                            }/${
                                                                v.category
                                                            }_${`${
                                                                i + 1
                                                            }`.padStart(
                                                                2,
                                                                "0"
                                                            )}.jpg`
                                                        }
                                                        alt="item"
                                                    />
                                                </td>

                                                <td>{v.tit}</td>
                                                <td>{addComma(v.price)}원</td>
                                                <td className="cnt-part">
                                                    <div>
                                                        <span>
                                                            <input
                                                                type="text"
                                                                className="item-cnt"
                                                                readOnly
                                                                defaultValue={
                                                                    v.cnt
                                                                }
                                                                onBlur={() => {}}
                                                            />
                                                            {/* 반영버튼 */}
                                                            <button
                                                                className="btn-insert"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    selData[
                                                                        i
                                                                    ].cnt = $(
                                                                        e.currentTarget
                                                                    )
                                                                        .siblings(
                                                                            ".item-cnt"
                                                                        )
                                                                        .val();
                                                                    //데이터 문자화
                                                                    let res =
                                                                        JSON.stringify(
                                                                            selData
                                                                        );

                                                                    //3. 로컬스 "cat-data" 반영하기
                                                                    localStorage.setItem(
                                                                        "cart-data",
                                                                        res
                                                                    );
                                                                    setForce(
                                                                        !force
                                                                    );
                                                                }}
                                                            >
                                                                반영
                                                            </button>
                                                            <button
                                                                className="btn-cancel"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    $(
                                                                        e.currentTarget
                                                                    )
                                                                        // .css({width:"0"})
                                                                        .hide()
                                                                        .prev() //반영버튼

                                                                        // .css({width:"0"})
                                                                        .hide()
                                                                        .siblings(
                                                                            "input"
                                                                        )
                                                                        .val(
                                                                            v.cnt
                                                                        );
                                                                    //취소버튼 자신의 css를 변경하고(안보이게)
                                                                    //이전버튼인 반영버튼도 안보이게 함, 형제요소중 input을 찾아
                                                                    //기존값인 v.cnt를 넣는다!
                                                                }}
                                                            >
                                                                취소
                                                            </button>
                                                            <b
                                                                className="btn-cnt"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    // 업데이트 대상(input박스)
                                                                    let tg = $(
                                                                        e.currentTarget
                                                                    ).siblings(
                                                                        "input"
                                                                    );

                                                                    // 입력창의 blur이벤트 발생을 위해
                                                                    // 강제로 포커스를 준다!
                                                                    // tg.focus();

                                                                    // 하위 클릭된 이미지 종류파악하기
                                                                    // e.target으로 설정하여 하위요소인
                                                                    // 이미지가 선택되게 해준다!
                                                                    // e.currentTarget은 이벤트가 걸린
                                                                    // 요소 자신이다!(비교할것!)
                                                                    let btnAlt =
                                                                        $(
                                                                            e.target
                                                                        ).attr(
                                                                            "alt"
                                                                        );
                                                                    console.log(
                                                                        btnAlt
                                                                    );
                                                                    // 증가감소 분기하여 숫자변경반영하기
                                                                    if (
                                                                        btnAlt ==
                                                                        "증가"
                                                                    ) {
                                                                        // tg값을 읽어와서 1을 더한다!
                                                                        tg.val(
                                                                            Number(
                                                                                tg.val()
                                                                            ) +
                                                                                1
                                                                        );
                                                                    } //// if ///////
                                                                    else if (
                                                                        btnAlt ==
                                                                        "감소"
                                                                    ) {
                                                                        // tg값을 읽어와서 1을 뺀다!
                                                                        // 단, 1보다 작아지지 않게 한다!
                                                                        tg.val(
                                                                            Number(
                                                                                tg.val()
                                                                            ) ==
                                                                                1
                                                                                ? 1
                                                                                : Number(
                                                                                      tg.val()
                                                                                  ) -
                                                                                      1
                                                                        );
                                                                    } ///// else if ////////

                                                                    // 클릭시 반영버튼 나타나기
                                                                    $(
                                                                        e.currentTarget
                                                                    )
                                                                        .siblings(
                                                                            ".btn-insert"
                                                                        )
                                                                        .show()
                                                                        .next()
                                                                        .show();
                                                                }}
                                                            >
                                                                <img
                                                                    src={
                                                                        process
                                                                            .env
                                                                            .PUBLIC_URL +
                                                                        "/images/cnt_up.png"
                                                                    }
                                                                    alt="증가"
                                                                />
                                                                <img
                                                                    src={
                                                                        process
                                                                            .env
                                                                            .PUBLIC_URL +
                                                                        "/images/cnt_down.png"
                                                                    }
                                                                    alt="감소"
                                                                />
                                                            </b>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                            <span className="sum-num1">
                              {addComma(v.price * v.cnt)}
                            </span>
                            원
                            {/* 계산된 합계금액 숫자만 히든필드에 넣어놓고 총합계 계산에 사용함! */}
                            <input
                              className="sum-num2"
                              type="hidden"
                              defaultValue={v.price * v.cnt}
                            />
                          </td>
                          <td>
                            {/* 데이터 삭제기능 버튼 */}
                            <button
                              className="cfn"
                              onClick={() => {
                                // confirm()의 "확인"클릭시 true
                                if (
                                  window.confirm(
                                    "정말정말정말로 지우시겠습니까? 할인도하는데???"
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
                                  if (selData.length == 0)
                                    myCon.setCartSts(false);

                                  // let aa = [];
                                  // aa.splice(지울순번,지울개수)
                                } //// if /////
                              }}
                            >
                              ×
                            </button>
                          </td>
                                            </tr>
                                        ))}
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
