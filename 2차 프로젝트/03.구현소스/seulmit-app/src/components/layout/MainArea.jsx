//메인영역 컴포넌트 - main_area.jsx
import { mainVisualData } from "../data/main_visual_data";
import { bestItemData } from "../data/slide_item_data";
//////import area /////////////////////////////////

export default function MainArea() {
    return (
        <main id="main-area">
            {/* <!-- 1. 메인 비쥬얼 슬라이드 영역 --> */}
            <section className="" id="main-visual-slider">
                {/* <!-- Slider main container --> */}
                
                {/* <!-- 메인비쥬얼 내용 start --> */}
                <ul id="main-bisual-inner fx-box"></ul>
            </section>
            {/* <!-- 메인비쥬얼 내용 end --> */}

            {/* <!-- 서브 비쥬얼 start --> */}
            <section id="sub-visual">
                <ul className="grid-box">
                    <li className="sub-main-box bg1 cbx bgi">
                        <div className="desc-wrap">
                            <div className="category">EVENT</div>
                            <div className="tit">lorem ipsum</div>
                            <span className="desc">
                                로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은
                                출판이나
                            </span>
                            <span className="desc">
                                그래픽 디자인 분야에서 폰트, 타이포그래피,
                                레이아웃 같은
                            </span>
                        </div>
                    </li>
                    <li className="sub-box bg2 cbx bgi">
                        <a href="">more view</a>
                    </li>
                    <li className="sub-box bg3 cbx bgi">
                        <a href="">more view</a>
                    </li>
                    <li className="sub-box bg4 cbx bgi">
                        <a href="">more view</a>
                    </li>
                    <li className="sub-box bg5 cbx bgi">
                        <a href="">more view</a>
                    </li>
                </ul>
            </section>
            {/* <!-- 서브 비쥬얼 end --> */}
            {/* <!-- 추천상품리스트 start --> */}
            <section id="prd-list">
                <div className="desc-box">
                    <div className="tit">lorem ipsum</div>
                    <span className="desc">
                        로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나
                    </span>
                </div>
                <ul className="slider fx-box cont-box">
                    {bestItemData.map((v, i) => (
                        <li key={i} className="item">
                            <a href="">
                                <div className="desc-wrap">
                                    <div className="eng-pdtit">
                                        {v.engtit}
                                    </div>
                                    <div className="kor-pdtit">
                                        {v.tit}
                                    </div>
                                    <div className="desc">
                                        {v.txt}
                                    </div>
                                </div>
                              
                                <div className="img-wrap">
                                    <div className="imgbx">
                                       <img src= {`./images/product/${v.category}/${v.img}.jpg`} alt={`"${v.tit}"`}/>
                                    </div>
                                    <div className="blur">
                                    <img src= {`./images/product/${v.category}/${v.img}_detail.jpg`} alt={`"${v.tit}"`}/>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="indic cont-box"></div>
            </section>
            {/* <!-- 추천상품리스트 end --> */}
            {/* <!-- best item banner start --> */}
            <section id="best-banner">
                <div className="cont-wrap fx-box">
                    <ul className="L-ben">
                        <li>
                            <div className="desc-wrap">
                                <div className="sub-tit">Skin care</div>
                                <div className="tit">Best item</div>
                                <div className="desc">
                                    나에게 오롯이 집중하는 시간. 내 공간을
                                    나만의 향기로 가득 채우는 인센스 스틱과 단잠
                                    미스트로 나만의 리추얼을 완성하세요
                                </div>
                            </div>
                            <button className="button-nomal">more view</button>
                            <ol id="indic">
                                <span className="first-num"></span>
                                <div className="bar"></div>
                                <span className="last-num"></span>
                            </ol>
                        </li>
                    </ul>
                    <ul className="R-ben">
                        <li>
                            <div className="imgbx">
                                <img
                                    src="/images/product/homecare/home_Ritual Set.jpg"
                                    alt=""
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* <!-- best item banner end --> */}
        </main>
    );
} ////MainArea///////////////////////////////////
