import React from "react";
import TopArea from './TopArea';
import MainArea from './MainArea';

function Layout(props) {
  return (
    <div>
      <TopArea/>
      <MainArea/>
      <FooterArea/>
    </div>
  );
}

export default Layout;
