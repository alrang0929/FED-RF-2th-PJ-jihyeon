import React from "react";
import { useState, useEffect } from "react";
import "../../css/act_text.scss"; // CSS 파일 연결

function Act_text({ text }) {
  //text = 외부에서 전달받은 텍스트값
  // const text = text;
  const [displayedChars, setDisplayedChars] = useState([]);

  useEffect(() => {
    const chars = text.split(""); // 텍스트를 한 글자씩 배열로 분리

    let index = 0;
    const intervalId = setInterval(() => {
      //... << 배열 연산자던ㄱ가..
      setDisplayedChars((prevChars) => [...prevChars, chars[index]]);
      index++;

      if (index === chars.length) {
        clearInterval(intervalId);
      }
    }, 200); // 200ms 간격으로 한 글자씩 출력
  }, []);

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
