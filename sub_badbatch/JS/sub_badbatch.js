//메인sub badbatch js - sub_badbatch.js
import mFn from "./my_function.js";
import * as listMap from "./sub_mapping.js";
import setSlide from "./slide.js";
import * as scrollFn from "./smoothScroll23.js";
import * as listData from "../data/sub_list_data.js";
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
(() => {
  //슬라이더 박스
  const slider = mFn.qs(".sub-ban-wrap");
  //움직이는 요소
  const inner = mFn.qs(".sub-ban-box");
  const btn = mFn.qsa(".sub-btn");

  //btn에 ele, idx 요소를 가지고 forEach 돈다. idx < 버튼 순서 때문
  btn.forEach((ele, idx) => {
    //ele에 클릭 이벤트가 발생하면 이벤트 할당
    ele.onclick = (e) => {
      //preventDefault: 윈도우 기본값 설정 끔, 기본값 변경해야할 경우 사용
      e.preventDefault();
      inner.style.top = -100 * idx + "%";
      inner.style.transition = ".4s";
    };
  }); //forEach////////////////////////
})(); ////////하단배너 클릭 이벤트

//포스터 호버시 호버된 li 외 오퍼시티 줄이기
function posOnFn() {
  const item = mFn.qsa(".pos-wrap li");
  const layer = mFn.qs(".pos-data-wrap");
  const posdata = listData.posData;
  // const layer = mFn.qsa(.)
  // const onScreen = mFn.qsa('.pos-data-wrap')
  // console.log("요소확인",item);

  //item 요소, 순번 가지고 들어옴
  //선택자를 확인해야됨.. this 써야되는디
  //어케 구분함? if >  mouseenter 이 되믄 on 넣어라
  //나머지는 else 처리해서 오퍼시티 죽여야하나<<됨??...?

  //마우스 호버시 li 커짐
  item.forEach((ele, idx) => {
    mFn.addEvt(ele, "mouseenter", itemClassAdd);
    mFn.addEvt(ele, "mouseleave", itemClassDel);

    //대상: item .pos-wrap li
    function itemClassDel() {
      if (ele) ele.classList.remove("on");
    }
    function itemClassAdd() {
      if (ele) {
        ele.classList.add("on");
      } /////////////if
    } ///////////////itemClassAdd

    //대상: layer .pos-data-wrap
    ele.onclick = () => {
      setLayer(idx);
      layer.classList.add("on");
    };
  }); //forEach
//   layerOn();

  function setLayer(idx) {
    //포스터 레이어 생성
    let posCode = `
                <div class="pos-data-imgbox">
                <img src="./img/poster_${posdata[idx].idx}.jpg" alt="${posdata[idx].title}" />
              </div>
              <div class="pos-data-text">
                <div class="bullet"></div>
                <h3 class="title">${posdata[idx].title}</h3>
                <div class="desc">
                ${posdata[idx].text}
                </div>
                <!-- 이동링크 (관련 에피 페이지) -->
                <button class="btn-link">
                <a href="https://www.disneyplus.com/ko-kr/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA">
                  <img src="./img/icon_link.png" alt="링크 아이콘">
                  <span class="link-txt">more view</span>
                  <!-- svg 부모박스 -->
                  <div class="svg-arrow">
                    <svg class="svg-arrow1">
                      <use href="#arrow">
                    </svg>
                    </a>
                  </div>
              </button>
              <button class="close-btn">
                <div class="close-i fa-solid fa-xmark fa-3x"></div>
              </button>
            </div>
                `;
    layer.innerHTML = posCode;

    mFn.qs(".close-btn").onclick = () => {
      layer.classList.remove("on");
    }; ////close-btn
    console.log("aaa", layer);
  }

  //   function layerOn() {
  //     let tg = document.querySelectorAll("li.imgbox");
  //     console.log("대상:", tg);

  //     mFn.qs(".close-btn").onclick = () => {
  //       layer.classList.remove("on");
  //     }; ////close-btn
  //   } //////////////layerOn
  //   console.log("aaa", layer);

  //////닫기버튼

  /////////////////////////////////////////////////////////////////////////////////////////////////////
} ///////posOnFn 함수//////////////////
posOnFn();
