//하단영역 컴포넌트 - FooterArea.jsx
import { memo } from "react";
import Logo from "../modules/Logo";

import Intro from "../pages/Intro";


/////import area///////////////////////////////////////////////////////////

const FooterArea = memo(({ival}) => {
  // console.log("footer:",ival);
  return (
    <>
      <footer id="footer-area">
        <div id="footer-wrap">
          <div className="logobx">
              <Logo logoStyle="bottom"/>
          </div>
          <address className="fx-box">
            <li>상호 : (주)비앤에이치코스메틱</li>
            <li>대표 : 권기현</li>
            <li>주소 : 서울특별시 강남구 논현로 731 (논현동) 키드코빌딩 5층</li>
            <li>사업자등록번호 : 214-88-47878</li>
            <li>
              통신판매업신고번호 : 2013-서울강남-00425호
              <a href="">[사업자정보확인]</a>
            </li>
            <li>개인정보관리자 : 권기현(seulmit@bnhcosmetics.co.kr)</li>
            <li>
              CUSTOMER SERVICE : 080-343-1803 ㅣ 9:00~17:00 (Lunch time
              12:30~13:30) ㅣ 토, 일요일 및 공휴일 휴무
            </li>
          </address>
          <div id="copyright">
            ⓒ.Seulmit All Rights Reserved designed by Alrang
          </div>
          <div id="sns-wrap">
            <div className="sns-icon">
              <a href="">
                <img src={process.env.PUBLIC_URL+"/images/svg/icon_facebook.svg"} alt="페이스북 이동" />
              </a>
              <a href="">
                <img
                  src={process.env.PUBLIC_URL+"/images/svg/icon_instagram.svg"}
                  alt="인스타그램 이동"
                />
              </a>
              <a href="">
                <img src={process.env.PUBLIC_URL+"/images/svg/icon_youtube.svg"} alt="유튜브 이동" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {ival && <Intro />}
    </>
  );
}); ///////FooterArea 컴포넌트//////////////////

export default FooterArea;
