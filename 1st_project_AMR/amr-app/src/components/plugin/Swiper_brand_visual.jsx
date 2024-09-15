import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

// swiper설정///////////////////////////////
import { Navigation, Parallax, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// 개인css
import "./css/swiper_brand_visual.scss";
//data
import { brandList } from "../data/AMR_data";

export default function BrandVisual() {
  //참조변수
  // 1. swiper slideTo 내장함수 사용을 위한 참조변수
  const swiperRef = useRef(null); 

  /********************************************************8* 
  
    [swiper slideTo 내장함수 사용방법]
    1. swiperRef 참조변수 생성 (이동 슬라이드 index 참조를 위함)
    2. swiper에 참조 설정 
          ex)     
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Swiper 인스턴스 저장
          }}
          >
    3. 이동 컨트롤러로 설정한 요소에 핸들러 추가
        ex) <button onClick={() => swiperRef.current.slideTo(i)}>

  *********************************************************/

  // shandleSlideChange: 스와이퍼 슬라이드가 변경될때 효과를 주기 위함
  function handleSlideChange(swiper) {
    // 대상선정
    // 1) 이전 활성화된 슬라이드 인덱스 가져오기
    const previousIndex = swiper.previousIndex;
    // console.log("previousIndex: " + previousIndex);
    // 2) 이전 활성화된 슬라이드 인덱스 배열에 담기
    const previousSlides = swiper.slides[previousIndex];
    // 3) 배열에 담긴 이전 슬라이드 bg-box 수집
    const previousBgBox = previousSlides.querySelector(".bg-box");
    const previousContent = previousSlides.querySelector(".cont-wrap");

    //1. 이전 활성화된 슬라이드 배경제거
    if (previousBgBox) {
      previousBgBox.style.backdropFilter = "blur(0px)";
      previousBgBox.style.opacity = 0;
      previousContent.style.opacity = 0;
      previousContent.style.top = "50%";
      previousContent.style.filter = "blur(10px)";
    }

    // 2. 활성화된 슬라이드 인덱스 수집
    const activeIndex = swiper.activeIndex;
    // console.log("activeIndex: " + activeIndex);
    // 2-1) 활성화된 슬라이드 인덱스 배열담기
    const activeSlide = swiper.slides[activeIndex];

    // 2-2) 활성화된 슬라이드 인덱스 배열에 담긴 bg-box 수집
    const activeBgBox = activeSlide.querySelector(".bg-box");
    const activeContent = activeSlide.querySelector(".cont-wrap");

    // console.log("activeContent",activeContent, "\npreviousContent",previousContent);
    // 3. 활성화된 슬라이드 bg-box에 블러주기
    if (activeBgBox && activeContent) {
      previousBgBox.style.opacity = 1;
      activeBgBox.style.backdropFilter = "blur(15px)";
      activeContent.style.opacity = 1;
      activeContent.style.top = "50%";
      activeContent.style.filter = "blur(0px)";
    }
  } // handleSlideChange

  //화면 리랜더링 구역 ///////////////////////////////

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 실행
    if (swiperRef.current) {
      // 첫 번째 슬라이드에 블러 효과 적용
      const firstSlide = swiperRef.current.slides[0];
      const firstBgBox = firstSlide.querySelector(".bg-box");
      const firstContent = firstSlide.querySelector(".cont-wrap");
      if (firstBgBox && firstContent) {
        firstBgBox.style.backdropFilter = "blur(5px)";
        firstContent.style.opacity = 1;
        firstContent.style.top = "50%";
        firstContent.style.filter = "blur(0px)";
      }
    }
  }, []); // 빈 배열을 dependency로 전달하여 처음 마운트될 때만 실행되도록 설정
  //코드 리턴구역 ///////////////////////////////////
  return (
    <Swiper
      modules={[Navigation, Parallax, EffectFade]} // Navigation 모듈 사용!
      className="brand-swiper"
      parallax={true}
      //   effect={'fade'}
      //   fadeEffect= {{ crossFade: true }}
      speed={1000}
      // navigation // navigation 옵션 활성화
      onSwiper={(swiper) => {
        swiperRef.current = swiper; // Swiper 인스턴스 저장
      }}
      onSlideChange={(swiper) => {
        // 슬라이드 변경 시 실행될 함수
        handleSlideChange(swiper);
      }}
    >
      <div className="button-wrap fxbox">
        {brandList.map((v, i) => (
          <button key={i} onClick={() => swiperRef.current.slideTo(i)}>
            <div className="imgbox">
              <img
                src={process.env.PUBLIC_URL + v.isrc.button}
                alt={v.title + "logo"}
              />
            </div>
          </button>
        ))}
      </div>
      {brandList.map((v, i) => (
        <SwiperSlide
          data-swiper-parallax="-20%"
          key={i}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + v.isrc.bg})`,
          }}
        >
          {/*1. 이미지+텍스트 박스 */}
          <div className="cont-wrap">
            <div className="imgbox">
              <img
                src={process.env.PUBLIC_URL + v.isrc.thumb}
                alt={v.title + "썸네일"}
              />
            </div>
            <div className="desc">
              {v.text.split("^").map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </div>
          </div>
          <div className="bg-box"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
