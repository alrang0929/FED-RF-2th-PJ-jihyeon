// 드래그 기능 + 슬라이드 기능 합친 JS - drag_slide.js

// DOM 모듈함수
import mFn from "./my_function.js";

/// 배너 셋팅을 위한 함수(노출용) /////
export default function setSlide(clsName) {
  // clsName 변수는
  // 슬라이드 전체박스 클래스명 "banbx"가 들어옴

  // [1] 슬라이드 셋팅하기 ////////////
  // 슬라이드 대상요소 : .banbx
  const banBox = mFn.qsa("." + clsName);
  ////console.log("슬라이드 대상:", banBox);

  // 슬라이드 만큼 모두 호출하기!
  banBox.forEach((ele) => {
    // 슬라이드 함수 호출하기
    slideFn(ele);
    // 실제 DOM요소를 보낸다!

    // [2] 드래그 요소 선택하여 셋팅하기 //////////
    // 들어온 이름 "banbx" 하위 "slide" 클래스를 선택한다!
    // 하위슬라이드 선택요소
    let subSlide = mFn.qsEl(ele, ".slide");
    ////console.log(subSlide);
    // 슬라이드 함수 드래그 호출하기
    goDrag(subSlide);
  }); /////// forEach ///////////
} ///////////// setSlide 함수 //////////

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/* 
(참고: JS에서 이름짓는 일반규칙)
1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/

/****************************************** 
 함수명: slideFn
 기능: 로딩 후 버튼 이벤트 및 기능구현
 ******************************************/
