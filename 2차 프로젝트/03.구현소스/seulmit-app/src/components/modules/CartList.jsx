import React from "react";
//임시 데이터
import { product } from "../data/product";
import { addComma } from "../func/common_fn";
////////////////////////////////////////////

function CartList(props) {




    ////////////코드 리턴구역 ////////////////////////////
  return (
    <>
      <div className="cart-list">
        {/* 닫기버튼 */}
       <button
       className="close=btn">
        X
       </button>
        <table>
            
        </table>

      </div>
    </>
  );
}

export default CartList;
