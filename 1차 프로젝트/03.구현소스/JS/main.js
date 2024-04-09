//DOM함수 호출
import myFn from "./my_function.js";
//슬라이드 함수 호출
import * as slideFn from "./slide.js";
// 부드러운 스크롤 불러오기
import { startSS, setScrollPos } from "./smoothScroll23.js";
//////////////////////////////////////////////////////////////////////////
//데이터셋팅 불러오기
import * as amrData from "../data/AMR_data.js";

///////////아모레퍼시픽 메인 JS- main.js///////////////////////////////////////

slideFn.indicater();

////////브랜드 리스트 슬라이드
(()=>{

const blData = amrData.blList;
const blBx = myFn.qs('.bland-mibx');
console.log('대상:',blData,blBx);

let hcode = `<ul class="fx-box">`;

blData.forEach((i)=>{

    hcode += `
    <li style="background: url(./images/brand_bg_${i.title}.jpg) no-repeat center/cover;">
    <figure>
      <img src="./images/brand_thm_${i.title}.jpg" alt="${i.title}">
    </figure>
    <figcaption txt>
      ${i.text}
    </figcaption>
  </li>
    `;
})////forEach
hcode +=`</ul>`
blBx.innerHTML = hcode;

})();//브랜드 리스트 슬라이드 끝/////////////

////////브랜드 로고 리스트
(()=>{

const blData = amrData.blList;
const blLgbx = myFn.qs('.bland-lgbx');
console.log('대상:',blData,blLgbx);

let hcode = `<ul class="fx-box">`;

blData.forEach((i)=>{

    hcode += `
    <li><a href="#"><img src="./images/bi_${i.title}.png"
    alt="${i.title} logo"></a></li>
    `;
})////forEach
hcode +=`</ul>`

blLgbx.innerHTML = hcode;

})();//브랜드 로고 리스트끝/////////////

//제품소개 리스트
function pdList(){

}