import React, { useState } from "react";

//css
import "../../css/member.scss";

//data
import { terms } from "../data/terms_text";
import { Link } from "react-router-dom";

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
  const msgId = [
    "아이디는 16자 이내, 영문,숫자만 입력하세요.",
    "비밀번호는 16자 이내, 영문,숫자,특수문자만 입력하세요.",
    "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    "사용자 이름을 2~10자 이내, 한글,영문,숫자만 입력하세요.",
    "이메일 주소를 50자 이내, '@' 포함, 이메일 형식을 맞게 입력하세요.",
    "회원가입 성공! 로그인하세요.",
    "아이디 중복입니다. 다른 아이디를 입력하세요.",
    "비밀번호 찾기",
    "비밀번호 찾기",
  ]

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
                />
              </li>
              {/* 2. 비밀번호 */}
              <li>
                <label>비밀번호(password):</label>
                <input
                  type="password"
                  maxLength="16"
                  placeholder="영문,숫자,특수문자 포함 16자 이내"
                />
              </li>
              {/* 3. 비밀번호 확인 */}
              <li>
                <label>비밀번호 확인(Confirm password)</label>
                <input
                  type="password"
                  maxLength="16"
                  placeholder="영문,숫자,특수문자 포함 16자 이내"
                />
              </li>
              {/* 4. 사용자 이름 */}
              <li>
                <label>사용자이름(user name) </label>
                <input
                  type="text"
                  maxLength="16"
                  placeholder="실명으로 작성해주세요"
                />
              </li>

              {/* 5. 이메일 */}
              <li>
                <label>이메일(Email):</label>
                <input
                  type="text"
                  maxLength="50"
                  placeholder="이메일을 입력해주세요"
                />
              </li>
            </ul>
            <ul>
              {/* 5. 약관동의 */}
              <li className="termsbx">
                <h3>약관동의</h3>
                <div className="terms-text scrollbar">{terms.이용동의}</div>
                <input type="checkbox" id="terms1" name="terms" />
                <label htmlFor="terms1">
                  <span>
                    <i className="icon-check"></i>
                  </span>
                  이용약관에 동의합니다.
                </label>
                <div className="buttonbx">
                  {/* 6. 가입버튼 */}
                  <button className="button-fill sbtn">가입하기</button>
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
