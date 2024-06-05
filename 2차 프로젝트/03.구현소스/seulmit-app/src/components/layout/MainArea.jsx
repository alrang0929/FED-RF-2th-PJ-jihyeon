//메인영역 컴포넌트 - main_area.jsx

//data
import { mainVisualData } from "../data/main_visual_data";
import { bestItemData } from "../data/slide_item_data";
import { bestItem } from "../data/eventban_data";
//////import area /////////////////////////////////

export default function MainArea() {
  return (
    <main id="main-area">
      {/* <!-- 1. 메인 비쥬얼 슬라이드 영역 --> */}
      <section className="" id="main-visual-slider">
        {/* <!-- Slider main container --> */}
        <div className="swiper">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper main-visual-inner">
            {/* <!-- Slides --> */}
            {mainVisualData.map((v, i) => (
              <div
                key={i}
                className={`"item main-box bg${i + 1} cbx bgi swiper-slide"`}
              >
                <div className="desc-wrap">
                  <div className="topic">{v.topic}</div>
                  <div className="title">{v.title}</div>
                  <div className="text">{v.text}</div>
                </div>
                <div
                  key={i}
                  className={`bluer item main-box bg${i + 1} cbx bgi`}
                ></div>
              </div>
            ))}
          </div>
          {/* <!-- 페이징 필요시 추가 --> */}
          <div className="swiper-pagination"></div>
          {/* 이전, 다음 버튼 필요시 추가 */}
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        {/* <!-- 메인비쥬얼 내용 start --> */}
        <ul id="main-bisual-inner fx-box"></ul>
      </section>
      {/* <!-- 메인비쥬얼 내용 end --> */}

      {/* <!-- 서브 비쥬얼 sta`rt --> */}
      <section id="sub-visual">
        <ul className="grid-box">
          <li className="sub-main-box bg1 cbx bgi">
            <div className="desc-wrap">
              <div className="category">EVENT</div>
              <div className="tit">lorem ipsum</div>
              <span className="desc">
                로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나
              </span>
              <span className="desc">
                그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은
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
                  <div className="eng-pdtit">{v.engtit}</div>
                  <div className="kor-pdtit">{v.tit}</div>
                  <div className="desc">{v.txt}</div>
                </div>

                <div className="img-wrap">
                  <div className="imgbx">
                    <img
                      src={`./images/product/${v.category}/${v.img}.jpg`}
                      alt={`"${v.tit}"`}
                    />
                  </div>
                  <div className="blur">
                    <img
                      src={`./images/product/${v.category}/${v.img}_detail.jpg`}
                      alt={`"${v.tit}"`}
                    />
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
            {bestItem.map((v, i) => (
              <li key={i} className = "fx-box">
                <div className="desc-wrap">
                  <div className="sub-tit">{v.subtitle}</div>
                  <div className="tit">{v.title}</div>
                  <div className="desc">{v.text}</div>
                <button className="button-nomal">more view</button>
                </div>
                <div className="imgbx R-ben">
                  <img
                    src={`/images/main_page/${v.img}.jpg`}
                    alt={`${v.title}`}
                  />
                </div>
              </li>
            ))}
            {/* L-ben map end */}
            <ol id="indic">
              <span className="first-num"></span>
              <div className="bar"></div>
              <span className="last-num"></span>
            </ol>
          </ul>
        </div>
      </section>
      {/* <!-- best item banner end --> */}
    </main>
  );
} ////MainArea///////////////////////////////////
