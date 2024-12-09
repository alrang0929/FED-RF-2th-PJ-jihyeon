//데이터 기본 구조

const notiImg = [
  {
    id: "1",
    tit: "바디크림",
    isrc: "/images/shop/noti/noti_body.jpg",
  },
  {
    id: "2",
    tit: "본사인증",
    isrc: "/images/shop/noti/noti_citation.jpg",
  },
  {
    id: "3",
    tit: "바디크림",
    isrc: "/images/shop/noti/noti_hand.jpg",
  },
];

const options = [
  {
    id: "1",
    option: "기본옵션",
    values: [
      { value: "쇼핑백 추가", price: "2000", IsSoldOut: false },
      { value: "선물 포장", price: "1000", IsSoldOut: false },
    ],
  },
];

/* 

[이미지 셋팅시 참고]

썸네일 / thumb:
파일명: thumb_idx
파일형식: jpg
해당 파일명으로 통일하여 forEach돌려 출력

each 돌릴 시 

concat: 제이쿼리 내장함수, 배열 딥카피 가능

$.each(face, (index, product) => {
  product.img = product.img.concat(
    thumb: `/images/shop/face/face_01/thumb_${i + 1}.jpg`,
    $.map(Array(producthumbCnt), (,i) => ({
      detail: "",
    }))
  );
});

---------------------------------------------------------------

상세페이지 / detail:
파일명: detail_idx
파일형식 gif에 대응하기 위해 isrc 풀로 데이터에 삽입

*/

