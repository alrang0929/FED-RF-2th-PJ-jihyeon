import React, { useEffect, useState } from "react";
import Act_text from "../func/Act_text";
import $ from "jquery";
//css
import "../../css/inside.scss";
////////import area//////////////////////////////////////////////

function Inside(props) {
  //상태관리변수//////////////////////////////////////////////
  //애니 상태변수
  const [isAni, setIsAni] = useState(false);

  //화면 랜더링 구역
  useEffect(() => {
    //애니메이션 세팅

    // 브랜드 헤더
    const logoWrap = $(".brand-header .object-wrap");
    console.log("로고 박스", logoWrap);
    logoWrap
      .animate({ opacity: "1" }, 1000)
      .delay(2000) // logoWrap 요소에 딜레이 적용
      .animate({ bottom: "-65%" }, 1000); // 1초 동안 서서히 나타나기
    $(".blind-L").delay(4000).animate({ left: "-50vw" }, 1000);
    $(".blind-R").delay(4000).animate({ right: "-50vw" }, 1000);

    //인트로 섹션
    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
      const windowHeight = $(this).height();
      const triggerPoint = windowHeight / 2; // 화면 절반 위치

      // 코드해석: 화면 절반 위치에 스크롤top 이 도달했는데 애니 실행을 안했냐? ㄱ
      if (scrollTop > triggerPoint && !isAni) {
        $(".brand-bg").animate({
          width: "80vw",
        },2000);
      }
    });
  }, []);

  /////코드 리턴구역 //////////////////////////
  return (
    <>
      {/* 0. 브랜드 헤더 */}
      <main className="inside-area">
        <section className="brand-header">
          <div className="object-wrap">
            <div className="img-box">
              <img
                src={process.env.PUBLIC_URL + "/images/logo_en.png"}
                alt="슬밋 영문로고"
              />
            </div>
            <span>섬세하고 강인한 한국 여성의 아우라 뷰티, 슬밋</span>
          </div>
          <div className="blind-L"></div>
          <div className="blind-R"></div>
        </section>
        {/* 1. 인트로 섹션 */}
        <section className="intro">
          {/* 덮이는 오브젝트 */}
          <div className="back-object">
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + "/images/logo_ko_w.png"}
                alt="슬밋 국문로고"
              />
            </div>
            <div className="brand-bg">
              <img
                src={
                  process.env.PUBLIC_URL + `/images/inside/ep1_brandmain_02.jpg`
                }
                alt="brand bg"
              />
            </div>
          </div>
          {/* 앞 부분 오브젝트 */}
          <div className="front-object">
            <div className="object-wrap">
              <h3>ABOUT</h3>
              <span>
                한국 여성으로부터 영감 받아 탄생한 슬밋 Seulmit 한국의 프리미엄
                원료를 바탕으로 라이프스타일 전반을 아우르는 슬밋 아우라 뷰티가
                시작됩니다. 지속가능한 가치를 실현할 방법을 고민하고 한국 문화를
                조명하는 큐레이터 역할을 꿈꿉니다.
              </span>
            </div>
          </div>
        </section>
        {/* 2. 어바웃 섹션 : L-ban, R-ban 구분, 파일럿 pj 예시 참고 */}
        <section className="about-area">
          {/* 1. 정방향 */}
          <ul style={{ display: "flex", zIndex: "9", position: "relative" }}>
            <li className="text-box">
              <Act_text
                text={"거침새 없이 길고 곧은 모양새를 의미하는 '슬밋하다'"}
              />
            </li>
            <li className="img-box">
              <img
                src={
                  process.env.PUBLIC_URL + `/images/inside/brand03_img02.png`
                }
                alt="brand img3"
              />
            </li>
          </ul>
          {/* 2. 역방향 */}
          <ul style={{ display: "flex", flexDirection: "row-reverse" }}>
            <li className="text-box">
              <Act_text
                text={"은근하고 천천히 일어나는 모양을 나타내는 '슬밋슬밋'"}
              />
            </li>
            <li className="img-box">
              <img
                src={
                  process.env.PUBLIC_URL + `/images/inside/brand03_img01.png`
                }
                alt="brand img3"
              />
            </li>
          </ul>
        </section>
        {/* 3. 에피소드 섹션 : 타이틀 div + 에피소드 리스트 */}
        <section className="ep-area">
          {/* 타이틀 박스 */}
          <div className="title-box">
            <h3>AURA BEAUTY</h3>
            <span>
              내면의 아름다움을 찾아 떠나는여정, 에피소드 급격하게 변화하는
              세상에 사는 우리는 늘 새로운 자극과 스트레스에 마주합니다. 빠르게
              평정심을 되찾고 몸과 마음의 힘을 기를 수있도록, 슬밋은 시즌별
              에피소드의 형식으로 찾아옵니다.
            </span>
          </div>
          {/* 에피소드 리스트 박스 */}
          <div className="ep-list-wrap">
            <div className="object-wrap">
              <ul className="fx-box">
                <li>
                  <div className="text-wrap">
                    <span>EPISODE 01.</span>
                    <h4>SOL SOUL SEOUL</h4>
                  </div>
                  <div className="img-box">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/inside/brand04_img01.png`
                      }
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="text-wrap">
                    <span>EPISODE 01.</span>
                    <h4>SOL SOUL SEOUL</h4>
                  </div>
                  <div className="img-box">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/inside/brand04_img01.png`
                      }
                      alt=""
                    />
                  </div>
                </li>
              </ul>
              <button>READ MORE &#62; </button>
            </div>
          </div>
        </section>
        {/* 4. 브랜드 배너 */}
        <section className="brand-ban">
          <div className="text-box">
            <span style={{ paddingTop: "40px" }}>
              우리말을 바탕으로 한 브랜드 이름 ‘슬밋’은
            </span>
            <span>
              섬세하고 강인한 내면을 지닌 한국 여성을 표현하기 부족함이
              없습니다.
            </span>
            <span style={{ paddingTop: "40px" }}>
              슬밋이 전하는 아우라 뷰티를 경험해보세요.
            </span>
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + "/images/logo_ko_w.png"}
                alt="슬밋 한글로고"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Inside;
