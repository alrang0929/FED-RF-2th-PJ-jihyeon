//DOM함수 호출
import mFn from "./my_function.js";
//데이터셋팅 불러오기
import * as amrData from "../data/AMR_data.js";
//gnbData 불러오기
import * as cmData from "../data/common_data.js";


function makeGnb(){
//대상 GNB
mFn.qs(".gnb").innerHTML = `
<ul>
${
    Object.keys(cmData.gnbData).map((v) =>`
    <li>
      <h2><a href="#">${v}</a></h2>
      ${
        cmData.gnbData[v]=="없음"?"":`
        <div class="submenu">
                  <ol>
                  ${cmData.gnbData[v].map((vSub)=>`
                  <li><a href="#">${vSub}</a></li>
                  `).join("")}
                  </ol>
                </div>`}
    </li>
    `).join('')}
</ul>`
}//////////////////makeGnb함수//////////////////////



export {makeGnb,};