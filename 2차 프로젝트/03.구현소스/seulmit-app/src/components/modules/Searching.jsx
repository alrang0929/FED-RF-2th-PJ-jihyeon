import React from 'react';


//module
//상품 결과 리스트 컴포넌트
import SearchingProduct from './SearchingProduct';

//data
import { product } from '../data/product';
//css
import "../../css/search.scss";

//////import area/////////////////////////


function Searching({kword}) {

    //상태관리변수/////////////////////////////////////
    

    /////코드 리턴구역///////////////////////////////////
    return (
        <>
         <SearchingProduct/>   
        </>
    );
}

export default Searching;