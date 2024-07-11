//슬밋pj 검색결과 리스트 컴포넌트 ////////////////

import React from "react";
import { Link } from "react-router-dom";

//css
import "../../css/search.scss";
import SwiperPrdList from "../plugin/Swiper_prdList";
///import area//////////////////////////////

function SearchingProduct({ dt }) {
    console.log("dt", dt);
    // console.log("dt img",dt.img[0]);
    //dt : 검색배열 데이터
    //total = 검색된 배열데이터 개수
    const total = dt.length;
    console.log("데이터수", total);

    //dt: Searching에서 결과값 전달받음
    return (
        <>
            <section className="plist-wrap">
                {/* case1. 데이터 개수 有 */}
                {total > 0 && (
                    <ul className="plist">
                        {dt.map((v, i) => (
                            <li key={i}>
                                <Link
                                    to="/detail"
                                    state={{
                                        topcat: v.category, // 상위카테고리
                                        product: v.idx, // 상품순번
                                    }}
                                >
                                    <div className="desc-wrap">
                                        <div className="eng-pdtit">
                                            {v.engtit}
                                        </div>
                                        <div className="kor-pdtit">{v.tit}</div>
                                        <div className="desc">{v.txt}</div>
                                    </div>
                                    <div className="img-wrap">
                                        <div className="imgbx">
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    `${v.img[0].isrc}`
                                                }
                                                alt={`"${v.tit}"`}
                                            />
                                        </div>
                                        <div className="blur">
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    `${v.img[1].isrc}`
                                                }
                                                alt={`"${v.tit}"`}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* case2. 데이터 없는 경우 */}
                {total == 0 && (
                    <>
                        <h3 className="none-text">
                            검색 결과가 존재하지 않습니다.
                        </h3>
                        <section id="prd-list" className="search-pdlist ">
                            <div className="desc-box">
                                {/* <div className="tit">lorem ipsum</div> */}
                                <h2 className="s-title" style={{padding:"20px"}}>이런 상품은 어떠신가요?</h2>
                                <span className="none-text" >슬밋으로 특별한 경험을 선사합니다.</span>
                            </div>
                            {/* 베스트상품 리스트 swiper : Swiper_prd-list */}
                            <SwiperPrdList />
                        </section>
                    </>
                )}
            </section>
        </>
    );
}

export default SearchingProduct;
