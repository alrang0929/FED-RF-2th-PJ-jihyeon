import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./css/nomal_button.scss";
import { useNavigate } from "react-router-dom";
export default function MoveButton({ text, link }) {
  /************************************ 
    [props list]
    1.text : 버튼 텍스트
    2.link : 이동할 링크
    ************************************/
  const navigate = useNavigate();

  const handleGoMove = () => {
    navigate(link);
  };

  return (
    <button className="back-btn mcolor-mbtn" onClick={handleGoMove}>
      {text}
    </button>
  );
}
