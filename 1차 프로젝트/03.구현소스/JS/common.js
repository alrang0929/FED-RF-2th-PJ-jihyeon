//DOM함수 호출
import mFn from "./my_function.js";
//데이터셋팅 불러오기
import * as amrData from "../data/AMR_data.js";
//gnbData 불러오기
import * as cmData from "../data/common_data.js";


function makeGnb(){
//대상 GNB
mFn.qs(".gnb").innerHTML = `
<ul>
${
    Object.keys(cmData.gnbData).map((v) =>`
    <li>
      <h2><a href="#">${v}</a></h2>
      ${
        cmData.gnbData[v]=="없음"?"":`
        <div class="submenu">
                  <ol>
                  ${cmData.gnbData[v].map((vSub)=>`
                  <li><a href="#">${vSub}</a></li>
                  `).join("")}
                  </ol>
                </div>`}
    </li>
    `).join('')}
</ul>`
}//////////////////makeGnb함수//////////////////////

function makeFooter(){
mFn.qs("#footer-area").innerHTML =`

<footer class="footer-area inbox">
<!-- <h2 class="temp-tit">8. 푸터</h2> -->
<div class="col-12">
  <!-- ci 로고 -->
  <div class="logo">
    <img src="./images/ci.png" alt="아모레퍼시픽 로고" />
  </div>
  <!-- 이용약관 및 이동 메뉴 -->
  <div class="link-wrap">
    <a href="#">윤리경</a>
    <a href="#">인재채용</a>
    <a href="#">고객서비스</a>
    <a href="#">글로벌 네트워크</a>
    <a href="#">메거진</a>
    <a href="#">사이트맵</a>
    <a href="#">관련사이트</a>
    <a href="#">법적 고지</a>
    <a href="#">개인정보 처리방침</a>
    <a href="#">영상정보처리기기 운영방침</a>
    
  </div>
  <!-- sns 아이콘 버튼 list -->
  <div class="footer-list-sns">
    <span class="follow-cp">follow SNS us</span>
    <ul>
      <li>
        <a href="https://www.facebook.com/amorepacific.official/"
          ><img src="./images/icon_facebook_b.svg" alt="페이스북 이동"
        /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/amorepacificgroup.official/"
          ><img
            src="./images/icon_instagram_b.svg"
            alt="인스타그램 이동"
        /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/authwall"
          ><img src="./images/icon_linkedin_b.svg" alt="링크드 이동"
        /></a>
      </li>
      <li>
        <a href="https://www.youtube.com/c/AmorepacificGroup"
          ><img src="./images/icon_youtube_b.svg" alt="유튜브 이동"
        /></a>
      </li>
    </ul>
    <!-- 저작권 카피라이트 -->
    <span class="cpr"
      >© Since 2024 Arangpacific, All Rights Reserved</span
    >
  </div>
</div>
</footer>

`;

  
}



export {makeGnb,makeFooter};