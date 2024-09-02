import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

//data
import { product } from "../data/product";

// Import Swiper React components
import { Swiper, SwiperSlide,} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./css/swiper_prd-list.scss";

//////import area/////////////////////////////////////////////

// import required modules
import { Scrollbar,Autoplay} from "swiper/modules";

export default function SwiperPrdList() {

  const selData = Object.values(product);

  let newSelData=[];
  selData.forEach(v=>{
    // console.log(v);
    v.forEach(v2=>{
      newSelData.push(v2);
    })
  });


// console.log(selData);
// console.log(newSelData);

  return (
    <>
      <Swiper
        // slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        //스와이퍼 미디어쿼리
        breakpoints={{
          
       
          700: {
              slidesPerView: 1,
              // spaceBetween: 0,
          },
          900: {
            slidesPerView: 3,
        },
  
        }}
     
        // autoHeight={true}
        // lazy={true}
        modules={[Scrollbar,Autoplay]}
        className="mySwiper slider fx-box cont-box"
      >
        {newSelData.map((v, i) => (
          <SwiperSlide key={i} className="item">
            <section>
              <Link
                to="/detail"
                state={{
                  topcat: v.category, // 상위카테고리
                  product: v.idx, // 상품순번
                }}
              >
                <div className="desc-wrap">
                  <div className="eng-pdtit">{v.engtit}</div>
                  <div className="kor-pdtit">{v.tit}</div>
                  <div className="desc">{v.txt}</div>
                </div>

                <div className="img-wrap">
                  <div className="imgbx">
                    <img
                      src={process.env.PUBLIC_URL+`${v.img[0].isrc}`}
                      alt={`"${v.tit}"`}
                    />
                  </div>
                  <div className="blur">
                    <img
                      src={process.env.PUBLIC_URL+`${v.img[1].isrc}`}
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
