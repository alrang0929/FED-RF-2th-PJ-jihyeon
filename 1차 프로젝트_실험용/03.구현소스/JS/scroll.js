import mFn from "./my_function.js";

const obj2 = mFn.qs(".bgimg");
const obj = mFn.qs(".sdbx03");
const CRITARIA = (window.innerHeight / 4) * 2;

function zimgScroll() {
  let bcrVal = mFn.getBCR(obj);
  // console.log('위치:',bcrVal,CRITARIA);
  if (bcrVal < CRITARIA) obj.classList.add("on");
  else obj.classList.remove("on");
}
function zimgScroll2() {
  const CRITARIA = (window.innerHeight / 5) * 2;
  let bcrVal = mFn.getBCR(obj2);
  // console.log('위치:',bcrVal,CRITARIA);
  if (bcrVal < CRITARIA) obj2.classList.add("on");
  else obj2.classList.remove("on");
}

export { zimgScroll, zimgScroll2 };
