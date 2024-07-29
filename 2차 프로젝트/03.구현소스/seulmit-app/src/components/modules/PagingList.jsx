import React from 'react';

function PagingList({
    totalCount,
    pgPgNum,
    unitSize,
    pgPgSize,
    pageNum,
    setPageNum,}){

// 전체값 들어왔나 확인
console.log("리스트 전체값 확인!",totalCount.length);

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


// 1. 페이징 개수 변수 셋팅
const pagingCount = Math.floor(totalCount / unitSize)

//만약 나머지가 0이 아니라면? 1 더하기!
if(totalCount.current % unitSize > 0) {
pagingCount++;}//if

console.log(
"페이징 갯수:",
totalCount.current,
"\n 나머지 갯수:",
totalCount.current % unitSize
);

////////////코드 리턴구역 ////////////////
    return (
        <>
            
        </>
    );
}

export default PagingList;
