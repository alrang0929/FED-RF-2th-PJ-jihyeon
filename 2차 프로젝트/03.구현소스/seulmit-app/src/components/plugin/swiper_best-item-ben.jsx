//seulmit main-visual-swiper.jsx

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './css/swiper.scss';

//data
import { bestItem } from "../data/eventban_data";

import "./css/swiper_best-item-ben.scss";

///////////////////////import area /////////////////////////////

//swiper module load area////////
import { Pagination, Autoplay } from "swiper/modules";

export default function BestItemBen() {
  //////코드리턴구역
  return (
    <Swiper
      className="cont-wrap fx-box"
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      direction={'vertical'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {bestItem.map((v, i) => (
        <SwiperSlide key={i}>
          <ul className="L-ben">
              <li key={i} className="fx-box">
                <div className="desc-wrap">
                  <div className="sub-tit">{v.subtitle}</div>
                  <div className="tit">{v.title}</div>
                  <div className="desc">{v.text}</div>
                  <button className="button-nomal">more view</button>
                </div>
                <div className="imgbx R-ben">
                  <img
                    src={`/images/main_page/${v.img}.jpg`}
                    alt={`${v.title}`}
                  />
                </div>
              </li>
          </ul>
          ;{/* L-ben map end */}
          <ol id="indic">
            <span className="first-num"></span>
            <div className="bar"></div>
            <span className="last-num"></span>
          </ol>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
