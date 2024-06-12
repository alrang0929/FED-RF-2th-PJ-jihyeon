// shop 페이지 컴포넌트 ///
//데이터 임시호출
import { bestItemData } from "../data/slide_item_data";
//CSS
import "../../css/shop.scss";
import Category from "../modules/Category";
import { Link } from "react-router-dom";
/////import area/////////////////////////////////////////////////

export default function Shop() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      <div className={`sub-header bg1 cbx bgi`}>
        <div className="title">
          <div className="icon">
            <img src="/images/icon-sim-black.svg" alt="" />
          </div>
          <h3>NOTICE</h3>
          <span>슬밋의 공지사항을 확인하세요</span>
        </div>
      </div>

      <section id="sell-pd-list" className="cont-box">
        {/* 메뉴 리스트 */}
          <Category />
        <div className="pd-list">
          <ul className="fx-box">
            {bestItemData.map((v, i) => (
              <li key={i} className="item">
                <Link to="/Detail">
                  <div className="imgbx">
                    <img
                      src={`./images/product/${v.category}/${v.img}.jpg`}
                      alt={`"${v.tit}"`}
                    />
                  </div>
                  <div className="desc-wrap">
                    <div className="eng-pdtit">{v.engtit}</div>
                    <div className="kor-pdtit">{v.tit}</div>
                    <div className="price">{v.price} <span>원</span></div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* page Num */}
        <div className="page-num fx-box">
          <div className="prev">
            <span className="icon-img material-symbols-outlined">
              chevron_left
            </span>
          </div>
          <ul className="fx-box">
            <li className="select-ef">
              <Link to="">1</Link>
            </li>
            <li>
              <Link to="">2</Link>
            </li>
            <li>
              <Link to="">3</Link>
            </li>
            <li>
              <Link to="">4</Link>
            </li>
            <li>
              <Link to="">5</Link>
            </li>
          </ul>
          <div className="next">
            <span className="icon-img material-symbols-outlined">
              chevron_right
            </span>
          </div>
        </div>
      </section>
    </>
  );
} /////////// Shop /////////////////////
