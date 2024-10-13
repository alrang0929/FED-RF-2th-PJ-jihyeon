import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/sub_title.scss";

// data
import { subTitleData } from "../data/sub_title_data";

function SubTitle() {

  ///////페이지 데이터 매칭////////////////////////////////////////////////////////////
  /***************************************** 
    어케 작동함? 
    1. subTitleData 데이터를 가져옴
    2. subTitleData와 location 으로 가져온 pathname 대조,
    find를 사용하여 데이터 내 path === pathname이 일치하면 
    pageData 퉤퉤 

    3. 위에서 담긴 pageData를 기준으로 삼항연상자를 이용하여 데이터 셋팅
      ㄴ> pageData 가 true냐 그럼 해당되는 title을 가져와라
    *****************************************/
  const location = useLocation();
  const pathname = location.pathname; // URL 경로 가져오기

  // dataList를 찾아라 > 일치하는 path가 pathname과 일치하냐?? pageData에 get
  const pageData = subTitleData.find(item => item.path === pathname);
  // pageData setting
  // 1. title : 데이터 값 있냐? 퉤퉤 : 없음문구
  const title = pageData ? pageData.title : 'Default Title';
  // 2. desc : 데이터 값 있냐? 퉤퉤 : 없음문구
  const desc = pageData ? pageData.desc : 'Default Desc';

  // console.log("pageData", pageData);
///////////////////////////////////////////////////////////////////////////////////////////

  // 상태관리변수:
  // 1. 스크롤 올림 상태 확인
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  // 참조변수:
  // 1. 이전 스크롤 Y값 참조변수, 스크롤 위치를 저장하기 위한 메모자
  const prevScrollY = useRef(0);
  // 2. 서브타이틀 높이값 저장 참조변수 
  const subtitleHeightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. 현재 스크롤값
      const currentScrollY = window.scrollY;
      // 2. 현재 스크롤<이전 스크롤값을 비교하여 스크롤 방향 판단
      setIsScrollingUp(currentScrollY < prevScrollY.current);
      // 3. 현재 스크롤값과 동일해 져라 그리고 과거 스크롤을 현재 스크롤에 저장하여 다음 비교 대비
      prevScrollY.current = currentScrollY; 
      
      
      if (!isScrollingUp && subtitleHeightRef.current) { 
        // 스크롤 방향이 아래쪽이고 subtitleHeightRef가 유효하면
        subtitleHeightRef.current.style.height = '48vh'; // 높이 변경 (원하는 값으로 수정)
      }   
    };
    
    // 4. dom에 스크롤 이벤트 등록
    window.addEventListener('scroll', handleScroll);
    // 4. dom에 스크롤 이벤트 삭제
    return () => window.removeEventListener('scroll', handleScroll );
  }, []);


  // pathname을 이용하여 클릭된 페이지 데이터 찾기
  // const pageData = getPageDataFromPathname(pathname); // 실제 데이터 가져오는 로직은 필요에 따라 구현
  return (
    <div 
    className={"sub-title"+" "+"bg-"+pageData.path.replace("/","").toLowerCase()}
    ref={subtitleHeightRef} // sub-title 요소에 ref 연결
    style={{ transition: 'height 0.3s ease' }}
    >
      {/* 1. title-wrap */}
      <div className="title-wrap">
        {/* 1-1 title */}
        <div className="title miller-display">
          <h2>{title}</h2>
        </div>
        {/* 1-2 desc */}
        <div className="desc">{desc}</div>
      </div>
      {/* 2. ani-bar */}
      <div className="blur-box"></div>
    </div>
  );
}

export default SubTitle;
