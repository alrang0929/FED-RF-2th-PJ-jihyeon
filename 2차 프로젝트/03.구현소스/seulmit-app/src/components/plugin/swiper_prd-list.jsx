//seulmit main-visual-swiper.jsx

import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/swiper_prd-list.scss";

//data
import { bestItemData } from "../data/slide_item_data";

///////////////////////import area /////////////////////////////

//swiper module load area////////
import { Scrollbar} from "swiper/modules";

export default function BestItemListSwiper() {
  //////코드리턴구역
  return (
    <Swiper
      className="slider fx-box cont-box"
      // install Swiper modules
      modules={[Scrollbar]}
      slidesPerView={4}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {bestItemData.map((v, i) => (
        <SwiperSlide
          key={i}
          className={"item slider"}
        >
          {/* <li> */}
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
                    alt={v.tit}
                  />
                </div>
              </div>
            </Link>
          {/* </li> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
