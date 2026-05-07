import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login({ onLogin }) {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const navigate = useNavigate();
 const location = useLocation();

 // 이전에 접근하려던 페이지가 있으면 그곳으로 리디렉션
 const from = location.state?.from?.pathname || '/dashboard';

 const handleSubmit = (e) => {
   e.preventDefault();
   // 간단한 폼 검증
   if (!username.trim() || !password.trim()) {
     setError('사용자 이름과 비밀번호를 모두 입력해주세요.');
     return;
   }
  
   // 실제로는 서버 인증을 수행해야 함
   // 이 예제에서는 단순화를 위해 비밀번호가 "password"인 경우 로그인 성공으로 처리
   if (password === 'password') {
     onLogin(username);
     navigate(from, { replace: true });
   } else {
     setError('잘못된 비밀번호입니다. (힌트: "password"를 입력하세요)');
   }
 };

 return (
   <div className="auth-container">
     <div className="card">
       <h1 className="text-center mb-4">로그인</h1>
      
       {error && (
         <div className="alert alert-danger">
           {error}
         </div>
       )}
      
       <form onSubmit={handleSubmit} className="auth-form">
         <div className="form-group">
           <label className="form-label" htmlFor="username">
             사용자 이름
           </label>
           <input
             id="username"
             type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             className="form-control"
             placeholder="사용자 이름을 입력하세요"
           />
         </div>
        
         <div className="form-group">
           <label className="form-label" htmlFor="password">
             비밀번호
           </label>
           <input
             id="password"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="form-control"
             placeholder="비밀번호를 입력하세요"
           />
           <p className="text-small mt-1">힌트: 비밀번호는 "password"입니다.</p>
         </div>
        
         <div className="form-group">
           <button
             type="submit"
             className="btn w-100"
           >
             로그인
           </button>
         </div>
       </form>
     </div>
   </div>
 );
}

export default Login;

