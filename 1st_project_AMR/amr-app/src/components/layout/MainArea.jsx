import React from "react";
// import "../../css/main_area.scss";
//module
import { Outlet } from "react-router-dom";

function MainArea(props) {
  /////코드 리턴구역//////////////////////////////////////////
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default MainArea;
