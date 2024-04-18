////////브랜드 리스트 슬라이드
(() => {
    const blData = amrData.blList;
    const blBx = myFn.qs(".brand-mibx");
    console.log("대상:", blData, blBx);
  
    blBx.innerHTML = `
    <ul class="bslider fx-box">
    ${amrData.blList.map(i=>`
    <li style="background: url(./images/brand_bg_${i.title}.jpg) no-repeat center/cover;">
        <figure>
          <img src="./images/brand_thm_${i.title}.jpg" alt="${i.title}">
        </figure>
        <figcaption txt>
          ${i.text}
        </figcaption>
      </li>
    `).join('')}
    </ul>
    `
  
  })(); //브랜드 리스트 슬라이드 끝/////////////
  
  ////////브랜드 로고 리스트
  (() => {
    const blData = amrData.blList;
    const blLgbx = myFn.qs(".brand-lgbx");
    console.log("대상:", blData, blLgbx);
  
    blLgbx.innerHTML = `
    <ul class="sbili fx-box">
      ${blData.map(i =>`
      <li><a href="#"><img src="./images/bi_${i.title}.png"
      alt="${i.title} logo"></a></li>
      `).join('')}
    </ul>
    `
    
    
  
  }
  
  )(); //브랜드 로고 리스트끝/////////////



  //어디서 주워온 드래그 슬라이드
  
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
      slider.style.cursor = "grabbing";
  });
  slider.addEventListener("mouseup", () => {
      pressed = false;
      slider.style.cursor = "grab";
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