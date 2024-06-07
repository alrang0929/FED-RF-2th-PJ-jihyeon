// 공지사항 페이지 컴포넌트 ///


///////import area////////////////////////////

export default function Notice(){

    //// 코드 리턴구역 //////////////
    return(
        <>
        <div id="sub-header">
            <div className="title">
                <div className="icon">
                    <img src="/images/icon-sim-black.svg" alt="" />
                </div>
                <h3>공지사항</h3>
                <span>슬밋의 공지사항을 확인하세요</span>
            </div>
        </div>
        <main id="notice-area">
           <h1>Notice</h1>

           <table>
            <td>
                <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>  
            </td>
           </table>

        </main>

        </>
    );

} /////////// Notice /////////////////////