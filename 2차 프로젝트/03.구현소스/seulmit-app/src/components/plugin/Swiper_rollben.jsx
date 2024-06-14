//슬밋pj 스와이퍼모듈 - 상단 rollben

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//data
import { rollBanner } from "../data/rollbanner_data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//main css
import "./css/swiper_rollben.scss";
/////////////////////////importArea////////////////////

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function SwiperRollben() {
  //////코드리턴구역
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={
          // 자동 슬라이드 설정 , 비 활성화 시 false
          { delay: 4000, disableOnInteraction: false }
        }
        //되감기 방지
        loop={true}
        //////사용자 제어권을 압수 ^-^ : 조작을 할 필요가 없는 배너, 강제 노출 필요
        allowTouchMove={false}
        speed={18e2}
        modules={[Pagination, Autoplay]}
        className="mySwiper roll-ben-wrap"
      >
        {rollBanner.map((v, i) => (
          <SwiperSlide key={i} className="cont">
            <Link to={v.link} className="desc">
              {" "}
              {v.txt}{" "}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

{
  /* <div className="roll-ben">
  <div className="roll-ben-wrap">
    {rollBanner.map((v, i) => (
      <div key={i} className="cont">
        <Link to={v.link}> {v.txt}</Link>
      </div>
    ))}
  </div>
</div>; */
}
