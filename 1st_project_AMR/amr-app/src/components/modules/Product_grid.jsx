import React from "react";
// data
import { pdData } from "../data/AMR_data";
//func
import { addComma } from "../func/add_comma";
//css
import "./css/product_grid.scss";
import NomalButton from "../modules/Nomal_button";
function ProductGrid(props) {
  //코드 리턴구역///////////////////////////////
  return (
    <>
      {/* 
            [그리드 구조 : 첫번째 li는 크게]
            1. 그리드를 감싸는 ul
            2. 내부 li
                ㄴ imgbox > img
                ㄴ product-data 
                > brand, pd-data(pd-name, price-wrap(span+span"원"))
            */}

      <ul className="product-grid-wrap">
      <li className="title-wrap">
          <div className="title miller-display">
            OUR<br/>
            PRODUCTS
            </div>
          
          
          {/* 2) 제품 그리드 박스 */}
        </li>
        {pdData.map((v, i) => (
          <li key={i}>
            <div className="img-box">
              <img
                src={process.env.PUBLIC_URL + v.isrc}
                alt={v.brand + v.name}
              />
            </div>
            <div className="product-data-wrap">
              <div className="brand-name">{v.brand}</div>
              <div className="pd-data fxbox">
                <div className="pd-name">{v.name}</div>
                <div className="price-wrap">
                  <span>{addComma(v.price)}</span>
                  <span>원</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductGrid;
