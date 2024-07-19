import React from "react";
import { useState, useEffect } from "react";
import "../../css/act_text.scss"; // CSS 파일 연결
import $ from "jquery";


function Act_text({ text }) {
  //text = 외부에서 전달받은 텍스트값

  //상태관리변수//////////////////////////////////////////////
  //애니 상태변수
  const [isAni, setIsAni] = useState(false);

  const chars = text.replace(/&nbsp;/g, " ").split("");
  const [displayedChars, setDisplayedChars] = useState([]);

  useEffect(() => {
    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
      const windowHeight = $(this).height();
      const triggerPoint = windowHeight / 2;

      if (scrollTop > triggerPoint && !isAni) {
        setIsAni(true); // 스크롤 위치가 트리거 포인트를 넘어가면 isAni를 true로 변경
      }
    });
  }, []);

  useEffect(() => {
    if (isAni) {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < chars.length) {
          setDisplayedChars((prevChars) => [...prevChars, chars[index]]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 200); // 200ms 간격으로 한 글자씩 출력

      return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 setInterval 해제
    }
  }, [isAni]); // chars 의존성 추가


  ///코드 리턴구역//////////////////////////////////
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
