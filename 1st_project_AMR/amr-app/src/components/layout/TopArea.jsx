import React, { useEffect, useRef, useState } from "react";
import { gnbData } from "../data/common_data";
import { Link } from "react-router-dom";
import "../../css/top_area.scss";
import { IoIosSearch } from "react-icons/io";
function TopArea(props) {
  /****************** 상태관리변수 ******************/
  // 1. menu-wrap의 표시 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 2. 스크롤 올림 상태 확인
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  // 이전 스크롤 Y값 참조변수, 스크롤 위치를 저장하기 위한 메모자아
  const prevScrollY = useRef(0);

  // 1. ham-btn 클릭 이벤트 처리
  const handleHamBtnClick = () => {
    setIsMenuOpen(!isMenuOpen); // 상태 토글
  };

  // 화면랜더링구역//////////////////////////////////////////

  useEffect(() => {
    const handleScroll = () => {
      // 1. 현재 스크롤값
      const currentScrollY = window.scrollY;
      // 2. 현재 스크롤<이전 스크롤값을 비교하여 스크롤 방향 판단
      setIsScrollingUp(currentScrollY < prevScrollY.current);
      // 3. 현재 스크롤값과 동일해 져라 그리고 과거 스크롤을 현재 스크롤에 저장하여 다음 비교 대비
      prevScrollY.current = currentScrollY;   
    };
    
    // 4. dom에 스크롤 이벤트 등록
    window.addEventListener('scroll', handleScroll);
    // 4. dom에 스크롤 이벤트 삭제
    return () => window.removeEventListener('scroll', handleScroll );
  }, []);
  //코드리턴구역////////////////////////////////////////////////////
  return (
    <>
      <header className={`fxbox ${isMenuOpen ? "open" : ""} ${isScrollingUp ? '' : 'hide'}`}>
        {/* <!-- 로고박스 --> */}
        <div className="logobx">
          <Link to="/">
            <h1 className="logo">
              <img
                src={process.env.PUBLIC_URL + "/images/ci.png"}
                alt="아모레퍼시픽 로고"
              />
            </h1>
          </Link>
        </div>

        {/* isMenuOpen이 ture냐? open 클래스 추가 : 아니냐? 빈것 */}
        <ul className={`menu-wrap fxbox ${isMenuOpen ? "open" : ""}`}>
          {Object.keys(gnbData).map((category, index) => (
            // 각 서브 메뉴마다 새로운 ref 생성

            <li key={index} className="link-box">
              <Link to={"/Brand"}>{category}</Link>

              {gnbData[category] !== "없음" && (
                <ol className="sub-menu">
                  {gnbData[category].map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link to={"/Brand"}>{submenu}</Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
        <div className="search-box fxbox">
          <a href="" onClick={(e) => e.preventDefault}>
            <IoIosSearch className="search-icon" />
          </a>
          <input type="text" defaultValue={"검색어를 입력해주세요"} />
        </div>

        <div className="ham-btn" onClick={handleHamBtnClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
}

export default TopArea;
