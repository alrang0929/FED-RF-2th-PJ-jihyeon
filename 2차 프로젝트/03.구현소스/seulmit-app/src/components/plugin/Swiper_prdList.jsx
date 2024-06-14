import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
//data
import { bestItemData } from "../data/slide_item_data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./css/swiper_prd-list.scss";

//////import area/////////////////////////////////////////////

// import required modules
import { Scrollbar } from "swiper/modules";

export default function SwiperPrdList() {
  
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: false,
        }}
        // autoHeight={true}
        // lazy={true}
        modules={[Scrollbar]}
        className="mySwiper slider fx-box cont-box"
      >
        {bestItemData.map((v, i) => (
          <SwiperSlide 
          key={i} className="item" 
          >
            <section>
            <Link to="">
              <div className="desc-wrap">
                <div className="eng-pdtit">{v.engtit}</div>
                <div className="kor-pdtit">{v.tit}</div>
                <div className="desc">{v.txt}</div>
              </div>

              <div className="img-wrap">
                <div className="imgbx">
                  <img
                    src={`/images/product/${v.category}/${v.img}.jpg`}
                    alt={`"${v.tit}"`}
                  />
                </div>
                <div className="blur">
                  <img
                    src={`/images/product/${v.category}/${v.img}_detail.jpg`}
                    alt={`"${v.tit}"`}
                  />
                </div>
              </div>
            </Link>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
