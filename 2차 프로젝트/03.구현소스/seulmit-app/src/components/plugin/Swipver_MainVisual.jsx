import React, { useRef } from "react";
import $ from "jquery";

//////////data
import { mainVisualData } from "../data/main_visual_data";

//////////swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./css/swipver_MainVisual.scss";
import { Pagination, Autoplay } from "swiper/modules";
//////////////////////import area/////////////////////////////

export default function SwipverMainVisual() {
  //각 배너의 left 값이 0이 되었을때 .desc-wrap가 페이드인 + 올라오기
  const descAni = (swiper) => {
    const realIndex = swiper.realIndex; // realIndex 사용
    const $activeSlide = $(swiper.slides[realIndex]);
    const $descWrap = $activeSlide.find(".desc-wrap");

    $descWrap
      .css({
        bottom: "70%",
        opacity: "0",
      })
      .animate(
        {
          bottom: "20%",
          opacity: "1",
        },
        2000
      )
      .delay(2000)
      .fadeTo(1000, 0);
  };

  //////코드리턴구역
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={
          // 자동 슬라이드 설정 , 비 활성화 시 false
          { delay: 5500, disableOnInteraction: false }
        }
        onInit={(swiper) => {
          // Swiper 초기화 완료 후 실행되는 코드
          descAni(swiper); // 초기 슬라이드 애니메이션 실행
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          descAni(swiper);
        }}
        speed={20e2}
        modules={[Pagination, Autoplay]}
        className="mySwiper main-visual-inner"
      >
        {mainVisualData.map((v, i) => (
          <SwiperSlide
            key={i}
            className={`"item main-box bg${i + 1} cbx bgi swiper-slide"`}
          >
            <div className="desc-wrap">
              <div className="topic">{v.topic}</div>
              <div className="title">{v.title}</div>
              <div className="text">{v.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
