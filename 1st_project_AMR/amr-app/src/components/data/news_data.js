// AMR PJ news data

/************************************************* 

카테고리 = key

카테고리 목록:
기업
브랜드
연구개발
사회공헌
지속가능


데이터 구조
{
    idx: "",
    category: "",
    title: "",
    date: "",
    isrc: {
      img: "",
      alt: "",
    },
    annotation: ``,
    contents: {
      isrc: "/images/news_inner/img082802.png",
      alt: "",
      figure: "",
      desc: ``,
    },
  },

*************************************************/
//////////////메인페이지
const Categories = ["전체", "기업", "브랜드", "연구개발", "사회공헌", "지속가능"]

const newsData = [
  {
    idx: "1",
    category: "브랜드",
    title: "60년 인삼 과학의 정수, 설화수 자음생 팝업스토어 진행",
    date: "2024-08-29",
    isrc: {
      img: "/images/news_thumb/news_th1.jpg",
      ait: "<설화수 자음생 팝업스토어 현장 이미지>",
    },
    annotation: `자음생 리뉴얼 출시 기념 8월 29일부터 9월 8일까지 롯데 에비뉴엘 월드타워점에서 진행^
‘진생 사이언스 월드’ 콘셉트로 설화수 인삼 과학의 힘과 헤리티지를 느끼도록 구성`,

    contents: {
      isrc: "/images/news_inner/img082802.png",
      alt: "60년 인삼 과학의 정수, 설화수 자음생 팝업스토어 진행",
      figure:
        "홀리스틱 뷰티를 대표하는 글로벌 럭셔리 스킨케어 브랜드 설화수가 ‘자음생 팝업스토어’를 선보인다",
      desc: `
  홀리스틱 뷰티를 대표하는 글로벌 럭셔리 스킨케어 브랜드 설화수가 ‘자음생 팝업스토어’를 선보인다.^

대표 스킨케어 라인 ‘자음생’의 리뉴얼 출시를 맞아 선보이는 이번 팝업스토어는 롯데 에비뉴엘 월드타워점 지하 1층 ‘더 크라운’에서 8월 29일부터 9월 8일까지 진행된다.^

설화수는 ‘진생 사이언스 월드(Ginseng Science World)’라는 콘셉트를 통해 설화수 인삼 과학의 힘과 헤리티지를 오감으로 느낄 수 있도록 이번 팝업스토어를 구성했다. 방문객들은 ‘60년 인삼 과학 존’, ‘헤리티지 존’, ‘진생 앤 제이드 핸드 마사지’, ‘지함보 존’ 등 각 공간에 마련된 콘텐츠를 통해 설화수 자음생만의 진면목을 체험할 수 있다.^

팝업스토어 입장 후 가장 먼저 만나게 되는 ‘60년 인삼 과학 존’에서는 인삼의 잠재력을 극한으로 끌어올리는 설화수만의 독자 성분 ‘진세노믹스TM’와 인삼 과학에 대한 집념으로 탄생한 ‘진생펩타이드TM’의 모든 것을 확인할 수 있다. 이어지는 ‘헤리티지 존’에서는 60년간 끊임없이 진화를 거듭한 설화수의 독보적인 인삼 과학 역사를 확인할 수 있다. 팝업스토어의 공간별 미션 스탬프를 모두 모으면 100% 당첨 확률의 럭키 드로우 기회도 제공한다.^

특히 이번 팝업스토어에서는 사전 예약 고객들에 한해 ‘진생 앤 제이드 핸드 마사지’ 서비스를 제공한다. ‘진생 앤 제이드 핸드 마사지’는 Y자 모양의 옥 어플리케이터로 다양한 지압점을 자극해 자생력을 올려주는 홀리스틱 뷰티 핸드 서비스다. 이와 함께 롯데백화점에서 단독 판매하는 자음생크림 기획 세트를 구매할 경우 설화수만의 품격 높은 지함보 서비스도 받을 수 있다.^

한편, 설화수는 지난 8월 1일부터 자음생 라인을 리뉴얼 출시해 선보이고 있다. 설화수 자음생은 1966년 ‘ABC 인삼크림’에서 시작된 60년 인삼 과학의 정수가 담긴 설화수의 대표 안티에이징 라인이다. 세대를 거듭해 발전해 온 설화수 자음생은 이번 리뉴얼을 통해 피부의 자생력을 끌어올리는 인삼 과학의 힘으로 또 한 번의 진화를 이뤄냈다. 새로워진 자음생 라인은 이번 설화수 자음생 팝업스토어를 비롯해 백화점 설화수 매장 및 설화수 플래그십스토어, 아모레몰과 네이버 브랜드 관에서도 만나볼 수 있다.`,
    },
  },
  {
    idx: "2",
    category: "기업",
    title:
      "'AI와 인류의 미래'라는 주제로 KAIST 김대식 교수, 뇌 과학자 장동선 대표 강연 진행",
    date: "2024-08-28",
    isrc: {
      img: "/images/news_thumb/news_th2.jpg",
      alt: "아모래퍼시픽 재단 로고",
    },
    annotation: `'AI와 인류의 미래'라는 주제로 KAIST 김대식 교수, 뇌 과학자 장동선 대표 강연 진행`,
    contents: {
      isrc: "/images/news_inner/img082802.png",
      alt: "원특강 ai와 인류의 미래 포스터>",
      figure: "",
      desc: `아모레퍼시픽재단이 아모레퍼시픽의 창업자이자 재단 설립자인 장원(粧源) 서성환 선대회장의 탄생 100년을 기념한 '장원 특강'을 9월 20일에 개최한다.^

서성환 선대회장은 인문학 분야 연구 장려와 확대를 위해 1973년 아모레퍼시픽재단을 설립했다. 이번 특강은 다양한 분야의 학문적 지식 전파와 인재육성의 중요성을 강조한 재단 설립자 선대회장의 뜻을 이어가고자 기획하게 되었으며, 'AI와 인류의 미래'라는 대주제로 미래 신산업 분야를 이끌 인공지능(AI)에 대한 내용으로 구성했다.^

특강은 총 2부로 진행하며, KAIST(한국과학기술원) 김대식 교수의 '생성형 인공지능에서 초지능까지?(From Gen-AI to AGI and ASI?)'와 '궁금한 뇌 연구소'의 장동선 대표가 진행하는 '뇌과학자가 바라보는 AI시대의 미래'라는 강연이다. 특강을 통해 참석자들은 미래 인공지능 사회에 필요한 창의적 사고력 함양과 최신 AI 기술 트렌드를 파악할 수 있을 것으로 기대한다.^

특강은 9월 20일(금) 19시 아모레퍼시픽 본사 2층 아모레홀에서 열리며, 일반 대중과 아모레퍼시픽그룹 구성원들을 대상으로 진행한다. 신청기간은 9월 6일까지로 누구나 무료 신청이 가능하며 참석자 전원에게는 아모레퍼시픽재단에서 준비한 소정의 기념품을 제공한다. 참가 신청 및 안내에 대한 세부내용은 아모레퍼시픽재단 인스타그램을 통해 확인할 수 있다.^

한편, 아모레퍼시픽재단은 '아시아의 美', '여성과 문화', '장원(粧源) 인문학자' 등 다양한 인문학 분야 연구지원 사업을 진행해왔으며, 9월 1일까지 새로운 연구 지원사업인 '문화와 예술' 분야 공모 접수를 진행하고 있다.`,
    },
  },
  {
    idx: "3",
    category: "브랜드",
    title: "프리메라 서포터즈 ‘크리에이티브 크루’ 1기 모집",
    date: "2024-08-28",
    isrc: {
      img: "/images/news_thumb/news_th3.jpg",
      ait: "프리페라 서포터즈 모집 포스터",
    },
    annotation: `숏폼에 자신 있다면 누구나 신청 가능! 프리메라와 함께 할 콘텐츠 크리에이터 모집^
9월 8일까지 서류 접수, 선발 시 10월부터 약 6개월간 활동`,
    contents: {
      isrc: "/images/news_inner/img082801.png",
      alt: "프리페라 서포터즈 모집 포스터",
      figure: "",
      desc: `민감 슬로우에이징 솔루션을 선사하는 파워풀 믹솔로지 브랜드 프리메라가 ‘크리에이티브 크루’ 1기를 모집한다. 8월 29일부터 9월 8일까지 공식 인스타그램 및 링커리어를 통해 참가 지원 신청을 받는다.^

프리메라 크리에이티브 크루는 프리메라에 애정을 가진 크리에이터 고객 대상으로 새롭게 진행하는 서포터즈 프로그램이다. 뷰티 마케팅에 대한 관심과 SNS 활용, 특히 숏폼 콘텐츠 제작을 즐기는 크리에이터라면 누구나 지원 가능하다. 선발된 크루는 오는 10월부터 내년 3월까지 약 6개월간 활동하며, 미공개 신제품을 먼저 체험하는 특혜가 제공된다. 이외에도 매월 제공되는 프리메라 제품으로 개성 있는 콘텐츠를 제작하고, 프리메라 팝업 스토어 방문 등 온∙오프라인 마케팅 활동에 참여할 수 있다.^

프리메라는 매월 우수 콘텐츠를 선별하여 프리메라 공식 SNS에 소개하고, 상금 혜택도 제공한다. 6개월 활동 후 최종 우수 활동자로 선정되는 인원에게 200만 원 상당의 항공권과 맥북 에어, 애플워치, 에어팟 등 푸짐한 경품을 증정할 예정이다. 희망자 1인에 한하여 프리메라 마케팅 인턴 경험을 할 수 있다.^

프리메라 브랜드 관계자는 “프리메라는 2011년부터 브랜드를 사랑하는 서포터즈 ‘프리매니아’와 함께 꾸준히 성장해왔다”며, “최근 변화하는 디지털 트렌드에 따라 새로운 모습으로 거듭난 프리메라 서포터즈 ‘크리에이티브 크루’에 많은 관심 부탁드린다”고 전했다.^

프리메라 크리에이티브 크루에 대한 자세한 내용은 프리메라 공식 인스타그램을 통해 확인할 수 있다.`,
    },
  },
  {
    idx: "4",
    category: "브랜드",
    title: "라네즈, '바운시 앤 펌' 라인 신제품 2종 출시",
    date: "2024-08-26",
    isrc: {
      img: "/images/news_thumb/news_th4.jpg",
      ait: "피오니 & 콜라겐 콤플렉스™ 담아 탄력 있는 눈가 피부, 볼륨 입술 선사",
    },
    annotation: `피오니 & 콜라겐 콤플렉스™ 담아 탄력 있는 눈가 피부, 볼륨 입술 선사`,
    contents: {
      isrc: "/images/news_inner/img082602.png",
      alt: "라네즈, '바운시 앤 펌' 라인 신제품 2종 출시",
      figure: "",
      desc: `
     새로운 스킨케어 경험을 제공하는 글로벌 뷰티 브랜드, 라네즈가 '바운시 앤 펌 아이 슬리핑 마스크(Bouncy & Firm Eye Sleeping Mask)'와 '바운시 앤 펌 립 트리트먼트(Bouncy & Firm Lip Treatment)'를 출시했다. 이번에 선보이는 신제품은 피부에 탱탱한 생기와 탄력을 주는 '바운시 앤 펌' 라인으로, 눈가와 입술 피부 관리를 도와주는 스킨케어 제품이다.^

'라네즈 바운시 앤 펌 아이 슬리핑 마스크'는 피오니 & 콜라겐 콤플렉스™와 펩타이드, 카페인 성분을 함유해 탄력 있는 눈가 피부를 만들어준다. 특히 바르는 순간 터지는 수분 캡슐 제형이 즉각적인 쿨링 효과를 주고, 한 번만 사용해도 피부 온도를 5.8℃ 낮출 수 있다. 피오니 & 콜라겐 콤플렉스™와 세라마이드 캡슐을 담은 '라네즈 바운시 앤 펌 립 트리트먼트'는 입술을 탱글하고 부드럽게 관리해 주는 제품이다.^

이번 신제품 출시를 통해 라네즈는 올해 3월 출시한 '바운시 앤 펌 페이스 슬리핑 마스크' 제품 라인업을 추가했다. 입술과 눈가를 탱탱하고 탄력 있게 가꿔주는 제품 출시를 통해, 고객들에게 슬로우 에이징 루틴을 새롭게 제시하며 피부 관리 혁신을 선도해 나갈 계획이다.^

‘지금 네 모습 그대로. STAY BOUNCY & FIRM.’을 주제로 한 글로벌 캠페인도 진행한다. 브랜드 글로벌 앰버서더 시드니 스위니와 함께 하는 캠페인을 통해, 어떤 표정에도 당당하게 있는 그대로의 모습일 수 있도록 하는, 바운시 앤 펌 라인을 제안한다. 관련 영상 및 다양한 콘텐츠는 라네즈 공식 소셜 미디어 계정을 통해 확인할 수 있다.^

매일 밤 붓기는 재우고, 탄력은 깨워주는 '바운시 앤 펌 아이 슬리핑 마스크'와, 끈적임 없이 탱글한 입술로 가꿔줄 '바운시 앤 펌 립 트리트먼트'는 오늘(26일)부터 온라인 아모레몰 기획전을 통해 특별한 혜택으로 만나볼 수 있으며, 이어 주요 온라인 몰에서도 선보일 예정이다.`,
    },
  },
  {
    idx: "5",
    category: "브랜드",
    title: "헤라, '제니'와 함께 글로벌 캠페인 전개",
    date: "2024-08-26",
    isrc: {
      img: "/images/news_thumb/news_th5.jpg",
      alt: "헤라, '제니'와 함께 글로벌 캠페인 전개",
    },
    annotation: `글로벌 앰배서더 제니와 '힘들이지 않고도 정교하게' 완성하는 메이크업 룩 전파^
블랙 쿠션, 센슈얼 누드 글로스 신제품으로 연출하는 고감도 메이크업 선보여`,
    contents: {
      isrc: "/images/news_inner/img082601.png",
      alt: "헤라, '제니'와 함께 글로벌 캠페인 전개",
      figure: "",
      desc: `
      
      아모레퍼시픽 컨템포러리 서울 뷰티 브랜드 헤라가 글로벌 앰배서더 제니와 함께 글로벌 캠페인을 전개하며 신제품을 선보인다.^

이번 캠페인을 통해 헤라의 뷰티 철학인 '힘들이지 않고도 정교하게 완성하는 고감도 컨템포러리 룩'을 전파할 예정이다. 헤라의 대표 제품인 블랙 쿠션 파운데이션과 센슈얼 누드 글로스, 센슈얼 파우더 매트 리퀴드만으로 연출하는 3가지 메이크업 룩을 선보인다.

함께 공개한 캠페인 영상에서 제니는 매력적인 3가지 메이크업 룩과 '명민하게 표현되는 나다움의 확장'이라는 메시지를 자신만의 다채롭고 당당한 에너지로 표현했 가 감각적인 영상미로 담긴 것이 특징이다.^

헤라는 이번 캠페인을 통해 브랜드 대표 제품인 블랙 쿠션 파운데이션과 립 제품을 신규 컬러로 선보인다. 국내 No.11을 넘어 해외 고객들에게도 큰 사랑을 받고 있는 블랙 쿠션의 새로운 색상인 '00P1'호는 반투명한 커버와 맑은 베이지 핑크빛 색상의 신제품이다. 블랙 쿠션의 밀착력과 지속력은 그대로 유지하면서, 피부 톤업 및 선케어 기능은 강화했다. 기존 고객은 물론 보다 화사하고 자연스러운 메이크업을 원하는 경우에도 추천할만하다.^

맑은 광택감과 생기를 부여하는 센슈얼 누드 글로스 역시 총 4가지의 신규 컬러를 출시한다. 다양한 컬러 스펙트럼으로 재정비해, 본연의 입술 색상과 은은한 글로스 제형이 어우러지는 깔끔한 메이크업부터 과감한 메이크업까지 다채로운 연출이 가능하다.^

헤라의 뷰티 철학을 담은 글로벌 캠페인은 8월 26일부터 국내와 일본, 태국에서 동시에 전개된다. 신제품은 전국 백화점 매장을 비롯해 아모레몰, 카카오 선물하기 등의 온라인 채널에서 만나볼 수 있다.^
<p className="small">1 21~23년 보떼리서치 국내 백화점, 부티크, 이커머스 경로 프레스티지 쿠션 부문 판매액 기준</p>
      `,
    },
  },
  {
    idx: "6",
    category: "브랜드",
    title: "미쟝센, 슬릭 헤어 만드는 ‘퍼펙트 매직 스트레이트’라인 출시",
    date: "2024-08-21",
    isrc: {
      img: "/images/news_thumb/news_th6.jpg",
      alt: "미쟝센, 슬릭 헤어 만드는 ‘퍼펙트 매직 스트레이트’라인 출시",
    },
    annotation: `습한 날씨에도 24시간 지속되는 스트레이트닝 효과^
곱슬거리는 모발 매끈하게 펴주고 윤기 더해`,
    contents: {
      isrc: "/images/news_inner/img082101.png",
      alt: "미쟝센, 슬릭 헤어 만드는 ‘퍼펙트 매직 스트레이트’라인 출시",
      figure: "",
      desc: `아모레퍼시픽 미쟝센이 부스스하고 엉키는 머리를 매끈하게 펴주는 ‘퍼펙트 매직 스트레이트’ 3종을 출시한다.^

곱슬거리는 모발과 잔머리를 차분하게 정돈해 슬릭한 스타일 연출을 도와주는 퍼펙트 매직 스트레이트 라인은 샴푸, 트리트먼트, 세럼으로 선보인다. 라인 전체에 미쟝센만의 오로라 광채 입자를 담아 모발의 표면을 정돈하고 반짝이는 광채를 만들어준다.^

퍼펙트 매직 스트레이트 샴푸는 모발의 습도를 케어해 부스스함을 정돈하고, 트리트먼트는 샴푸 이후 더욱 확실한 스트레이트닝 효과를 제공한다. 특히 트리트먼트는 미쟝센이 개발한 하이드로 매직 코트 기술이 적용되어 곱슬거리는 모발을 매끈하게 펴주고 쫀득한 크림 제형이 모발에 밀착해 윤기를 더한다. 스트레이트닝의 마지막 순서인 세럼은 윤기와 차분함을 더하고 펴진 머리를 오랫동안 지속시켜준다. 여름철에도 쓰기 좋은 가벼운 제형으로, 넉넉하게 발라 잔머리 세팅과 웨트 헤어 연출도 가능하다.^

습도가 높은 장마 기간이나 비오는 날 차분한 머릿결을 유지하는 데 효과적인 미쟝센 매직 스트레이트 라인은 8월 21일부터 2주간 무신사 쇼케이스를 통해 최초 선보인다. 쇼케이스 기간 동안 해당 라인 제품 2개 이상 구매 시 하트 브러쉬를 증정하는 등 다양한 프로모션을 전개한다.`,
    },
  },
  {
    idx: "7",
    category: "브랜드",
    title: "아모레퍼시픽 헤라, 태국 시장 공식 진출",
    date: "2024-08-20",
    isrc: {
      img: "/images/news_thumb/news_th7.jpg",
      alt: "아모레퍼시픽 헤라, 태국 시장 공식 진출",
    },
    annotation: `
    방콕 대표 쇼핑 중심지 위치한 백화점에 1호점 오픈하며 론칭행사 진행^
오프라인은 물론 적극적인 온라인 채널 확장으로 태국 고객 접점 확대`,
    contents: {
      isrc: "/images/news_inner/img082001.png",
      alt: "아모레퍼시픽 헤라, 태국 시장 공식 진출",
      figure: "",
      desc: `아모레퍼시픽의 컨템포러리 뷰티 브랜드 헤라가 태국 시장에 공식 진출하며 글로벌 시장을 공략을 가속화한다.^

지난 8일 헤라는 태국 방콕의 쇼핑 중심지 중 하나인 칫롬 지역의 대표 백화점 '센트럴 칫롬'에 첫 매장을 오픈했다. 오픈 당일에는 글로벌 미디어 관계자 및 인플루언서 등 200여 명이 참석한 론칭 기념행사를 진행했으며, 브랜드 소개와 대표 메이크업 룩, 뷰티 루틴을 설명하는 시간을 마련했다.^

센트럴 칫롬에서는 태국 1호 매장 오픈과 함께 브랜드 팝업 스토어 이벤트도 함께 진행했다. 방문객들은 헤라의 대표 제품을 직접 체험하고, 브랜드 소속 아티스트들이 제공하는 전문적인 메이크업 서비스와 메이크업 쇼 등 다채로운 이벤트에 참여했다.^

올해 9월에는 방콕의 초대형 쇼핑몰인 '시암 파라곤'에서도 팝업 스토어를 열어 태국 고객과의 접점을 늘리고자 한다. 또한 태국 현지 멀티 브랜드 숍인 '이브앤보이(EVEANDBOY)'를 비롯해 '세포라(SEPHORA)'의 주요 매장 입점도 계획하고 있다.^

오프라인에서 활로를 개척하는 것은 물론 온라인에서도 적극적으로 채널 확장을 추진하고 있다. 지난 7월에는 태국 대표 온라인 쇼핑 플랫폼인 라자다(Lazada)에 론칭했으며, 올해 하반기에는 쇼피(Shopee)와 틱톡 숍(Tiktok Shop)을 통해 브랜드를 선보일 예정이다.^

태국 시장에서는 브랜드를 대표하는 쿠션과 파운데이션, 립 틴트 제품을 주력으로 선보인다. 헤라의 대표 제품인 '블랙 쿠션 파운데이션'은 2017년 출시 이후 한국 쿠션 브랜드 1위 자리를 수성하고 있는 제품으로, 산뜻한 커버력과 지속력을 중요시하는 태국 고객에게 론칭부터 큰 관심을 얻고 있다. '실키 파운데이션' 역시 가벼운 텍스처와 자연스러운 광채로 보다 섬세한 피부 표현을 원하는 현지 고객을 공략하고 있다. 립 틴트 제품인 '센슈얼 파우더 매트'는 그동안 태국 시장에서 보기 힘들었던 은은한 MLBB 컬러를 포함한 다양한 컬러를 제안하며 헤라만의 메이크업 룩을 적극 알릴 예정이다.^

헤라 관계자는 "지난해 성공적인 일본 진출에 이어 이번 태국 진출을 통해 해외 시장 공략을 가속화하며 글로벌 럭셔리 메이크업 브랜드로 자리 잡고자 한다"라며 "뷰티 트렌드에 민감하면서 젊은 소비자층이 두꺼운 태국에서 헤라만이 선보일 수 있는 대표 제품들과 미적 세계관을 담은 콘텐츠를 통해 경쟁력을 강화해 나갈 것"이라고 말했다.`,
    },
  },
  {
    idx: "8",
    category: "브랜드",
    title: "비레디, 서포터즈 3기 모집",
    date: "2024-08-19",
    isrc: {
      img: "/images/news_thumb/news_th8.jpg",
      alt: "비레디, 서포터즈 3기 모집",
    },
    annotation: `
    비레디와 함께 뷰티 콘텐츠 마케팅 프로그램에 참여할 20대 남녀 모집^
이달 16일부터 25일까지 서류 접수, 선발 시 9월 말부터 약 4개월간 활동`,
    contents: {
      isrc: "/images/news_inner/img081901.png",
      alt: "비레디, 서포터즈 3기 모집",
      figure: "",
      desc: `아모레퍼시픽의 남성 토탈 스타일링 브랜드 '비레디(B.READY)'가 이달 16일부터 25일까지 ‘비레디 서포터즈’ 3기를 비레디 공식 인스타그램과 링커리어를 통해 모집한다.^

‘비레디 서포터즈’는 뷰티와 콘텐츠 마케팅에 관심이 있고, SNS 활용에 능숙한 20대 남녀라면 누구나 지원 가능하다. ‘비레디 서포터즈’ 3기로 선발되면 오는 9월 말부터 내년 1월 말까지 약 4개월간 활동하며, 매월 제공되는 비레디 제품으로 뷰티 콘텐츠를 제작하는 마케팅 프로그램에 참여하게 된다.^

비레디는 브랜드 담당자와의 커뮤니케이션 기회, 아모레퍼시픽 본사 투어 등으로 브랜드 서포터즈로서의 소속감과 자부심을 더욱 높일 수 있도록 했다. 또한 우수 콘텐츠로 선정되면 비레디 공식 인스타그램에 게재되며, 활동 수료 시 인증서와 상금 혜택을 제공한다.^

비레디 관계자는 “서포터즈 1기보다 2기 지원자가 두 배 이상 늘어나며 점점 더 많은 관심을 받고 있다”라며, “이번 3기 활동도 재미있고 열정적으로 할 수 있도록 물심양면으로 지원할 예정”이라고 전했다.^

한편, 2019년 맨즈 메이크업 브랜드로 출범한 비레디는 현재 젠더 뉴트럴 스킨케어 라인도 론칭하며 토탈 스타일링 브랜드로 입지를 다져나가고 있다.

`,
    },
  },
  {
    idx: "9",
    category: "기업",
    title: "아모레퍼시픽, ‘2024 레드닷 디자인 어워드’ 3개 본상 수상",
    date: "2024-08-08",
    isrc: {
      img: "/images/news_thumb/news_th9.jpg",
      alt: "아모레퍼시픽, ‘2024 레드닷 디자인 어워드’ 3개 본상 수상",
    },
    annotation: `
    ‘아리따 글꼴 전시’, ‘북촌 조향사의 집’ 공간 커뮤니케이션 영역 수상^
‘에이피 뷰티의 프라임 리저브 라인’ 패키징 디자인 영역 수상
    `,
    contents: {
      isrc: "/images/news_inner/img080801.png",
      alt: "아모레퍼시픽, ‘2024 레드닷 디자인 어워드’ 3개 본상 수상",
      figure: "(좌측부터) '아리따 글꼴 전시', '북촌 조향사의 집’, ‘에이피 뷰티의 프라임 리저브 라인’",
      desc: `아모레퍼시픽이 ‘2024 레드닷 디자인 어워드(Red Dot Design Award)’ 브랜드&커뮤니케이션 부문에서 3개의 본상을 수상했다. 공간 커뮤니케이션 영역에서 ‘아리따 글꼴 전시’와 ‘북촌 조향사의 집’, 패키징 디자인 영역에서 ‘에이피 뷰티(AP BEAUTY)의 프라임 리저브(PRIME RESERVE) 라인’이 각각 수상했다.^

공간 커뮤니케이션 영역에서 본상을 수상한 ‘아리따 글꼴 전시’는 아모레퍼시픽의 글꼴에 대한 끊임없는 관심과 문화 사업에 관한 이야기를 풀어낸 전시다. 글꼴 ‘아리따’ 제작 과정을 담은 디자이너 7인의 인터뷰 영상을 통해 글꼴 개발 비하인드 스토리를 엿볼 수 있고, 전시장에서는 외국인도 쉽게 참여할 수 있는 다양한 체험 프로그램을 통해 흥미롭게 풀어냈다고 평가받았다.^

‘북촌 조향사의 집’은 아모레퍼시픽이 간직해온 향 헤리티지와 진정성 있는 연구 여정을 다양한 콘텐츠로 선보인 전시다. 1960년대에 지어진 양옥집을 개조한 공간으로, 조향사의 연구 공간을 직접 경험해 보고 아모레퍼시픽이 연구해온 향 원료를 연도별로 소개해 70여 년의 연구 여정을 들여다볼 수 있다. 실제 연구소와 공장에서 사용했던 집기를 활용하고 다양한 경험 요소를 담아낸 공간으로 구현했다.^

패키징 디자인 영역에서 본상을 수상한 ‘에이피 뷰티의 프라임 리저브 라인’은 고효능 하이엔드 스킨케어 브랜드 ‘에이피 뷰티’의 토탈 안티에이징 컬렉션이다. 피부 깊숙이 침투해 피부를 투명하게 하는 ‘리퀴드 다이아몬드(LIQUID DIAMOND)’ 포뮬러를 메인 디자인 콘셉트로, 패키징에 시각화하는 작업을 진행했다. 블랙과 골드를 주조색으로 ‘블랙 다이아몬드’를 담아낸 캡이 특징이며, 캡과 용기를 결합했을 때 완성되는 블랙 물방울은 ‘리퀴드 다이아몬드’의 정수를 형상화했다.^

한편, 레드닷 디자인 어워드는 독일 노르트하임 베스트팔렌 디자인 센터가 주관하며, 독일 iF 디자인 어워드, 미국 IDEA 디자인 어워드와 함께 세계 3대 디자인 대회로 꼽힌다.`,
    },
  },
  {
    idx: "10",
    category: "브랜드",
    title: "오설록, ‘오리지널 콤부차’ 출시",
    date: "2024-08-07",
    isrc: {
      img: "/images/news_thumb/news_th10.jpg",
      alt: "2024-08-07",
    },
    annotation: `오크 숙성으로 강한 발효 풍미 느낄 수 있는 리얼 콤부차^
첨가물 없는 자연 발효로 콤부 본연의 맛 추구하는 마니아층 타깃`,
    contents: {
      isrc: "/images/news_inner/img080701.png",
      alt: "오설록, ‘오리지널 콤부차’ 출시",
      figure: "",
      desc: `대한민국 대표 럭셔리 티(Tea) 브랜드 오설록이 오크 숙성으로 콤부의 진한 풍미를 선사하는 ‘오리지널 콤부차’를 출시한다.^

오설록 오리지널 콤부차는 첨가물 없이 자연 발효와 숙성으로 만든 풍부한 과일 발효 향미가 특징이다. 여기에 오크의 은은한 향과 깊은 바디감을 더해 콤부차 본연의 맛을 추구하는 마니아층까지 사로잡는 상품성을 갖췄다. 또한 당과 산미의 최적의 조화로 강한 발효 향미와 탄산감을 느낄 수 있어 내추럴 와인이나 탄산음료를 대체하기에도 좋다. 맛과 건강, 편리함을 추구하는 MZ세대는 물론 온 가족이 다양한 음식을 곁들여 가뿐하고 청량하게 즐길 수 있다.^

녹차, 홍차 등에 유익균을 넣어 발효해 상큼한 산미와 톡톡 튀는 탄산이 매력적인 콤부차는 세계적으로 각광받는 인기 건강 음료다. 오설록은 제주 녹차 유래의 유산균으로 만든 '오설록 스코비'를 콤부차 라인의 모든 제품에 적용하고, 찻잎과 효모를 배합해 발효액을 제조한다. 신제품 오리지널 콤부차는 최적 산미의 발효액을 오크 숙성시켜 한층 더 깊은 풍미를 담았다.^

오설록 오리지널 콤부차는 오설록 제주 티뮤지엄과 티하우스, 오설록몰과 온라인 쇼핑몰 등 오설록 온·오프라인 전 경로에서 만나볼 수 있다.`,
    },
  },
  {
    idx: "11",
    category: "브랜드",
    title: "라네즈, 네오 톤업 피니시 파우더 출시",
    date: "2024-08-02",
    isrc: {
      img: "/images/news_thumb/news_th11.jpg",
      alt: "라네즈, 네오 톤업 피니시 파우더 출시",
    },
    annotation: `화사하게 톤업된 피부 하루종일 유지해 주는 피니시 파우더`,
    contents: {
      isrc: "/images/news_inner/img080201.png",
      alt: "라네즈, 네오 톤업 피니시 파우더 출시",
      figure: "",
      desc: `글로벌 뷰티 브랜드 라네즈가 신제품 '네오 톤업 피니시 파우더'를 출시했다. 피부톤을 화사하게 보정해 주는 초미세 바이올렛 파우더와 스킨케어 성분을 담아, 건조함 없이 하루 종일 완벽하게 톤업된 피부를 유지할 수 있게 해주는 메이크업 제품이다.^

'네오 톤업 피니시 파우더'에는 라네즈만의 톤업 기술을 집약한 '퓨어 바이올렛 초미세 파우더'를 담았다. 피부톤 주파수 연구 기술을 적용한 바이올렛 파우더는 바르는 즉시 피부의 노란색 톤을 커버해 주고, 24시간 피부를 화사하게 유지해 준다. 또한 피부 모공과 요철을 자연스럽게 커버해 매끄럽게 화장을 마무리할 수 있다.^

아사이베리 추출물, 히알루론산, 솔잎 추출물 등 보습과 진정을 돕는 스킨케어 성분도 함유해 속건조 없이 메이크업을 산뜻하게 유지할 수 있다. 제품 용기는 간편하게 휴대할 수 있는 콤팩트 타입으로 개발했는데, 특허 출원한 실리콘 칼집 리필망을 적용해 가루 날림이 적으면서 사용량 조절도 쉽다.^

'네오 쿠션', '네오 파운데이션' 및 작년 출시한 '네오 에센셜 피니쉬 파우더' 등 라네즈 네오 메이크업 라인 제품이며, 네오 쿠션 용기와 리필제품을 서로 호환해 사용할 수 있다.^

하루 종일 뽀얗고 환하게 피부를 밝혀주는 신제품 라네즈 네오 톤업 파우더는 올리브영 온·오프라인 경로에서 만날 수 있다. 신제품 출시 기념으로 8월 한 달간 특별한 고객 혜택도 제공한다.`,
    },
  },
  {
    idx: "12",
    category: "브랜드",
    title: "프리메라, ‘비타티놀 세럼 메가-샷 겔 마스크’ 출시",
    date: "2024-08-01",
    isrc: {
      img: "/images/news_thumb/news_th12.jpg",
      alt: "프리메라, ‘비타티놀 세럼 메가-샷 겔 마스크’ 출시",
    },
    annotation: `세럼 한 병의 유효성분을 겔 마스크 한 장에 담아 피부 투명도와 모공 고민 해결^
리포좀 캡슐 공법으로 고함량 유효성분이 피부 깊숙이 도달하여 속광 피부 완성`,
    contents: {
      isrc: "/images/news_innerimg080101.png",
      alt: "프리메라, ‘비타티놀 세럼 메가-샷 겔 마스크’ 출시",
      figure: "",
      desc: `씨드 테크 기반의 피부 장벽 솔루션 브랜드 프리메라가 '비타티놀 세럼 메가-샷 겔 마스크'를 출시한다.^

이번 신제품은 프리메라의 대표 슬로우에이징 세럼인 '유스 래디언스 비타티놀 세럼' 한 병에 담긴 유효성분을 마스크 한 장에 그대로 담은 고함량 캡슐-겔 마스크팩이다.^

'비타티놀'은 안티에이징의 대표 성분인 '레티놀'과 항산화에 탁월한 '비타민C' 성분을 조합한 것으로 피부 투명도와 모공 고민 해결에 효과적이다. 이러한 비타티놀 세럼의 효능을 겔 마스크로 더욱 빠르게 경험할 수 있다.^

비타티놀 33,000ppm이 함유된 세럼 한 병의 유효성분을 그대로 담아 피부 속에서부터 빛나는 속광 피부를 선사하고, 비타민 캡슐을 넣어 리포좀화 시킨 유효성분이 피부 온도에 반응하면서 서서히 피부에 흡수되는 것을 확인할 수 있다. 미백, 주름개선 2중 기능성 화장품으로 피부 1차 자극 테스트를 완료해 효능은 극대화하고 자극을 줄인 것이 특징이다.^

세안 후 토너로 피부 결을 정돈한 후 상, 하로 분리된 마스크팩을 부착하고 30분 혹은 1시간 후 떼어내 남은 내용물을 두드려 흡수시키면 된다. 피부 컨디션 및 필요에 따라 수면팩으로도 사용 가능하다.^

신제품 '비타티놀 세럼 메가-샷 겔 마스크'는 1입과 5입으로 선보이며, 전국 올리브영 온·오프라인 매장을 시작으로 네이버 브랜드 스토어, 아모레몰 등에서 순차적으로 판매 예정이다.`,
    },
  },
  {
    idx: "13",
    category: "브랜드",
    title: "설화수 대표 안티에이징 라인 ‘자음생’ 리뉴얼 출시",
    date: "2024-07-31",
    isrc: {
      img: "/images/news_thumb/news_th13.jpg",
      alt: "",
    },
    annotation: `
    피부 자생력 끌어올리고 고밀도 피부 선사하는 60년 인삼 과학의 정수 담아 재탄생^
독보적인 ‘진세노믹스TM’와 ‘진생펩타이드TM’ 성분 담은 대표 제품 ‘자음생크림’ 변화 돋보여
    `,
    contents: {
      isrc: "/images/news_inner/img073101.png",
      alt: "<설화수 New 자음생크림 연출 이미지>",
      figure: "<설화수 New 자음생크림 연출 이미지>",
      desc: `
      홀리스틱 뷰티를 대표하는 글로벌 럭셔리 스킨케어 브랜드 설화수가 ‘자음생 라인’을 리뉴얼 출시한다.^

설화수 자음생은 1966년 ‘ABC 인삼크림’에서 시작된 60년 인삼 과학의 정수가 담긴 설화수의 대표 안티에이징 라인이다. 세대를 거듭해 발전해 온 설화수 자음생은 이번 리뉴얼을 통해 피부의 자생력을 끌어올리는 인삼 과학의 힘으로 또 한 번의 진화를 이뤄냈다.^

무엇보다 ‘자음생크림’의 변화가 돋보인다. 자음생크림은 럭셔리 안티에이징 크림 부문 10년 연속 1위1에 빛나는 자음생 라인의 대표 핵심 제품이다. 설화수는 특정 인삼 사포닌이 피부를 활성화한다는 실험 결과를 계기로 피부 노화 징후 개선에 도움을 주는 인삼 성분을 지속해서 연구해왔다. 그 결과, 설화수만의 독자 성분인 ‘진세노믹스TM’에 인삼 과학의 집념으로 탄생한 ‘진생펩타이드TM’를 더해 피부 자생력을 극대화하는 새로운 자음생크림을 선보이게 된 것이다.^

‘진세노믹스TM’는 18개의 피부 노화 신호를 케어하는 핵심 안티에이징 성분이다. 이는 인삼 1,000g에서 단 1g만 추출되는 희귀 인삼 사포닌을 6,000배 증폭해 만들어지는 것으로, 단 48시간 안에 콜라겐을 복구해 고밀도 피부를 선사한다. ‘진생펩타이드TM’는 인삼 고유의 성분에서 분리 추출한 펩타이드와 5가지 멀티 펩타이드의 결합체다. 강력한 콜라겐 손실 방어 효과로 피부 탄력 인자를 강화한다. 이렇게 인삼의 잠재력을 극한으로 끌어내는 두 성분이 결합해 재탄생한 설화수 자음생크림은 사용자에게 피부 속부터 촘촘히 채워 올린 고밀도 피부를 선사한다.^

새로운 자음생크림은 질감의 차이에 따라 ‘자음생크림’과 ‘자음생크림 리치’로 나뉜다. 두 제품 모두 탄력, 주름, 보습 개선에 탁월한 효과를 나타내며, 선호하는 질감과 사용 목적에 따라 취사 선택할 수 있다. 자음생크림은 빠른 흡수력과 피부 보습 막을 채우는 고급스러운 질감으로 촉촉하고 산뜻하게 밀착된다. 자음생크림 리치는 묵직한 영양감의 고밀도 질감으로 피부 방어력을 높여준다.^

새로운 설화수 자음생 라인의 ‘자음생크림’, ‘자음생 크림 리치’, ‘자음생 캡슐세럼’, ‘자음생 아이크림’, ‘자음생수’, ‘자음생유액’은 8월 1일 롯데백화점에서 사전 출시되며, 8월 12일부터 전국 설화수 매장 및 설화수 플래그십 스토어, 아모레몰과 네이버 브랜드 관에서 공식 출시된다.
<p className="small">1 2015년~2024년 1분기 누계 Beaute Research 한국 매출 기준</p>
`,
    },
  },
  {
    idx: "14",
    category: "기업",
    title: "아모레퍼시픽그룹, ‘아마존 프라임 데이’ 1~3위 싹쓸이",
    date: "2024-07-24",
    isrc: {
      img: "/images/news_thumb/news_th14.jpg",
      alt: "아모레퍼시픽그룹, ‘아마존 프라임 데이’ 1~3위 싹쓸이",
    },
    annotation: `코스알엑스, 라네즈 대표 제품 ‘뷰티&퍼스널 케어’ 부문 1위ㆍ2위ㆍ3위 기록^
다양한 시도를 통해 지속적으로 글로벌 성장 동력을 확보해 나갈 것`,
    contents: {
      isrc: "/images/news_inner/img072401.png",
      alt: "아모레퍼시픽그룹, ‘아마존 프라임 데이’ 1~3위 싹쓸이",
      figure: "",
      desc: `아모레퍼시픽그룹이 세계 최대 전자상거래 업체 아마존의 온라인 쇼핑 행사, '아마존 프라임 데이(Amazon Prime Day)'에 참가해 뷰티&퍼스널 케어(Beauty&Personal Care) 부문 전체 1~3위(판매 수량 기준)를 차지하며 역대 최대 성과를 기록했다.^

'프라임 데이'는 아마존 유료 서비스 회원을 대상으로 열리는 연중 최대 할인 행사로 올해는 7월 16~17일 이틀간 진행됐다. 코스알엑스, 라네즈, 에스트라 등 아모레퍼시픽그룹의 글로벌 브랜드가 대표 제품을 구성해 행사에 참가했다.^

아모레퍼시픽그룹은 이번 ‘아마존 프라임 데이'에서 뷰티&퍼스널 케어 부문 전체 랭킹 1~3위를 싹쓸이하는 기록을 세웠다. 코스알엑스의 대표 제품인 '어드벤스드 스네일 96 뮤신 파워 에센스(Advanced Snail 96 Mucin Power Essence)'가 랭킹 1위를 차지했고, 라네즈의 대표 제품 ‘립 글로이 밤-베리향(Lip Glowy Balm-Berry)’과 ‘립 슬리핑 마스크-베리향(Lip Sleeping Mask-Berry)’이 2위와 3위로 집계되며 뒤를 이었다. 특히 라네즈 ‘립 글로이 밤-베리향'은 행사를 위해 준비한 제품이 전량 매진되며 글로벌 시장에서의 브랜드 인기를 실감할 수 있었다.^

이밖에도 에스트라 '아토베리어365 크림(ATOBARRIER365 Cream)' 제품은 페이셜 크림&모이스처(Facial Cream&Moisturizers) 랭킹 2위를 기록하고, '미쟝센 퍼펙트 세럼(Mise En Scene Perfect Serum)'은 헤어 세럼(Hair Serums) 랭킹 1위를 차지하는 등 아모레퍼시픽그룹 글로벌 대표 브랜드의 성과도 함께 확인할 수 있었다.^

아모레퍼시픽 아마존 채널 담당자는 "아마존 채널에서 스킨케어, 메이크업 제품 구매 고객이 늘어나며 뷰티&퍼스널 케어 카테고리의 성장이 가속화되고 있다"라며, "AI를 활용한 마케팅 활동 강화, 검색 키워드 최적화 등을 통해 앞으로도 글로벌 고객 접점을 확대하고, 고객 니즈를 충족하는 브랜드와 제품을 지속적으로 선보여 나갈 것이다"라고 전했습니다.^

한편, 아모레퍼시픽그룹은 지난 2002년 북미 시장에 공식 진출한 이래 주요 글로벌 브랜드들을 중심으로 기업 명성을 공고하게 구축해왔다. 작년에는 코스알엑스를 자회사로 편입하며 변화하는 시장 환경에 맞춰 브랜드 경쟁력을 강화해 북미 시장 매출의 고성장세를 이어나가고 있다.`,
    },
  },
  {
    idx: "15",
    category: "브랜드",
    title: "미쟝센, 간편 새치 염모제 ‘쉽고 빠른 거품 염색’ 업그레이드 출시",
    date: "2024-07-22",
    isrc: {
      img: "/images/news_thumb/news_th15.jpg",
      alt: "미쟝센, 간편 새치 염모제 ‘쉽고 빠른 거품 염색’ 업그레이드 출시",
    },
    annotation: `
    샴푸하듯 쓱쓱 10분 이내 완성하는 초간편 새치 염색^
에어로졸 방식으로 섞지 않고 빠르게 사용해
    `,
    contents: {
      isrc: "/images/news_inner/img072201.png",
      alt: "미쟝센, 간편 새치 염모제 ‘쉽고 빠른 거품 염색’ 업그레이드 출시",
      figure: "",
      desc: `아모레퍼시픽 미쟝센이 새치 커버 전용 거품 염모제 ‘쉽고 빠른 거품 염색’을 업그레이드 출시했다.^

‘쉽고 빠른 거품 염색’은 원터치 에어로졸 용기에서 1제와 2제가 동시에 나와 섞을 필요 없이 바로 염색을 시작할 수 있다. 용기에서 나오는 거품으로 샴푸하듯 쓱쓱 바르면 10분 안에 새치를 완벽하게 커버해 준다. 한층 더 쫀쫀해진 무스 제형 거품이 발림성과 염모 성분의 밀착력을 높여 염색 도중 제품이 흘러내릴 걱정 없이 더욱 선명한 컬러 발색을 경험할 수 있다. 무향, 무암모니아로 집에서 자극적인 냄새 없이 셀프 염색을 할 수 있고, 사용 후 잔여량은 용기에 그대로 보관해 다음 염색에도 사용 가능하다.^

2011년 첫 선을 보인 미쟝센 ‘쉽고 빠른 거품 염색’은 지난 6월, 누적 판매량 3천2백만 개를 돌파하며 대한민국 대표 거품 새치 염모제로서의 입지를 공고히 했다. 한편, 지난 20일에 방영된 KBS 2TV ‘살림하는 남자들 시즌2’에서는 ‘쉽고 빠른 거품 염색’으로 집에서 처음 셀프 염색에 도전하는 이민우의 모습이 그려졌다. 빠르게 염색을 마친 후 이민우는 컬러 발색과 완벽한 새치 커버에 만족했고, 깔끔하게 달라진 모습으로 등장하며 출연진들의 감탄을 자아냈다.^

새롭게 선보이는 미쟝센 ‘쉽고 빠른 거품 염색’ 라인은 흑색, 흑갈색, 짙은 갈색, 갈색, 밝은 갈색 등 총 5가지 컬러로 구성되며, 전국 대형 마트와 올리브영, 온라인에서 구매 가능하다.`,
    },
  },
];

export {newsData, Categories};
