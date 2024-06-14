import React from "react";

//data
//임시 상품데이터
import { bestItemData } from "../data/slide_item_data";
///////////////import area////////////////////////

function ShopCustomCont(props) {
  return (
    <>
      <div className="info-wrap">
        <div className="info-area">
          {/* 1. desc wrap */}
          <div className="desc-wrap custum-data">
            <p className="eng-pdtit bt-padding20">
              Seulmit Deep Sleep Pillow Mist Soul Dawn
            </p>
            <h4 className="kor-pdtit bt-padding20">
              단잠 필로우 미스트 소울 던 50ml
            </h4>
            <p className="desc bt-padding80">
              나만의 리추얼을 완성하는 소나무 향으로 하루의 지친 몸과 마음을
              가장 편안한 공간에서 수면 아래 깊이 내려놓을 수 있게 도와주는 단잠
              미스트
            </p>
            <ul className="iconbx fx-box bt-padding20 gap10">
              <li className="share-icon">
                <a href="">
                  <span class="material-symbols-outlined">share</span>
                </a>
              </li>
              <li className="like-icon">
                <a href="">
                  <span class="material-symbols-outlined">favorite</span>
                </a>
              </li>
            </ul>
          </div>
          {/* desc wrap end */}
          {/* 2. option area */}
          {/* 3. btn area */}
          <div className="btn-wrap bt-padding80">
            <button className="button-nomal">
              <span class="material-symbols-outlined">shopping_cart</span>{" "}
              장바구니 추가
            </button>
            <button className="button-main L-margin20">
              <span class="material-symbols-outlined ">toll</span> 구매하기
            </button>
          </div>
          {/* 4. promotion area */}
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
