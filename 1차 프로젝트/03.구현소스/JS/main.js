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
  `
})(); //브랜드 로고 리스트끝/////////////
slideFn.brandSilder();

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

storyList();

//스토리 슬라이드 데이터 셋팅
function storyList(){
  //불러올 데이터
  const stData = amrData.storyData;
  //대상: #story-area .slider
  const stSlider = myFn.qs('.stSlider');

stSlider.innerHTML = `
<!-- 서브타이틀 영역 -->
<div class="storysd-titbox">
    <div class="tit engtitfont">
      <h2>
        Story Of<br />
        Amorefacific
      </h2>
    </div>
    <button class="mcolor-mbtn">
      <a href="#">more view </a>
      <span class="material-symbols-outlined"> chevron_right </span>
    </button>
  </div>
${stData.map(i=>`

          <ul class="item fx-box2">
            <!-- 슬라이드 item -->
            <li class="fx-box2" style="background:url(./images/ssd_${i.img}.jpg) no-repeat center/cover;">
                <div class="desc-wrap">
                    <div class="desc">
                      <h4>${i.title}</h4>
                      <p class="txt">
                        ${i.txt}
                      </p>
                    </div>
             </li>
             
              <ol class="fx-box2">
              <img src="./images/ssd_${i.subimg[0]}.jpg" alt="${i.title}">
              <img src="./images/ssd_${i.subimg[1]}.jpg" alt="${i.title}">
              <img src="./images/ssd_${i.subimg[2]}.jpg" alt="${i.title}">
              </ol>
             
        </ul>`).join('')}`}/////storyList



//드래그 슬라이드 작동
function dragSlider(){
  let slider = myFn.qs('.stSlider-wrap');
  let sliderIn = myFn.qs('.stSlider');
  let pressed = false;
  let startx;
  let x;

}