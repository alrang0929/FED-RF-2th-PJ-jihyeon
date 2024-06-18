import React from "react";

//data
import { product, options, notiImg } from "../data/product";
import { Link } from "react-router-dom";

//modules
import OptionBox from "./OptionBox";
import OptionTable from "./OptionTable";
///////////////import area////////////////////////

function ShopCustomCont({ catName }) {

  //catName 어떻게 연계시킬지 고민해야될듯 

  const selData = product.face;
  console.log("텍스트 데이터 선택", selData);

  //////코드리턴구역//////////////////////////////////////
  return (
    <>
      <div className="info-wrap">
        <div className="info-area">
          {/* 1. desc wrap */}
          <div className="desc-wrap custum-data">
            <p className="eng-pdtit bt-padding20">{selData[0].engtit}</p>
            <h4 className="kor-pdtit bt-padding20">{selData[0].tit}</h4>
            <p className="desc bt-padding200">{selData[0].txt}</p>
            {/* 2.  아이콘 박스 */}
            <ul className="iconbx fx-box bt-padding20 gap10">
              <li className="share-icon">
                <Link to="">
                  <span className="material-symbols-outlined">share</span>
                </Link>
              </li>
              <li className="like-icon">
                <Link to="">
                  <span className="material-symbols-outlined icon-favorite">
                    favorite
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* desc wrap end */}
          {/* 3. option area */}
          <OptionBox />
          {/* 4. 옵션 선택 표시 리스트 */}
          {/* 테이블 컴포넌트 */}
          <OptionTable/>
          {/* 5. btn area */}
          <div className="btn-wrap bt-padding80">
            <button className="button-nomal">장바구니 추가</button>
            <button className="button-main L-margin10">구매하기</button>
          </div>

          {/* 6. promotion area */}
          <div className="promotion-bx">
            <div className="title bt-padding20">Promotio</div>
            <div className="desc">
              5월 프로모션 | 자세한 사항은 PROMOTION 페이지에서 확인 가능합니다
              - 구매금액대별 슬밋 본품 증정 이벤트 진행중
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCustomCont;
