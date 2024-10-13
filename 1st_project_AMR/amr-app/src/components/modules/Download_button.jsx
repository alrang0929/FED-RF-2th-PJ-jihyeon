import React from "react";
import { IoIosArrowForward, IoIosDocument } from "react-icons/io";
import "./css/nomal_button.scss";
import download from "downloadjs";
function DownloadButton({ text, link, file }) {
  /************************************ 
    [props list]
    1.text : 버튼 텍스트
    2.link : 실제 파일 주소
    3. file: 파일 이름
    
    ************************************/

  const handleDownload = async (fileUrl, fileName) => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    download(blob, fileName);
  };

  // 코드 리턴구역 //////////////////////////////////////////
  return (
    <>
      <button
        className="mcolor-mbtn"
        onClick={(e) => {
          e.preventDefault(); // Link의 기본 동작 방지
          handleDownload("/api/download/" + file, link);
        }}
      >
        {text}
        <IoIosDocument className="arrow-R" />
      </button>
    </>
  );
}

export default DownloadButton;
