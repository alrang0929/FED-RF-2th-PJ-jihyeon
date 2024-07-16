import React from "react";
import {titleData} from "../data/title_ban";
import "../../css/sub_header.scss";
////////import area///////////////////////////

function SubTitle({selCat}) {
    //에러가 나서 많이 아프므로 빈값 디폴트값 넣어줌..
    const title = titleData[selCat]?.[0]?.title || ""; 
    const text = titleData[selCat]?.[0]?.text || "";
  

    ////코드리턴구역/////////////////////////////
    return (
        <>
            <div className={`sub-header ${selCat} cbx bgi`}>
                <div className="title">
                    <div className="icon">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/icon-sim-white.svg"
                            }
                            alt="슬밋 아이콘"
                        />
                    </div>

                    <h3>{title}</h3>
                    <span style={{fontSize:"16px"}}>{text}</span>

                </div>
            </div>
        </>
    );
}

export default SubTitle;
