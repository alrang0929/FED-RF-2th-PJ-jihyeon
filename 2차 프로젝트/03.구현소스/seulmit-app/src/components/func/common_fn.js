//슬밋PJ 공통함수
import $ from "jquery";
import { useEffect } from "react";


// [1] 숫자 세자리마다 콤마추가함수
function addComma(x = 0) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// 내보내기
export { addComma,};
