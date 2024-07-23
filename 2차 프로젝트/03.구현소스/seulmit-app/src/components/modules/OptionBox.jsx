import React, {  useContext, useEffect, useState } from "react";
import { addComma } from "../func/common_fn";

//css
import "../../css/shop.scss";

//data
//ShopCustomCont 에서 props 값으로 전달받음: 옵션박스, 옵션 테이블이 데이터 공통으로 사용하기 때문
// import { options } from "../data/product";

///////////import area//////////////////////

function OptionBox({ optData, selectedOpt, setSelectedOpt, selOptData, setSelOptData }) {
    // console.log("setSelectedOpt:", setSelectedOpt);
    //1. optData : 데이터
    //2. selectedOpt: 전역변수, 데이터 저장 및 전달
    //3. setSelectedOpt : 전역변수, 상태 감시하다 값 변경되면 로컬에 저장
    //4. selOptData, setSelOptData : 변경된 데이터를 담아 전달

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        const selectedOption = optData.values.find(opt => opt.value === selectedValue); // 선택된 옵션 객체 찾기
        setSelectedOpt(selectedValue);
        setSelOptData((prevOpt)=> [...prevOpt, selectedOption])
    };
    // console.log("옵션값이 담겼나?",selOptData);
    // selectedOpt = [selOptData];

    
    /////리턴코드
    return (
        <>
            <select
                name={optData.value}
                id={optData.value}
                classvalue="selectBox bt-margin40"
                value={optData.value}
                onChange={handleChange}
            >
                {/* {console.log("옵션데이터 가져오고싶어3", optData)} */}
                <option value="">선택하세요</option> {/* 옵션 추가 */}
                {optData.values.map((opt, i) => (
                    <option key={i} value={opt.value} className="opBox">
                        {opt.value}
                        {"(+" + addComma(opt.price) + "원)"}
                    </option>
                ))}
            </select>
        </>
    );
}

export default OptionBox;
