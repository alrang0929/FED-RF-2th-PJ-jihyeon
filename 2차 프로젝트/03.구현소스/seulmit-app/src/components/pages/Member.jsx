import React from "react";

//css
import "../../css/member.scss";

//data
import { terms } from "../data/terms_text";

////import area//////////////////////////////////

function Member(props) {
  ////코드 리턴구역/////////////////////////
  return (
    <>
      <div className="outbox">
        <section className="membx">
          <h3>회원가입</h3>
          <form action="process.php" method="post">
            <ul>
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
              {/* 4. 이메일 */}
              <li>
                <label>이메일(Email):</label>
                <input
                  type="text"
                  maxLength="50"
                  placeholder="이메일을 입력해주세요"
                />
              </li>
              {/* 5. 약관동의 */}
              <li>
                <h3>약관동의</h3>
                <div className="terms-text">
                    {terms.이용동의}
                </div>
                    <input type="checkbox" id="terms1" name="terms" />
                    <label htmlFor="terms1">
                      <span>
                        <i className="icon-check"></i>
                      </span>
                      이용약관에 동의합니다.
                    </label>
              </li>
              {/* 6. 가입버튼 */}
              <li>
                <button className="button-nomal sbtn">
                    가입하기
                </button>
              </li>
            </ul>
          </form>
        </section>
      </div>
    </>
  );
}

export default Member;
