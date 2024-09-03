import React from "react";

function MainArea(props) {
  return (
    <div>
      <footer className="footer-area">
        <div className="">
          <div className="logo">
            <img src="/images/ci.png" alt="아모레퍼시픽 로고" />
          </div>
          <div className="link-wrap">
            <a href="#">윤리경dud</a>
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
          <div className="footer-list-sns">
            <span className="follow-cp">follow SNS us</span>
            <ul>
              <li>
                <a href="https://www.facebook.com/amorepacific.official/">
                  <img src="/images/icon_facebook_b.svg" alt="페이스북 이동" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/amorepacificgroup.official/">
                  <img
                    src="/images/icon_instagram_b.svg"
                    alt="인스타그램 이동"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/authwall">
                  <img src="/images/icon_linkedin_b.svg" alt="링크드 이동" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/AmorepacificGroup">
                  <img src="/images/icon_youtube_b.svg" alt="유튜브 이동" />
                </a>
              </li>
            </ul>
            <span className="">
              © Since 2024 Arangpacific, All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainArea;
