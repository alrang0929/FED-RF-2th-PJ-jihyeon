import React, { useRef } from "react";
import $ from "jquery";

//////////data
import { mainVisualData } from "../data/main_visual_data";

//////////swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./css/swipver_MainVisual.scss";
import { Pagination, Autoplay } from "swiper/modules";
//////////////////////import area/////////////////////////////

export default function SwipverMainVisual() {
    //각 배너의 left 값이 0이 되었을때 .desc-wrap가 페이드인 + 올라오기
    const descAni = (swiper) => {
        const activeIndex = swiper.activeIndex; // activeIndex 사용
        const $activeSlide = $(swiper.slides[activeIndex]);
        const $descWrap = $activeSlide.find(".desc-wrap");

        //제이쿼리 animate는 fiter값을 전달 못받음.
        // 따라서 작업시 step (< 제이쿼리 중간에 ani 추가해줌) 을 추가하여 진행할 것
        //아래 같은 경우는 fx.prop(animate값) 중 opacity 를 if 값으로 받아와 실행시킴

        $descWrap
            .eq(0)
            .css({
                bottom: "70%",
                opacity: "0",
            })
            .animate(
                {
                    bottom: "20%",
                    opacity: "1",
                },
                {
                    duration: 3000,
                    step: function (now, fx) {
                        // step 콜백 함수 추가
                        if (fx.prop === "opacity") {
                            $(this).css("filter", `blur(${50 * (1 - now)}px)`); // 블러 효과 계산
                        }
                    },
                }
            )
            .delay(2000)
            .fadeTo(1000, 0);
    };

    //////코드리턴구역
    return (
        <>
            <Swiper
                loop={true}
                loopedslides={mainVisualData.length} // 복제 슬라이드 개수 설정
                slidesPerView={1}
                spaceBetween={0}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                onInit={(swiper) => {
                    descAni(swiper);
                }}
                onSlideChangeTransitionEnd={(swiper) => {
                    descAni(swiper);
                }}
                speed={20e2}
                modules={[Pagination, Autoplay]} // Virtual 모듈 제거
                className="mySwiper main-visual-inner"
            >
                {mainVisualData.map((v, i) => (
                    <SwiperSlide
                        key={i}
                        className={`"item main-box bg${
                            i + 1
                        } cbx bgi swiper-slide"`}
                    >
                        <div className="desc-wrap">
                            <div className="topic">{v.topic}</div>
                            <div className="title">{v.title}</div>
                            <div className="text">{v.text}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
