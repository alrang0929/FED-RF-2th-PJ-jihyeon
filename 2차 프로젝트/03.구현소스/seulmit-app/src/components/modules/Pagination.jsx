//페이징 컴포넌트
import React, { useEffect } from "react";

//////import area///////////////////////////////////////////////////

function Pagination({ totalPg, limit, page, setPage }) {
  //1. totalPg: 프로덕트 데이터 전체 돌아서 나온 배열의 갯수
  //2. limit: 한 페이지당 노출되는 갯수
  //3. page: 현 페이지, useEffect에서 의존성에 적용해 리렌더링, 리렌더링 시 해당되는 데이터 셋업

  //[상태관리 변수]///////////////////////////////
  //useState는 컴포넌트의 상태를 저장하고 관리하는 변수를 만드는 훅
  const [totalPgArray, setTotalPgArray] = useState(sliceArrayByLimit(totalPg, limit));
  const [currentPgArray, setCurrentPgArray] = useState([0]);

  ////화면 랜더링 구역////////////////////////////

  //page값 변경시 리렌더링
  useEffect(() => {
    if (page % limit == 1)
      //page를 limit로 나눈 값이 1인가? : 각 챕터의 첫페이지냐?
      setCurrentPgArray(totalPgArray[Math.floor(page / limit)]);
    // setCurrentPgArray : 현재 보고있는 페이지 챕터에 해당되는 페이지 번호 목록 업데이트
    //totalPgArray[Math,floor(page / limit : 현재 속한 페이지 번호 목록 불러오기
    //  page / limit => 페이지 번호를 항목 개수로 나눠 현재 있는 페이지 계산
    // Math.floor: 값 정수로 반환
    //totalPgArray : 정수로 반환한 해당 페이지 번호를 배열로 반환
    else if (page % limit == 0) {
      setCurrentPgArray(totalPgArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  //totalPg 변경시 페이지 자르기
  useEffect(() => {
    const slicedPgArray = sliceArrayByLimit(totalPg, limit);
    setTotalPgArray(slicedPgArray);
    setCurrentPgArray(slicedPgArray[0]);
  }, [totalPg]);

  ////코드 리턴구역//////////////////////////////
  return (
    <>
      <div className="page-num fx-box">
        {/* 왼쪽 화살표 */}
        <div
          className="prev"
          onClick={() => {
            setPage(1);
          }}
          disabled={page == 1}
        >
          <span className="icon-img material-symbols-outlined">
            chevron_left
          </span>
        </div>
        {/* 페이지 번호 */}
        <ul className="fx-box page-wrap">
          {
            // 현재 페이지가 0 이상이면 퉤퉤퉤
            currentPgArray.length > 0 && currentPgArray.map((v, i) => (
              <li key={i}>
                <button
                  className="select-ef"
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  //현재 페이지 표시
                  //aria-current(웹 접근성 속성 중 하나.. alt 같은건가봄): 스크린 리더 사용자에게 현재 어떤 페이지 항목을 보고있는지 알려줌
                  aria-current={page == i + 1 ? 'page' : null}
                >
                  {i + 1}
                </button>
              </li>
            ))

            //옵셔널 체이닝(? 연산자) : 객체 안에 특정 속성이 있는지 확인, 있으면 그 값을 가져옴 / 없을시 undefined 반환
          }
        </ul>
        {/* 오른쪽 화살표 */}
        <div
          className="next"
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page == 1}
        >
          <span className="icon-img material-symbols-outlined">
            chevron_right
          </span>
        </div>
      </div>
    </>
  );
}

export default Pagination;
