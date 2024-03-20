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

/* 카운터 값(=클릭 시 이동하는 이미지 수?) 설정*/
let counter = 1;

/* 리스트 이미지로 가로값 지정 */
const size = nimg[0].clientWidth;
nimg.style.transform = 'translateX(' + (-size * counter) + 'px)';

//////이동버튼설정///////////////////////////////////////

//머.. 넥스트 버튼을 클릭하면 이벤트를 추가 실행.. 
nextBtn.addEventListener('click', ()=>{

  //카운터 보다 크거나 같으면 이미지 갯수 -1 만큼 머..???
  if(counter >= nimg.length -1) return;

  //리스트박스 애니메이션
  nlist.style.transition = "transform .4s ease-in-out";
  
  counter++;
  nlist.style.transform = 'translateX(' + (-size * counter) + 'px)';

  //'translateX(' + (-size * counter) + 'px)'은 무엇..???
});/////////////////////////nextBtn 이벤트 설정 ///////////////////////////
/////////////////////////////////////////////////////////////////////////

prevBtn.addEventListener('click',()=>{
  if(counter <= 0) return;

  //리스트박스 애니메이션
  nlist.style.transition = "transform .4s ease-in-out";
  
  counter--;
  nlist.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
