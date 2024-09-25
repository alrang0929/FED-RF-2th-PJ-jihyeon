import React from 'react';
import SubTitle from '../modules/SubTitle';
import {newsData } from '../data/page_data';
import ListGallery from '../modules/List_gallery';
// import MakeCategory from '../modules/MakeCategory';
import "./css/news.scss";

function News(props) {
    return (
        <>
        <SubTitle />
        <div className="news-conts">
        <ListGallery selectData={newsData}/>
        </div>
    </>
    );
}

export default News;