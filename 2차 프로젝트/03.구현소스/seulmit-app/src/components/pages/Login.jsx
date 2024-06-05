// 코믹스 페이지 컴포넌트 ///
import "../../css/login.scss";


export default function Login() {
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
              maxLength="30"
              value="아이디(이메일)를 입력해주세요"
            ></input>
            <span className="msg"></span>
          </div>

          {/*3. 비밀번호 입력창 */}
          <div className="minput">
            <input
            className="input-box"
              id="mpw"
              name="mpw"
              type="text"
              maxLength="15"
              value="비밀번호를 입력해주세요(6~12자 이내)"
            ></input>
            <span className="msg"></span>
          </div>
          {/* 4. 아이디 저장 */}
          <div className="saveId">
            <input 
            type="checkbox" 
            id="saveId" 
            name="saveId" />
            <label for="saveId">아이디 저장</label>
          </div>
          {/* input-wrap end */}
        </div>

        {/* btn-wrap-start */}
        <div className="btn-wrap">
            <button className="button-nomal2">LOG IN</button>
            <div className="desc-wrap fx-box">
            <span>아이디/비밀번호를 잊어버리셨나요?</span>
            <div className="fx-box">
            <a href=""> 아이디</a><a href="">비밀번호 찾기</a>
            </div>
            </div>
            <div className="desc">
            <span>슬밋 Seulmit이 처음이신가요?</span>
            </div>
            <button className="button-fill">SING UP</button>
        </div>
        {/* btn-wrap-end */}
        {/* </form> */}
        </section>
      </main>
    </>
  );
} /////////// Login /////////////////////
