import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addComma } from "../func/common_fn";

//css
import "../../css/shop.scss";

//data
import { options } from "../data/product";

///////////import area//////////////////////

function OptionBox({optData}) {
  const selData = options[0].values;

  //선택관리변수
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(()=>{
    
    if(selectedOption){
      let cartData = JSON.parse(localStorage.getItem("cart-data") || "[]");
      //선택 옵션정보 추가
      cartData.push({
        optName: selData,
        optVal: selectedOption,
      });
    }
    //로컬에 파싱하여 저장
    localStorage.setItem("cart-data", JSON.stringify(cartData));
  },[ setSelectedOption])

  const handleChange = (e) =>{
    setSelectedOption(e.target.value);
  };
  // console.log("선택데이터 확인", selData);

  /////리턴코드
  return (
    <>
      <select n
      ame={selData} 
      id={selData} 
      className="selectBox bt-margin40"
      onChange={handleChange}
      >
        <option value="">선택하세요</option> {/* placeholder 옵션 추가 */}
        {selData.map((option, i) => 
        (
          <option key={i} 
          value={option.value} 
          className="opBox ">
            {option.value} 
            {"(+"+addComma(option.price)+"원)"}
          </option>
        ))}
      </select>
    </>
  );
}

export default OptionBox;