function slideFn(selEl) {
  // selEl 선택 슬라이드 부모 요소
  ////console.log("슬라이드 함수 호출확인!");

  // 0.슬라이드 공통변수 /////
  // 0-1. 광클금지상태변수 : 0-허용,1-불허용
  let clickSts = 0;
  // 0-2. 슬라이드 이동시간 : 상수로 설정
  const TIME_SLIDE = 400;

  // 1. 대상선정
  // 1-1. 슬라이드 부모요소 : 전달된 선택요소 -> selEl
  const sldWrap = selEl; // DOM요소를 직접 받음!!!
  // 1-2.변경 대상: 선택요소 하위 .slide
  const slide = mFn.qsEl(sldWrap, ".slide");
  // 1-3.이벤트 대상: 선택요소 하위 .abtn
  const abtn = mFn.qsaEl(sldWrap, ".abtn");
  // 1-4.블릿박스 대상: 선택요소 하위 .indic li
  let indic = mFn.qsEl(sldWrap, ".indic");

  // 대상확인
  ////console.log("대상", abtn, slide, indic);

  // 1.4. 슬라이드 개수와 동일한 블릿동적생성
  // 대상: .indic -> indic변수
  // 슬라이드개수
  let sldCnt = mFn.qsaEl(slide, "li").length;
  // for문으로 블릿li생성(0번만 클래스 on넣기)
  for (let i = 0; i < sldCnt; i++) {
    indic.innerHTML += `
            <li ${i == 0 ? 'class="on"' : ""}>
                <img src="images/dot1.png" alt="흰색">
                <img src="images/dot2.png" alt="회색">
            </li>
        `;
  } /////// for문 ////////////

  // 블릿li 재선택할당하기 /////
  indic = mFn.qsaEl(sldWrap, ".indic li");

  // 1.5. li리스트에 순번속성 만들어 넣기
  // 만드는이유: 블릿변경 등에 현재 슬라이드 순번 필요!
  // 사용자 정의 속성은 반드시 'data-'로시작해야함!(W3C규칙)
  // data-seq 로 순번 속성을 넣을 것임!
  slide
    .querySelectorAll("li")
    .forEach((ele, idx) => ele.setAttribute("data-seq", idx));
  // setAttribute(속성명,속성값) -> 속성셋팅 JS내장메서드

  // 2. 이벤트 설정하기 : 버튼요소들 -> forEach()
  abtn.forEach((ele) => mFn.addEvt(ele, "click", goSlide));

  // 3. 함수만들기
  function goSlide() {
    // a요소 기본이동 막기
    event.preventDefault();

    // 광클금지 //////////////
    if (clickSts) return; //나가!
    clickSts = 1; //잠금!
    setTimeout(() => (clickSts = 0), TIME_SLIDE); //해제!

    // 호출확인
    ////console.log("나야나!", this, this.classList.contains("ab2"));

    // classList.contains(클래스명)
    // 선택요소에 해당클래스가 있으면 true

    // 1. 오른쪽 버튼 여부 알아내기
    let isRight = this.classList.contains("ab2");

    // 2. 슬라이드 li 새로 읽기
    let eachOne = slide.querySelectorAll("li");

    // 3. 버튼분기하기 '.ab2' 이면 오른쪽버튼
    if (isRight) {
      // 오른쪽버튼
      // 오른쪽에서 들어오는 슬라이드함수 호출!
      rightSlide();
    } ////// if //////////////
    else {
      // 왼쪽버튼
      // 1. 맨뒤li 맨앞으로 이동
      // 놈.놈.놈 -> insertBefore(넣을놈,넣을놈전놈)
      slide.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
      // 2. left값 -330% 만들기 : 들어올 준비 위치!
      slide.style.left = "-330%";
      // 3. 트랜지션 없애기
      slide.style.transition = "none";

      // 같은 left값을 동시에 변경하면 효과가 없음!
      // 비동기적으로 처리해야함!
      // -> setTimeout으로 싸주기!
      // 시간은 0이어도 비동기 처리므로 효과있음!

      setTimeout(() => {
        // 4. left값 -220%으로 들어오기
        slide.style.left = "-220%";

        // 5. 트랜지션주기
        slide.style.transition = TIME_SLIDE + "ms ease-in-out";
      }, 0);
    } /////// else //////////////

    // 4. 블릿순번 변경 함수 호출
    chgIndic(isRight); // 방향값을 보냄!

    // 5. 자동넘김 멈춤함수 호출하기
    clearAuto();
  } ////////// goSlide 함수 /////////

  // 블릿순번 변경 함수 /////////////
  function chgIndic(isRight) {
    // isRight(0-왼쪽,1-오른쪽)
    // 1. 슬라이드 순번과 일치하는 블릿에 클래스 넣기
    // 대상: .indic li -> indic변수
    // 맨앞 슬라이드 li의 'data-seq' 값 읽어오기
    // isRight값이 true이면 오른쪽버튼이고 순번은 [1]
    // isRight값이 false이면 왼쪽버튼이고 순번은 [0]
    let nowSeq = slide
      .querySelectorAll("li")
      [isRight ? 1 : 0].getAttribute("data-seq");

    ////console.log("현재슬라이드 순번:", nowSeq);

    // 2. 해당순번 블릿li에 클래스 on넣기
    // 블릿전체순회시 해당순번에 on넣고 나머지는 on빼기
    indic.forEach((ele, idx) => {
      if (idx == nowSeq) ele.classList.add("on");
      else ele.classList.remove("on");
    }); ///////// forEach ///////////
  } /////////// chgIndic함수 ////////////

  // 슬라이드 오른쪽방향 함수 ////////////
  function rightSlide() {
    //1.대상이동하기 : -330%
    slide.style.left = "-330%";
    //2.트랜지션주기
    slide.style.transition = TIME_SLIDE + "ms ease-in-out";
    // 이동시간 후 맨앞li 잘라서 맨뒤로 이동하기
    // appendChild(요소)
    setTimeout(() => {
      // 3.맨앞li 맨뒤로 이동
      slide.appendChild(slide.querySelectorAll("li")[0]);
      // 4.slide left값 -220%
      slide.style.left = "-220%";
      // 5.트랜지션 없애기
      slide.style.transition = "none";
    }, TIME_SLIDE);
  } //////////// rightSlide 함수 ////////////

  /********************************** 
        자동넘기기 기능구현
        -> 일정시간간격으로 오른쪽버튼 클릭
        -> 사용JS내장함수 : setInterval()
        -> 버튼클릭 실행 메서드: click()
        대상: 오른쪽버튼 - .ab2 -> abtn[1]
    **********************************/
  // 인터발변수
  let autoI;
  // 인터발타이밍함수를 변수에 할당후
  // clearInterval(할당변수) 해야 멈출 수 있다!

  // 타임아웃변수
  let autoT;
  // 타임아웃함수도 마찬가지임!
  // clearTimeout(할당변수) 해야 실행 쓰나미를 막을 수 있다!

  // 인터발호출 함수 //////////
  function slideAuto() {
    autoI = setInterval(() => {
      // 오른쪽이동 슬라이드 함수호출
      rightSlide();
      // 블릿변경함수호출(오른쪽은 1)
      chgIndic(1);

      // ////console.log('실행!');
      // 오른쪽버튼 클릭이벤트 강제발생!
      // 선택요소.click()
      //  abtn[1].click();
    }, 3000);
  } ///////// slideAuto 함수 //////////////

  // 인터발함수 최초호출!
  //    slideAuto();

  // 버튼을 클릭할 경우를 구분하여 자동넘김을 멈춰준다!
  function clearAuto() {
    // 자동넘김 지우기
    // clearInterval(인터발할당변수)
    ////console.log("멈춤!!!");

    // 1. 인터발 지우기
    clearInterval(autoI);
    // 2. 타임아웃 지우기(재실행호출 쓰나미 방지)
    clearTimeout(autoT);
    // 3. 일정시간후 다시 인터발호출셋팅하기!!!
    autoT = setTimeout(slideAuto, 5000);
    // 결과적으로 5초후 인터발재실행은 하나만 남는다!
  } //////////// clearAuto 함수 ///////////
} //////////////// slideFn 함수 ///////////////
/////////////////////////////////////////////

