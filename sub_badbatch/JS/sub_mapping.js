//데이터 맵핑 js - sub_mapping.js

import mFn from "./my_function.js"
import * as listData from "../data/sub_list_data.js"
///////불러오기 영역//////////////////////


//에피소드 리스트 li
function epItems(){
  //1. 대상선정
  const epSlide = mFn.qs('.epSlide')
  // console.log(epArea);
  epSlide.innerHTML = `
  <ul class="fx-box col-8">
  ${listData.epData.map(v =>`
  <li>
  <figure>
  <img src="./img/thumb_${v.idx}.jpg" alt="E${v.title}" /></figure>
  <figcaption>
  <div class="title-topic">Season3, Episode${v.idx}</div>
  <h4 class="title-sub2">
  ${v.title}
  </h4>
  </figcaption>
  </li>
  `).join('')}
  </ul>
  `
}//////epItem//////////////////////////////

function snsItems(){

  mFn.qs('.snsSlide').innerHTML = `
  <ul class="fx-box col-8">
  ${listData.snsData.map(v=>`
    <li>
      <figure><a href="${v.link}" target="_blank">
        <img src="./img/sns_thumb_${v.idx}.jpg" alt="${v.title}" />
      </a></figure>
      <figcaption>
        <div class="title-topic">Season3, Episode${v.idx}</div>
        <h4 class="title-sub2">
        ${v.title}
        </h4>
      </figcaption>
    </li>
    `).join('')}
    </ul>
  `
}

const posItems = mFn.qs(".pos-wrap")

let hcode = `<ul class="slider-wrap gr-box">`;
for(let i = 1 ; i <= 10 ; i++){
 hcode += `
  <li>
  <a href="#">
  <img src="./img/poster_${i}.jpg" 
  alt="스타워즈 포스터${i}"></a>
  </li>
  `;
}////for
hcode += '</ul>'
posItems.innerHTML = hcode;








///////내보내기 영역//////////////////////
export {epItems,snsItems, }


