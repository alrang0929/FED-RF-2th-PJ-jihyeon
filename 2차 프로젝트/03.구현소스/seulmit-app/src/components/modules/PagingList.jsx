import React, { useEffect, useRef } from "react";
import { Fragment } from "react";
import $ from "jquery";

function PagingList({
    products,
    pageNum,
    setPageNum,
    totalCount,
    pgPgNum,
    unitSize,
    pgPgSize,
}) {
    // 전체값 들어왔나 확인

    /******************************* 
  [전달변수]
  1. totalCount: 전체 레코드 수
  2. pgPgNum: 페이징의 페이징 번호
  3. unitSize: 게시판 리스트 당 레코드 갯수
  4. pgPgSize: 한 번에 노출되는 페이징 갯수
  5. pageNum: 현재 페이지 번호
  6. setPageNum: 현재 페이지 번호 변경 메서드
  
  // 전체 페이징 개수 : 전체레코드수 / 페이지당개수
  // 유의점: 나머지가 있는지 검사해서 있으면 +1
  *******************************/
    const pagingRef = useRef(null); // 페이징 요소를 참조할 ref 생성
    ////////화면 랜더링 구역 /////////////
    useEffect(() => {
        //totalCount 재정의
        totalCount.current = products.length;
        // 1. 페이징 개수 변수 셋팅
        let pagingCount = Math.floor(totalCount.current / unitSize);
        //ㄴ> 에러: pagingCount를 const로 선언하면 if문의  pagingCount++ 가 상수를 변경하려 한다고 머라함..
        //따라서 일단 let으로 선언

        //만약 나머지가 0이 아니라면? 1 더하기!
        if (totalCount.current % unitSize > 0) {
            pagingCount++;
        } //if
        console.log("totalCount.current", totalCount.current);
        // console.log("totalCount:", totalCount,"unitSize",unitSize);

        console.log(
            "페이징 갯수:",
            totalCount.current,
            "\n 나머지 갯수:",
            totalCount.current % unitSize
        );

        //2. 페이징의 페이징 한계수 구하기
        //1) 페이징의 페이징 개수
        //전체페이지 개수 / 페이징의 페이징 단위수
        let pgPgCount = Math.floor(pagingCount / pgPgSize);
        console.log("pgPgCount:", pgPgCount);

        //pgPgCount: 페이징 개수 변수! 페이지 개수 변수와 pgPg페이지 한계값 을 나눠 잔여가 나오면 페이지 추가
        if (pagingCount % pgPgSize > 0) {
            pgPgCount++;
        } //if

        //2) 리스트 시작값 / 한계값 구하기
        //시작값 : (페페넘 -1) * 페페단
        let initNum = (pgPgNum.current - 1) * pgPgSize;
        //한계값 : 페페넘*페페단
        let limitNum = pgPgNum.current * pgPgSize;

        console.log("initNum:", initNum, "limitNum:", limitNum);

        // [링크코드 만들기]////////////////////////
        const pgCode = [];
        //[페이징의 페이징에 맞게 돌면서 코드 만들기]///
        //[1]for : 페이징 리스트 출력 시작
        for (let i = initNum; i < limitNum; i++) {
            //i가 시작값과 같고 한계값보다 작을떄까지 증가시켜라

            if (i >= pagingCount) break;
            //만약 i가 pagingCount(전체 개수)보다 크면 나가라;

            pgCode.push(
                <Fragment key={i}>
                    {
                        //페이징 번호와 현제번호가 일치시 b요소

                        i + 1 === pageNum ? (
                            <b>{i + 1}</b>
                        ) : (
                            //불일치시 링크코드
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPageNum(i + 1);
                                }}
                            >
                                {i + 1}
                            </a>
                        )
                    }
                </Fragment>
            ); //push
        } //1. for : 페이징 리스트 출력 끝
        {
            // 2. 페이징 이전 블록 이동버튼 만들기
            //기준: 1p 아니면 보여라
            // 배열 맨 앞 추가: unshift()
            pgCode.unshift(
                pgPgNum.current === 1 ? (
                    ""
                ) : (
                    <Fragment key={-1}>
                        &nbsp;&nbsp;
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(-1, false);
                            }}
                            title="맨 앞으로 이동"
                        >
                            «
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(-1, true);
                            }}
                            title="move previous"
                            style={{ marginLeft: "10px" }}
                        >
                            ◀
                        </a>
                        &nbsp;&nbsp;
                    </Fragment>
                )
            );
        } //2. 페이징 이전 블록 이동버튼 끝
        {
            // [3] 페이징 다음블록 이동버튼 만들기
            // 기준: 끝페이지가 아니면 보여라!
            // 배열 맨뒤추가는 push()
            pgCode.push(
                pgPgNum.current === pgPgCount ? (
                    ""
                ) : (
                    // for문으로 만든 리스트에 추가하는 것이므로
                    // key 값이 있어야함! 단, 중복되면 안됨!
                    // 중복안되는 수인 마이너스로 셋팅한다!
                    <Fragment key={-2}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(1, true);
                            }}
                            title="move next"
                            style={{ marginLeft: "10px" }}
                        >
                            ▶
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(1, false);
                            }}
                            title="move next end"
                            style={{ marginLeft: "10px" }}
                        >
                            »
                        </a>
                    </Fragment>
                )
            );
        } ///3. 페이징 다음블록 이동버튼 끝

        // [블록이동함수] /////////
        const goPaging = (dir, opt) => {
            // dir - 이동방향(오른쪽:+1, 왼쪽:-1)
            // opt - 일반이동(true), 끝이동(false)
            console.log("방향:", dir, "/옵션:", opt);

            // 새 페이징의 페이징번호
            let newPgPgNum;

            // 1. opt 옵션에 따라 페이징의 페이징이동번호 만들기
            // (1) 일반 페이징이동은 현재페이징번호에 증감
            if (opt) newPgPgNum = pgPgNum.current + dir;
            // (2) 끝 페이징이동은
            // 오른쪽(1)일 경우 맨끝 페이징번호로 이동(pgPgCount)
            // 왼쪽(-1)일 경우 맨앞 페이징번호로 이동(1)
            else newPgPgNum = dir == 1 ? pgPgCount : 1;

            // 2.페이징의 페이징 번호 업데이트하기
            pgPgNum.current = newPgPgNum;

            // 3. 새로운 페이지의 페이징 구역의
            // 첫번째 페이지번호 업데이트하기
            // -> 항상 이전블록의 마지막번호 + 1 이 다음페이지 첫번호임!
            // 이동할 페이지번호
            let landingPage = (pgPgNum.current - 1) * pgPgSize + 1;
            console.log("도착페이지번호:", landingPage);
            // 페이지번호 상태변수 업데이트로 전체 리랜더링!!!
            setPageNum(landingPage);
        }; //////////// goPaging /////////////

        return pgCode;


    }, [products]);

    ////////////코드 리턴구역 ////////////////
    return (
        <div className="page-num" ref={pagingRef}>
            {" "}
          
        </div>
    );
}

export default PagingList;
