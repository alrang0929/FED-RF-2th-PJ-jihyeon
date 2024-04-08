


/* 리스트 박스 */
//console.log('리스트 잡힘?',nlist);
/* 리스트 내용물*/


// ____________________________________________________

//제품 정보 정보객체
  //1. 데이터 세팅

//로드구역
window.addEventListener('load',()=>{
  // console.log('로딩완료');

  const pdWrap = myFn.qs('.grid-wrap');
  // console.log('그리드 영역');
  
  makeList();
  
  function makeList(){
    console.log('리스트 생성');
    
    let hcode =""; //스트링 리터널
    
    //[forin]>[for Each 로 전환할 때: >>Object.values(pdData)<<.forEach((v,idx) => {
    Object.values(pdData).forEach((v,idx) => {
      console.log('객체값:',v,idx);
      // console.log('for in 객체값:',pdData[x].price);
      
      // let addClass = x===1?'first':x===4?'second':'';
      
      let data = v;
      console.log("넌 뭐냐",this);
  
      hcode+=`
      <section class="cbx ${idx===0?' first':idx===3?' second':''}">
                <!-- 제품박스 -->
                <div class="pdinfo">
                  <!-- 1. 이미지 -->
                  <div class="photo">
                    <img src=${data.img} alt="${data.name}">
                  </div>
                  <!-- 제품 정보박스 -->
                  <div class="desc">
                    <div class="tit-box">
                         <!-- 브랜드 -->
                    <h5 class="bland">${data.bland}</h5>
                    <!-- 상품명 -->
                    <h4 class="name">${data.name}</h4>
                    </div>
                    <!-- 가격박스 -->
                    <div class="price">
                     <!-- 가격 -->
                     <div class="cstnum">${data.price}</div>
                     <!-- 단위 -->
                     <span>원</span>
                    </div>
                  </div>
              </section>
      `;//hcode
    });////////forEach
    
  

  
  //데이터확인
  // console.log(hcode);
  
  //화면출력하기
  pdWrap.innerHTML = hcode;

  };//makeList함수//////////////////
});


