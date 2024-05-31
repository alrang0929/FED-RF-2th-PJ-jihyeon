///메뉴 카테고리 데이터

const gnbData = {
    "SHOP":{
        "mainmenu": "SHOP",
        "submenu":["All", "Face", "Body", "Hand", "Home Fragrance", "Gift", "Acc",],
    },
    "INSIDE":{
        "mainmenu": "INSIDE",
        "submenu":[
            "Brand",
            "Episode",
        ],
    },
    "TASTE":{
        "mainmenu": "TASTE",
        "submenu":[
            "none",
        ],
    },
    "BENEFIT":{
        "mainmenu": "BENEFIT",
        "submenu":[
            "Promotion",
            "Membership",
        ],
    },
    "LOGIN":{
        "mainmenu": "LOGIN",
        "submenu":[
            "none",
        ],
    },
    "NOTICE":{
        "mainmenu": "NOTICE",
        "submenu":[
            "공지사항",
            "Review",
            "Q&A",
            "FAQ",
        ],
    },
}//////gnbdata///////////////////////////
const rollbanData = [
    {
        idx:"1",
        // link:"",
        text:`회원가입 즉시 무료 배송 & 웰컴 쿠폰 5종 증정`,
    },
    {
        idx:"2",
        // link:"",
        text:`슬밋 카카오톡 친구 추가하고 솔세럼 3천원에 구매하기`,
    },
    {
        idx:"3",
        // link:"",
        text:`전제품 구매시 핸드크림 샘플 3종 + 핸드겔 파우치`,
    },
]

/////////export area///////////////////////////////////////
export default {gnbData,rollbanData};


