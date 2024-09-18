import React, { useEffect } from "react";
import SubTitle from "../modules/SubTitle";
import NomalButton from "../modules/Nomal_button";
import "./css/amorepacific.scss";
import ScrollFadeIn from "../func/scroll_fade_in";
import download from 'downloadjs';
import DownloadButton from "../modules/Download_button";
function Amorepacific(props) {

 const handleDownload = async (fileUrl, fileName) => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    download(blob, fileName);
  };
  useEffect(() => {
    // 컴포넌트가 마운트되거나 업데이트될 때마다 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  });
  
//코드 리턴구역/////////////////////////////////////////////////////////////////
  return (
    <>
      <SubTitle />
      <section className="amr-page">
        {/* 1. 소개문구 */}
        <section className="cont-box">
          <div className="intro fxbox">
            <div className="imgbox">
              <img
                src={process.env.PUBLIC_URL + "/images/sub01/info01.jpg"}
                alt="안내 이미지"
              />
            </div>
            <ScrollFadeIn>
              <div className="title-wrap">
                <div className="title ">
                  <span>아모레퍼시픽의 핵심 </span>
                  <span> 가치와 역사를 시각적으로 표현하고 있는</span>
                  <span> 디자인 자산입니다.</span>
                </div>
                <div className="line-bar"></div>
                <div className="desc">
                  부드럽고 세련된 이미지의 ‘Amore’와 강하고 이지적인 이미지의
                  ‘Pacific’이 만나 이루어진 워드마크입니다. 외적인 아름다움과
                  내면의 아름다움, 전통과 미래, 감성과 이성, 자연과 과학 등 두
                  가지의 상반된 의미가 만나 아름다움을 만드는 컨셉, ‘Harmony of
                  contrast’ 를 표현하고 있습니다. Amorepacific 이미지에 사용된
                  두 가지 블루, 달 그림자와 같은 부드럽고 온화한 느낌의 ‘아모레
                  블루’와 깊은 바다와 사막의 밤을 연상시키는 이성적이고 강렬한
                  느낌의 ‘퍼시픽 블루’가 부드럽게 조화를 이루고 있습니다.
                </div>
              </div>
            </ScrollFadeIn>
          </div>
          {/* 2. 그래픽 설명 */}
          <div className="graphic-info fxbox">
            <div className="title-wrap">
              <div className="title miller-display">
                <span>Camellia</span>
                <span>graphic</span>
              </div>
              <div className="line-bar"></div>
              <div className="desc">
                아모레퍼시픽의 역사를 상징하는 ‘동백’ 그래픽은 꽃의 중심에서부터
                물결을 그리며 흘러나오는 하트 모양의 섬세한 곡선이 동백 꽃잎을
                형상화하고 있습니다. 아름다운 미의 파동을 통해 세상을 변화시키는
                아모레퍼시픽의 열정을 표현했습니다.
              </div>
            </div>
            <ScrollFadeIn>
              <div className="img-wrap fxbox">
                <div className="imgbox">
                  <img
                    src={process.env.PUBLIC_URL + "/images/sub01/gp01.jpg"}
                    alt="EMBLEM"
                  />
                </div>
                <div className="imgbox">
                  <img
                    src={process.env.PUBLIC_URL + "/images/sub01/gp02.jpg"}
                    alt="CAMELLIA GRAPHIC"
                  />
                </div>
              </div>
            </ScrollFadeIn>
          </div>
          {/* 3. CI 안내 */}
          <div className="ci-info fxbox">
            <ScrollFadeIn>
              <div className="img-wrap fxbox">
                <div className="imgbox">
                  <div className="imgbx">
                    <img
                      src={process.env.PUBLIC_URL + "/images/sub01/ci01.jpg"}
                      alt="아모레퍼시픽 ci"
                    />
                  </div>
                  <DownloadButton text={"CI 다운로드 받기"} link={"/images/sub01/ci01.jpg"} file={"ci01.jpg"} />
                </div>
                <div className="imgbox">
                  <div className="imgbx">
                    <img
                      src={process.env.PUBLIC_URL + "/images/sub01/ci02.jpg"}
                      alt="아모레하트"
                    />
                  </div>
                  <DownloadButton text={"AMORE HEART 다운로드 받기"} link={"/images/sub01/ci02.jpg"}  file={"ci02.jpg"} />
                </div>
              </div>
            </ScrollFadeIn>
            <div className="title-wrap">
              <div className="title miller-display">Ci</div>
              <div className="line-bar"></div>
              <div className="desc">
                ‘Asian Beauty Creator’의 의미를 나타내는 아모레 하트는 역사와
                전통을 담고 있으며, 하트 모양에 엄지 손가락을 세우고 있는
                모습으로 보여 ‘아름다움과 사랑의 으뜸’을 뜻하기도 합니다.
              </div>
            </div>
          </div>
        </section>
        <div className="bg-box"></div>
        {/* 4. 아모레퍼시픽 이념 */}
      </section>
    </>
  );
}

export default Amorepacific;