/******************************************* 
    [ 드래그 다중적용 함수 만들기 ]
    함수명 : goDrag
    기능 : 다중 드래그 기능 적용

    수정필요사항 체크
    1) 드래그 시 위치이동 안되는 버그
    (원인:top,left초기값 셋팅안될경우 에러)
    2) z-index 초기화로 인한 순서변경 어색

*******************************************/
function goDrag(ele) {
  // ele - 호출시 보내준 대상을 받는 변수
  // -> 하나씩 전달된 드래그 대상 요소임!
  ////console.log(ele);

  // 드래그 적용 대상 및 이벤트 설정하기 ////
  // 1. 대상선정 : 보내준 대상 HTML컬렉션
  const dtg = ele;
  // const dtg = mFn.qs('.dtg2');

  // 드래그할 대상의 CSS 기본값을 셋팅한다!
  // 필수 셋팅요소는 position:relative / top:0 / left:0
  dtg.style.position = "relative";
  // dtg.style.top = "0";
  // 배너가 left값 -220% 기준박스에서 이동함
  // .banbx의 width값 곱하기 2.2
  // 기준위치값 변수에 할당!
  let leftVal = mFn.qs(".banbx").offsetWidth * -2.2;
  //console.log("left 셋팅값:", leftVal);
  // left위치값 최초셋업! -> px단위 꼭 쓸것!!!
  dtg.style.left = leftVal + "px";

  // 2. 변수 셋팅 ///////////////////////
  // (1) 드래그 상태 변수 만들기
  let dragSts = false;
  // false는 드래그 아님, true는 드래그 상태!

  // (2) 첫번째 위치 포인트 : first x, first y
  let firstX;

  // (3) 마지막 위치 포인트 : last x, last y
  // -> 최초위치 셋팅값으로 프리셋팅!
  let lastX = leftVal;
  // -> 중첩된 최종위치가 처음에는 계산되지 않았으므로
  // 출발위치인 0값으로 초기값을 넣어준다!
  // 초기값을 안넣으면 최초에 값을 더할때 에러가 발생한다!

  // (4) 움직일때 위치 포인트 : move x, move y
  let moveX;

  // (5) 위치이동 차이 계산 결과변수 : result x, result y
  let resultX;

  //////////////////////////////////
  // 3. 함수 만들기 /////////////////
  // 할당형 함수를 만들경우 이벤트 설정보다 위에서 만들어준다!

  // (1) 드래그 상태 true 로 변경하는 함수
  const dTrue = () => (dragSts = true);

  // (2) 드래그 상태 false 로 변경하는 함수
  const dFalse = () => (dragSts = false);

  // (3) 드래그 상태시 처리함수
  const dMove = (e) => {
    // e - 이벤트 객체 전달변수
    // 드래그 상태는 dragSts값이 true인 경우에만 허용!
    if (dragSts) {
      // //console.log('드래그중~!');

      // 1. 드래그 상태에서 움질일대 포인터 위치값
      // - 브라우저용 포인터 위치는 pageX, pageY를 사용!
      // - 모바일용 터치 스크린 터치위치는
      // touches[0].screenX, touches[0].screenY
      // -> 두가지를 모두 사용하는 방법은 OR문 할당법을 쓴다!
      // -> 변수 = 할당문1 || 할당문2
      // ->>> 두 할당문중 값이 유효한(true)값이 할당됨!
      // DT용 코드와 Mobile코드를 동시에 셋팅할 수 있다!
      moveX = e.pageX || e.touches[0].screenX;
      // //console.log(e.touches[0]);
      // moveX = e.pageX;
      // moveY = e.pageY;

      // 2. 움직일 위치 결과값
      // 움직일때 위치 포인트 - 첫번째 위치 포인트
      // moveX - firstX
      // moveY - firstY
      resultX = moveX - firstX;
      // -> 순수하게 움직인 거리를 계산함!
      // -> 움직인위치 - 첫번째위치 순으로 빼준 이유는?
      // ->>> top, left위치이동 양수 음수차를 고려한 순서임

      // 3. 이동차를 구한 resultX,resultY값을 대상 위치값에 적용
      // 대상 : 드래그 요소 dtg
      dtg.style.left = resultX + lastX + "px";
      // 처음엔 lastX,lastY값이 0으로 들어오기
      // 두번째부터는 mouseup이벤트 발생부터 저장된
      // 최종 이동위치값이 더해진다!

      // 값확인
      //console.log(`moveX: ${moveX}`);
      //console.log(`resultX: ${resultX}`);
    } //// if ////////

    // 드래그 중(dragSts===true)일때는 주먹손(grabbing),
    // 드래그아닐때(dragSts===false) 편손(grab)
    dtg.style.cursor = dragSts ? "grabbing" : "grab";
  }; ///////// dMove 함수 /////////////////

  // (4) 첫번째 위치포인트 셋팅함수 : firstX, firstY 값셋팅
  const firstPoint = (e) => {
    // DT용값과 Mobile값을 동시에 OR문으로 할당함!
    firstX = e.pageX || e.touches[0].screenX;
    // firstX = e.pageX;
    // firstY = e.pageY;
    //console.log("첫포인트:", firstX);
  }; ///////// firstPoint 함수 //////////

  // (5) 마지막 위치포인트 셋팅함수 : lastX, lastY 값셋팅
  // -> 왜필요하지? 이동후 결과위치를 저장하여 다음 드래그 이동시
  // 그 결과를 중첩하여 반영하기 위해 필요함!!!
  const lastPoint = () => {
    // 이동결과 계산된 최종값을 기존값에 더함(+=)
    lastX += resultX;
    //console.log("끝포인트:", lastX);
  }; ///////// lastPoint 함수 //////////

  // 4. 드래그 이벤트 설정하기 //////////
  // (1) 마우스 다운 이벤트 함수연결하기
  mFn.addEvt(dtg, "mousedown", (e) => {
    // 드래그 상태값 true로 변경!
    dTrue();
    // 첫번째 위치포인트 셋팅!
    firstPoint(e);
    // 단독할당되지 않고 내부 함수호출로 연결되어있으므로
    // 이벤트 전달을 토스해줘야 한다!(전달변수 e)

    // 마우스 다운시 주먹손!
    dtg.style.cursor = "grabbing";

    // z-index 전역변수(zNum) 숫자를 1씩 높이기
    // dtg.style.zIndex = ++zNum;

    //log("마우스 다운!", dragSts);
  }); ///////// mousedown //////////

  // (2) 마우스 업 이벤트 함수연결하기
  mFn.addEvt(dtg, "mouseup", (e) => {
    // 드래그 상태값 false로 변경!
    dFalse();
    // 마지막 위치포인트 셋팅!
    lastPoint(e);

    // 마우스 업시 편손!
    dtg.style.cursor = "grab";
    //대상의 left값 찍기
    console.log('슬라이드left:',dtg.style.left);

    ////console.log("마우스 업!", dragSts);
  }); ///////// mouseup //////////

  // (3) 마우스 무브 이벤트 함수연결하기
  mFn.addEvt(dtg, "mousemove", dMove);
  //////////// mousemove /////////////

  // (4) 마우스가 대상을 벗어나면 드래그상태값 false처리하기
  mFn.addEvt(dtg, "mouseleave", () => {
    // 드래그 상태값 false로 변경!
    dFalse();
    // 과도한 드래그로 갑자가 아웃되면 lastX,lastY값이
    // 셋팅되지 못한다! 이것을 기존 요소의 위치값으로 보정함!
    // 단, style위치값 코드는 'px'단위가 있으므로 parseInt처리!
    lastX = parseInt(dtg.style.left);

    ////console.log("마우스나감!", dragSts);
  }); ///////// mouseleave //////////

  //////////// 모바일 이벤트 처리 구역 //////////

  // (1) 터치스타트 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchstart", (e) => {
    // 드래그 상태값 true로 변경!
    dTrue();
    // 첫번째 위치포인트 셋팅!
    firstPoint(e);
    // 단독할당되지 않고 내부 함수호출로 연결되어있으므로
    // 이벤트 전달을 토스해줘야 한다!(전달변수 e)

    // z-index 전역변수(zNum) 숫자를 1씩 높이기
    // dtg.style.zIndex = ++zNum;

    ////console.log("터치스타트!", dragSts);
  }); ///////// touchstart //////////

  // (2) 터치엔드 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchend", () => {
    // 드래그 상태값 false로 변경!
    dFalse();
    // 마지막 위치포인트 셋팅!
    lastPoint();

    ////console.log("터치엔드!", dragSts);
  }); ///////// touchend //////////

  // (3) 터치무브 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchmove", dMove);
  //////////// touchmove /////////////
} /////////////// goDrag 함수 ///////////////
/////////////////////////////////////////////