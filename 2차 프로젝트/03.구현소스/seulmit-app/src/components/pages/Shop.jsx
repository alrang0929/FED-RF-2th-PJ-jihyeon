// shop 페이지 컴포넌트 ///
//데이터 임시호출
import { bestItemData } from "../data/slide_item_data";
//데이터 임시호출
import { gnbData } from "../data/gnb_data";

//CSS
import "../../css/sub_sellpage.scss";
/////import area/////////////////////////////////////////////////

export default function Shop(){

    //// 코드 리턴구역 //////////////
    return(
        <>
         <div id="sub-header">
            <div className="title">
                <div className="icon">
                    <img src="/images/icon-sim-black.svg" alt="" />
                </div>
                <h3>NOTICE</h3>
                <span>슬밋의 공지사항을 확인하세요</span>
            </div>
        </div>

        <section id="pd-list-set">
        {/* 상단 메뉴 리스트 */}
        <div className="category">
            <ul>
                <li className="select-ef"><a href="">All</a></li>
                <li className=""><a href="">FACE</a></li>
                <li className=""><a href="">FACE</a></li>
                <li className=""><a href="">FACE</a></li>
                <li className=""><a href="">FACE</a></li>
                <li className=""><a href="">FACE</a></li>
                <li className=""><a href="">FACE</a></li>
            </ul>
            <span className="under-line"></span>
        </div>
        {/* 메뉴 리스트 */}
        <div className="pd-list">
        <ul className="slider fx-box cont-box">
          {bestItemData.map((v, i) => (
            <li key={i} className="item">
              <a href="">
                <div className="desc-wrap">
                  <div className="eng-pdtit">{v.engtit}</div>
                  <div className="kor-pdtit">{v.tit}</div>
                  <div className="price">{v.price}</div>
                </div>

                <div className="img-wrap">
                  <div className="imgbx">
                    <img
                      src={`./images/product/${v.category}/${v.img}.jpg`}
                      alt={`"${v.tit}"`}
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        </div>
        {/* page Num */}
        <div className="page-num fx-box">
            <div className="prev">
                <span className="icon-img material-symbols-outlined">chevron_left</span>
            </div>
            <ul>
                <li className="select-ef"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
            </ul>
            <div className="next">
                <span className="icon-img material-symbols-outlined">chevron_right</span>
            </div>
        </div>
        </section>



        </>
    );

} /////////// Shop /////////////////////