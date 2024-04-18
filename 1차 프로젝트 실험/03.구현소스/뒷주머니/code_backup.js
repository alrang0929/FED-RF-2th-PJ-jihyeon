// 슬라이드 드래그 모듈 JS - slide_drag.js


import mFn from "./my_function.js";

function setDrag(clsName) {
  // ele - 드래그 대상요소 클래스 이름 받는 변수
  console.log(clsName);
  //1. 받은 클래스 이름으로 요소를 호출한다
  let ele = mFn.qsa("." + clsName);

  //2. 드래그 함수를 호출한다
  //드래그 함수 호출
  //HTML 컬렉션 이므로 forEach 매서드로 호출
  //forEach ((요소,순번,전체)=>{})
  ele.forEach((x) => goDrag(x));
  //z는 전체 요소집합 컬렉션임(z-index 초기화에 필요!)
} ////////////////setDrag함수////////////
 
function goDrag(ele) {
  // ele - 드래그 대상요소 클래스 이름 받는 변수
  // -> 하나씩 전달된 드래그 요소임!
  console.log(ele);
  //=>마우스 다운시 z-index 대상 1로 만들때 다른 요소는 0변경시 사용!
  // 드래그 적용 대상 및 이벤트 설정하기 ////
  // 1. 대상선정 : 보내준 대상 HTML컬렉션
  const dtg = ele;
  // const dtg = mFn.qs('.dtg2');
  // 드래그할 대상의 css 기본값을 셋팅한다
  // 필수 셋팅요소는 position relativ / top 0 / left 0
  dtg.style.position = "relative";
  // dtg.style.top = "0";
  // 배너가 기준박스 에서 -220% 이동함
  //.banbx width값 곱하기 2.2
  //기준 위치값 변수에 할당!
  let leftVal = mFn.qs('.banbx').offsetWidth*-2.2;
  console.log('left셋팅값:',leftVal);
  //레프트 위치값 최초셋업! 픽셀단위 꼭 쓸것!!!
  dtg.style.left = leftVal + "px";

  // 2. 변수 셋팅 ///////////////////////
  // (1) 드래그 상태 변수 만들기
  let dragSts = false;
  // false는 드래그 아님, true는 드래그 상태!

  // (2) 첫번째 위치 포인트 : first x, first y
  let firstX;

  // (3) 마지막 위치 포인트 : last x, last y
  // -> 최초위치 셋팅값으로 프리셋팅 픽셀단위!!!
  let lastX = leftVal + "px";
    
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
      // console.log('드래그중~!');

      // 1. 드래그 상태에서 움질일대 포인터 위치값
      // - 브라우저용 포인터 위치는 pageX, pageY를 사용!
      // - 모바일용 터치 스크린 위치는? touches[].screenX Y
      //->두가지를 모두 사용하는 방법은 or문 할당법을 사용한다
      //->변수 = 할당문 1 || 할당문2
      //===>>> 두 할당문중 값이 유효한(즉, true값)이 할당된다
      //DT용 코드와 MO코드를 동시에 셋팅할 수 있다
      moveX = e.pageX ||e.touches[0].screenX;
      // moveY = e.pageY ||e.touches[0].screenY;
      // moveX = e.pageX;
      // moveY = e.pageY;
      // console.log(e.touches[0]);

      // 2. 움직일 위치 결과값
      // 움직일때 위치 포인트 - 첫번째 위치 포인트
      // moveX - firstX
      // moveY - firstY
      resultX = moveX - firstX;
      // resultY = moveY - firstY;

      // -> 순수하게 움직인 거리를 계산함!
      // -> 움직인위치 - 첫번째위치 순으로 빼준 이유는?
      // ->>> top, left위치이동 양수 음수차를 고려한 순서임

      // 3. 이동차를 구한 resultX,resultY값을 대상 위치값에 적용
      // 대상 : 드래그 요소 dtg
      dtg.style.left = resultX + lastX + "px";
      // dtg.style.top = resultY + lastY + "px";
      // 처음엔 lastX,lastY값이 0으로 들어오기
      // 두번째부터는 mouseup이벤트 발생부터 저장된
      // 최종 이동위치값이 더해진다!

      // 값확인
      console.log(`moveX: ${moveX}`);
      console.log(`resultX: ${resultX}`);
    } //// if ////////

    // 드래그 중(dragSts===true)일때는 주먹손(grabbing),
    // 드래그아닐때(dragSts===false) 편손(grab)
    dtg.style.cursor = dragSts ? "grabbing" : "grab";
  }; ///////// dMove 함수 /////////////////

  // (4) 첫번째 위치포인트 셋팅함수 : firstX, firstY 값셋팅
  const firstPoint = (e) => {
    // DT용 값과 MO값을 or문으로 동시에 셋팅! 
    firstX = e.pageX||e.touches[0].screenX;
    // firstY = e.pageY||e.touches[0].screenY;
    // firstX = e.pageX;
    // firstY = e.pageY;
    // console.log("첫포인트:", firstX, " | ", firstY);
  }; ///////// firstPoint 함수 //////////

  // (5) 마지막 위치포인트 셋팅함수 : lastX, lastY 값셋팅
  // -> 왜필요하지? 이동후 결과위치를 저장하여 다음 드래그 이동시
  // 그 결과를 중첩하여 반영하기 위해 필요함!!!
  const lastPoint = () => {
    // 이동결과 계산된 최종값을 기존값에 더함(+=)
    lastX += resultX;
    // lastY += resultY;
    console.log("끝포인트:", lastX);
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
    dtg.style.cursor = "grabbing";
    //z인덱스 0으로(HTML 컬랙션 전달변수 coll) 초기화
    // coll.forEach(x=>x.style.zIndex=0)
    //z인덱스 전역변수 zNum 숫자를 1씩 높이기
    // dtg.style.zIndex = ++zNum;

    console.log("마우스 다운!", dragSts);
  }); ///////// mousedown //////////

  // (2) 마우스 업 이벤트 함수연결하기
  mFn.addEvt(dtg, "mouseup", (e) => {
    // 드래그 상태값 false로 변경!
    dFalse();
    // 마지막 위치포인트 셋팅!
    lastPoint(e);
    dtg.style.cursor = "grab";
    
    console.log("마우스 업!", dragSts);
  }); ///////// mouseup //////////

  // (3) 마우스 무브 이벤트 함수연결하기
  mFn.addEvt(dtg, "mousemove", dMove);
  //////////// mousemove /////////////

  // (4) 마우스가 대상을 벗어나면 드래그상태값 false처리하기
  mFn.addEvt(dtg, "mouseleave", () => {
    // 드래그 상태값 false로 변경!
    dFalse();
    // 드래그시 과도한 드래그로 갑자기 아웃되면 lastX lastY 값이 셋팅되지 못한다!
    //이것을 기존 요소의 위치값으로 보정함!
    //단, style 위치값 코드는 'px'단위가 있으므로 parseInt 처리를 한다
    lastX = parseInt(dtg.style.left);
    // lastY = parseInt(dtg.style.top);

    console.log("마우스나감!", dragSts);
    
  }); ///////// mouseleave //////////



