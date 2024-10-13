import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from 'react-device-detect';
import { gnbData } from "../data/common_data";
import { Link } from "react-router-dom";
import "../../css/top_area.scss";
import { IoIosSearch } from "react-icons/io";
// import { aCon } from "./aCon";
function TopArea(props) {
  // useContext 사용
  // const {setCatchMenu} = useContext(aCon);

  
  // const handleMenuClick = (menuName) => {
  //   setCatchMenu(menuName); // 클릭된 메뉴 이름을 Context를 통해 업데이트
  // };

  /****************** 상태관리변수 ******************/
  // 1. menu-wrap의 표시 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 2. 스크롤 올림 상태 확인
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  // 이전 스크롤 Y값 참조변수, 스크롤 위치를 저장하기 위한 메모자아
  const prevScrollY = useRef(0);

  // 1. ham-btn 클릭 이벤트 처리
  const handleHamBtnClick = () => {
    setIsMenuOpen(!isMenuOpen); // 상태 토글
  };
  // 2. 모바일 상태에서 메뉴 클릭시 gnb 닫기
  const handleMenuClick = () => {
    if (isMobile) { 
      // 해석: isMobile이냐?  setIsMenuOpen를 false로 바꿔라
      setIsMenuOpen(false);
    }
  };


  // 화면랜더링구역//////////////////////////////////////////

  useEffect(() => {
    const handleScroll = () => {
      // 1. 현재 스크롤값
      const currentScrollY = window.scrollY;
      // 2. 현재 스크롤<이전 스크롤값을 비교하여 스크롤 방향 판단
      setIsScrollingUp(currentScrollY <= prevScrollY.current);
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
        {/* isMobile: 리액트 내장 메서드, 모바일 기기인지 아닌지 판단
          즉! 마우스가 아래로 내려가고 모바일 기기가 아니냐? open class 추가, 반대냐? 빈칸


          isMobile:
          장점: 코드 재활용 및 가비지 코드 감소
          단점: pc와 동일한 코드를 사용하기 때문에 성능이 저하될 수 있음, 복잡성 증가
          ________________________________________________________________
          
          모바일 전용 코드 생성:
            장점: PC/Mobile 구분이 명확해짐
            단점: 코드 중복이 발생할 수 있음, 유지보수 어려움
        */}
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
        <ul className={`menu-wrap fxbox ${isMenuOpen ? "open" : ""}`

        }>
          {/* 상태변수 작동 확인 */}
          {/* {console.log("isMenuOpen 상태:",isMenuOpen)} */}
          {gnbData.map((category, index) => (
            // 각 서브 메뉴마다 새로운 ref 생성
            <>
            {/* {console.log("category",category)} */}
            <li key={index} className="link-box">
              <Link 
              to={category.link}
              onClick={handleMenuClick}
              >{category.text}</Link>

              {category.sub !== "없음" && (
                <ol className="sub-menu">
                  {category.sub.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link to={submenu.link}>{submenu.text}</Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
            </>
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
