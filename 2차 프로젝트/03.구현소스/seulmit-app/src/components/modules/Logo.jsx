//seumit Logo component - Logo.jsx
import React from "react";
import { isrc } from "../data/img_src";

///////import area/////////////////////////////////////////////////

export default function Logo({logoStyle}) {
//logoStyle: 상, 하단 구분코드
// 코드 값: top / bottom

    //로고 박스 셋팅
    const logoSetStyle = {
        top:{
            position: "absolute",
            left: "50%",
            top:" 50%",
            translate:" -50% -50%",
        },
        bottom:{
            height: "80px",
        },
    } 

    //로고박스 내 이미지 셋팅
    const logoImgStyle = {
        top:{width: "120px"},
        bottom:{width: "200px"},
    }

    return(
        <h1 style={logoSetStyle[logoStyle]}>
            <img
            style={logoImgStyle[logoStyle]}
            src={process.env.PUBLIC_URL+isrc.logo} alt="슬밋 로고" />
        </h1>
    );


}