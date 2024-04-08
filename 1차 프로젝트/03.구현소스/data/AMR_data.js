///////제품 리스트
const pdData ={
    설화수진설크림:
    { img: "./images/pd_img01.png",
    bland:"설화수",
    name:"진설크림 THE ULTIMATE S CREAM",
    price:"520,000",},

    컬러밤:
    {img: "./images/pd_img04.png",
    bland:"마몽드",
    name:"크리미틴트 컬러밤 쉬폰 2.5G",
    price:"9,800",},

    달빛유자:
    {img: "./images/pd_img03.png",
    bland:"한율",
    name:"달빛유자 수면팩 70ML",
    price:"30,600",},

    링클코렉터:
    {img: "./images/pd_img02.png",
    bland:"아이오페",
    name:"레티놀 엑스퍼트 0.3% 링클 코렉터 20ML",
    price:"112,500",},



    인텐시브크림:
    { img: "./images/pd_img05.png",
    bland:"라네즈",
    name:"워터뱅크 블루 히알루로닉 인텐시브 크림",
    price:"33,600",},
    에멀전:

    { img: "./images/pd_img06.png",
    bland:"라네즈",
    name:"워터뱅크 블루 히알루로닉 에멀젼 중‧건성용",
    price:"29,400",},
  }


  //슬라이드 내용
  const sdData = [

    {idx: 1,
    title: "New Beauty",
    text: `아모레퍼시픽은 고객 한 사람 한 사람이 뉴 뷰티로 영감받아 자신만의 아름다움을 발션하고, 건강하고 만족스러운 삶을 실현할 수 있도록 합니다.`,
    bgName: "sd01"
    },
    {idx: 2,
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

  
/* 내보내기 */
export {sdData, pdData};