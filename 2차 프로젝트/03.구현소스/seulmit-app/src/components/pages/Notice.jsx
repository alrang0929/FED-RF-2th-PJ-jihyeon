// 공지사항 페이지 컴포넌트 ///
import React, { useContext } from 'react';
import SubTitle from "../modules/SubTitle";

///////import area////////////////////////////

export default function Notice({selCat}){


    //// 코드 리턴구역 //////////////
    return(
        <>
        <SubTitle selCat="NOTICE"/>
        <main id="notice-area">
        

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