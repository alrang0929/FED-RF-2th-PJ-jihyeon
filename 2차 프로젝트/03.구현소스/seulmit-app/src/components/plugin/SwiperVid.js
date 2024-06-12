import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

//data
import { mainVisualData } from "../data/main_visual_data";

////////////////////////import area////////////////////////////

export default function App({ sliderStyle }) {

  return (
    <>
      <Swiper className={sliderStyle}>
        {mainVisualData.map((v, i) => (
          <SwiperSlide>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}////////app

function save() {
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

  </div>;
}
