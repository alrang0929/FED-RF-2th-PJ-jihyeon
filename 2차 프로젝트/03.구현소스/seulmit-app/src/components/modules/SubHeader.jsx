import React from "react";
import "../../css/common/_subheader.scss";
import { isrc } from "../data/img_src";



export default function SubHeader({ subtitle }) {
    return (
        <header style="background: url(/images/intro_BG.jpg);">
            <div className="title">
                <div className="icon">
                    <img src="/images/icon-sim-black.svg" alt="" />
                </div>
                <h3>공지사항</h3>
                <span>슬밋의 공지사항을 확인하세요</span>
            </div>
        </header>
    );
}
