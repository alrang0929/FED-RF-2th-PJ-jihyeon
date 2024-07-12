// 슬밋pj -  로그인 페이지///
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import $ from "jquery";

//css
import "../../css/login.scss";
//로컬 스토리지 셋팅 함수 호출!
import { initData } from "../func/memFn";
import { sCon } from "./sCon";

/////import area///////////////////////////////////////////////

export default function Login() {
    //컨텍스트 사용 셋팅
    const myCon = useContext(sCon);

    //[상태관리변수]/////////////////////////////////////
    // [1] 입력요소 상태변수
    // 1. 아이디변수
    const [userId, setUserId] = useState("");
    // 2. 비밀번호변수
    const [pwd, setPwd] = useState("");

    // [2] 에러상태관리 변수
    // -> 에러상태값 초기값은 에러아님(false)
    // 1. 아이디변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호변수
    const [pwdError, setPwdError] = useState(false);

    //[3] 아이디 저장 체크상태 변수
    const [chkSaveId, setChkSaveId] = useState(false);
    ////////////////////////////////////////////////////////////////

    //[메세지 프리셋]/////////////
    //아이디
    const msgId = [
        "아이디를 입력해주세요", //필수입력
        "잘못된 아이디 입니다",
    ];
    //비밀번호
    const msgPwd = [
        "비밀번호를 입력해주세요",
        "잘못된 비밀번호 입니다(영문,숫자,특수문자 포함 16자 이내)",
    ];

    //[3]에러메세지 상태변수: 초기값 msgId[0] >> 기본메세지 출력
    const [idMsg, setIdMsg] = useState(msgId[0]);
    const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

    //[유효성 검사함수]//////////////////////////////////
    //1. 아이디 유효성 검사
    const changeUserId = (e) => {
        //0. 입력된 값 읽기
        let val = e.target.value;

        //1. 빈값 체크 (빈값X = false:에러아님)
        if (val !== "") setUserIdError(false);
        //빈값 에러
        else {
            //1)메세지 띄우기(필수입력)
            setIdMsg(msgId[0]);
            //2) 에러상태값 변경하기
            setUserIdError(true);
        } /////else

        setUserId(val);
    }; /////changeUserId//////////////////////////////////////////

    //[2. 비밀번호 유효성 검사]
    const changePwd = (e) => {
        //0. 입력된 값 읽기
        let val = e.target.value;

        //1. 비밀번호 유효성 검사
        const valid =
            /^.*(?=^.{5,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        //유효성 검사볍: 정규식.test(값)

        //1. 빈값 체크 (빈값X = false:에러아님)
        if (val !== "") setPwdError(false);
        else {
            //1) 메시지 띄우기(필수입력메세지)
            setPwdMsg(msgPwd[0]);
            //2)에러상태값 변경하기
            setPwdError(true);
        }

        //입력값 유효성 검사 ㄱ
        if (valid.test(val)) setPwdError(false);
        //검사결과 에러일 때
        else {
            //1) 메시지 띄우기
            setPwdMsg(msgPwd[1]);

            //2) 에러상태값 변경하기
            setPwdError(true);
        }

        //실제 화면출력을 위해 setUserId에 상태 업데이트
        setPwd(val);
    }; /////changePwd//////////////////////////////////////////

    //[전체 유효성겁사 체크함수]///////
    const totalValid = () => {
        // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
        if (!userId) setUserIdError(true);
        if (!pwd) setPwdError(true);

        // 2. 통과시 true, 불통과시 false 리턴처리
        // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
        if (userId && pwd && !userIdError && !pwdError) return true;
        // 하나라도 false이면 false를 리턴함!
        else return false;
    }; //totalValid Fn////////////

    //[서브밋 기능함수]//////////////////////
    const onSubmit = (e) => {
        //1. 기본서브밋 막기
        e.preventDefault();
        console.log("최종검사:", totalValid());

        if (totalValid()) {
            //[회원정보를 로컬스토리지에 저장]
            initData();
            //2. 로컬스 변수할당
            let memData = localStorage.getItem("mem-data");
            //3. 로컬스 객체 변환
            memData = JSON.parse(memData);
            //4. 아이디 존재여부 확인
            let result = memData.find((v) => {
                //배열중 vid가 userId랑 매칭되면 true값 리턴
                if (v.uid === userId) return true;
            }); ///find/////////////

            //4-1 결과값 x = 메시지 보이기
            if (!result) {
                //1) 에러메세지 선택 / 존재하지 않는 아이디
                setIdMsg(msgId[1]);

                //2) 에러상태값 true
                setUserIdError(true);
            } ////if///////////////////////////////
            //4-2. 결과값이 있으면 비밀번호 검사
            else {
                //1) 아이디 에러메세지 숨기기
                setUserIdError(false);
                //2) 비밀번호 검사 : 입력값 == 결과값
                if (pwd === result.pwd) {
                    //같을 경우 로그인 성공!
                    alert("슬밋에 오신것을 환영합니다");

                    // ****** [ 로그인 후 셋팅작업 ] ****** //
                    // 1. 로그인한 회원정보를 세션스에 셋팅!
                    // -> 서버 세션을 대신하여 사용함!
                    // -> 결과가 result에 배열로 담김
                    // -> 넣을때는 JSON.stringify()
                    sessionStorage.setItem("login-sts", JSON.stringify(result));
                    // ㄴ> 로그인 성공한 정보를 문자화 하여 minfo키에 저장

                    //2. 컨텍스트 API로그인 상태 업데이트
                    myCon.setLoginSts(
                        sessionStorage.getItem("login-sts")
                        //sessionStorage 임시보관함에 로그인 회원정보 보관
                        // ㄴ> 타 페이지 이동시에도 로그인 상태 유지
                    );

                    //5. 라우팅 페이지로 이동
                    //1초 후 메인 페이지로 이동
                    setTimeout(() => {
                        myCon.goPage("/");
                    }, 1000);
                } //if
                //로그인 실패시
                else {
                    //1) 비밀번호 에러메세지 선택하기
                    setPwdMsg(msgPwd[1]);
                    setPwdError(true);
                }
            } ///else////////////////////////////

            //find() > 값만 저장함!! 배열저장은 filter
        } //////if

        //로그인 실패시 메시지 출력
        else {
            alert("아이디 또는 비밀번호를 확인해주세요");
        }
    };

    ///화면 랜더링 구역///////////////////////////////////
    useEffect(() => {
        //아이디 입력창 포커스
        $("#mid").focus();

        //로컬 스토리지에 저장된 아이디가 있다면 체크박스를 체크
        //아이디 입력값을 설정
        const savedUserId = localStorage.getItem("savedUserId");
        if (savedUserId) {
            setChkSaveId(true);
            setUserId(savedUserId);
        }
    }, []);
    ///화면 랜더링 구역///////////////////////////////////
    useEffect(() => {
        if (chkSaveId) {
            localStorage.setItem("savedUserId", userId);
        } else {
            localStorage.removeItem("savedUserId");
        }
    }, [chkSaveId, userId]);

    //// 코드 리턴구역 //////////////
    return (
        <>
            <main id="login-area">
                {/* 1. 타이틀 문구 */}
                <section>
                    <div className="title">
                        <h3>슬밋 Seulmit</h3>
                        <h3>슬밋 아우라 뷰티가 시작됩니다</h3>
                    </div>
                    {/* <form action=""> */}
                    {/* input-wrap */}
                    <div className="input-wrap">
                        {/*2. 아이디 입력창 */}
                        <div className="minput">
                            <input
                                className="input-box"
                                id="mid"
                                name="mid"
                                type="text"
                                maxLength="16"
                                placeholder="아이디(이메일)를 입력해주세요"
                                value={userId}
                                onChange={changeUserId}
                            ></input>
                            {
                                // 에러 메세지 출력
                                userIdError && (
                                    <div
                                        className="msg"
                                        style={{ padding: "2px" }}
                                    >
                                        <small
                                            style={{
                                                textAlign: "left",
                                                color: "yellow",
                                                fontSize: "13px",
                                            }}
                                        >
                                            {idMsg}
                                        </small>
                                    </div>
                                )
                            }
                        </div>

                        {/*3. 비밀번호 입력창 */}
                        <div className="minput">
                            <input
                                className="input-box"
                                id="mpw"
                                name="mpw"
                                type="password"
                                maxLength="16"
                                placeholder="비밀번호를 입력해주세요(6~12자 이내)"
                                value={pwd}
                                onChange={changePwd}
                            ></input>
                            {
                                // 에러 메세지 출력
                                pwdError && (
                                    <div
                                        className="msg"
                                        style={{ padding: "2px" }}
                                    >
                                        <small
                                            style={{
                                                textAlign: "left",
                                                color: "yellow",
                                                fontSize: "13px",
                                            }}
                                        >
                                            {pwdMsg}
                                        </small>
                                    </div>
                                )
                            }
                        </div>
                        {/* 4. 아이디 저장 */}
                        <div className="saveId">
                            <input
                                type="checkbox"
                                id="saveId"
                                name="saveId"
                                onChange={(e) => {
                                    setChkSaveId(e.target.checked);
                                    // console.log("상태확인",setChkSaveId)
                                }}
                                checked={chkSaveId}
                            />
                            <label htmlFor="saveId">아이디 저장</label>
                        </div>
                        {/* input-wrap end */}
                    </div>

                    {/* btn-wrap-start */}
                    <div className="btn-wrap">
                        <button className="button-nomal2" onClick={onSubmit}>
                            LOG IN
                        </button>
                        <div className="desc-wrap fx-box">
                            <span>아이디/비밀번호를 잊어버리셨나요?</span>
                            <div className="fx-box">
                                <a href=""> 아이디</a>
                                <a href="">비밀번호 찾기</a>
                            </div>
                        </div>
                        <div className="desc">
                            <span>슬밋 Seulmit이 처음이신가요?</span>
                        </div>
                        <Link to="/member">
                            <button className="button-fill">SING UP</button>
                        </Link>
                    </div>
                    {/* btn-wrap-end */}
                    {/* </form> */}
                </section>
            </main>
        </>
    );
} /////////// Login /////////////////////
