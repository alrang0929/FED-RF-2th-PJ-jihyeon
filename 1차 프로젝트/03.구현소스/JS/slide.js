//DOM함수 호출
import myFn from "./my_function.js";

///////////아모레퍼시픽 슬라이드 JS- slide.js///////////////////////////////////////

///캐러셀 슬라이더/////

function indicater(){
// 블릿요소
const indibar = myFn.qs('.lndi-bar');
// 인디케이터 메뉴
const indi = myFn.qsa('.slide-indibx ol li');

indi.forEach((ele,idx)=>{
  ele.onclick = ()=>{
    indibar.setAttribute('class','lndi-bar on'+(idx+1))
  }; /// click ///
}); /// forEach ////


let aa = document.querySelectorAll(".sbili a");
let bb = document.querySelector(".bslider ul");
aa.forEach((ele, idx) => {
  ele.onclick = (e) => {
    e.preventDefault();
    bb.style.left = -100 * idx + "%";
    bb.style.transition = ".6s";
  };
});/////////forEach////////////////////////////
}/////////indicater



////////호출영역///////////////////////////////
export {indicater};