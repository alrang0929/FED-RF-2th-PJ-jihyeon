import React from "react";
import { useState, useEffect } from "react";
import "../../css/act_text.scss"; // CSS 파일 연결
import $ from "jquery";


function Act_text({ text }) {
  //text = 외부에서 전달받은 텍스트값
  //상태관리변수//////////////////////////////////////////////
  // const text = text;
  const [displayedChars, setDisplayedChars] = useState([]);
  //애니 상태변수
  const [isAni, setIsAni] = useState(false);

    
  useEffect(() => {
    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
      const windowHeight = $(this).height();
      const triggerPoint = windowHeight / 2;

      if (scrollTop > triggerPoint && !isAni) {
        setIsAni(true); // 스크롤 위치가 트리거 포인트를 넘어가면 isAni를 true로 변경
      }
    });
  }, []); // 빈 배열: 컴포넌트 마운트 후 한 번만 실행

  useEffect(() => {
    let index = 0;
    let intervalId; // intervalId 변수 선언

    if (isAni) {
      const chars = text.split("");

      intervalId = setInterval(() => {
        setDisplayedChars((prevChars) => [...prevChars, chars[index]]);
        index++;

        if (index === chars.length) {
          clearInterval(intervalId);
        }
      }, 200);
    }

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 setInterval 해제
  }, [isAni, text]); // isAni와 text를 의존성 배열에 추가


  return (
    <div className="act-text">
      {displayedChars.map((char, i) => (
        <span
          key={i}
          className="seulmit-text"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default Act_text;
