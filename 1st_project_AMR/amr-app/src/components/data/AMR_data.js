//////////////메인페이지

///////제품 리스트
const pdData =[
    { 
      idx:1,
      brand:"설화수",
      name:"진설크림 THE ULTIMATE S CREAM",
      price:"520000",
      isrc: "/images/pd_img01.png",
  },
  {
    idx:2,
    brand:"아이오페",
    name:"레티놀 엑스퍼트 0.3% 링클 코렉터 20ML",
    price:"112500",
    isrc: "/images/pd_img02.png",
},
 
    {
      idx:3,
      brand:"한율",
      name:"달빛유자 수면팩 70ML",
      price:"30600",
      isrc: "/images/pd_img03.png",
  },

  {
    idx:4,
    brand:"마몽드",
    name:"크리미틴트 컬러밤 쉬폰 2.5G",
    price:"9800",
    isrc: "/images/pd_img04.png",
},
  


    { 
      idx:5,
      brand:"라네즈",
      name:"워터뱅크 블루 히알루로닉 인텐시브 크림",
      price:"33600",
      isrc: "/images/pd_img05.png",
  },

    { 
      idx:6,
      brand:"라네즈",
      name:"워터뱅크 블루 히알루로닉 에멀젼 중‧건성용",
      price:"29400",
      isrc: "/images/pd_img06.png",
  },
]
const brandList = [
{
  idx: 1,
  title:"iope",
  text:`아이오페는 피부부터 소재, 기술까지 모든 과정에 걸쳐
  심도 있는 연구를 합니다. 깊이 있는 피부 연구를 통해
  고객의 피부를 정확하게 진단하고, 차별화된 기술력을
  통해 고효능의 성분을 안전하고 효과적으로 피부에
  전달합니다.`,
  isrc:{
    bg:"/images/brand_bg_iope.jpg",
    thumb:"/images/brand_thm_iope.jpg",
    button: "/images/bi_iope.png",
  },
},
{
  idx: 2,
  title:"hanyul",
  text:`한율은 피부가 건강하게 빛나는 한국 여성의 스킨케어 비법을 전파하는 브랜드 입니다.
  매일 꾸준히 피부와 마음의 ‘비움’과 ‘채움’ 균형을 찾아 관리한 것이 본연의 피부 그 자체로 좋아보이는 한국 여성의 ‘K-glass Skin’의 비결이라고 한율은 생각합니다.`,
  isrc:{
    bg:"/images/brand_bg_hanyul.jpg",
    thumb:"/images/brand_thm_hanyul.jpg",
    button: "/images/bi_hanyul.png",
  },
},
{
  idx: 3,
  title:"laneige",
  text:`자신의 피부가 가진 건강함을 되찾을 수 있도록 라네즈는 오늘도 당신의 피부를 위한 최적의 솔루션을 찾기 위해 분석하고 연구합니다.^

  라네즈가 선사하는 피부 솔루션으로 피부 본연의 건강한 빛을 되찾고 더 나아가 스스로를 믿고 자신감을 가지고 나아가세요.
  ^
  
  라네즈와 함께라면 언제나 빛나고 아름다울 거에요.^
  FEEL the GLOW with LANEIGE`,
  isrc:{
    bg:"/images/brand_bg_laneige.jpg",
    thumb:"/images/brand_thm_laneige.jpg",
    button: "/images/bi_laneige.png",
  },
},
{
  idx: 4,
  title:"mamonde",
  text:`Hyper Flora™는 꽃에서 찾은 효능 성분과 부스팅 성분을 결합하여 피부 시너지를 생성하는 스킨케어 솔루션 입니다.^

  마몽드는 고객들이 자신만의 독특한 방식으로 삶을 꽃 피울 수 있도록, 경계 없는 혁신을 바탕으로 나만의 아름다움을 만들어 나갑니다.`,
  isrc:{
    bg:"/images/brand_bg_mamonde.jpg",
    thumb:"/images/brand_thm_mamonde.jpg",
    button: "/images/bi_mamonde.png",
  },
},
{
  idx: 5,
  title:"sulwhasoo",
  text:`예술과 헤리티지 정신으로 아름다움을 창조합니다.
  ^
  우리의 고유한 헤리티지와 독자적인 피부 과학을 동력으로
  시간과 세대를 초월하는 예술 작품과도 같은 제품을 만들어 냅니다.
  ^
  세상 모든 사람들이 그들이 가진 헤리티지를 바탕으로
  자신만의 아름다움을 만들 수 있도록 영감을 불어넣을 것입니다.`,
  isrc:{
    bg:"/images/brand_bg_sulwhasoo.jpg",
    thumb:"/images/brand_thm_sulwhasoo.jpg",
    button: "/images/bi_sulwhasoo.png",
  },
},

]

  //////////////////////서브페이지 슬라이드 내용
  const sdData = [

    {idx: 0,
    title: "New Beauty",
    text: `아모레퍼시픽은 고객 한 사람 한 사람이 뉴 뷰티로 영감받아 자신만의 아름다움을 발션하고, 건강하고 만족스러운 삶을 실현할 수 있도록 합니다.`,
    bgName: "sd01"
    },
    {idx: 1,
    title: "Sustainability",
    text: `아모레퍼시픽은 자연과 사람, 사회가 조화롭게 공존하는 아름다운 세상을 만들어갑니다. 모든 구성원이 함께 더 나은 미래를 꿈꿉니다.`,
    bgName: "sd02"
    },
    {idx: 3,
    title: "Innovation",
    text: `아모레퍼시픽은 끊임없는 도전과 변함없는 열정으로 기술 혁신을 지속해나갑니다.
    첨단 기술력을 바탕으로 초개인화 뷰티 솔루션을 제공합니다.`,
    bgName: "sd03"
    },
    ]////sdData배열

