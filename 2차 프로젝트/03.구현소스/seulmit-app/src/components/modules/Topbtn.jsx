//슬밋pj - 상단영역 top버튼 모듈

import React from 'react';
import { Link } from "react-router-dom";
//////////////////////import area//////////////////////////////////////////

function Topbtn(props) {
    return (
        <>
            <div className="" id="follow-button">
        {/* <!-- 탑버튼 --> */}
        <div className="imgbx" id="top-button">
          <Link to="#">
            <span className="material-symbols-outlined"> arrow_upward </span>
          </Link>
        </div>
        <div className="" id="talk-button">
          <Link to="#">Talk</Link>
        </div>
      </div>
        </>
    );
}

export default Topbtn;


