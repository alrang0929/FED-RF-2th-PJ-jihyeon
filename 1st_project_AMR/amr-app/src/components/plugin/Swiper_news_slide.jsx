import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { newsData } from "../data/AMR_data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/swiper_news_slide.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function MainNewsSilde() {
  return (
    <>
    <div className="news-slide-wrap">
      <Swiper
        slidesPerView={4.5}
        spaceBetween={20}
        initialSlide={0}
        navigation={true}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="gradient-L"></div>
        <div className="gradient-R"></div>
        {newsData.map((v, i) => (
          <SwiperSlide key={i}>
            {/* 1. 이미지 박스 > img / data-wrap: title(최대 2줄 넘김...처리)+date */}
            <div className="img-box">
              <img
                src={process.env.PUBLIC_URL + v.isrc}
                alt={v.title + "썸네일"}
              />
            </div>
            <div className="data-wrap">
              <div className="date">{v.date}</div>
              <div className="title">{v.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