const product = {
  face: [
    {
      idx: 1,
      category: "face",
      engtit: "Seulmit Sol Serum 0.1",
      tit: "[한정수량] 슬밋 솔 세럼 0.1 (1인 1개 구매한정)",
      txt: `소나무의 유효성분이 가득 담겨있는 수분 앰플 제형으로 수분과 보습을 채워주고
    한결같이 피부를 건강하게 가꾸어 주는 소나무 세럼`,
      price: "7900",
      img: [
        { isrc: "/images/shop/face/face_01.jpg" },
        { isrc: "/images/shop/face/face_02.jpg" },
      ],
      thumbCnt: 4,
      notiId: [3],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/face/face_01/detail_1.jpg",
        "/images/shop/face/face_01/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 2,
      category: "face",
      engtit: "Seulmit Serum in Lip Balm 02 Tinted",
      tit: "슬밋 세럼 인 립밤 (02 틴티드)",
      txt: `건조하고 생기없는 입술에 자연스러운 핑크빛 생기를 부여하고, 비즈 왁스와
    소나무의 농축된 영양감을 채워주는 무향의 틴티드 립밤`,
      price: "5900",
      img: [
        { isrc: "/images/shop/face/face_03.jpg" },
        { isrc: "/images/shop/face/face_04.jpg" },
      ],
      thumbCnt: 6,
      notiId: [2],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/face/face_02/detail_1.jpg",
        "/images/shop/face/face_02/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
  ],
  body: [
    {
      idx: 1,
      category: "body",
      engtit: "Seulmit Sol Soop Body Set",
      tit: "슬밋 솔 숲 바디 2종 세트",
      txt: `은은한 소나무향으로 감각을 더하고, 건강하고 촉촉한 바디로 가꾸어 주는
바디 로션과 워시의 선물포장 세트`,
      price: "69000",
      img: [
        { isrc: "/images/shop/body/body_01.jpg" },
        { isrc: "/images/shop/body/body_04.jpg" },
      ],
      thumbCnt: 5,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/body/body_01/detail_1.jpg",
        "/images/shop/body/body_01/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 2,
      category: "body",
      engtit: "Seulmit Sol Soop Body Mini Kit",
      tit: "슬밋 솔 숲 바디 2종 미니 키트",
      txt: `슬밋의 시그니처 향을 담아 감각적인 바디 케어를 경험할 수 있는
바디 워시와 로션의 여행용 미니 키트`,
      price: "20000",
      img: [
        { isrc: "/images/shop/body/body_02.jpg" },
        { isrc: "/images/shop/body/body_04.jpg" },
      ],
      thumbCnt: 5,

      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/body/body_02/detail_1.jpg",
        "/images/shop/body/body_02/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 3,
      category: "body",
      engtit: "Seulmit Sol Soop Body Wash",
      tit: "슬밋 솔 숲 바디 워시 250ml",
      txt: `시그니처 소나무 향으로 감각을 더하고, 촉촉하게 수분을 채워주어
노폐물은 말끔히, 은은한 잔향을 남겨주는 바디 워시`,
      price: "21400",
      img: [
        { isrc: "/images/shop/body/body_05.jpg" },
        { isrc: "/images/shop/body/body_06.jpg" },
      ],
      thumbCnt: 7,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/body/body_03/detail_1.jpg",
        "/images/shop/body/body_03/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 4,
      category: "body",
      engtit: "Seulmit Sol Soop Body Lotion",
      tit: "슬밋 솔 숲 바디 로션 250ml",
      txt: `크리미하고 도톰한 로션 제형이 건조한 피부를 감싸 부드러운 피부결로 가꾸어 주고
소나무의 은은한 잔향을 남겨주는 바디 로션`,
      price: "23400",
      img: [
        { isrc: "/images/shop/body/body_07.jpg" },
        { isrc: "/images/shop/body/body_08.jpg" },
      ],
      thumbCnt: 8,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/body/body_04/detail_1.jpg",
        "/images/shop/body/body_04/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
  ],
  hand: [
    {
      idx: 1,
      category: "hand",
      engtit: "Seulmit Hand Cream 300ml (Soul Dawn)",
      tit: "슬밋 핸드 크림 300ml (소울 던)",
      txt: `건조한 손을 부드럽고 탄력있게 관리해 주며 깊은 보습감과
우아한 잔향을 남겨주는 대용량 퍼퓸 핸드 크림`,
      price: "33000",
      img: [
        { isrc: "/images/shop/hand/hand_01.jpg" },
        { isrc: "/images/shop/hand/hand_02.jpg" },
      ],
      thumbCnt: 3,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_01/detail_1.jpg",
        "/images/shop/hand/hand_01/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 2,
      category: "hand",
      engtit: "Seulmit Hand Cream 300ml (So Wood)",
      tit: "슬밋 핸드 크림 300ml (소 우드)",
      txt: `건조한 손을 부드럽고 탄력있게 관리해 주며 깊은 보습감과
우아한 잔향을 남겨주는 대용량 퍼퓸 핸드 크림`,
      price: "33000",
      img: [
        { isrc: "/images/shop/hand/hand_03.jpg" },
        { isrc: "/images/shop/hand/hand_04.jpg" },
      ],
      thumbCnt: 3,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_02/detail_1.jpg",
        "/images/shop/hand/hand_02/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 3,
      category: "hand",
      engtit: "Seulmit Hand Cream 300ml (Sol Soul Seoul)",
      tit: "슬밋 핸드 크림 300ml (솔 소울 서울)",
      txt: `건조한 손을 부드럽고 탄력있게 관리해 주며 깊은 보습감과
우아한 잔향을 남겨주는 대용량 퍼퓸 핸드 크림`,
      price: "33000",
      img: [
        { isrc: "/images/shop/hand/hand_05.jpg" },
        { isrc: "/images/shop/hand/hand_06.jpg" },
      ],
      thumbCnt: 3,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_03/detail_1.jpg",
        "/images/shop/hand/hand_03/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 4,
      category: "hand",
      engtit: "Seulmit Hand Cream 30ml (Soul Dawn)",
      tit: "슬밋 핸드 크림 30ml (소울 던)",
      txt: `건조한 손을 부드럽고 탄력있게 관리해 주며 깊은 보습감과
우아한 잔향을 남겨주는 퍼퓸 핸드 크림`,
      price: "13500",
      img: [
        { isrc: "/images/shop/hand/hand_07.jpg" },
        { isrc: "/images/shop/hand/hand_08.jpg" },
      ],
      thumbCnt: 6,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_04/detail_1.jpg",
        "/images/shop/hand/hand_04/detail_2.jpg",
        "/images/shop/hand/hand_04/detail_3.jpg",
        "/images/shop/hand/hand_04/detail_4.jpg",
        "/images/shop/hand/hand_04/detail_5.jpg",
        "/images/shop/hand/hand_04/detail_6.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 5,
      category: "hand",
      engtit: "Seulmit Hand Cream 30ml (So Wood)",
      tit: "슬밋 핸드 크림 30ml (소 우드)",
      txt: `건조한 손을 부드럽고 탄력있게 관리해 주며 깊은 보습감과
우아한 잔향을 남겨주는 퍼퓸 핸드 크림`,
      price: "15000",
      img: [
        { isrc: "/images/shop/hand/hand_09.jpg" },
        { isrc: "/images/shop/hand/hand_10.jpg" },
      ],
      thumbCnt: 8,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_05/detail_1.jpg",
        "/images/shop/hand/hand_05/detail_2.jpg",
        "/images/shop/hand/hand_05/detail_3.jpg",
        "/images/shop/hand/hand_05/detail_4.jpg",
        "/images/shop/hand/hand_05/detail_5.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 6,
      category: "hand",
      engtit: "Seulmit Hand Cream 30ml (Sol Soul Seoul)",
      tit: "슬밋 핸드 크림 30ml (솔 소울 서울)",
      txt: `건조한 손을 부드럽고 탄력있게 관리해 주며 깊은 보습감과
우아한 잔향을 남겨주는 퍼퓸 핸드 크림`,
      price: "13500",
      img: [
        { isrc: "/images/shop/hand/hand_11.jpg" },
        { isrc: "/images/shop/hand/hand_12.jpg" },
      ],
      thumbCnt: 7,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_06/detail_1.jpg",
        "/images/shop/hand/hand_06/detail_2.jpg",
        "/images/shop/hand/hand_06/detail_3.jpg",
        "/images/shop/hand/hand_06/detail_4.jpg",
        "/images/shop/hand/hand_06/detail_5.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 7,
      category: "hand",
      engtit: "Seulmit Hand Wash 50ml (Soul Dawn)",
      tit: "슬밋 핸드 워시 50ml (소울 던)",
      txt: `소나무추출물과 풍부한 시트러스 우디 향으로 건조함 없이 손을 청결하게 관리해 주고
감각적인 향취로 마음까지 리프레쉬 해주는 핸드워시`,
      price: "15000",
      img: [
        { isrc: "/images/shop/hand/hand_13.jpg" },
        { isrc: "/images/shop/hand/hand_14.jpg" },
      ],
      thumbCnt: 5,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_07/detail_1.jpg",
        "/images/shop/hand/hand_07/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 8,
      category: "hand",
      engtit: "Seulmit Hand Wash 50ml (So Wood)",
      tit: "슬밋 핸드 워시 50ml (소 우드)",
      txt: `소나무추출물과 풍부한 머스크 우디 향으로 건조함 없이 손을 청결하게 관리해 주고
감각적인 향취로 마음까지 리프레쉬 해주는 핸드워시`,
      price: "15000",
      img: [
        { isrc: "/images/shop/hand/hand_15.jpg" },
        { isrc: "/images/shop/hand/hand_16.jpg" },
      ],
      thumbCnt: 5,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_08/detail_1.jpg",
        "/images/shop/hand/hand_08/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 9,
      category: "hand",
      engtit: "Seulmit Hand Wash 300ml (Sol Soul Seoul)",
      tit: "슬밋 핸드 워시 300ml (솔 소울 서울)",
      txt: `소나무추출물과 풍부한 소나무 향으로 건조함 없이 손을 청결하게 관리해 주고
감각적인 향취로 마음까지 리프레쉬 해주는 대용량 핸드워시`,
      price: "33000",
      img: [
        { isrc: "/images/shop/hand/hand_17.jpg" },
        { isrc: "/images/shop/hand/hand_18.jpg" },
      ],
      thumbCnt: 4,

      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_05/detail_1.jpg",
        "/images/shop/hand/hand_05/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 10,
      category: "hand",
      engtit: "Seulmit Hand Wash 300ml (Soul Dawn)",
      tit: "슬밋 핸드 워시 300ml (소울 던)",
      txt: `소나무추출물과 청량한 시트러스 우디 향으로 건조함 없이 손을 청결하게 관리해 주고
감각적인 향취로 마음까지 리프레쉬 해주는 대용량 핸드워시`,
      price: "33000",
      img: [
        { isrc: "/images/shop/hand/hand_19.jpg" },
        { isrc: "/images/shop/hand/hand_20.jpg" },
      ],
      thumbCnt: 4,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/hand/hand_10/detail_1.jpg",
        "/images/shop/hand/hand_10/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 11,
      category: "hand",
      engtit: "Seulmit Hand Wash 300ml (So Wood)",
      tit: "슬밋 핸드 워시 300ml (소 우드)",
      txt: `소나무추출물과 풍부한 머스크 우디 향으로 건조함 없이 손을 청결하게 관리해 주고
감각적인 향취로 마음까지 리프레쉬 해주는 대용량 핸드워시`,
      price: "33000",
      img: [
        { isrc: "/images/shop/hand/hand_21.jpg" },
        { isrc: "/images/shop/hand/hand_22.jpg" },
      ],
      thumbCnt: 4,
      detail: [
        "/images/shop/hand/hand_11/detail_1.jpg",
        "/images/shop/hand/hand_11/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 12,
      category: "hand",
      engtit: "Seulmit Hand Wash Sol Soul Seoul",
      tit: "슬밋 핸드 워시 50ml (솔 소울 서울)",
      txt: `소나무추출물과 풍부한 우디 향으로 건조함 없이 손을 청결하게 관리해 주고
감각적인 향취로 마음까지 리프레쉬 해주는 핸드워시`,
      price: "15000",
      img: [
        { isrc: "/images/shop/hand/hand_23.jpg" },
        { isrc: "/images/shop/hand/hand_24.jpg" },
      ],
      thumbCnt: 5,
      detail: [
        "/images/shop/hand/hand_12/detail_1.jpg",
        "/images/shop/hand/hand_12/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
  ],
  homefragrance: [
    {
      idx: 1,
      category: "home",
      engtit: "Seulmit Deep Sleep Pillow Mist 50ml (Soul Dawn)",
      tit: "슬밋 단잠 필로우 미스트 50ml (소울 던)",
      txt: `나만의 리추얼을 완성하는 소나무 향으로 하루의 지친 몸과 마음을 가장 편안한 공간에서
수면 아래 깊이 내려놓을 수 있게 도와주는 단잠 미스트`,
      price: "16200",
      img: [
        { isrc: "/images/shop/home/home_01.jpg" },
        { isrc: "/images/shop/home/home_02.jpg" },
      ],
      thumbCnt: 2,
      detail: [
        "/images/shop/home/home_01/detail_1.jpg",
        "/images/shop/home/home_01/detail_2.gif",
        "/images/shop/home/home_01/detail_3.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 2,
      category: "home",
      engtit: "Seulmit Deep Sleep Pillow Mist 50ml (Sol Soul Seoul)",
      tit: "슬밋 단잠 필로우 미스트 50ml (솔 소울 서울)",
      txt: `나만의 리추얼을 완성하는 상쾌한 우디 향으로 하루의 지친 몸과 마음을 가장 편안한 공간에서
수면 아래 깊이 내려놓을 수 있게 도와주는 단잠 미스트`,
      price: "16200",
      img: [
        { isrc: "/images/shop/home/home_03.jpg" },
        { isrc: "/images/shop/home/home_04.jpg" },
      ],
      thumbCnt: 3,
      detail: [
        "/images/shop/home/home_02/detail_1.jpg",
        "/images/shop/home/home_02/detail_2.gif",
        "/images/shop/home/home_02/detail_3.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 3,
      category: "home",
      engtit: "Seulmit Soul Insence Stick Set",
      tit: "[SET] 슬밋 소울 인센스 스틱 3종 세트",
      txt: `은은한 우디계열의 세 가지 향으로 나만의 공간을 연출해 주어, 오롯이 나에게 집중하는
시간을 만들어 주는 한국 전통방식으로 제작된 선향 인센스 스틱`,
      price: "75000",
      img: [
        { isrc: "/images/shop/home/home_05.jpg" },
        { isrc: "/images/shop/home/home_06.jpg" },
      ],
      thumbCnt: 10,
      detail: [
        "/images/shop/home/home_03/detail_1.jpg",
        "/images/shop/home/home_03/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 4,
      category: "home",
      engtit: "Seulmit Deep Sleep Pillow Mist 125ml (Soul Dawn)",
      tit: "슬밋 단잠 필로우 미스트 125ml (소울 던)",
      txt: `나만의 리추얼을 완성하는 소나무 향으로 하루의 지친 몸과 마음을 가장 편안한 공간에서
수면 아래 깊이 내려놓을 수 있게 도와주는 단잠 미스트`,
      price: "38000",
      img: [
        { isrc: "/images/shop/home/home_07.jpg" },
        { isrc: "/images/shop/home/home_08.jpg" },
      ],
      thumbCnt: 8,
      detail: [
        "/images/shop/home/home_04/detail_1.jpg",
        "/images/shop/home/home_04/detail_2.gif",
        "/images/shop/home/home_04/detail_3.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 5,
      category: "home",
      engtit: "Seulmit Ritual Set (Deep Sleep Mist & Insense Stick)",
      tit: "[SET] 슬밋 리추얼 세트 (필로우미스트 & 인센스스틱)",
      txt: `나에게 오롯이 집중하는 시간. 내 공간을 나만의 향기로 가득 채우는
인센스 스틱과 단잠 미스트로 나만의 리추얼을 완성하세요`,
      price: "63000",
      img: [
        { isrc: "/images/shop/home/home_09.jpg" },
        { isrc: "/images/shop/home/home_10.jpg" },
      ],
      thumbCnt: 7,
      detail: [
        "/images/shop/home/home_05/detail_1.jpg",
        "/images/shop/home/home_05/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 6,
      category: "home",
      engtit: "Seulmit Soul Insence Stick (Soul Dawn)",
      tit: "슬밋 소울 인센스 스틱 (소울 던)",
      txt: `부드럽고 산뜻한 우디향으로 나만의 공간을 연출해 주어, 오롯이 나에게 집중하는 시간을
만들어 주는 한국 전통방식으로 제작된 선향 인센스 스틱`,
      price: "16200",
      img: [
        { isrc: "/images/shop/home/home_11.jpg" },
        { isrc: "/images/shop/home/home_12.jpg" },
      ],
      thumbCnt: 6,
      detail: [
        "/images/shop/home/home_06/detail_1.jpg",
        "/images/shop/home/home_06/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 7,
      category: "home",
      engtit: "Seulmit Soul Insence Stick (So Wood)",
      tit: "슬밋 소울 인센스 스틱 (소 우드)",
      txt: `깊은 우디향으로 나만의 공간을 연출해 주어, 오롯이 나에게 집중하는 시간을
만들어 주는 한국 전통방식으로 제작된 선향 인센스 스틱`,
      price: "16200",
      img: [
        { isrc: "/images/shop/home/home_13.jpg" },
        { isrc: "/images/shop/home/home_14.jpg" },
      ],
      thumbCnt: 8,
      detail: [
        "/images/shop/home/home_07/detail_1.jpg",
        "/images/shop/home/home_07/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 8,
      category: "home",
      engtit: "Seulmit Soul Insence Stick (Sol Soul Seoul)",
      tit: "슬밋 소울 인센스 스틱 (솔 소울 서울)",
      txt: `은은한 소나무향으로 나만의 공간을 연출해 주어, 오롯이 나에게 집중하는 시간을
만들어 주는 한국 전통방식으로 제작된 선향 인센스 스틱`,
      price: "16200",
      img: [
        { isrc: "/images/shop/home/home_15.jpg" },
        { isrc: "/images/shop/home/home_16.jpg" },
      ],
      thumbCnt: 9,
      detail: [
        "/images/shop/home/home_08/detail_1.jpg",
        "/images/shop/home/home_08/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 9,
      category: "home",
      engtit: "Seulmit Deep Sleep Pillow Mist Sol Soul Seoul",
      tit: "슬밋 단잠 필로우 미스트 솔 소울 서울 125ml",
      txt: `나만의 리추얼을 완성하는 상쾌한 우디 향으로 하루의 지친 몸과 마음을 가장 편안한 공간에서
수면 아래 깊이 내려놓을 수 있게 도와주는 단잠 미스트`,
      price: "38000",
      img: [
        { isrc: "/images/shop/home/home_17.jpg" },
        { isrc: "/images/shop/home/home_18.jpg" },
      ],
      thumbCnt: 8,
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      detail: [
        "/images/shop/home/home_09/detail_1.jpg",
        "/images/shop/home/home_09/detail_2.jpg",
      ],
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
  ],
  gift: [
    {
      idx: 1,
      category: "gift",
      engtit: "Seulmit Soul Insence Stick Set",
      tit: "[SET] 슬밋 소울 인센스 스틱 3종 세트",
      txt: `은은한 우디계열의 세 가지 향으로 나만의 공간을 연출해 주어, 오롯이 나에게 집중하는
시간을 만들어 주는 한국 전통방식으로 제작된 선향 인센스 스틱`,
      price: "75000",
      img: [
        { isrc: "/images/shop/gift/gift_01.jpg" },
        { isrc: "/images/shop/gift/gift_02.jpg" },
      ],
      thumbCnt: 10,
      detail: [
        "/images/shop/gift/gift_01/detail_1.jpg",
        "/images/shop/gift/gift_01/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 2,
      category: "gift",
      engtit: "Seulmit Ritual Set (Deep Sleep Mist & Insense Stick)",
      tit: "[SET] 슬밋 리추얼 세트 (필로우미스트 & 인센스스틱)",
      txt: `나에게 오롯이 집중하는 시간. 내 공간을 나만의 향기로 가득 채우는
인센스 스틱과 단잠 미스트로 나만의 리추얼을 완성하세요`,
      price: "63000",
      img: [
        { isrc: "/images/shop/gift/gift_03.jpg" },
        { isrc: "/images/shop/gift/gift_04.jpg" },
      ],
      thumbCnt: 7,
      detail: [
        "/images/shop/gift/gift_02/detail_1.jpg",
        "/images/shop/gift/gift_02/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 3,
      category: "gift",
      engtit: "Seulmit Sol Soop Body Set",
      tit: "슬밋 솔 숲 바디 2종 세트",
      txt: `은은한 소나무향으로 감각을 더하고, 건강하고 촉촉한 바디로 가꾸어 주는
바디 로션과 워시의 선물포장 세트`,
      price: "69000",
      img: [
        { isrc: "/images/shop/gift/gift_05.jpg" },
        { isrc: "/images/shop/gift/gift_06.jpg" },
      ],
      thumbCnt: 6,
      detail: [
        "/images/shop/gift/gift_03/detail_1.jpg",
        "/images/shop/gift/gift_03/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 4,
      category: "gift",
      engtit: "Seulmit Sol Soop Body Mini Kit",
      tit: "슬밋 솔 숲 바디 2종 미니 키트",
      txt: `슬밋의 시그니처 향을 담아 감각적인 바디 케어를 경험할 수 있는
바디 워시와 로션의 여행용 미니 키트`,
      price: "20000",
      img: [
        { isrc: "/images/shop/gift/gift_07.jpg" },
        { isrc: "/images/shop/gift/gift_08.jpg" },
      ],
      thumbCnt: 6,
      detail: [
        "/images/shop/gift/gift_05/detail_1.jpg",
        "/images/shop/gift/gift_05/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
  ],
  acc: [
    {
      idx: 1,
      category: "acc",
      engtit: "Seulmit Objet Gogung Edition",
      tit: "슬밋 오브제 고궁에디션",
      txt: `경복궁 근정전을 하늘에서 바라본 모습에서 영감을 받아 탄생한 슬밋 오브제 고궁 에디션으로
공간을 더울 특별하게 연출하세요`,
      price: "49000",
      img: [
        { isrc: "/images/shop/acc/acc_01.jpg" },
        { isrc: "/images/shop/acc/acc_02.jpg" },
      ],
      thumbCnt: 4,
      detail: [
        "/images/shop/acc/acc_01/detail_1.jpg",
        "/images/shop/acc/acc_01/detail_2.jpg",
      ],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 2,
      category: "acc",
      engtit: "Seulmit Shopping Bag",
      tit: "슬밋 쇼핑백",
      txt: `고마운 분께 선물할 땐, 품격있는 슬밋 쇼핑백에 담아 마음을 전하세요`,
      price: "2000",
      img: [
        { isrc: "/images/shop/acc/acc_03.jpg" },
        { isrc: "/images/shop/acc/acc_04.jpg" },
      ],
      thumbCnt: 2,
      detail: ["/images/shop/acc/acc_02/detail_1.jpg"],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 3,
      category: "acc",
      engtit: "Seulmit Soul Insense Holder (Glass Stone)",
      tit: "슬밋 소울 인센스 홀더 (글래스 스톤)",
      txt: `유리로 빚어내는 힘찬 아름다움
유리공예가 양유완 작가와 협업한 슬밋 오브제 인센스 홀더로 슬로우 오더 상품입니다`,
      price: "68000",
      img: [
        { isrc: "/images/shop/acc/acc_05.jpg" },
        { isrc: "/images/shop/acc/acc_06.jpg" },
      ],
      thumbCnt: 5,
      detail: ["/images/shop/acc/acc_03/detail_1.jpg"],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
    {
      idx: 4,
      category: "acc",
      engtit: "Seulmit Soul Insense Holder (Glass Apple)",
      tit: "슬밋 소울 인센스 홀더 (글래스 애플)",
      txt: `유리로 빚어내는 힘찬 아름다움
유리공예가 양유완 작가와 협업한 슬밋 오브제 인센스 홀더로 슬로우 오더 상품입니다`,
      price: "210000",
      img: [
        { isrc: "/images/shop/acc/acc_07.jpg" },
        { isrc: "/images/shop/acc/acc_08.jpg" },
      ],
      thumbCnt: 4,
      detail: ["/images/shop/acc/acc_04/detail_1.jpg"],
      notiId: [1],
      opId: [1], //해당 상품에 적용되는 옵션 아이디
      isSoldOut: false, // 품절 여부 ("false": 판매 중, true: 품절)
    },
  ],
};

export { product, options, notiImg };
