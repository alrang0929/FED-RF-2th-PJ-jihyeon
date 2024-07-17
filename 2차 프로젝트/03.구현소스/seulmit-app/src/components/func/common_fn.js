//슬밋PJ 공통함수
import $ from "jquery";
import { useEffect } from "react";


// [1] 숫자 세자리마다 콤마추가함수
function addComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//닫기 기능 함수
const BoxCloseFn = ({ closeTg, selData }) => {
  //closeTg : 닫기 대상
  //selData : 초기화 데이터 대상
  //대상선정
  $(".blocking-bg").fadeOut(200);

  //2. 버튼 클릭시 화면 밖으로 사라짐
  // closeTg.stop().animate(
      closeTg.stop().animate(
        {
          right: "-72vw",
        },
        500
        );

};

// 내보내기
export { addComma, BoxCloseFn };
