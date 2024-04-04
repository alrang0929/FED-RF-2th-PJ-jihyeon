//DOM함수 호출JS - my_function.js

const myFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

  // 바운딩위치값함수
  getBCR: (ele) => ele.getBoundingClientRect().top,

  // 옵셋탑값 반환함수
  getOT: (ele) => ele.offsetTop,
}




// 블릿요소
const indibar = myFn.qs('.lndi-bar');
// 인디케이터 메뉴
const indi = myFn.qsa('.slide-indibx ol li');

indi.forEach((ele,idx)=>{
  ele.onclick = ()=>{
    indibar.setAttribute('class','lndi-bar on'+(idx+1))
  }; /// click ///
}); /// forEach ////



// HTML태그 로딩후 loadFn함수 호출! ///
myFn.addEvt(window, "DOMContentLoaded", loadFn);

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
  const slide = myFn.qs(".wrap-slide");

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

// ____________________________________________________





//제품 정보 정보객체
  //1. 데이터 세팅
const arrl ={

    설화수진설크림:
    {  브랜드:"설화수",
      제품명:"진설크림 THE ULTIMATE S CREAM",
      가격:"520,000",},
      
      에멀전:
     {   브랜드:"라네즈",
        제품명:"워터뱅크 블루 히알루로닉 에멀젼 중‧건성용",
        가격:"29,400",},
      
      인텐시브크림:
       { 브랜드:"라네즈",
        제품명:"워터뱅크 블루 히알루로닉 인텐시브 크림",
        가격:"33,600",},
      
      링클코렉터:
        {브랜드:"아이오페",
        제품명:"레티놀 엑스퍼트 0.3% 링클 코렉터 20ML",
        가격:"112,500",},
  
      컬러밤:
        {브랜드:"마몽드",
        제품명:"크리미틴트 컬러밤 쉬폰 2.5G",
        가격:"9,800",},
      
      달빛유자:
        {브랜드:"한율",
        제품명:"달빛유자 수면팩 70ML",
        가격:"30,600",},}


//1.출력대상: desc 랑 price

//로드구역
window.addEventListener('load',()=>{
console.log('로딩완료');

/* 
[조건]

대상: .pdgrid
1 .pdgrid 박스에 순회
2. 브랜드명, 제품멱, 가격 > pdgrid박스 내 구조화된 태그 생성
3. 반복적인 데이터 보여줌 

    (1) 각 제품 데이터 정리 (브랜드 / 제품명 / 가격) < ${arrl[n]} < 할당
      arrl << 이걸로 제품 구분? ex) const product01 
    (2) 각 제품의 데이터를 forof제어문에 할당

*/

//1. 대상
//데이터 뿌리는 곳
const desWrap = myFn.qs('.pdgrid');
console.log('가격데이터 준완');

})








































  /*  if (isRbtn) {
    // (1)먼저 왼쪽으로 이동하기
    slide.style.left = "-100%";
    slide.style.transition = ".6s ease-in-out";

    // (2)이동하는 시간 0.6초간 기다림!
    setTimeout(() => {
      // (2-1) 맨앞 li 맨뒤로 이동
      slide.appendChild(
          slide.querySelectorAll("li")[0]);
      // 슬라이드 left 값이 -100% 이므로
      // (2-2) left값을 0으로 변경
      slide.style.left = '0';
      // (2-3) left 트랜지션 없애기
      slide.style.transition = 'none';
    }, 600); */
} ////////////////// goslide//////////

/* 슬라이드 비교파일_이전버전 */

// /* 카운터 값(=클릭 시 이동하는 이미지 수?) 설정*/
// let counter = 1;

// /* 리스트 이미지로 가로값 지정 */
// const size = nimg[0].clientWidth;
// //애니메이션 초기값 설정인감..
// nlist.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //////이동버튼설정///////////////////////////////////////

// //머.. 넥스트 버튼을 클릭하면 이벤트를 추가 실행..
// nextBtn.addEventListener('click', ()=>{

//   //카운터 보다 크거나 같으면 이미지 갯수 -1 만큼 머..???
//   if(counter >= 5) return;

//   //리스트박스 애니메이션
//   nlist.style.transition = "transform .4s ease-in-out";
//   counter++;

//   nlist.style.transform = 'translateX(' + (-size * counter) + 'px)';

//   //'translateX(' + (-size * counter) + 'px)'은 무엇..???
// });/////////////////////////nextBtn 이벤트 설정 ///////////////////////////
// /////////////////////////////////////////////////////////////////////////

// prevBtn.addEventListener('click',()=>{
//   console.log(counter);
//   if(counter <= 0) return;

//   //리스트박스 애니메이션
//   nlist.style.transition = "transform .4s ease-in-out";

//   counter--;
//   nlist.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });////////////////////////////이전이동 버튼 ////////////

// nlist.addEventListener('transitionend',() => {

// console.log(nimg[counter],counter);
// if(nimg[counter].id === 'lastclone'){
//   nlist.style.transition = "none"; //트렌지션 효과 제거
//   counter = nimg.length -2; //counter 초기화
//   nlist.style.transform = 'translateX(' + (-size * counter) + 'px)';//실제 이미지로 이동

// }////////실제 이미지 마지막 이동

// else if(nimg[counter].id === 'firstclone'){
//   nlist.style.transition = 'none';
//   counter = nimg.length -counter;// 카운터 값 초기화
//   nlist.style.transform = 'translateX(' + (-size * counter) + 'px)';
// }///////실제 이미지 첫번째 이동

// });//////////////////nlist 이벤트/////////////////////////////////////
