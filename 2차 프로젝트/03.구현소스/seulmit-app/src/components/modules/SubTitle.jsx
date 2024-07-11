import React from "react";
////////import area///////////////////////////

function SubTitle(props) {
    return (
        <>
            <div className={`sub-header bg1 cbx bgi`}>
                <div className="title">
                    <div className="icon">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/icon-sim-black.svg"
                            }
                            alt=""
                        />
                    </div>
                    <h3>NOTICE</h3>
                    <span>슬밋의 공지사항을 확인하세요</span>
                </div>
            </div>
        </>
    );
}

export default SubTitle;
