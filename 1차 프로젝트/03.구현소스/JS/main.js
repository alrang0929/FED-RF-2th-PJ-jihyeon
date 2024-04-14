//DOM함수 호출
import myFn from "./my_function.js";
//슬라이드 함수 호출
import * as slideFn from "./slide.js";
// 부드러운 스크롤 불러오기
import { startSS, setScrollPos } from "./smoothScroll23.js";
//////////////////////////////////////////////////////////////////////////
//데이터셋팅 불러오기
import * as amrData from "../data/AMR_data.js";
import * as cmList from "./common.js";

///////////아모레퍼시픽 메인 JS- main.js///////////////////////////////////////
slideFn.indicater();

cmList.makeGnb();

////////브랜드 리스트 슬라이드
(() => {
  const blData = amrData.blList;
  const blBx = myFn.qs(".brand-mibx");
  console.log("대상:", blData, blBx);

  blBx.innerHTML = `
  <ul class="bslider fx-box">
  ${amrData.blList.map(i=>`
  <li style="background: url(./images/brand_bg_${i.title}.jpg) no-repeat center/cover;">
      <figure>
        <img src="./images/brand_thm_${i.title}.jpg" alt="${i.title}">
      </figure>
      <figcaption txt>
        ${i.text}
      </figcaption>
    </li>
  `).join('')}
  </ul>
  `

})(); //브랜드 리스트 슬라이드 끝/////////////

////////브랜드 로고 리스트
(() => {
  const blData = amrData.blList;
  const blLgbx = myFn.qs(".brand-lgbx");
  console.log("대상:", blData, blLgbx);

  blLgbx.innerHTML = `
  <ul class="sbili fx-box">
    ${blData.map(i =>`
    <li><a href="#"><img src="./images/bi_${i.title}.png"
    alt="${i.title} logo"></a></li>
    `).join('')}
  </ul>
  `}

)(); //브랜드 로고 리스트끝/////////////

//슬라이드 생성
brandSilder();
function brandSilder(){
  let aa = document.querySelectorAll(".sbili a");
  console.log('누구',this);
let bb = document.querySelector(".bslider li");
aa.forEach((ele, idx) => {
  ele.onclick = (e) => {
    e.preventDefault();
    bb.style.left = -100 * idx + "%";
    bb.style.transition = ".6s";
  };
});/////////forEach////////////////////////////
}



//제품소개 리스트
(()=>{
  
const pdData = amrData.pdData;
const pdBox = myFn.qs(".prod-list");
console.log("pd data:", pdData, "\n 박스",pdBox);

pdBox.innerHTML =`
<ul>

${pdData.map(v =>`
<li>
  <figure><img src="./images/pd_img${v.img}.png" alt="${v.name}"></figure>
  <figcaption>
    <h3 class="brand">${v.brand}</h3>
    <div class="pdbx fx-box">
      <h4 class="name">${v.name}</h4>
        <div class="price">${v.price}<span>원</span></div>
    </div>
  </figcaption>
  </li>
`).join('')}
</ul>
`
})();//제품소개 리스트 끝

<<<<<<< HEAD
=======

//드래그 슬라이드 테스트
(()=>{
let slider = myFn.qs('.brand-wrap');
let sliderIn = myFn.qs('.bslider');
let pressed = false;
let startx;
let x;



})();
>>>>>>> parent of f62234d (asd)
