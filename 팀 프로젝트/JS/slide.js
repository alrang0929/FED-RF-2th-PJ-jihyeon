///sub badbatch 슬라이드 함수 js - slide.js
import myFn from "./my_function.js";



function carouselSlider(){
    // 이동버튼 대상:  .abtn
    const abtn = myFn.qsa(".abtn");
    // 변경대상 : #slide
    const slide = myFn.qsa(".slider-wrap ul");
    // console.log(slide);
    
    //버튼 이벤트 설정
    for (let x of abtn){
    x.onclick = goSlide;
    }////for
    
    
    //////광클금지변수
    let prot = false; 
    function goSlide(){
    //   console.log('넌 모냐',goSlide)
    
      if(prot) return;
      prot = true;
      setTimeout(() => {
        prot = false; // 0.6초후 해제!
      }, 600);
    
    
      let isRbtn = this.classList.contains("ab2");
    
      if(isRbtn){
        slide.style.left = "-310px";
        slide.style.transition = ".6s ease-in-out";
    
        setTimeout(() => {
          slide.appendChild(slide.querySelectorAll("li")[0]);
          // 슬라이드 left 값이 -100% 이므로
          // (2-2) left값을 0으로 변경
          slide.style.left = "0";
          // (2-3) left 트랜지션 없애기
          slide.style.transition = "none";
        }, 600);
    }////if
    else{
      // let newSlide = document.querySelectorAll("slider-wrap ul");
      let newSlide = document.querySelector(".snsSlide ul");
      newSlide.style.position = "relative";
      let list = newSlide.querySelectorAll("li");
      console.log(newSlide);
      newSlide.insertBefore(list[list.length -1], list[0]);
      newSlide.style.left = "-500px";
      newSlide.style.transition = "none";
    
      setTimeout(() => {
        newSlide.style.left = "0";
        newSlide.style.transition = ".6s ease-in-out";
      }, 0);
    }//////////else
    }////goslide
    
    }///////캐러셀슬라이더//////////////////////

    export {carouselSlider};