//메인sub badbatch js - sub_badbatch.js
import mFn from "./my_function.js"
import * as listMap from "./sub_mapping.js"
import setSlide from "./slide.js";
///////불러오기 영역//////////////////////

// console.log(slideFn.carouselSlider);

/* 슬라이드 리스트 맵핑 */
listMap.epItems();
listMap.snsItems();

//슬라이드 함수 호출
setSlide('banbx');
