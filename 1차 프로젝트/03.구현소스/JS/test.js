const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Buttons
nextBtn.addEventListener('click', ()=> {
  if(counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Jump to First/Last Slide
carouselSlide.addEventListener('transitionend', () => {
  console.log(carouselImages[counter]);
  if (carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none'; // 트랜지션 효과 없애기
    counter = carouselImages.length -2; // couter 초기화
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // 실제 마지막 이미지로 이동.
  } 
  
  else if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter; // couter 초기화
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});




const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// 블릿요소
const indibar = qs('.lndi-bar');
// 인디케이터 메뉴
const indi = qsa('.slide-indibx ol li');

indi.forEach((ele,idx)=>{
  ele.onclick = ()=>{
    indibar.setAttribute('class','lndi-bar on'+(idx+1))
  }; /// click ///
}); /// forEach ////



// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

let aa = document.querySelectorAll(".sbili a");
let bb = document.querySelector(".bslider ul");
aa.forEach((ele, idx) => {
  ele.onclick = (e) => {
    e.preventDefault();
    bb.style.left = -100 * idx + "%";
    bb.style.transition = ".6s";
  };
});

/* 리스트 박스 */

//console.log('리스트 잡힘?',nlist);
/* 리스트 내용물*/
const nimg = document.querySelectorAll(".thumbbx img");
//console.log('이미지 잡힘?',nimg);

// //뒤로가기 화살표
// const prevBtn = document.querySelector('#prevBtn')

// //다음이동 화살표
// const nextBtn = document.querySelector('#nextBtn')
// //console.log('이미지 잡힘?',nextBtn);

function loadFn() {
  console.log("로딩완료");

  //1. 이동대상 설정
  //이동버튼 대상: .abtn
  // const abtn = qsa(".abtn");
  const abtn = document.querySelectorAll(".abtn");
  // document.querySelectorAll('abtn')
  // console.log(document.querySelectorAll('.abtn'));
  //변경대상: .thumbbx ul
  const slide = qs(".wrap-slide");

  //슬라이드 전역변수
  let snum = 0;

  //2. 버튼 이벤트 설정
  for (let x of abtn) {
    x.onclick = goslide;
  }

  //광클 금지변수
  let prot = false;

  function goslide() {
    //광클금지 설정
    if (prot) return;
    prot = true;
    setTimeout(() => {
      prot=false;
    }, 600);

    //1. 오른쪽 버튼은 .ab2 인가?
    let isRbtn = this.classList.contains("ab2");
    //contains: 특정 클래스 여부 판단, true / false
    //함수 호출 확인
    console.log("나 슬라이드야!", this, isRbtn);

    if (isRbtn) {
      slide.style.left = "-100%";
      slide.style.transition = ".6s ease-in-out";

      setTimeout(() => {
        //2-1 맨앞 li 맨 뒤로 이동
        slide.appendChild(slide.querySelectorAll("ul")[0]);
        //슬라이드 left값이 -100%이므로
        //2-2 left값을 0으로 변경
        slide.style.left = "0";
        //2-3 left 트렌지션 없애기
        slide.style.transition = "none";
      }, 600); //////////timout///////
    } /////////if

    //2-2 왼쪾 버튼일 경우
    else {
      //하위 li 수정
      let list = slide.querySelectorAll("ul");
      slide.insertBefore(list[list.length - 1], list[0]);

      slide.style.left = "-100%";
      slide.style.transition = "none";

      setTimeout(() => {
        slide.style.left = "0";
        slide.style.transition = ".6s ease-in-out";
      }, 0);
    }
  } ///////////goslide///////////
