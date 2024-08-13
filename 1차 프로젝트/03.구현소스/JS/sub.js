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

cmFn.makeGnb();
cmFn.makeFooter();

///////////아모레퍼시픽 서브 JS- sub.js///////////////////////////////////////

//호출영역
// scrollFn.startSS();


/////////////////////슬라이드 데이터/////////////////////
(()=>{
  const hamBtn = $(".ham-btn, .gnb ul");
  const target = $(".gnb"); // 토글할 메뉴 요소 선택
  console.log("gnb ul", target);
  console.log("hamBtn", hamBtn);

  hamBtn.on("click", () => {
    hamBtn.toggleClass("active"); // 햄버거 버튼 토글
    target.toggleClass("active"); // 메뉴 토글
  });
})();
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