// 공지사항 페이지 컴포넌트 ///
import React, { Fragment, useContext, useRef, useState } from "react";
import $ from "jquery";

//공지사항 css
import "../../css/notice.scss";

//타이틀 데이터
import SubTitle from "../modules/SubTitle";

//사용자 기본정보 생성함수
import { initData } from "../func/memFn";

//로컬스토리지 확인 JS
import { initBoardData } from "../func/board_fn";
import { sCon } from "./sCon";

///////import area////////////////////////////

export default function Notice({ selCat }) {
  //selCat : 카테고리 이름

  //컨텍스트 사용
  const myCon = useContext(sCon);
  // 전역 로그인 상태 변수 확인(변수할당!)
  const sts = myCon.loginSts;
  //로컬스토리지 게시판 데이터 정보 확인
  initBoardData();

  // 로컬스 데이터에 정렬 적용하기 : 내림차순
  const baseData = JSON.parse(localStorage.getItem("board-data"));

  //원본 데이터에 정렬 적용하기: 내림차순
  baseData.sort((a, b) =>
    Number(a.idx) > Number(b.idx) ? -1 : Number(a.idx) < Number(b.idx) ? 1 : 0
  );

  //[상태관리변수]///////////////////////////
  //1. 페이지 번호
  const [pageNum, setPageNum] = useState(1);
  //2. 기능모드
  const [mode, setMode] = useState("L");
  /* 
  [리스트 모드]
    L : 리스트(기본값)
    R : 글보기 모드
    W : 글쓰기 모드
    M : 수정모드(삭제 포함)
  */

  //[참조변수]///////////////////
  //1. 전체 개수 - 매번 계산 ㄴㄴ, 참조변수로
  const totalCount = useRef(baseData.length);
  //2. 선택데이터 저장 : 특정리스트 제목 클릭시 데이터 저장 (ㅇㅅㅇ? 왜지 => 선택 데이터 수정, 삭제 등을 위하여)
  const selRecord = useRef(null);

  // 페이지당 노출 리스트 개수
  const unitSize = 8;

  /**************************************************** 
    함수명: bindList
    기능: 페이지별 리스트를 생성하여 바인딩
 ****************************************************/

  const bindList = () => {
    //1. 원본 데이터 선택 (ㅇㅅㅇ.. 왜지!!!!)
    let orgData = baseData;

    //2. 정렬 적용하기 : 내림차순
    orgData.sort((a, b) =>
      Number(a.idx) > Number(b.idx) ? -1 : Number(a.idx) < Number(b.idx) ? 1 : 0
    );

    //3. 일부 데이터만 선택 (ex: 한 페이지 10개 노출? 0~9번 까지만 선택!)

    //시작번호 (0부터 시작하므로 보정 숫자 - 1 추가)
    let startNum = (pageNum - 1) * unitSize;
    //끝번호 = 페이지번호*단위수
    let endNum = pageNum * unitSize;

    //결과배열
    const selData = [];

    // for문으로 배열 만들기
    for (let i = startNum; i < endNum; i++) {
      // console.log(i);
      // 끝번호가 전체 개수보다 크면 나가라!
      if (i >= totalCount.current) break;
      // 대상배열값 추가
      selData.push(orgData[i]);
    } ///// for //////

    return selData.map((v, i) => (
      <tr key={i}>
        {/* 시작번호를 더하여 페이지별 순번을 변경 */}
        <td>{i + 1 + startNum}</td>
        <td>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // 읽기모드로 변경!
              setMode("R");
              // 해당 데이터 저장하기
              selRecord.current = v;
            }}
          >
            {v.tit}
          </a>
        </td>
        <td>{v.unm}</td>
        <td>{v.date}</td>
        <td>{v.cnt}</td>
      </tr>
    ));
  }; ///////bindList Fn///////////////////////////////////

  /***************************************** 
  함수명 : pagingList
  기능: 게시판 리스트의 페이징 기능 목록
  *****************************************/
  const pagingList = () => {
    //전체 페이징 개수: 전체레코드수 / 페이지당 개수
    //유의점: 나머지가 있는지 검사 -> 있을시 +1

    //1. 페이징 개수
    let pagingCount = Math.floor(totalCount.current / unitSize);

    //나머지가 있으면 다음 페이지 필요!
    //나머지가 0이 아니라면 1더하기
    if (totalCount.current % unitSize > 0) {
      pagingCount++;
    }
    //링크코드 만들기
    const pgCode = [];

    //1부터 페이지 긑번호까지 돌면서 코드 생성
    for (let i = 1; i <= pagingCount; i++) {
      pgCode.push(
        <Fragment key={i}>
          {
            //페이징번호와 현재 페이지번호 일치? b 요소
            i === pageNum ? (
              <b>{i}</b>
            ) : (
              //불일치시 모드 링크코드
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPageNum(i);
                }}
              >
                {i}
              </a>
            )
          }
        </Fragment>
      );
    } ///for//////

    //코드리턴
    return pgCode;
  }; ///pagingList Fn //////////////////////////

  // 버튼 클릭시 변경함수 ////////
  const clickButton = (e) => {
    // 버튼글자 읽기
    let btnText = e.target.innerText;
    // console.log(btnText);
    // 버튼별 분기
    switch (btnText) {
      // 글쓰기 모드로 변경
      case "Write":
        setMode("W");
        break;
      // 리스트모드로 변경
      case "List":
        setMode("L");
        break;
      // 서브밋일 경우 함수호출!
      case "Submit":
        submitFn();
        break;
      // 수정일 경우 수정모드로 변경
      case "Modify":
        setMode("M");
        break;
      // 삭제일 경우 삭제함수 호출
      case "Delete":
        deleteFn();
        break;
    }
  }; ////////// clickButton //////////

  //삭제 처리함수//////////////////////
  const deleteFn = () => {
    //삭제여부확인
    if (window.confirm("이 게시글을 삭제하시겠습니까?")) {
      //1. 현재 게시물 idx 읽기
      let currIdx = selRecord.current.idx;
      //2. some()로 순회하여 해당항목 삭제하기
      baseData.some((v, i) => {
        if (v.idx == currIdx) {
          //전체 데이터 idx 와 현재 데이터 idx가 일치하는가?
          //배열삭제 : splice(순번, 삭제할 요소의 개수)
          baseData.splice(i, 1);

          //리턴true 할 경우 종료
          return true;
        } //if////////////
      }); //////////some////////
      /************************************** 
    find() 와 some() 차이:
    find(): 조건에 맞는 "첫번째 요소"를 찾아 리턴
            ㄴ> 리턴값: 찾은 요소 or undefined, 특정 요소를 찾을 때 사용
    some() : 배열 중 조건에 맞는 요소가 "하나라도 있는지"
            ㄴ> 리턴값 : 하나라도 있다면? true / 없으면 false
                    조건에 맞는지 확인할 때 사용
    **************************************/

      //3. 로컬스에 데이터 업데이트
      localStorage.setItem("board-data", JSON.stringify(baseData));

      //4. 삭제 후 리스트 리랜더링 시 리스트 불일치로 인한 에러 방지!
      // 전체 개수 바로 업데이트
      totalCount.current = baseData.length;

      //4. 리스트로 돌아가기 -> 리랜더링 후 모드변경! "L"
      setMode("L");
    } ///////if//////
  }; //////deleFn

  //서브밋 처리함수 /////////////
  const submitFn = () => {
    //제목입력항목
    let title = $();
  }; /////submitFn ///////////////////

  //// 코드 리턴구역 //////////////
  return (
    <>
      <SubTitle selCat="NOTICE" />
      <main id="notice-area">
        {
          //1. 리스트 모드일 경우 리스트 출력하기
          mode == "L" && (
            <ListMode bindList={bindList} pagingList={pagingList} />
          )
        }
        {
          //2. 읽기 모드일 경우 상세보기 출력하기
          mode == "R" && <ReadMode selRecord={selRecord} sts = {sts} />
        }
        {
          //3. 쓰기 모드일 경우 로그인 정보 보내기
          mode == "W" && <WriteMode sts={JSON.parse(sts)} />
        }
        {
          //4. 수정 모드일 경우 상세보기 출력하기
          mode == "M" && <ModifyMode selRecord={selRecord} />
        }
        <br />
        {/* 모드별 버튼출 력박스 */}
        <table className="btn-wrap">
          <tr>
            <td>
              {
                // 1. 글쓰기 버튼: 로그인상태: ㅇ, 모드: L
                mode == "L" && sts && (
                  <button 
                  className="button-nomal"
                  onClick={clickButton}>Write</button>
                )
              }
              {
                // 2. 읽기 버튼: 로그인상태: x, 모드: R
                <>
                  {mode == "R" && <button onClick={clickButton}>List</button>}

                  {
                    //로그인한 상태, 글쓴이 일치 = 수정보드 이동버튼 노출
                    //현재글은 selRecord참조변수에 저장
                    // uid: 사용자 아이디
                    //sts.uid 와 비교하여 일치할 시 수정보드 이동

                    mode == "R" &&
                      sts &&
                      JSON.parse(sts).uid === selRecord.current.uid && (
                        <button onClick={clickButton}>Modify</button>
                      )
                  }
                </>
                //읽기상태 끝
              }

              {
                // 3. 쓰기상태(w)일 경우
                mode == "W" && (
                  <>
                    <button onClick={clickButton}>List</button>
                    <button onClick={clickButton}>Submit</button>
                  </>
                )
              }
              {
                //4. 수정상태 "M"일 경우
                mode == "M" && (
                  <>
                    <button onClick={clickButton}>Delete</button>
                    <button onClick={clickButton}>List</button>
                    <button onClick={clickButton}>Submit</button>
                  </>
                )
              }
            </td>
          </tr>
        </table>
      </main>
    </>
  );
} /////////// Notice /////////////////////

