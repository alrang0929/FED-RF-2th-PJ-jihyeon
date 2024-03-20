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


/* 리스트 박스 */
const nlist = document.querySelector('.nlist')

/* 리스트 내용물*/
const nimg = document.querySelectorAll('.product-main a')


//뒤로가기 화살표
const prevBtn = document.querySelector('#prevBtn')

//다음이동 화살표
const nextBtn = document.querySelector('#nextBtn')

/* 1페이지에 보이는 이미지 수? */
let counter = 4;

/* 리스트 이미지로 가로값 지정 */
const size = nimg[0].clientWidth;
nimg.style.transform = 'translateX(' + (-size * counter) + 'px)';