import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

import "../../css/shop.scss";
import { addComma } from "../func/common_fn";
import PagingList from "./PagingList";

////import area//////////////////////////////

function ShopPdList({  products,
    pageNum,
    setPageNum,
    totalCount,
    pgPgNum,
    unitSize,
    pgPgSize,}) {
    //products: products={product[selCat]} : 클릭된 메뉴의 배열

    // console.log("선택데이터 머불러옴",selData);

    //카테고리 리스트에 li key 값을
    //Object.keys(products)로 설정해둠
    //위 카테고리를 클릭을 했을 때 key 값을
    //읽어와 그에 해당되는 값들을 맵핑을 돌아 셋팅할것
    //여기서 selData의 .face 자리에 Object.keys(products); 를 어떻게 넣을것인가

    //위의 selData 대신 구조분해할당
    //products로 활성화된 배열을 할당받아 맵핑

   

    //[ 네비게이션 ]///////////////////
    const nav = useNavigate();
    const clickProduct = (product) => {
        nav("/detail", {
            state: { product: product.idx, topcat: $(".cgmenu a.on").text() },
            replace: true,
        });
    };

    //이전 코드
    // const clickProduct = (product) => {
    //   console.log(product);
    //   nav("/detail", { state: { product:product.idx, topcat:$(".cgmenu a.on").text() } });
    //   //상품 데이터를 state에 담아 이동
    // };

    return (
        <>
<div className="pd-list">
{products.map((v, i) => (
//product의 배열 순회
<li
key={i}
className="item"
onClick={() => {
    clickProduct(v);
}}
>
<Link
    to={`/Detail/${v.idx}`}
    // onClick={(e) => {
    //   e.preventDefault();
    //   clickProduct(v);
    // }}
>
    <div className="img-wrap">
        <div className="imgbx">
            <img
                src={
                    process.env.PUBLIC_URL +
                    v.img[0].isrc
                }
                alt={v.tit}
            />
        </div>
        <div className="blur">
            <img
                src={
                    process.env.PUBLIC_URL +
                    v.img[1].isrc
                }
                alt={v.tit}
            />
        </div>
    </div>
    <div className="desc-wrap">
        <div className="eng-pdtit">{v.engtit}</div>
        <div className="kor-pdtit">{v.tit}</div>
        <div className="price">
            {addComma(v.price)} <span>원</span>
        </div>
    </div>
</Link>
</li>
))}
</div>
</>
);
}

export default ShopPdList;
