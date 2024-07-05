import React, { useState } from "react";

//css
import "../../css/member.scss";

//data
import { terms } from "../data/terms_text";
import { Link } from "react-router-dom";
import { initData } from "../func/memFn";

////import area//////////////////////////////////

function Member(props) {
    // [ 상태관리변수 ] /////////////
    // [1] 입력요소 상태변수
    // 1. 아이디변수
    const [userId, setUserId] = useState("");
    // 2. 비밀번호변수
    const [pwd, setPwd] = useState("");
    // 3. 비밀번호확인변수
    const [chkPwd, setChkPwd] = useState("");
    // 4. 사용자이름변수
    const [userName, setUserName] = useState("");
    // 5. 이메일변수
    const [email, setEmail] = useState("");

    // [2] 에러상태관리 변수
    // -> 에러상태값 초기값은 에러아님(false)
    // 1. 아이디변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호변수
    const [pwdError, setPwdError] = useState(false);
    // 3. 비밀번호확인변수
    const [chkPwdError, setChkPwdError] = useState(false);
    // 4. 사용자이름변수
    const [userNameError, setUserNameError] = useState(false);
    // 5. 이메일변수
    const [emailError, setEmailError] = useState(false);

    ///////////////////////////////////////////////////////////
    //메세지 프리셋

    //아이디
    const msgId = [
        "16자 이내, 영문,숫자만 입력하세요",
        "중복된 아이디 입니다. 다른 아이디를 입력하세요",
        "사용가능한 아이디 입니다",
    ];
    //비밀번호
    const msgPw = [
        "영문,숫자,특수문자 포함 16자 이내",
        "필수 입력 입니다",
        "비밀번호가 일치하지 않습니다",
    ];
    //기타
    const msgEtc = {
        req: "필수입력사항 입니다.",
        email: "이메일 양식을 확인해주세요",
    };
    //[3] 에러메세지 상태변수: 초기값 msgId[0]
    const [idMsg, setIdMsg] = useState(msgId[0]);
    const [pwMsg, setpwMsg] = useState(msgPw[0]);

    //[ 유효성 검사 함수 ]////////////////////////
    //1. 아이디 유효성 검사
    const changeUserId = (e) => {
        //0. 입력된 값 읽기
        let val = e.target.value;

        //1. 아이디 유효성 검사
        const valid = /^[A-Za-z0-9+]{5,16}$/;
        //유효성 검사볍: 정규식.test(값)

        //2. 입력값 확인
        console.log(val);
        //입력값 유효성 검사 ㄱ
        if (valid.test(val)) {
            console.log("통과");
            //아이디 검사를 위해 기본 데이터 호출
            initData();
            //로컬스토리지에 "mem-data"가 없으면 초기셋팅

            //중복 아이디 검사 start
            //1. 로컬스 변수할당
            let memData = localStorage.getItem("mem-data");
            console.log(memData);

            //2. 로컬스 객체변환(< 문자형이기 때문에)
            memData = JSON.parse(memData);
            console.log(memData);

            // ㄴ> 배열로 변환 => 배열이니까 입력데이터가 기존 배열값에 있는지 검사(true, false로 출력)
            let isT = memData.some((v) => v.uid === val);
            console.log("중복ID 있음?", isT);

            //4. true => 중복데이터 메세지 표시
            if (isT) {
                //에러메세지 업데이트
                setIdMsg(msgId[1]);
                //에러상태값 업데이트
                setUserIdError(true);
            } ///if////////////
            //4-1. false => [성공 메세지] 표시
            else {
                setUserIdError(false);
            } ///////else////////////////////
        } ///if
        //검사결과 에러일 때
        else {
            console.log("에러");
            //아이디 에러상태 없데이트
            setUserIdError(true);
        } ///else

        //실제 화면출력을 위해 setUserId에 상태 업데이트
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

        //입력값 유효성 검사 ㄱ
        if (valid.test(val)) setPwdError(false);
        //검사결과 에러일 때
        else setPwdError(true);

        //실제 화면출력을 위해 setUserId에 상태 업데이트
        setPwd(val);
    }; /////changePwd//////////////////////////////////////////

    //[3. 비밀번호확인 유효성 검사]
    const changeChkPwd = (e) => {
        //0. 입력된 값 읽기
        let val = e.target.value;

        //1. 비밀번호 입력내용과 일치여부 확인
        if (pwd === val) setChkPwdError(false);
        else setChkPwdError(true);

        //실제 화면출력을 위해 setUserId에 상태 업데이트
        setChkPwd(val);
    }; /////changeChkPwd//////////////////////////////////////////

    //[4. 사용자이름 유효성 검사]
    const changeName = (e) => {
        //0. 입력된 값 읽기
        let val = e.target.value;

        //1. 빈값 체크
        if (val !== "") setUserNameError(false);
        else setUserNameError(true);

        //실제 화면출력을 위해 setUserName에 상태 업데이트
        setUserName(val);
    }; /////changeChkPwd//////////////////////////////////////////

    //[5. 이메일 유효성 검사]
    const changeEmail = (e) => {
        //0. 입력된 값 읽기
        let val = e.target.value;

        // 1. 이메일 유효성 검사식(따옴표로 싸지 말것!)
        const valid = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        //2. 입력값 확인

        //3. 에러에 따른 상태값 변경
        if (valid.test(val)) setEmailError(false);
        else setEmailError(true);

        //실제 화면출력을 위해 setUserName에 상태 업데이트
        setEmail(val);
    }; /////changeChkPwd//////////////////////////////////////////

    //[6. 전체 유효성 검사]
    const totalValid = ()=>{

        //1. 모든 상태변수 빈값일 시 에러상태값 업데이트
        if(!userId) setUserIdError(true);
        if(!userName) setUserNameError(true);
        if(!pwd) setPwdError(true);
        if(!chkPwd) setChkPwdError(true);
        if(!email) setEmailError(true);
        //2. 통과: true, 통과X : false

    };////// totalValidFn//////////////////////////////


    ////코드 리턴구역/////////////////////////
    return (
        <>
            <div className="outbox">
                <section className="membx">
                    <h3>회원가입</h3>
                    <form action="process.php" method="post">
                        <ul className="user-data">
                            {/* 1. 아이디 */}
                            <li>
                                <label>아이디(id):</label>
                                <input
                                    type="text"
                                    maxLength="16"
                                    placeholder="영문,숫자 포함 16자 이내"
                                    value={userId}
                                    onChange={changeUserId}
                                />
                                {
                                    // 에러 메세지 출력
                                    userIdError && (
                                        <div
                                            className="msg"
                                            style={{ paddingTop: "4px" }}
                                        >
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {idMsg}
                                            </small>
                                        </div>
                                    )
                                }
                                {
                                    // 통과 메세지
                                    !userIdError && userId && (
                                        <div
                                            className="msg"
                                            style={{ paddingTop: "4px" }}
                                        >
                                            <small
                                                style={{
                                                    color: "blue",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {msgId[2]}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                            {/* 2. 비밀번호 */}
                            <li>
                                <label>비밀번호(password):</label>
                                <input
                                    type="password"
                                    maxLength="16"
                                    placeholder="영문,숫자,특수문자 포함 16자 이내"
                                    value={pwd}
                                    onChange={changePwd}
                                />
                                {
                                    // 에러 메세지 출력
                                    pwdError && (
                                        <div
                                            className="msg"
                                            style={{ paddingTop: "4px" }}
                                        >
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {pwMsg}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                            {/* 3. 비밀번호 확인 */}
                            <li>
                                <label>비밀번호 확인(Confirm password):</label>
                                <input
                                    type="password"
                                    maxLength="16"
                                    placeholder="영문,숫자,특수문자 포함 16자 이내"
                                    value={chkPwd}
                                    onChange={changeChkPwd}
                                />
                                {
                                    // 에러 메세지 출력
                                    chkPwdError && (
                                        <div
                                            className="msg"
                                            style={{ paddingTop: "4px" }}
                                        >
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {msgPw[2]}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                            {/* 4. 사용자 이름 */}
                            <li>
                                <label>사용자이름(user name): </label>
                                <input
                                    type="text"
                                    maxLength="16"
                                    placeholder="실명으로 작성해주세요"
                                    value={userName}
                                    onChange={changeName}
                                />
                                {
                                    // 에러 메세지 출력
                                    userIdError && (
                                        <div
                                            className="msg"
                                            style={{ paddingTop: "4px" }}
                                        >
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {msgEtc.req}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>

                            {/* 5. 이메일 */}
                            <li>
                                <label>이메일(Email):</label>
                                <input
                                    type="text"
                                    maxLength="50"
                                    placeholder="이메일을 입력해주세요"
                                    value={email}
                                    onChange={changeEmail}
                                />
                                {
                                    // 에러 메세지 출력
                                    userIdError && (
                                        <div
                                            className="msg"
                                            style={{ paddingTop: "4px" }}
                                        >
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {msgEtc.email}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                        </ul>
                        <ul>
                            {/* 5. 약관동의 */}
                            <li className="termsbx">
                                <h3>약관동의</h3>
                                <div className="terms-text scrollbar">
                                    {terms.이용동의}
                                </div>
                                <input
                                    type="checkbox"
                                    id="terms1"
                                    name="terms"
                                />
                                <label htmlFor="terms1">
                                    <span>
                                        <i className="icon-check"></i>
                                    </span>
                                    이용약관에 동의합니다.
                                </label>
                                <div className="buttonbx">
                                    {/* 6. 가입버튼 */}
                                    <button className="button-fill sbtn">
                                        가입하기
                                    </button>
                                    {/* 7.로그인 화면으로 돌아가기 */}
                                    <div className="login-msg">
                                        <span>이미 계정이 있으신가요?</span>
                                        <Link to="/login">로그인 하기</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Member;
