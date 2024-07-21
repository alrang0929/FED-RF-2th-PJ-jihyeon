import React from "react";
import styled from "styled-components";
import { addComma } from "../func/common_fn";

//css
import "../../css/shop.scss";

//data
import { options } from "../data/product";

///////////import area//////////////////////

function OptionBox(props) {

  const selData = options[0].values;
  // console.log("선택데이터 확인", selData);

  /////리턴코드
  return (
    <>
      <select name={selData} id={selData} className="selectBox bt-margin40">
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
