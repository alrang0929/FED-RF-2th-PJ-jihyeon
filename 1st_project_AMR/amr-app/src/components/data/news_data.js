// AMR PJ news data

/************************************************* 

카테고리 = key

데이터 구조
key :{
idx:"",
title: "",
date: "기사날짜",
isrc:{img:"",}, {figure:""},
annotation: `상단 요약, ^로 cut`,
contents: `기사 내용`,
},


*************************************************/

const newsData = { 
    key: [
      { 
        idx: "",
        title: "",
        date: "기사날짜",
        isrc: { img: "", figure: "" },
        annotation: `상단 요약, ^로 cut`,
        contents: `기사 내용`,
      }
    ],
  };


  export default newsData;