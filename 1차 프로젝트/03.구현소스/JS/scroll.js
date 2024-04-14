import mFn from "./my_function.js";


function zimgScroll(){
    const obj = mFn.qs('.sdbx03')

    const CRITARIA = window.innerHeight / 3*2;
    function addOn(){//obj=대상요소
      let bcrVal = myFn.getBCR(obj);
      if (bcrVal< CRITARIA) obj.classList.add('on');
      else obj.classList.remove('on');
    
    }///////addOn함수////////////////};
}

export {zimgScroll,}