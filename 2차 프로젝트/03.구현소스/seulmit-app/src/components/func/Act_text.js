import React from "react";
import { useState, useEffect } from "react";
import "../../css/act_text.scss"; // CSS 파일 연결
import $ from "jquery";


function Act_text({ text }) {
  //text = 외부에서 전달받은 텍스트값

  //상태관리변수//////////////////////////////////////////////

  //현재까지 출력된 글자를 저장하는 배열
  const [displayedChars, setDisplayedChars] = useState([]);
  //애니 상태변수
  const [isAni, setIsAni] = useState(false);

  const text = Array.from(text); // 문자열을 UTF-16 문자 단위로 배열
    
  //1. 스크롤 이벤트 실행 훅
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
    let index = 0;
    let intervalId; // intervalId 변수 선언

    //조건추가 : 타이핑이 완료되지 않았을 떄만 실행
    //isAni : true = 애니가 실행중이고 text length 수가 저장된 배열값 보다 적음? 
    if (isAni&& displayedChars.length < text.length) {
      const chars = text.split("");

      intervalId = setInterval(() => {
        setDisplayedChars((prevChars) => [...prevChars, chars[index]]);
        index++;

        if (index === chars.length) {
          clearInterval(intervalId);
          //setInterval 무한호출 막기
          setIsAni(false);
        }
      }, 200);
    }

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 setInterval 해제
  }, [isAni, text]); // 


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
