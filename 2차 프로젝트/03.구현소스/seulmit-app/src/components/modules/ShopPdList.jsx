import React from "react";
import { product } from "../data/product";
import { Link } from "react-router-dom";

import "../../css/shop.scss";

////import area//////////////////////////////

function ShopPdList({ catName, idx }) {
  const selData = product.face;
  // console.log("선택데이터 머불러옴",selData);

  return (
    <>
      <div className="pd-list">
        {selData.map((v, i) => (
          <li key={i} className="item">
            <Link to="/Detail">
              <div className="img-wrap">
                <div className="imgbx">
                  <img
                    src={v.img[0].isrc}
                    alt={v.tit}
                  />
                </div>
                <div className="blur">
                  <img
                    src={v.img[1].isrc}
                    alt={v.tit}
                  />
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
