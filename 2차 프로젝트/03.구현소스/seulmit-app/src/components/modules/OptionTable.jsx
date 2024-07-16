import React from "react";

//data
import { options, product } from "../data/product";
import { addComma } from "../func/common_fn";
/////import area////////////////////////////

function OptionTable({ catName }) {
  const selData = product.face[0];
  //a링크 기본기능 막기
  const preventDefault = (e) => {
    e.preventDefault();
  };

  //코드리턴구역/////////////////////////////////////////////
  return (
    <>
      <table>
        <thead style={{ display: "none" }}>
          <tr>
            <th scope="col">상품명</th>
            <th scope="col">상품수</th>
            <th scope="col">가격</th>
          </tr>
        </thead>
        <tbody className="default-option">
          <tr>
            <td className="tit">{selData.tit}</td>
            <td className="quantity ">
              <a href="#" className="btn-add" onClick={preventDefault}>
                +
              </a>
              <input
                id="quantity"
                name="quantity_otp[]"
                type="number"
                defaultValue={1}
              />
              <a href="#" className="btn-increase" onClick={preventDefault}>
                -
              </a>
            </td>
            <td className="price">{addComma(selData.price)}</td>
          </tr>
        </tbody>
      </table>
      {/* 총합계 가격 */}
      <div className="total-price" style={{fontSize:"15px",marginBottom:"20px"}}>
        총<span style={{fontSize:"30px"}}>{addComma(selData.price)}</span>원
      </div>
    </>
  );
}

export default OptionTable;
