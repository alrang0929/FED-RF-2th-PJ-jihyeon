import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { addComma } from "../func/common_fn";
import { sCon } from "../pages/sCon";

//css
import "../../css/shop.scss";

//data
import { options } from "../data/product";

///////////import area//////////////////////

function OptionBox({ selData, selectedOpt, onOptionChange }) {
  console.log("옵션데이터 가져오고싶어",selData);
    // OptionTable의 역할: 데이터를 cart-data 에 저장하여
    //OptionTable에 전달하여 데이터 값 노출 + 변경 가능하게 함

    //선택관리변수
    //유즈 콘텍스트 사용

    // const selData = options[0].values;

    useEffect(() => {
        let cartData;

        if (selectedOpt) {
            let cartData = JSON.parse(
                localStorage.getItem("cart-data") || "[]"
            );
            //선택 옵션정보 추가
            cartData.push({
                // optName: selData,
                [selData[0].name]: selectedOpt,
                
            });
        } else {
            //selectedOpt가 null 이면 cartData 초기화
            cartData = [];
        }
        //로컬에 파싱하여 저장
        localStorage.setItem("cart-data", JSON.stringify(cartData));
    }, [selectedOpt]);

    const handleChange = (e) => {
        onOptionChange({ ...selectedOpt, [selData?.[0]?.name || ""]: e.target.value,
          // 옵셔널 체이닝(?.):
          // 옵셔널 체이닝 없이 호출하면 에러 빠바박, 그치만 옵셔널 체이닝 .?을 사용하면 undefined로 값 반환
          // 즉, 값이 없어도 기능은 잘 돌아감.. 뭔가 위험해보이는디
          
          // selData[0]가 undefined인 경우 빈 문자열 사용
         });
    };
    // console.log("선택데이터 확인", selData);

    

    /////리턴코드
    return (
        <>
            <select
                name={selData?.[0]?.name || ""}
                id={selData?.[0]?.name || ""}
                className="selectBox bt-margin40"
                value={selectedOpt?.[selData?.[0]?.name] || ""}
                onChange={handleChange}
            >
                <option value="">선택하세요</option>{" "}
                {/* placeholder 옵션 추가 */}
                {selData.length > 0 && (
                    <>
                        {selData?.map((option, i) => (
                            <option
                                key={i}
                                value={option.value}
                                className="opBox"
                            >
                                {option.value}
                                {"(+" + addComma(option.price) + "원)"}
                            </option>
                        ))}
                    </>
                )}
            </select>
        </>
    );
}

export default OptionBox;
