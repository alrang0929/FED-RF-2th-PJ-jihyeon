import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

//data
import { mainVisualData } from "../data/main_visual_data";

////////////////////////import area////////////////////////////

export default function App({sliderStyle}) {

    const sliderDB = {
        mainVisualData: mainVisualData
    }
  return (
    <>
      <Swiper className={sliderStyle}>

        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

function save(){

<div className="swiper">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper main-visual-inner">
                        {/* <!-- Slides --> */}
                        {mainVisualData.map((v, i) => (
                            <div
                                key={i}
                                className={`"item main-box bg${
                                    i + 1
                                } cbx bgi swiper-slide"`}
                            >
                                <div className="desc-wrap">
                                    <div className="topic">{v.topic}</div>
                                    <div className="title">{v.title}</div>
                                    <div className="text">{v.text}</div>
                                </div>
                                <div
                                    key={i}
                                    className={`bluer item main-box bg${
                                        i + 1
                                    } cbx bgi`}
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

}