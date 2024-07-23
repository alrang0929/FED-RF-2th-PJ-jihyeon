import React, {  useContext, useEffect } from "react";
import { addComma } from "../func/common_fn";

//css
import "../../css/shop.scss";

//data
//ShopCustomCont 에서 props 값으로 전달받음: 옵션박스, 옵션 테이블이 데이터 공통으로 사용하기 때문
import { options } from "../data/product";
import { sCon } from "../pages/sCon";

///////////import area//////////////////////

function OptionBox({ optData, selectedOpt, setSelectedOpt }) {
    console.log("setSelectedOpt:", setSelectedOpt);
    const myCon = useContext(sCon);
    //1. optData : 데이터
    //2. selectedOpt: 전역변수, 데이터 저장 및 전달
    //3. setSelectedOpt : 전역변수, 상태 감시하다 값 변경되면 로컬에 저장

    //상태관리변수
    const [selOptData,setSelOptData] = useState([]);

    // const {localsCart, setLocalsCart} = useContext(sCon);

    const handleChange = (e) => {
        setSelectedOpt(e.target.value);
        setSelOptData((prevOpt)=> [...prevOpt, 
            // selOptData 배열에 새로운 옵션 추가
           { optName: optData.values,
            optVal: e.target.value,}
        ])
    };

    

    //화면 랜더링 구역
    useEffect(() => {
        // 로컬 스토리지에서 카트 데이터 가져오기
        // let cartData = JSON.parse(localStorage.getItem("cart-data") || "[]"); // 빈 문자열 또는 null일 경우 빈 배열 사용

        //장바구니 추가할 때 필요한 로직
        // if (selectedOpt) {
        //     // cartData = JSON.parse(localStorage.getItem("cart-data") || "[]");
        //     // 기존에 같은 옵션이 있는지 확인하고 업데이트 또는 추가
        //     const defaultOpt = cartData.findIndex(
        //         (item) => item.optName === optData.values[0]
        //     );

        //     if (defaultOpt > -1) {
        //         cartData[defaultOpt] = {
        //             optName: optData.values[0],
        //             optVal: selectedOpt,
        //         };
        //     } else {
        //         cartData.push({
        //             optName: optData.values[0],
        //             optVal: selectedOpt,
        //         });
        //     }

        //     // 로컬 스토리지에 업데이트된 카트 데이터 저장
        //     localStorage.setItem("cart-data", JSON.stringify(cartData));
        //     myCon.setLocalsCart(cartData); // setLocalsCart 함수 호출
        // }
    }, [selectedOpt, optData]); // selData 추가

    let aaa = [];
    

    //selectedOpt 에 변경된 값을 담아야됨

    console.log("옵션박스 setSelectedOpt 값은?:", selectedOpt.value);

    /////리턴코드
    return (
        <>
            <select
                name={optData.value}
                id={optData.value}
                classvalue="selectBox bt-margin40"
                value={optData.value}
                onChange={handleChange}
            >
                {/* {console.log("옵션데이터 가져오고싶어3", optData)} */}
                <option value="">선택하세요</option> {/* 옵션 추가 */}
                {optData.values.map((opt, i) => (
                    <option key={i} value={opt.value} className="opBox">
                        {opt.value}
                        {"(+" + addComma(opt.price) + "원)"}
                    </option>
                ))}
            </select>
        </>
    );
}

export default OptionBox;
