//index JS영역

let aa = document.querySelectorAll('.sbili a');
let bb = document.querySelector('.bslider ul');
aa.forEach((ele,idx)=>{
  ele.onclick=(e)=>{
    e.preventDefault();
    bb.style.left = (-100*idx)+"%";
    bb.style.transition = '.6s';
  }
})

/* 썸네일 리스트 */
let arrow = document.querySelectorAll('.nlist span');
let thumblist = document.querySelector('.nlist ul');
arrow.forEach((ele,idx)=>{
  ele.onclick=(e)=>{
    e.preventDefault();
    thumblist.style.left = (-100*idx)+"%";
    thumblist.style.transition = '.6s';
  }
})