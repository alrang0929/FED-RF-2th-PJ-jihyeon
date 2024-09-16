import React from "react";
import { useLocation } from "react-router-dom";
import "./css/sub_title.scss";

// data
import { pageDataList } from "../data/pageData";

function SubTitle() {
  /***************************************** 
    어케 작동함? 
    1. pageDataList 데이터를 가져옴
    2. pageDataList와 location 으로 가져온 pathname 대조,
    find를 사용하여 데이터 내 path === pathname이 일치하면 
    pageData 퉤퉤 

    3. 위에서 담긴 pageData를 기준으로 삼항연상자를 이용하여 데이터 셋팅
      ㄴ> pageData 가 true냐 그럼 해당되는 title을 가져와라
    *****************************************/
  const location = useLocation();
  const pathname = location.pathname; // URL 경로 가져오기

  // dataList를 찾아라 > 일치하는 path가 pathname과 일치하냐?? pageData에 get
  const pageData = pageDataList.find(item => item.path === pathname);
  // pageData setting
  // 1. title : 데이터 값 있냐? 퉤퉤 : 없음문구
  const title = pageData ? pageData.title : 'Default Title';
  // 2. desc : 데이터 값 있냐? 퉤퉤 : 없음문구
  const desc = pageData ? pageData.desc : 'Default Desc';

//   console.log("pathName", pathName);

  // pathname을 이용하여 클릭된 페이지 데이터 찾기
  // const pageData = getPageDataFromPathname(pathname); // 실제 데이터 가져오는 로직은 필요에 따라 구현
  return (
    <div className={"bg" + pathname}>
      {/* 1. title-wrap */}
      <div className="title-wrao">
        {/* 1-1 title */}
        <div className="title">
          <h2>{title}</h2>
        </div>
        {/* 1-2 desc */}
        <div className="desc">{desc}</div>
      </div>

      {/* 2. ani-bar */}
    </div>
  );
}

export default SubTitle;