/****************************************** 
        리스트 모드 서브 컴포넌트
******************************************/
const ListMode = ({ bindList, pagingList }) => {
  return (
    <>

      <table className="dtbl" id="board">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>{bindList()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="paging">
              {pagingList()}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="selbx">
        <select name="cta" id="cta" className="cta">
          <option value="tit">Title</option>
          <option value="cont">Contents</option>
          <option value="unm">Writer</option>
        </select>
        <select name="sel" id="sel" className="sel">
          <option value="0">Descending</option>
          <option value="1">Ascending</option>
        </select>
        <input id="stxt" type="text" maxLength="50" />
        <button className="sbtn button-nomal">Search</button>
      </div>
    </>
  );
}; //////////// ListMode ///////////////////

/*********************************************** 
            수정 모드 서브 컴포넌트
***********************************************/

const ModifyMode = ({ selRecord, sts }) => {

  //읽기 모드가 호출됨? = 리스트 제목 클릭됨!
  // -> 레코드 값도 저장됨!
  //전달된 데이터 객체를 변수에 할당
  const data = selRecord.current;

  return (
    <>
      <table className="dtblview readone">
        <caption>option : Modify</caption>
        <Fragment>
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                readOnly
                value={data.unm}
              />
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <td>
              <input
                type="text"
                className="subject"
                size="60"
                readOnly
                value={data.tit}
              />
            </td>
          </tr>
          <tr>
            <th>Content</th>
            <td>
              <textarea
                className="content"
                cols="60"
                rows="10"
                readOnly
                value={data.cont}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>Attachment</th>
            <td></td>
          </tr>
        </tbody>
        </Fragment>
      </table>
    </>
  );
}; //////////////ModifyMode

/*********************************************** 
            쓰기 모드 서브 컴포넌트
***********************************************/

const WriteMode = ({ sts }) => {
  //sts - 로그인 상태정보
  //로그인한 사람만 글쓰기 가능!
  return (
    <>
      <table className="dtblview readone">
        <caption>OPINION : Write</caption>
        <Fragment>
        
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                readOnly
                // 로그인한 사람이름
                value={sts.unm}
              />
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <input
                type="text"
                className="email"
                size="40"
                readOnly
                // 로그인한 사람이메일
                value={sts.eml}
              />
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <td>
              <input type="text" className="subject" size="60" />
            </td>
          </tr>
          <tr>
            <th>Content</th>
            <td>
              <textarea className="content" cols="60" rows="10"></textarea>
            </td>
          </tr>
          <tr>
            <th>Attachment</th>
            <td></td>
          </tr>
        </tbody>
        </Fragment>
      </table>
    </>
  );
}; //////////////WriteMode

/*********************************************** 
            읽기 모드 서브 컴포넌트
***********************************************/

const ReadMode = ({ selRecord, sts }) => {
  // 읽기모드 호출 > 리스트 제목 클릭됨!
  // 따라서 selRecord에 현재 리스트값 저장됨!
  // 전달 데이터 변수할당
  const data = selRecord.current;

  //[조회수 증가하기]
  //규칙1: 자신의 글은 증가하지 않는다
  //규칙2: 타인의 글은 증가
  //규칙3: 로그인한 상태에서 한번만 증가

  /*************************************************************** 
   [조회된 글 저장방법]
   - 종류는 세션스토리지, 쿠키, 전역 참조변수 있음..
 
 ***************************************************************/

  /////////화면 랜더링 구역////////////////////
  return (
    <>
      <table className="dtblview readone">
        <caption>OPINION : Read</caption>
        <Fragment>
        
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                readOnly
                value={data.unm}
              />
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <td>
              <input
                type="text"
                className="subject"
                size="60"
                readOnly
                value={data.tit}
              />
            </td>
          </tr>
          <tr>
            <th>Content</th>
            <td>
              <textarea
                className="content"
                cols="60"
                rows="10"
                readOnly
                value={data.cont}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>Attachment</th>
            <td></td>
          </tr>
        </tbody>
        </Fragment>
      </table>
    </>
  );
}; //////////////ReadMode
