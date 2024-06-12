import React from "react";
import Category from "../modules/Category";
import SelectBox from "../modules/SelectBox";

export default function Detail() {
  ///////코드리턴구역
  return (
    <>
      <Category />
      <section id="product-cont">
        <div className="top-Cont fx-box">
        {/*1. 오른쪽 배너: 상품 썸네일 */}
        <div className="imgbx">
          <img
            src="/images/product/skin/skin_MistSolSoul.jpg"
            alt="단잠 필로우 미스트 소울 던 50ml"
          />
        </div>
        <div className="custum-Cont fx-box">
          {/*2. 왼쪽 배너: 상품 정보 */}
          <div className="info-area">
            {/* 1) desc wrap */}
            <div className="desc-wrap custum-data">
              <p className="eng-pdtit">
                Seulmit Deep Sleep Pillow Mist Soul Dawn
              </p>
              <h4 className="kor-pdtit">단잠 필로우 미스트 소울 던 50ml</h4>
              <p className="desc">
                나만의 리추얼을 완성하는 소나무 향으로 하루의 지친 몸과 마음을
                가장 편안한 공간에서 수면 아래 깊이 내려놓을 수 있게 도와주는
                단잠 미스트
              </p>
              {/* 2) 가격박스 */}
              <div className="price-box">
                <span className="price">25,000</span>
                <span>원</span>
              </div>
              {/* 3) 아이콘 구역*/}
              <ul className="iconbx fx-box">
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
              {/* 4) 옵션영역 */}
              <SelectBox />
              {/* 5) 선택옵션 표시영역 */}
              <div className="option-result-bx">
                <ul>
                  <li>
                    {/* 1 - 옵션명 */}
                    <span className="pd-name">
                      단잠 필로우 미스트 소울 던 50ml
                    </span>
                    {/* 2 - 옵션수량 */}
                    <span className="pd-name">
                      단잠 필로우 미스트 소울 던 50ml
                    </span>
                    {/* 3 - 옵션 가격 */}
                  </li>
                </ul>
                {/* 5)토탈가격 */}
                <div className="total-price-box">
                  <span>전체</span>
                  <span className="totla-price">2,5000</span>
                  <span>원</span>
                </div>
              </div>
            </div>
            {/* desc wrap end */}
            {/* 2. option area */}
            {/* 3. btn area */}
            <div className="btn-wrap">
              <button className="button-nomal">
                <span class="material-symbols-outlined">shopping_cart</span>{" "}
                장바구니 추가
              </button>
              <button className="button-main">
                <span class="material-symbols-outlined">toll</span> 구매하기
              </button>
            </div>
            {/* 4. promotion area */}
            <div className="promotion-bx">
              <div className="title">Promotio</div>
              <div className="desc">
                5월 프로모션 | 자세한 사항은 PROMOTION 페이지에서 확인
                가능합니다 - 구매금액대별 슬밋 본품 증정 이벤트 진행중
              </div>
            </div>
          </div>
        </div>
        {/* custum-area cont */}
        </div>
        {/* top-cont end */}
        {/* 썸네일 미리보기 */}
        <div className="tumb-area">
          <ul className="fx-box">
            <li>
              <img
                src="/images/product/skin/skin_MistSolSoul.jpg"
                alt="단잠 필로우 미스트 소울 던 50ml"
              />
            </li>
            <li>
              <img
                src="/images/product/skin/skin_MistSolSoul.jpg"
                alt="단잠 필로우 미스트 소울 던 50ml"
              />
            </li>
            <li>
              <img
                src="/images/product/skin/skin_MistSolSoul.jpg"
                alt="단잠 필로우 미스트 소울 던 50ml"
              />
            </li>
          </ul>
        </div>
        <div className="tap-cont"></div>
      </section>
    </>
  );
}
