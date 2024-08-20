// shop 페이지 컴포넌트 ///
import { product } from "../data/product";
import { useContext, useRef, useState} from "react";

//컨텍스트
import { sCon } from "./sCon";
//CSS
import "../../css/shop.scss";

//module
import Category from "../modules/Category";
import ShopPdList from "../modules/ShopPdList";
import SubTitle from "../modules/SubTitle";
import PagingList from "../modules/PagingList";
import { Link } from "react-router-dom";

/////import area/////////////////////////////////////////////////

export default function Shop() {
  //콘텍스트 사용
  const myCon = useContext(sCon);
  const selData = product[myCon.selCat];

  //activeCat = 클릭된 카테고리
  const activeCat = (cat) => {
    myCon.setSelCat(cat); // 클릭된 카테고리로 상태 업데이트
  };

  //페이징 셋팅
  // [ 상태관리 변수 ]////////////////////
    // 1. 페이지 번호
    // const [pageNum, setPageNum] = useState(1);

    // // [ 참조변수 ]///////////////////
    // //1. 전체 제품갯수 : 값 초기화
    // const totalCount = useRef(0);
    // //2. 선택 데이터 저장 : 필요여부 추후 체크
    // // const selRecord = useRef(null);
    // // ㄴ> 특정리스트 클릭시 데이터 저장을 위해 사용된 참조변수
    // const pgPgNum = useRef(1); // 페이징의 페이징 번호

    // //페이징 셋팅 변수//////////////////////////////////
    // //1. 페이지당 갯수 : 1페이지당 노출되는 페이지 수
    // const unitSize = 4;
    // //2. 페이징의 페이징 개수 : 한 번에 노출되는 페이징 갯수
    // const pgPgSize = 3;

    // const bindList = () => {
    //   // 1. 상품 데이터 선택
    //   const currentProducts = selData.slice(
    //     (pageNum - 1) * unitSize,
    //     pageNum * unitSize
    //   );
    
    //   return currentProducts.map((product, i) => (
    //     <tr key={product.idx}> {/* 상품의 idx를 key로 사용 */}
    //       <td>{i + 1 + (pageNum - 1) * unitSize}</td>
    //       <td>
    //         <Link
    //           to={`/detail/${product.idx}`} // 상세 페이지 링크
    //           state={{ product: product.idx, topcat: product.category }} // 필요한 정보 전달
    //           onClick={(e) => {
    //             e.preventDefault();
    //             // 상세 페이지 이동 로직 (필요한 경우 추가)
    //           }}
    //         >
    //           {product.tit}
    //         </Link>
    //       </td>
    //       {/* 상품 정보에 맞게 수정 */}
    //       {/* <td>{product.unm}</td> */} {/* 작성자 정보는 필요 없을 수 있음 */}
    //       {/* <td>{product.date}</td> */} {/* 날짜 정보는 필요 없을 수 있음 */}
    //       <td>{product.price}원</td> {/* 가격 정보 추가 */}
    //       {/* <td>{product.cnt}</td> */} {/* 조회수 정보는 필요 없을 수 있음 */}
    //     </tr>
    //   ));
    // };


  //// 코드 리턴구역 //////////////
  return (
    <>
      <SubTitle selCat="SHOP" />
      <section id="sell-pd-list" className="cont-box">
        {/* 메뉴 리스트 */}
        <Category onCat={(cat) => activeCat(cat)} selCat={myCon.selCat} />
        {/* 상품리스트 컴포넌트*/}
        <ShopPdList products={product[myCon.selCat]}
        // pageNum={pageNum}
        // setPageNum={setPageNum}
        // totalCount={totalCount}
        // pgPgNum={pgPgNum}
        // unitSize={unitSize}
        // pgPgSize={pgPgSize}
        />
        {/* 페이징 컴포넌트 */}
        {/* 
        <PagingList 
        products={product[myCon.selCat]}
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalCount={totalCount}
          pgPgNum={pgPgNum}
          unitSize={unitSize}
          pgPgSize={pgPgSize}
        />
        
        */}
      </section>
    </>
  );
} /////////// Shop /////////////////////
