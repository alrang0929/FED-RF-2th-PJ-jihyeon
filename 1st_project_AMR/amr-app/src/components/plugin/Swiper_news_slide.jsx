import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {newsData} from "../data/page_data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/swiper_news_slide.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { NavLink, useNavigate } from "react-router-dom";

export default function MainNewsSilde() {
    // 2.네비게이트 훅사용
    const navigate = useNavigate(); // useNavigate 훅 사용
    //코드리턴구역/////////////////////////////////////////////////
  return (
    <>
    <div className="news-slide-wrap">
      <Swiper
        // slidesPerView={4.5}
        spaceBetween={20}
        initialSlide={0}
        navigation={true}
        breakpoints={{
            661: {
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
        {newsData.map((item, i) => (
          <SwiperSlide key={i}>
             <NavLink
                to="/Detail"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Detail", { state: { selectedData: item } });
                //  console.log("item",item);
                }}
              >
            {/* 1. 이미지 박스 > img / data-wrap: title(최대 2줄 넘김...처리)+date */}
            <div className="img-box">
              <img
                src={process.env.PUBLIC_URL + item.isrc.img}
                alt={item.title + "썸네일"}
              />
            </div>
            <div className="data-wrap">
              <div className="date">{item.date}</div>
              <div className="title">{item.title}</div>
            </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
