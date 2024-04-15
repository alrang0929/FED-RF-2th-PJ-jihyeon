//DOM함수 호출
import myFn from "./my_function.js";

///////////아모레퍼시픽 슬라이드 JS- slide.js///////////////////////////////////////

///캐러셀 슬라이더/////

function indicater() {
    // 블릿요소
    const indibar = myFn.qs(".lndi-bar");
    // 인디케이터 메뉴
    const indi = myFn.qsa(".slide-indibx ol li");

    indi.forEach((ele, idx) => {
        ele.onclick = () => {
            indibar.setAttribute("class", "lndi-bar on" + (idx + 1));
        }; /// click ///
    }); /// forEach ////
} /////////indicater

//드래그 슬라이드
function dragSlider() {
    {
        let slider = myFn.qs(".brand-wrap");
        let innerSlider = myFn.qs(".bslider");
        //클릭 상태 체크 함수
        let pressed = false;
        //마우스 드래그 시작점 x좌표 체크
        let startx;
        //마우스 드래그시 x좌표 체크
        let x;

        /*
    [이벤트 등록]
    
    offsetLeft = 각 요소가 오른쪽으로 얼마나 떨어져있는지 표시
    마우스 클릭좌표(x) - innerSlider의 현재 offsetLeft요소값으로 startx 업뎃
    */

        slider.addEventListener("mousedown", (e) => {
            (pressed = true),
                (startx = e.offsetX - innerSlider.offsetLeft),
                (slider.style.cursor = "gradding");
        });

        //마우스 커서 설정
        slider.addEventListener("mouseenter", () => {
            slider.style.cursor = "grab";
        });
        slider.addEventListener("mouseenter", () => {
            slider.style.cusor = "grab";
        });
        slider.addEventListener("mouseup", () => {
            pressed = false;
        });

        //[중요] drag 처리함수
        //innerleft값을 처리하여 x - startx = -left값이 나오는 식으로 slider을 진행하고
        //이벤트가 실행되는 즉시 checkboundary() 함수를 호출하여 영역 내부 처리가 맞는지 체크
        slider.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();
            x = e.offsetX;

            innerSlider.style.left = `${x - startx}px`;
            checkboundary();
        });

        //checkboundary(): slider의 시작과 끝점을 체크하여 boundary가 초과하지 않게 해주는 함수
        function checkboundary() {
            let outer = slider.getBoundingClientRect();
            let inner = innerSlider.getBoundingClientRect();

            //innerSlider.style.left 가 0보다 클 시 left값 초기화
            if (parseInt(innerSlider.style.left) > 0) {
                innerSlider.style.left = "0px";
            } /////////if
            //getBoundingCliendRect()을 통해 받은 좌표값으로 외부 right값이 더 커지게 될 경우 slider drag 진행되지 않도록 함
            else if (inner.right < outer.right) {
                innerSlider.style.left = `-${inner.width - outer.width}px`;
            }
        }
    }
}/////////드래그 슬라이드

//브랜드 로고 클릭시 이동 슬라이드

function brandSilder() {
    let logoBtn = document.querySelectorAll(".sbili li");
    let inner = document.querySelector(".bslider");
    console.log("누구", inner);
    logoBtn.forEach((ele, idx) => {
        ele.onclick = (e) => {
            e.preventDefault();
            inner.style.left = -100 * idx + "%";
            inner.style.transition = ".6s";
        };
    }); /////////forEach////////////////////////////
}


function CarouselSlider(){
    // 이동버튼 대상:  .abtn
    const abtn = myFn.qsa(".abtn");
    // 변경대상 : #slide
    const slide = myFn.qs(".news-inner");
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
      let list = slide.querySelectorAll("li");
      slide.insertBefore(list[list.length -1], list[0]);
      slide.style.left = "-310px";
      slide.style.transition = "none";
    
      setTimeout(() => {
        slide.style.left = "0";
        slide.style.transition = ".6s ease-in-out";
      }, 0);
    }//////////else
    }////goslide
    
    }///////캐러셀슬라이더//////////////////////

////////호출영역///////////////////////////////
export { indicater,dragSlider,brandSilder,CarouselSlider };
