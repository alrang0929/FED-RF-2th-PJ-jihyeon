//메인sub badbatch js - sub_badbatch.js
import mFn from "./my_function.js"
import * as listMap from "./sub_mapping.js"
import setSlide from "./slide.js";
import * as scrollFn from "./smoothScroll23.js"
///////불러오기 영역//////////////////////

// console.log(slideFn.carouselSlider);

scrollFn.setScrollPos();
scrollFn.startSS();

/* 슬라이드 리스트 맵핑 */
listMap.epItems();
listMap.snsItems();
listMap.posItems();
// listMap.subbanItems();

//하단배너
(()=>{

//슬라이더 박스
const slider = mFn.qs('.sub-ban-wrap')
//움직이는 요소
const inner = mFn.qs('.sub-ban-box');
const btn = mFn.qsa('.sub-btn');

//btn에 ele, idx 요소를 가지고 forEach 돈다. idx < 버튼 순서 때문
btn.forEach((ele, idx) => {

//ele에 클릭 이벤트가 발생하면 이벤트 할당
ele.onclick = (e) =>{
    //preventDefault: 이벤트 버블 방지
    e.preventDefault();
    inner.style.top = -100 * idx + "%";
    inner.style.transition = ".4s";
}

})//forEach////////////////////////
})()////////하단배너 클릭 이벤트

