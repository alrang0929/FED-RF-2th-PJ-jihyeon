//메인sub badbatch js - sub_badbatch.js
import mFn from "./my_function.js"
import * as listMap from "./sub_mapping.js"
import setSlide from "./slide.js";
import * as scrollFn from "./smoothScroll23.js"
import * as listData from "../data/sub_list_data.js"
///////불러오기 영역//////////////////////

// console.log(slideFn.carouselSlider);

// scrollFn.setScrollPos();
// scrollFn.startSS();

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
    //preventDefault: 윈도우 기본값 설정 끔, 기본값 변경해야할 경우 사용 
    e.preventDefault();
    inner.style.top = -100 * idx + "%";
    inner.style.transition = ".4s";
}

})//forEach////////////////////////
})()////////하단배너 클릭 이벤트


//포스터 호버시 호버된 li 외 오퍼시티 줄이기
function posOnFn(){
    const item = mFn.qsa('.pos-wrap li');
    const layer = mFn.qs('.pos-data-wrap');
    // const layer = mFn.qsa(.)
    // const onScreen = mFn.qsa('.pos-data-wrap')
    // console.log("요소확인",item);

    //item 요소, 순번 가지고 들어옴
    //선택자를 확인해야됨.. this 써야되는디
    //어케 구분함? if >  mouseenter 이 되믄 on 넣어라 
    //나머지는 else 처리해서 오퍼시티 죽여야하나<<됨??...?

    //마우스 호버시 li 커짐
    item.forEach((ele,idx)=>{

        mFn.addEvt(ele,"mouseenter",itemClassAdd)
        mFn.addEvt(ele,"mouseleave",itemClassDel)
        
        function itemClassDel(){
            if(ele)ele.classList.remove('on');
        }
        function itemClassAdd(){
            if(ele){
                ele.classList.add('on')
        }/////////////if
        }///////////////itemClassAdd

        ele.onclick = () =>{
            // console.log("fdfdfd");
            layerOn();
        }
    })//forEach
    
    function layerOn(){
        layer.classList.add('on');
    }
    function layerSet(){
    //데이터
    const posData = listData.posData
    //대상
    const posBx = mFn.qs(".pos-data-box")

    let hcode =''
    posData.forEach((v,idx)=>{
        ele.onclick = () => {
        hcode += `
        
        <div class="pos-data-imgbox">
        <img src="./img/poster_${v.idx}.jpg" alt="" />
      </div>
      <div class="pos-data-text">
        <div class="bullet"></div>
        <h3 class="title">&quot;A Different Approach&quot; Episode Guide | Star Wars: The Bad Batch</h3>
        <div class="desc">
          Following her capture by Doctor Hemlock, Omega adjusts to life at the Imperial research facility by visiting her prisoner brother Crosshair and getting check-ups from her mysterious and stoic clone sister,
        </div>
        <!-- 이동링크 (관련 에피 페이지) -->
        <button class="btn-link">
          <img src="./img/icon_link.png" alt="링크 아이콘">
          <span class="link-txt">Era: Reign of the Empire</span>
          <!-- svg 부모박스 -->
          <div class="svg-arrow">
            <svg class="svg-arrow1">
              <use href="#arrow">
            </svg>
          </div>
      </button>
      <button class="close-btn">
        <div class="close-i fa-solid fa-xmark fa-3x"></div>
      </button>
    </div>
                                      `
        };//////onclick
    });////forEach

    }


/////////////////////////////////////////////////////////////////////////////////////////////////////



}///////posOnFn 함수//////////////////
posOnFn();