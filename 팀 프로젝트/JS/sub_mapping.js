//데이터 맵핑 js - sub_mapping.js

import mFn from "./my_function.js"
import * as listData from "../data/sub_list_data.js"
///////불러오기 영역//////////////////////

//1. 대상선정
const epSlide = mFn.qs('.epSlide')
// console.log(epArea);
epSlide.innerHTML = `
<ul class="fx-box col-8">
    ${listData.epData.map(v =>`
    
        <li>
            <figure>
            <img src="./sub_badbatch/img/thumb_.jpg" alt="Episode Guides | New Each 
              Thursday @ 9AM PT" /></figure>
            <figcaption>
              <div class="title-topic">Season3, Episode1</div>
              <h4 class="title-sub2">
                Episode Guides | New Each Thursday @ 9AM P
              </h4>
            </figcaption>
        </li>
    
    `).join('')}

</ul>
`