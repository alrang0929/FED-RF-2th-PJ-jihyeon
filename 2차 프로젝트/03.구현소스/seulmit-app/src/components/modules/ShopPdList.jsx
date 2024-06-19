import React, { useEffect } from "react";
import { product } from "../data/product";
import { Link } from "react-router-dom";

import "../../css/shop.scss";

////import area//////////////////////////////

function ShopPdList({ products }) {

  //products: products={product[selCat]} : 클릭된 메뉴의 배열 

  // console.log("선택데이터 머불러옴",selData);

  //카테고리 리스트에 li key 값을
  //Object.keys(products)로 설정해둠
  //위 카테고리를 클릭을 했을 때 key 값을
  //읽어와 그에 해당되는 값들을 맵핑을 돌아 셋팅할것
  //여기서 selData의 .face 자리에 Object.keys(products); 를 어떻게 넣을것인가

  // const selData = products.face;
  //위의 selData 대신 구조분해할당
  //products로 활성화된 배열을 할당받아 맵핑


  return (
    <>
      <div className="pd-list">
        {products.map((v, i) => (
          //product의 배열 순회
          <li key={i} className="item">
            <Link to={`/Detail/${v.idx}`}>
              <div className="img-wrap">
                <div className="imgbx">
                  <img src={v.img[0].isrc} alt={v.tit} />
                </div>
                <div className="blur">
                  <img src={v.img[1].isrc} alt={v.tit} />
                </div>
              </div>
              <div className="desc-wrap">
                <div className="eng-pdtit">{v.engtit}</div>
                <div className="kor-pdtit">{v.tit}</div>
                <div className="price">
                  {v.price} <span>원</span>
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
