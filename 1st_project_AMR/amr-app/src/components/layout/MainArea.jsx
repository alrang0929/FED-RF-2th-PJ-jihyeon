import React from "react";
import "../../css/main_area.scss";
//module
// 1. 메인 비쥬얼 슬라이드
import MainVisualSlide from "../plugin/Swiper_main_visual";
// 2. 기본버튼
import NomalButton from "../modules/Nomal_button";
//3. 브랜드 비쥬얼 슬라이드
import BrandVisual from "../plugin/Swiper_brand_visual";
//4. 프로덕트 그리드
import ProductGrid from "../modules/Product_grid";
import MainNewsSilde from "../plugin/Swiper_news_slide";
import ScrollFadeIn from "../func/scroll_fade_in";

function MainArea(props) {
  /////코드 리턴구역//////////////////////////////////////////
  return (
    <main>
      {/* 1. 메인 비쥬얼 슬라이드 */}
      <section className="main-visual-silde">
        {/* 1) 스와이퍼 슬라이드 */}
        <MainVisualSlide />
      </section>
      {/* 2. 안내문구 */}
      <ScrollFadeIn>
      <section className="main-info">
        {/* 1) 그래픽+텍스트 */}
          <div className="title">
            <span className="miller-display">WE MAKE A MORE</span>
            <span className="miller-display">BEAUTIFUL WORLD</span>
          </div>
  
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + "/images/cinfo01.png"}
              alt="아모레퍼시픽 그래픽"
            />
          </div>
     
        {/* 2) 안내텍스트 */}
        <div className="desc">
          <span>
            아모레퍼시픽은 끊임없는 도전과 변함없는 열정으로 기술 혁신을
            지속해나갑니다.
          </span>
          <span>
            첨단 기술력을 바탕으로 초개인화 뷰티 솔루션을 제공합니다.
          </span>
        </div>
        {/* 3) 더보기 버튼 */}
        <NomalButton text={"more view"} link={"#"}/>
        <section className="rslider-info-wrap">
          <div className="rslider-info">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info01.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info02.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info03.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info04.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info05.jpg"}
                alt="롤링 이미지"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info01.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info02.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info03.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info04.jpg"}
                alt="롤링 이미지"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/RS_info05.jpg"}
                alt="롤링 이미지"
              />
            </div>
          </div>
        </section>
      </section>
      </ScrollFadeIn>
      {/* 3. 브랜드 소개 */}
      <ScrollFadeIn>
      <section className="brand-info">
       
       <div className="desc">아모레퍼시픽의 브랜드를 소개합니다</div>
       <div className="title miller-display">
         OUR BRAND
       </div>
       {/* 버튼 클릭시 이동하는 슬라이드 */}
       <BrandVisual/>
     </section>
     {/* 4. 대표 제품 소개 */}
     <section className="product-info">
       {/* 1) 타이틀 박스 */}
         <ProductGrid/>
     </section>
      </ScrollFadeIn>
   
      {/* 5. 사내 뉴스 */}
      <ScrollFadeIn>
      <section className="news-area">
        {/* 1) 타이틀 박스 */}
        <div className="title-wrap">
          <div className="title miller-display">Latest Amorepacific News</div>
          <div className="desc">아모레퍼시픽의 새로운 소식을 만나보세요</div>
        </div>
        {/* 2) 뉴스 콘텐츠 스와이퍼 */}
        <MainNewsSilde/>
      </section>
      </ScrollFadeIn>
    
    </main>
  );
}

export default MainArea;
