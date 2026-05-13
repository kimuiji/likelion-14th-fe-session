import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    if (!input.trim()) {
      setError(true);  // 입력값 없으면 에러 표시
      return;
    }
    navigate("/home");  // 입력값 있으면 홈으로 이동
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1>로그인 정보를 입력하세요</h1>
        <p className="login-subtitle">아니면 새 계정으로 시작하세요.</p>

        <input
          className={`login-input ${error ? "input-error" : ""}`}
          type="text"
          placeholder="이메일 주소 또는 휴대폰 번호"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);  // 입력 시 에러 해제
          }}
        />
        {error && (
          <p className="error-msg">유효한 이메일 주소나 휴대폰 번호를 입력하세요.</p>
        )}

        <button className="login-btn" onClick={handleLogin}>
          다음
        </button>

        <div className="support-container">
          <button className="support-toggle" onClick={() => setIsOpen(!isOpen)}>
            고객 지원 {isOpen ? "∧" : "∨"}
          </button>
          {isOpen && (
            <p className="support-text">
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;