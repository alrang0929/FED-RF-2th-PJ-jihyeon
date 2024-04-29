//데이터 맵핑 js - sub_mapping.js

import mFn from "./my_function.js"
import * as listData from "../data/sub_list_data.js"
///////불러오기 영역//////////////////////

//1. 대상선정
const epArea = mFn.qs('.epSubmenu')
// console.log(epArea);
epArea.innerHTML = `
<ul>

</ul>
`