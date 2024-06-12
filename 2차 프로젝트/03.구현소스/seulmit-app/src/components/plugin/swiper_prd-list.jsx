//seulmit main-visual-swiper.jsx

import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/scrollbar';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/swiper.scss";

//data
import { mainVisualData } from "../data/main_visual_data";

///////////////////////import area /////////////////////////////

//swiper module load area////////
import { Scrollbar, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function MainVisualSwiper (){
  //////코드리턴구역
  return (
    <Swiper
      className="swiper-wrapper main-visual-inner"
      // install Swiper modules
      modules={[Scrollbar, Navigation, Pagination, Scrollbar]}
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



// <ul className="slider fx-box cont-box">
// {bestItemData.map((v, i) => (
//   <li key={i} className="item">
//     <a href="">
//       <div className="desc-wrap">
//         <div className="eng-pdtit">{v.engtit}</div>
//         <div className="kor-pdtit">{v.tit}</div>
//         <div className="desc">{v.txt}</div>
//       </div>

//       <div className="img-wrap">
//         <div className="imgbx">
//           <img
//             src={`/images/product/${v.category}/${v.img}.jpg`}
//             alt={`"${v.tit}"`}
//           />
//         </div>
//         <div className="blur">
//           <img
//             src={`/images/product/${v.category}/${v.img}_detail.jpg`}
//             alt={`"${v.tit}"`}
//           />
//         </div>
//       </div>
//     </a>
//   </li>
// ))}
// </ul>