//페이징 컴포넌트
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { product } from "../data/product";
import { sCon } from "../pages/sCon";
//////import area///////////////////////////////////////////////////

function Pagination({
  totalPage,
  limit,
  page,
  setPage,
  productList,
  setProductList,
}) {
  //1. totalPg: 프로덕트 데이터 전체 돌아서 나온 배열의 갯수
  //2. limit: 한 페이지당 노출되는 갯수
  //3. page: 현 페이지, useEffect에서 의존성에 적용해 리렌더링, 리렌더링 시 해당되는 데이터 셋업

  //콘텍스트 사용
  const myCon = useContext(sCon);

  //[상태관리 변수]///////////////////////////////
  //useState는 컴포넌트의 상태를 저장하고 관리하는 변수를 만드는 훅
  const [currentPgArray, setCurrentPgArray] = useState(
    Array.from({ length: Math.min(limit, totalPage) }, (_, i) => i + 1)
  );
  const [totalPgArray, setTotalPgArray] = useState([]);

  ////화면 랜더링 구역////////////////////////////

  //page값 변경시 리렌더링
  useEffect(() => {
    const totalPages = Math.ceil(productList.length / limit); // 전체 페이지 수 계산
    const slicedPgArray = Array.from({ length: totalPages }, (_, i) => i + 1); // 페이지 번호 배열 생성
    //(_,i) => "_"는 i값을 쓰기 위한 셋팅, 아직 쓰지 않으므로 _처리
    //slicedPgArray:
    //step1: length: totalPages -> totalPages 갯수에 맞춰 객체가 만들어짐 (ex: totalPages값=5 라면? length: 5)
    //step2: Array.from():해당 length 값으로 배열 생성
    //step3: 앞의 Array.from()으로 배열 생성 > (_, i) => i + 1) : 페이지 번호 생성

    setTotalPgArray(slicedPgArray);
    setCurrentPgArray(slicedPgArray.slice(0, limit)); // 첫 번째 챕터 페이지 목록으로 초기화
  }, [productList, limit]);

  const prevPage = useRef(page); // 이전 페이지 저장

  const handleSetProductList = useCallback(
    (newProductList) => setProductList(newProductList),
    []
  );

  useEffect(() => {
    if (productList.length > 0) {
      // productList가 비어있지 않을 때만 실행
      const totalPages = Math.ceil(productList.length / limit);
      const slicedPgArray = Array.from({ length: totalPages }, (_, i) => i + 1);
      setTotalPgArray(slicedPgArray);
      setCurrentPgArray(slicedPgArray.slice(0, limit));
    }
  }, [productList, limit]);

  useEffect(() => {
    // 페이지 번호 업데이트
    const offset = Math.floor((page - 1) / limit) * limit;
    const newPgArray = totalPgArray.slice(offset, offset + limit);
    setCurrentPgArray(newPgArray);

    if (page !== prevPage.current) {
      const slicedProducts = productList.slice(offset, offset + limit);
      handleSetProductList(slicedProducts); // useCallback으로 감싼 함수 사용
      prevPage.current = page;
    }
  }, [page, totalPgArray, limit, productList, myCon.selCat]);

  //핸들러 추가
  //전페이지
  const prevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  //다음페이지
  const nextClick = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPage));
  };

  ////코드 리턴구역//////////////////////////////
  return (
    <>
      <div className="page-num fx-box">
        {/* 왼쪽 화살표 */}
        <div className="prev" onClick={prevClick} disabled={page === 1}>
          <span className="icon-img material-symbols-outlined">
            chevron_left
          </span>
        </div>
        {/* 페이지 번호 */}
        <ul className="fx-box page-wrap">
          {
            // 현재 페이지가 0 이상이면 퉤퉤퉤
            currentPgArray.length > 0 &&
              currentPgArray.map((v, i) => (
                <li key={i}>
                  <button
                    className="select-ef"
                    key={i + 1}
                    onClick={() => {
                      setPage(v);
                    }}
                    aria-current={page === v ? "page" : null}
                  >
                    {v}
                  </button>
                </li>
              ))

            //옵셔널 체이닝(? 연산자) : 객체 안에 특정 속성이 있는지 확인, 있으면 그 값을 가져옴 / 없을시 undefined 반환
          }
        </ul>
        {/* 오른쪽 화살표 */}
        <div className="next" onClick={nextClick} disabled={page === totalPage}>
          <span className="icon-img material-symbols-outlined">
            chevron_right
          </span>
        </div>
      </div>
    </>
  );
}

export default Pagination;
