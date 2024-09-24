import React from 'react';
import SubTitle from '../modules/SubTitle';
import {newsData} from '../data/news_data';
import ListGallery from '../modules/List_gallery';
// import MakeCategory from '../modules/Categoty';


function News(props) {
    return (
        <>
        <SubTitle/>
        <ListGallery selectData={newsData}/>
    </>
    );
}

export default News;