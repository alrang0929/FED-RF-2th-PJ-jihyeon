import mFn from "./my_function.js";

const obj = mFn.qs(".sdbx03");
const CRITARIA = (window.innerHeight / 3) * 2;

function zimgScroll() {
  let bcrVal = mFn.getBCR(obj);
  // console.log('위치:',bcrVal,CRITARIA);
  if (bcrVal < CRITARIA) obj.classList.add("on");
  else obj.classList.remove("on");
}

export { zimgScroll };
