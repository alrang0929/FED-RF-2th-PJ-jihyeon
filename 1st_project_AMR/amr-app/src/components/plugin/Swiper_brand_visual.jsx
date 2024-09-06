import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// swiper설정///////////////////////////////
import { Navigation, Parallax, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// 개인css
import "./css/swiper_brand_visual.scss";
//data
import { brandList } from "../data/AMR_data";

export default function BrandVisual() {
  const swiperRef = useRef(null); // Swiper 참조 생성

  //코드 리턴구역 ///////////////////////////////////
  return (
    <Swiper
    modules={[Navigation, Parallax, EffectFade]} // Navigation 모듈 사용!
      className="brand-swiper"
      parallax={true}
    //   effect={'fade'}
    //   fadeEffect= {{ crossFade: true }}
      speed={1000}
      navigation // navigation 옵션 활성화
      onSwiper={(swiper) => {
        swiperRef.current = swiper; // Swiper 인스턴스 저장
      }}
    >
      <div className="button-wrap fxbox">
        {brandList.map((v, i) => (
          <button key={i} onClick={() => swiperRef.current.slideTo(i)}>
            <div className="imgbox">
              <img
                src={process.env.PUBLIC_URL + v.isrc.button}
                alt={v.title + "logo"}
              />
            </div>
          </button>
        ))}
      </div>
      {brandList.map((v, i) => (
        <SwiperSlide
          data-swiper-parallax="-20%"
          key={i}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + v.isrc.bg})`,
          }}
        >
          {/*1. 이미지+텍스트 박스 */}
          <div className="img-wrap">
            <div className="imgbox">
              <img
                src={process.env.PUBLIC_URL + v.isrc.thumb}
                alt={v.title + "썸네일"}
              />
            </div>
            <div className="desc">
              {v.text.split("^").map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
