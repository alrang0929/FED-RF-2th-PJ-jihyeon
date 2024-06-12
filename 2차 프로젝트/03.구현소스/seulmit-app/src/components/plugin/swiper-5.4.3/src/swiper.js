// Swiper Class
import Swiper from './components/core/core-class';

// Core Modules
import Device from './modules/device/device';
import Support from './modules/support/support';
import Browser from './modules/browser/browser';
import Resize from './modules/resize/resize';
import Observer from './modules/observer/observer';

//IMPORT_COMPONENTS

const components = [
  Device,
  Support,
  Browser,
  Resize,
  Observer,
  //INSTALL_COMPONENTS
];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

new Swiper('.swiper', {
  // 다양한 옵션 설정, 
  direction: 'Horizontal',
  autoplay:{
      delay:5000,
  },
  loop : true,
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기

   // nav 화살표 출력 시 추가
navigation: {
  prevEl: '.swiper-prev',
  nextEl: '.swiper-next',
},
 
// 페이저 버튼 사용자 설정
pagination: {
  // 페이지 번호 요소 선택자
  el: '.promotion .swiper-pagination',
  
  // 사용자의 페이지 번호 요소 제어 가능 요소 (사용자가 단순히 시각적으로만 보는것 뿐만아니라 눌러서 제어할 수 있는지에 대한 여부)
  clickable: true,
},

})


//EXPORT
export default Swiper;
