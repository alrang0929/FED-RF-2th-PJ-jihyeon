import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// 개인설정 css
import "./css/swiper_brand_visual_mo.scss";
//data
import { brandList } from "../data/AMR_data";

export default function BrandVisualMobile() {


  // 코드리턴구역////////////////////////////////////////
  return (
    <>
      <Swiper className="brand-swiper-mo">
        {brandList.map((v, i) => (
          <SwiperSlide
            data-swiper-parallax="-20%"
            key={i}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + v.isrc.bg})`,
            }}
          >
            {/*1. 이미지+텍스트 박스 */}
            <div className="cont-wrap">
              <div className="logo">
                  <img src={process.env.PUBLIC_URL + v.isrc.button} alt={v.title} />
              </div>
             
              <div className="desc">
                {v.text.split("^").map((text, i) => (
                  <span key={i}>{text}</span>
                ))}
              </div>
              <div className="imgbox">
                <img
                  src={process.env.PUBLIC_URL + v.isrc.thumb}
                  alt={v.title + "썸네일"}
                />
              </div>
            </div>
            <div className="bg-box"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ); //return
} //BrandVisualMobile
