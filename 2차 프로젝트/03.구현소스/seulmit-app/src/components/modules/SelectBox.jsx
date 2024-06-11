import React from "react";

function SelectBox() {
  return (
    <select name="choice">
      <option value="banana">
        <div className="num">선택01</div>
        <div className="tit">
        바나나
        </div>
        </option>
      <option value="apple">사과</option>
      <option value="orange">오렌지</option>
    </select>
  );
}

export default SelectBox;
