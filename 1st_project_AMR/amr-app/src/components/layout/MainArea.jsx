import React, { useEffect } from "react";
// import "../../css/main_area.scss";
//module
import { Outlet } from "react-router-dom";

function MainArea(props) {
  useEffect(() => {
    // 컴포넌트가 마운트되거나 업데이트될 때마다 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  });
  /////코드 리턴구역//////////////////////////////////////////
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default MainArea;
