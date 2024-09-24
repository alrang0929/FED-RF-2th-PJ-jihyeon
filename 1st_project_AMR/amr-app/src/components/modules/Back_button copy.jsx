import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./css/nomal_button.scss";
import { useNavigate } from "react-router-dom";
function BackButton({text}) {
    /************************************ 
    [props list]
    1.text : 버튼 텍스트

    
    ************************************/
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // 뒤로가기
    };
  
    return (
      <button className="back-btn mcolor-mbtn" onClick={handleGoBack}>{text}</button>
    );
}

export default BackButton;
