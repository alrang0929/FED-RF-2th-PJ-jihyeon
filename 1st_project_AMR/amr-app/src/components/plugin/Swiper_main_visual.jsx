import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { mslideData } from "../data/AMR_data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/swiper_main_visual.scss";

// import required modules
import { Pagination, Virtual, Parallax, Mousewheel, Autoplay } from "swiper/modules";

export default function MainVisualSlide() {
  const videoRef = useRef(null);
  
  const handleSwiperInit = (swiper) => {
    // 첫 번째 슬라이드의 비디오 가져오기
    const firstSlideVideo = swiper.slides[0].querySelector('.video-background');
    if (firstSlideVideo) {
      firstSlideVideo.play().catch(error => {
        console.error('비디오 자동 재생 실패:', error);
        // 자동 재생 실패 시 사용자에게 재생 버튼 제공 등의 처리
      });
    }
  };

  return (
    <>
      <Swiper
       modules={[Pagination, Virtual, Parallax,Mousewheel, Autoplay]}
       onInit={handleSwiperInit}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        parallax={true}
        mousewheel={{
            releaseOnEdges: true, // 가장자리에서 마우스 휠 해제
          }}
        className="mySwiper"
      >
        <SwiperSlide data-swiper-parallax="-23%">

          <div className="text-wrap">
            <div className="title miller-display">New Beauty</div>
            <div className="text">
                <span>아모레퍼시픽은 고객 한 사람 한 사람이 뉴 뷰티로 영감받아 자신만의
                아름다움을 발션하고,</span>
                <span>건강하고 만족스러운 삶을 실현할 수 있도록
                합니다.</span>

              
            </div>
          </div>
          <video
            src={process.env.PUBLIC_URL+"/images/main_mv01.mp4"}
            ref={videoRef} 
            autoPlay muted playsInline loop
          ></video>
        </SwiperSlide>
        {mslideData.map((slide, idx) => (
          <SwiperSlide key={idx} className={"bg" + (idx + 1)}>
            <div className="text-wrap">
            <div className="title miller-display">{slide.title.split("^").map((v,i)=>
            <span key={i}>
                {v}
            </span>
            )}</div>
            <div className="text">{slide.text.split("^").map((v,i)=>
            <span key={i}>
                {v}
            </span>
            )}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
