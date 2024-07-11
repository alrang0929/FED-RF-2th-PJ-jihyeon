import { TopArea } from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useCallback, useEffect, useState } from "react";
import { sCon } from "../pages/sCon";
import { useNavigate } from "react-router-dom";
///////import area///////////////////////////////////

export default function Layout() {
    ///[상태관리변수]///////////////////////////////////////////
    //1. 인트로 상태관리 변수
    const [introSts, setIntroSts] = useState(true);
    //2. 로그인 상태관리변수
    const [loginSts, setLoginSts] = useState(sessionStorage.getItem(""));
    //로그인 메세지
    const [loginMsg, setLoginMsg] = useState(sessionStorage.getItem(""));
    //최근 검색어 상태관리
    const [recentSearches, setRecentSearches] = useState([]);
    ////[공통함수 영역]///////////////////////////////////////
    //1. 라우팅 이동함수: 라우터 이동후크 useNavigate는 다른 useCallback로 처리가능
    const goNave = useNavigate();
    const goPage = useCallback((pm1, pm2) => {
        goNave(pm1, pm2);
    }, []);

    //2. 로그인 환영메세지 생성함수
    const makeMsg = useCallback((name) => {
        setLoginMsg(`${name}님, 슬밋에 오신것을 환영합니다`);
    }, []); ////makeMsg///////////////////

    //3. 로그아웃 함수
    const logoutFn = useCallback(() => {
        //1. 로그인 상태값 null
        setLoginSts(null);
        //2. 세션스 지우기 : minfo
        sessionStorage.removItem("minfo");
        //3. 로그인 메세지 초기화
        setLoginMsg(null);
        //4. 메인페이지로 이동
        goPage("/");
    }, []);

    //selCat = 선택된 카테고리
    const [selCat, setSelCat] = useState("face");
    useEffect(() => {
        // console.log(introSts)
    });

    //화면 랜더링 구역/////////////////////////////////////////////////////
    useEffect(() => {
        //로그인 상태 체크//////////////
        //만약 세션스의 minfo 값이 null이 아니라면 로그인 상태변수 업데이트
        //ㄴ> null이 아니면 조건문 true 처리
        if (sessionStorage.getItem("minfo")) {
            //세션스 변수할당
            let sessionSts = sessionStorage.getItem("minfo");
            //로그인 상태값
            setLoginSts(sessionSts);
            //로그인 메시지 업데이트
            //ㄴ> 세션스의 unm(이름값)을 보내준다
            makeMsg(JSON.parse(sessionSts).unm);
        } ////if/////////////
    }, []);

    // 코드리턴구역 ///////////////
    return (
        <sCon.Provider
            value={{
                setIntroSts,
                selCat,
                setSelCat,
                setLoginSts,
                loginMsg,
                setLoginMsg,
                goPage,
                makeMsg,
                logoutFn,
                recentSearches,
                setRecentSearches
            }}
        >
            <TopArea
                loginMsg={loginMsg}
                loginSts={loginSts}
                logoutFn={logoutFn}
                goPage={goPage}
                setRecentSearches = {setRecentSearches}
                recentSearches = {recentSearches}

            />
            <MainArea />
            <FooterArea ival={introSts} />
        </sCon.Provider>
    ); /////return
} //////layout
