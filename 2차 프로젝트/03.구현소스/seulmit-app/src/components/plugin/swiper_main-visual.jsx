//seulmit main-visual-swiper.jsx

import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/swiper.scss";

//data
import { mainVisualData } from "../data/main_visual_data";

///////////////////////import area /////////////////////////////

//swiper module load area////////
import { Virtual, Navigation, Autoplay } from "swiper/modules";

export default function MainVisualSwiper (){
  //////코드리턴구역
  return (
    <Swiper
      className="swiper-wrapper main-visual-inner"
      // install Swiper modules
      modules={[Virtual, Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {mainVisualData.map((v, i) => (
        <SwiperSlide
          key={i}
          className={`
    "item main-box bg${i + 1}
    cbx bgi swiper-slide"`}
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
