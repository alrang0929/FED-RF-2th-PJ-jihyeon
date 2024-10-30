import React, { useEffect } from "react";
import "../../css/footer_area.scss";
function FooterArea(props) {

 
  // 코드 리턴구역////////////////////////////////////
  return (
    
    <>
      <footer className="footer-area inbox">
   
          {/* <!-- ci 로고 --> */}
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/images/ci.png"}
              alt="아모레퍼시픽 로고"
            />
          </div>
          {/* <!-- 이용약관 및 이동 메뉴 --> */}
          <div className="link-wrap fxbox">
            <a href="#" target="_blank">윤리경영</a>
            <a href="#" target="_blank">인재채용</a>
            <a href="#" target="_blank">고객서비스</a>
            <a href="#" target="_blank">글로벌 네트워크</a>
            <a href="#" target="_blank">메거진</a>
            <a href="#" target="_blank">사이트맵</a>
            <a href="#" target="_blank">관련사이트</a>
            <a href="#" target="_blank">법적 고지</a>
            <a href="#" target="_blank">개인정보 처리방침</a>
            <a href="#" target="_blank">영상정보처리기기 운영방침</a>
          </div>
          {/* <!-- sns 아이콘 버튼 list --> */}
          <div className="footer-list-sns">
            <span className="follow-cp">follow SNS us</span>
            <ul className="fxbox sns-icon-wrap">
              <li>
                <a href="https://www.facebook.com/amorepacific.official/">
                  <img src={process.env.PUBLIC_URL+"/images/icon_facebook_b.svg"} alt="페이스북 이동" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/amorepacificgroup.official/">
                  <img
                    src={process.env.PUBLIC_URL+"/images/icon_instagram_b.svg"}
                    alt="인스타그램 이동"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/authwall">
                  <img src={process.env.PUBLIC_URL+"/images/icon_linkedin_b.svg"} alt="링크드 이동" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/AmorepacificGroup">
                  <img src={process.env.PUBLIC_URL+"/images/icon_youtube_b.svg"} alt="유튜브 이동" />
                </a>
              </li>
            </ul>
            {/* <!-- 저작권 카피라이트 --> */}
            <span className="cpr">
              © Since 2024 Arangpacific, All Rights Reserved
            </span>
          </div>

      </footer>
    </>
  );
}

export default FooterArea;
