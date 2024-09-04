import React from 'react';
import TopArea from './TopArea';
import MainArea from './MainArea';
import FooterArea from './FooterArea';

function Layout(props) {
    //////코드리턴구역////////////////////////////
    return (
        <div>
            <TopArea/>
            <MainArea/>
            <FooterArea/>
        </div>
    );
}

export default Layout;