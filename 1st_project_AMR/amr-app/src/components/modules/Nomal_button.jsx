import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./css/nomal_button.scss";
function NomalButton({text, link}) {
    /************************************ 
    [props list]
    1.text : 버튼 텍스트
    2.link : 이동 링크
    
    ************************************/
  return (
    <div>
      <button class="mcolor-mbtn">
        <a href={link}>{text}</a>
        <IoIosArrowForward className="arrow-R" />
      </button>
    </div>
  );
}

export default NomalButton;
