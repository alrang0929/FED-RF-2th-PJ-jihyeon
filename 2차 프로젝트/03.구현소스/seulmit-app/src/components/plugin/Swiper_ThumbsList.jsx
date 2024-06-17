//////상품 썸네일 슬라이드 컴포넌트
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./css/swiper_ThumbsList.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
//data
import { product } from "../data/product";

//////////improt area//////////////////////////////////////

export default function SwiperThumbsList({ catName }) {
  // const selData = product[catName];
  const selDataCnt = product[catName][0].thumbCnt;
  const selData = Object.keys(product)[0];
  console.log("썸네일 갯수: \n 키값 확인:", selDataCnt,selData);

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const newSlides = []; // 빈 배열 생성

    $.each(Array(selDataCnt), (i) => {
      const slide = (
        <SwiperSlide key={i} className="thumb">
          <img src={`/images/shop/${selData}/${selData}_01/thumb_${i+1}.jpg`} />
        </SwiperSlide>
      );
      newSlides.push(slide); // 슬라이드 요소 배열에 추가
    });

    
    setSlides(newSlides); // 상태 변수 업데이트
}, [selDataCnt]); // selDataCnt 값이 변경될 때마다 useEffect 실행
console.log("슬라이드 생성 확인",slides)

  ///////////////////////////////////////////////////

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  ///////코드 리턴구역///////////////////////////////
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#1E1E1E",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
       {slides.map((slide) => slide)}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slides.map((slide) => slide)}
      </Swiper>
    </>
  );
}
