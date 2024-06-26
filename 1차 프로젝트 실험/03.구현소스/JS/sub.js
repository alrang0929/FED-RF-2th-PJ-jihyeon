//DOM함수 호출
import myFn from "./my_function.js";
//슬라이드 함수 호출
import * as slideFn from "./slide.js";
// 부드러운 스크롤 불러오기
import * as scrollFn from "./smoothScroll23.js";
//////////////////////////////////////////////////////////////////////////
//데이터셋팅 불러오기
import * as amrData from "../data/AMR_data.js";
import * as cmFn from "./common.js";
import * as titData from "../data/subtitle_data.js"

cmFn.makeGnb();
cmFn.makeFooter();

///////////아모레퍼시픽 서브 JS- sub.js///////////////////////////////////////

//호출영역
// scrollFn.startSS();


/////////////////////슬라이드 데이터/////////////////////

(() => {
    /* 슬라이드 박스 */
    const sdBox = myFn.qs('.slide-wrap');
    const sdData = amrData.sdData;
    console.log('대상:');
    
    let hcode = ``;
    
    sdData.forEach((i)=>{
    
      hcode+= `
      
      <div class="slide" id="sd${i.idx}" style="background:
      url(./images/sub01/${i.bgName}.jpg) no-repeat center/cover;">
      <div class="brbx"></div>
      <!-- 텍스트 박스 -->
      <article class="descbx">
      <!-- 타이틀 -->
      <h4 class="tit engtitfont">${i.title}</h4>
      <!-- 텍스트 -->
      <div class="desc txt">
      ${i.text}
      </div>
      </article>
      </div>
      
      `;
      
    })///forEach///////////////////////////////////
    hcode+=``;
    sdBox.innerHTML = hcode;
    })();//////슬라이드 데이터////////////////
    
    /////////서브페이지 타이틀 생성//////
    (()=>{
      let title = document.title;
      console.log('타이틀 텍스트',typeof(title));
      const titArea = myFn.qs("#title-area")
      console.log('타이틀배너');
      let hcode = 
      
      `
      <div class="" id="tit-area" 
      style="background: url(./images/sub01/BG_tit${titData.title[idx]}.jpg) no-repeat center/cover;">
      <!-- 타이틀 텍스트 박스 -->
      <div class="titbx">
      <h2 class="tit engtitfont">
      ${titData.title.title}
     </h2>
     <div class="desc txt">
     ${titData.title.text}
     </div>
     </div>
     <div class="linebx"><span class="line"></span></div>
     </div>
    
     `;

     titArea.innerHTML = hcode;
     
    })()//타이틀 영역 생성 끝

