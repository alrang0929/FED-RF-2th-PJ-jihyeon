import React, { useEffect, useState } from "react";
import Act_text from "../func/Act_text";
import $ from "jquery";
//css
import "../../css/inside.scss";
////////import area//////////////////////////////////////////////

function Inside() {
  //상태관리변수//////////////////////////////////////////////
  //컴포넌트 전체 애니 상태변수
  const [isAni, setIsAni] = useState(false);


  //화면 랜더링 구역////////////////////////////////////////
  useEffect(() => {
    //애니메이션 세팅

      //첫번째 섹션 애니 끝난 후 자동 스크롤
      const aniLogoWrap = () => {
        return $(".brand-header .object-wrap")
          .animate({ opacity: "1" }, 1000)
          .delay(1500)
          .animate({ bottom: "-65%" }, 1000)
          //체이닝으로 promise 메서드를 사용하면 애니를 순차적으로 사용할 수 있음
          .promise();
      };
    
      //Promise.all() : 여러 비동기 애니를 동시에 실행하고 싶을 때 사용
      //즉, logoWrap 애니가 끝나면 promise.all 안의 블라인드 애니를 실행해라
      

      const aniBlinds = () => {

        return Promise.all([
          $(".blind-L").animate({ left: "-50vw" }, 1000).promise(),
          $(".blind-R").animate({ right: "-50vw" }, 1000).promise(),
        ]);
      };
    
      const scrollToIntroArea = () => {
        let isAniStart = false; //애니시작 여부를 저장하는 변수, 스크롤 애니에서만 사용
        if(!isAniStart){
          const introArea = document.querySelector('.intro');
          introArea.scrollIntoView({ behavior: 'smooth' });
        }
             isAniStart = true;
      };
    
//최종적으로!! 모든 애니가 끝난 후 스크롤 이동을 실행하기 위해
//async 비동기 호출! await 을 사용하여 로고 애니  > 블라인드 애니 > 스크롤 애니가 순차적으로 실행되도록 함
async function startAni() {
  
  await aniLogoWrap();
  await aniBlinds();
          scrollToIntroArea();
          // console.log("애니시작 함수 호출여부", startAni())
          //스크롤에 따른 애니 호출
        }
        startAni();
      $(window).on("scroll", function () {
      
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      //여기서 this는? 이벤트가 발생한 요소! 즉 스크롤 이벤트는 window에서 발생하므로 window를 가르킴
      const triggerPoint = windowHeight / 2; // 화면 절반 위치
      // 코드해석: 화면 절반 위치에 스크롤top 이 도달했는데 애니 실행을 안했냐? ㄱ
      if (scrollTop > triggerPoint) {
        $(".back-object .brand-bg").animate({
          width: "60vw",
        },2000);
        $(".back-object .logo").delay(1200).animate({
          opacity: 1,
          top: "80%",
        },1000,()=>{
          $(".front-object").animate({
            top: "80%",
          },1500);
        });
      }//if

    }); //on

    $(window).on('scroll', function() {
      var scrollpoint = $('.ep-list-wrap');
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var elementOffset = scrollpoint.offset().top;
      var elementHeight = scrollpoint.height();
  
      if (scrollTop + windowHeight / 2 >= elementOffset && scrollTop + windowHeight / 2 <= elementOffset + elementHeight) {
        //scrollTop + windowHeight / 2 <= elementOffset + elementHeight: 현재 화면의 중간 지점이 요소의 맨 아래쪽보다 위에 있거나 같은지 확인 (요소가 화면에서 완전히 사라지지 않았는지 확인)
          scrollpoint.addClass('on');

      } else {
          scrollpoint.removeClass('on');
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
                    <span>EPISODE 02.</span>
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
