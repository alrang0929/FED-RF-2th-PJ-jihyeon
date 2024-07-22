import React, { useRef } from "react";
import { useState, useEffect } from "react";
import "../../css/act_text.scss"; // CSS 파일 연결
import $ from "jquery";


  function Act_text({ text }) {

    //text : 컴포넌트에서 전달받은 텍스트
    const [isAni, setIsAni] = useState(false);
    const [displayedChars, setDisplayedChars] = useState([]);

    const charsRef = useRef(text.replace(/&nbsp;/g, ' ').split('')); // chars를 useRef로 관리
    const retVal = x => x.getBoundingClientRect().top;

    useEffect(() => {

      $(window).on("scroll", function () {
        const windowHeight = $(this).height();
        const triggerPoint = windowHeight / 2;

document.querySelectorAll(".act-text").forEach(v=>{
  if(retVal(v) < triggerPoint){
    v.classList.add("on");
  }
});
  
        // if (scrollTop > triggerPoint && !isAni) {
        //   setIsAni(true); // 스크롤 위치가 트리거 포인트를 넘어가면 isAni를 true로 변경
        // }
      });
    }, []);


    useEffect(() => {
      let index = 0;
      let intervalId; // intervalId 변수 선언
  
      const chars = text.replace(/&nbsp;/g, ' ').split(''); //띄어쓰기 변환
        // console.log("zzz",chars);


      // intervalId = setInterval(() => {
        if (index < chars.length) {
          setDisplayedChars(chars);
          // index++;
          // setIsAni(false);
        } 
      // },0); // 200ms 간격으로 한 글자씩 출력
  
      return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 setInterval 해제
    }, [isAni]); // text를 의존성 배열에 추가
  
    return (
      <div className="act-text">
        {displayedChars.map((char, i) => (
          <span
            key={i}
            className="seulmit-text"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  }
  
  export default Act_text;