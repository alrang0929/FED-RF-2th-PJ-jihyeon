import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./css/nomal_button.scss";
import { useNavigate } from "react-router-dom";
function NomalButton({text, link}) {
    /************************************ 
    [props list]
    1.text : 버튼 텍스트
    2.link : 이동 링크
    
    ************************************/
  const navigate = useNavigate();

  const goNav = () => {
    navigate(link); // 버튼 클릭 시 페이지 이동
  };

  
  return (
    <>
      <button 
      className="mcolor-mbtn"
      onClick={goNav}
      >
        {text}
        <IoIosArrowForward className="arrow-R" />
      </button>
    </>
  );
}

export default NomalButton;
