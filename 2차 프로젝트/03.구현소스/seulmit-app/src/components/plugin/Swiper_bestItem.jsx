//////swiper: best item

// Import Swiper React components
import React, { useRef, useState } from "react";
import $ from "jquery";

//data
import { bestItem } from "../data/eventban_data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/swiper_best_item.scss";
//////////////////////import area/////////////////////////////

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function SwiperBestItem() {
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
      // .fadeTo(1000,0);
  };

  //////////리턴코드 구역/////////////////////////////////
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        //되감기 방지
        loop={true}
        // autoplay={
        //     // 자동 슬라이드 설정 , 비 활성화 시 false
        //     { delay: 5500, disableOnInteraction: false }
        // }
        // observer={true}
        onInit={(swiper) => {
          // Swiper 초기화 완료 후 실행되는 코드
          descAni(swiper); // 초기 슬라이드 애니메이션 실행
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          descAni(swiper);
        }}
        speed={20e2}
        modules={[Pagination, Autoplay]}
        className="mySwiper cont-wrap fx-box"
      >
        {bestItem.map((v, i) => (
          <SwiperSlide key={i} className="fx-box">
            <li key={i} className="fx-box">
              <div className="desc-wrap">
                <div className="sub-tit">{v.subtitle}</div>
                <div className="tit">{v.title}</div>
                <div className="desc">{v.text}</div>
                <button className="button-nomal"
                >
                <Link to="/detail">more view</Link>
                </button>
              </div>
              <div className="imgbx R-ben">
                <img
                  src={process.env.PUBLIC_URL+`/images/main_page/${v.img}.jpg`}
                  alt={`${v.title}`}
                />
              </div>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
