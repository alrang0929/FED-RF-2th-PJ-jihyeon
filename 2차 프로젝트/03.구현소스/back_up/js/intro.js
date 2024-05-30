////인트로 js - index.js

import mFn from "./my_function.js";

///////import area///////////////////////////////////////

const myvid = document.querySelector('#myvid');
myvid.addEventListener('timeupdate',()=>{

//1. 동영상 멈춤 여부 확인:
//video 요소 .paused => 멈춤상태 업데이트 멈춤: true / 재생중 false
let isStop = myvid.paused;

//0.호출확인
console.log('재생중!',isStop);

//2. 멈춤상태(true)면 메인으로 이동!
// -> js에서 페이지 이동은 location.href = 주소 or 페이지 할당
if(isStop){
location.href = 'main.html';
}/////////////////if
})/////////timeupdate이벤트 함수
