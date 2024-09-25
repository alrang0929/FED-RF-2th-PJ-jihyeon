import React from 'react';
import SubTitle from '../modules/SubTitle';
import { brandData } from '../data/page_data';
import ListBrand from '../modules/List_brand';
function Brand(props) {
    return (
        <>
        <SubTitle/>
        <div className="brand-page">
        <ListBrand selectData={brandData}/>
        </div>
    </>
    );
}

export default Brand;