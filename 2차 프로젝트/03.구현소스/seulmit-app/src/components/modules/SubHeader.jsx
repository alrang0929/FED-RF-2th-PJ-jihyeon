import React, { useContext } from "react";
import "../../css/common/_subheader.scss";
import { isrc } from "../data/img_src";
import { sCon } from "../pages/sCon";
////////////////import area///////////////////////

export default function SubHeader() {
//컨텍스트 사용
const title = useContext(sCon.selCat);


    ///////코드리턴구역/////////////////////////////////////////
    return (
        <header style="background: url(/images/intro_BG.jpg);">
            <div className="title">
                <div className="icon">
                    <img src={process.env.PUBLIC_URL+"/images/icon-sim-black.svg"} alt="" />
                </div>
                <h3>{title}</h3>
                <span>슬밋의 공지사항을 확인하세요</span>
            </div>
        </header>
    );
}
