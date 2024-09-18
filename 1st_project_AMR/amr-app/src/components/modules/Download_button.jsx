import React from "react";
import { IoIosArrowForward, IoIosDocument } from "react-icons/io";
import "./css/nomal_button.scss";
import { Link } from "react-router-dom";
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
    <div>
      <button className="mcolor-mbtn">
        <Link
          to={link}
          onClick={() => {
            handleDownload("/api/download/" + file, link);
          }}
        >
          {text}
        </Link>
        <IoIosDocument className="arrow-R" />
      </button>
    </div>
  );
}

export default DownloadButton;
