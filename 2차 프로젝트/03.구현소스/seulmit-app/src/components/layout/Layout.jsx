import { TopArea } from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useCallback, useEffect, useRef, useState } from "react";
import { sCon } from "../pages/sCon";
import { useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CartList from "../modules/CartList";
///////import area///////////////////////////////////

export default function Layout() {
  let loginTemp = null;
  if (sessionStorage.getItem("login-sts"))
    loginTemp = sessionStorage.getItem("login-sts");

  ///[상태관리변수]///////////////////////////////////////////
  //1. 인트로 상태관리 변수
  const [introSts, setIntroSts] = useState(true);
  const [loginSts, setLoginSts] = useState(
    sessionStorage.getItem("login-sts") || "{}" // 빈 문자열일 경우 빈 객체 사용
  );
  const [loginMsg, setLoginMsg] = useState(
    sessionStorage.getItem("login-msg") || "" // 빈 문자열일 경우 빈 문자열 사용
  );
  // console.log("로그인?", loginSts);
  //최근 검색어 상태관리
  const [recentSearches, setRecentSearches] = useState([]);

  //검색어 데이터 상태변수
  const [localSearch, setLocalSearch] = useState(
    localStorage.getItem("searchLog")
  );

  //////////cart/////////////////////////////////////////////
  // 로컬스 카트 존재여부변수
  let cartTemp = false;

  // [ 로컬스 카트 데이터 상태변수 ] ///
  const [localsCart, setLocalsCart] = useState(
    JSON.parse(localStorage.getItem("cart-data") || "[]") // 빈 문자열일 경우 빈 배열 사용
  );
  // 카트리스트 사용여부: true일때 사용
  const [cartSts, setCartSts] = useState(false);

  //카트리스트 추가옵션값 저장 상태변수
  const[selectedOpt, setSelectedOpt] = useState([]);

  // 로컬스 카트 데이터 존재여부에 따라 상태값 변경
  if (localsCart) {
    // 데이터가 있으면 cartTemp값 true로 변경
    // 데이터 개수가 0이 아니어야함!
    let localsCart = localStorage.getItem("cart-data") || "[]"; // 빈 문자열일 경우 빈 배열 사용
    let cartCnt = JSON.parse(localsCart).length;
    // console.log("카트 데이터수:", cartCnt);
    if (cartCnt > 0) cartTemp = true;
  } //////////// 카트존재여부 if ////////

 
  const searchLog = useRef(
    JSON.parse(localStorage.getItem("search-log") || "[]")
  );

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
    sessionStorage.removeItem("login-sts");
    //3. 로그인 메세지 초기화
    // setLoginMsg(null);
    //4. 메인페이지로 이동
    goPage("/");
  }, []);

  //selCat = 선택된 카테고리
  const [selCat, setSelCat] = useState("face");

  //화면 랜더링 구역/////////////////////////////////////////////////////

  useEffect(() => {
    try {
      const minfo = JSON.parse(sessionStorage.getItem("minfo")) || {};
      setLoginSts(minfo);
      makeMsg(minfo.unm);
    } catch (error) {
      console.error("sessionStorage 데이터 파싱 에러:", error);
      setLoginSts(null); // 또는 다른 기본값 설정
    }
  }, []);


  // useEffect(() => {
  //   //로그인 상태 체크//////////////
  //   //만약 세션스의 minfo 값이 null이 아니라면 로그인 상태변수 업데이트
  //   //ㄴ> null이 아니면 조건문 true 처리
  //   if (sessionStorage.getItem("minfo")) {
  //     //세션스 변수할당
  //     let sessionSts = sessionStorage.getItem("minfo");
  //     //로그인 상태값
  //     setLoginSts(sessionSts);
  //     //로그인 메시지 업데이트
  //     //ㄴ> 세션스의 unm(이름값)을 보내준다
  //     makeMsg(JSON.parse(sessionSts).unm);
  //   } ////if/////////////
  // }, []);

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
        setRecentSearches,
        searchLog,
        setCartSts,
        setLocalsCart,
        localsCart,
        selectedOpt,
        setSelectedOpt,
      }}
    >
      <TopArea
        loginMsg={loginMsg}
        loginSts={loginSts}
        logoutFn={logoutFn}
        goPage={goPage}
        setRecentSearches={setRecentSearches}
        recentSearches={recentSearches}
        localSearch={localSearch}
        setLocalSearch={setLocalSearch}
        
      />
      {/* 카트리스트 : 카트상태값 true 출력 */}
      {cartSts && <CartList />}
      <MainArea />
      <FooterArea 
      ival={introSts} 
      />
    </sCon.Provider>
  ); /////return
} //////layout
