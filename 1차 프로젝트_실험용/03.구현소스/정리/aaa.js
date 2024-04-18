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