/////////////////////모바일 이벤트 처리 구역////////////////////////


  // (1) 마우스 다운 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchstart", (e) => {
    // 드래그 상태값 true로 변경!
    dTrue();
    // 첫번째 위치포인트 셋팅!
    firstPoint(e);
    // 단독할당되지 않고 내부 함수호출로 연결되어있으므로
    // 이벤트 전달을 토스해줘야 한다!(전달변수 e)
    // dtg.style.cursor = "grabbing";
    //z인덱스 0으로(HTML 컬랙션 전달변수 coll) 초기화
    // coll.forEach(x=>x.style.zIndex=0)
    //z인덱스 전역변수 zNum 숫자를 1씩 높이기
    // dtg.style.zIndex = ++zNum;

    console.log("터치 스타트!", dragSts);
  }); ///////// touchstart //////////

  // (2) 마우스 업 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchend", () => {
    // 드래그 상태값 false로 변경!
    dFalse();
    // 마지막 위치포인트 셋팅!
    lastPoint();
    // dtg.style.cursor = "grab";
    
    console.log("터치엔드!", dragSts);
  }); ///////// touchend //////////

  // (3) 마우스 무브 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchmove", dMove);
  //////////// touchmove /////////////

} /////////////// goDrag 함수 ///////////////
/////////////////////////////////////////////

// 내보내기 셋팅
export default setDrag;