const storyData = [
  {
    idx:1,
    img:"arc00",
    title:"건축",
    txt:`아모레퍼시픽의 건축은 세상에 아름다움을 전하기 위해
    노력하는 마음을 담은 공간이며, 이러한 가치가 직원들은 물론
    모든 사람들에게 그 가치를 공유하게 될 것입니다.`,
    subimg:[
      "arc01",
      "arc02",
      "arc03",
    ]},
  {
    idx:2,
    img:"acc00",
    title:"지속가능경영",
    txt:`
    고객과의 새로운 지속가능경영 약속 'A MORE Beautiful
    Promise'를 위해, 다양한 이해관계자와 포용적으로 성장하는
    사회를 만들며, 기후 위기 대응에 능동적으로 참여하고 자원
    순환성 제고를 위해 노력하겠습니다.
  `,
    subimg:[
      "acc01",
      "acc02",
      "acc03",
    ]},
  {
    idx:3,
    img:"cs00",
    title:"고객안심품질",
    txt:`
    아모레퍼시픽의 건축은 세상에 아름다움을 전하기 위해 노력하는
    마음을 담은 공간이며, 이러한 가치가 직원들은 물론 모든
    사람들에게 그 가치를 공유하게 될 것입니다.
  `,
    subimg:[
      "cs01",
      "cs02",
      "cs03",
    ]},
  {
    idx:4,
    img:"tec00",
    title:"혁신기술",
    txt:`
    ‘과학과 기술에서 우위를 확보해야 세계 선두기업으로 도약할 수
    있다’라는 70년을 이어온 창업자의 신념에서 앞으로도 전 세계
    고객에게 최초·최고의 제품을 전하기 위한 기술 혁신을 지속해나갈
    것입니다.
  `,
    subimg:[
      "tec01",
      "tec02",
      "tec03",
    ]},
]

const newsData = [
{
  idx: 1,
  date: "2024-04-12",
  img:"041201",
  title: `아모레퍼시픽, 레티놀 안정화 기술 장영실상 수상`,
},
{
  idx: 2,
  date: "2024-04-11",
  img:"041101",
  title: `바이탈뷰티, 병의원 전용 건강기능식품 2종 출시`,
},
{
  idx: 3,
  date: "2024-04-09",
  img:"040902",
  title: `해피바스, 딥클린 라인 신제품 출시`,
},
{
  idx: 4,
  date: "2024-04-09",
  img:"040901",
  title: `아모레퍼시픽, 더 샌드박스서 ‘뉴뷰티 스퀘어’ 오픈`,
},
{
  idx: 5,
  date: "2024-04-12",
  img:"040401",
  title: `설화수, ‘인삼 헤리티지’ 체험 팝업스토어 오픈`,
},
{
  idx: 6,
  date: "2024-04-03",
  img:"040301_1",
  title: `아이오페, 스킨 부스터 앰플 필 패드 출시`,
},
{
  idx: 7,
  date: "2024-04-12",
  img:"040202",
  title: `설화수, 2023년 지속가능보고서 발간`,
},
{
  idx: 8,
  date: "2024-04-02",
  img:"040201",
  title: `한율 X 이슬로 작가, 어린쑥 한정판 출시`,
},

]

const mslideData =[
  // {
  //   idx: 1,
  //   title: "New Beauty",
  //   text: `아모레퍼시픽은 고객 한 사람 한 사람이 뉴 뷰티로 영감받아 자신만의 아름다움을 발션하고, 건강하고 만족스러운 삶을 실현할 수 있도록 합니다`,
  //   source: `<video id="ifr" src="./images/main_mv01.mp4" autoplay muted playsinline ></video>`,
  // },
  {
    idx: 1,
    title: "Sustainability",
    text: `아모레퍼시픽은 자연과 사람, 사회가 조화롭게 공존하는^ 아름다운 세상을 만들어갑니다. 모든 구성원이 함께 더 나은 미래를 꿈꿉니다`,
    source: "none",
  },
  {
    idx: 2,
    title: "Innovation",
    text: `아모레퍼시픽은 끊임없는 도전과 변함없는 열정으로 기술 혁신을 지속해나갑니다.^
    첨단 기술력을 바탕으로 초개인화 뷰티 솔루션을 제공합니다.`,
    source: "none",
  },
]

  
/* 내보내기 */
export {sdData,brandList,pdData,storyData,newsData,mslideData};