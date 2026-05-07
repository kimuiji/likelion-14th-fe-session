import { useState } from 'react';

function Settings() {
 const [darkMode, setDarkMode] = useState(false);
 const [emailNotifications, setEmailNotifications] = useState(true);
 const [language, setLanguage] = useState('ko');
 const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = (e) => {
   e.preventDefault();
   // 설정이 저장되었다는 메시지 표시
   setSuccessMessage('설정이 성공적으로 저장되었습니다!');
  
   // 3초 후 메시지 사라짐
   setTimeout(() => {
     setSuccessMessage('');
   }, 3000);
 };
  return (
   <div>
     <h2 className="mb-4">설정</h2>
    
     {successMessage && (
       <div className="alert alert-success">
         {successMessage}
       </div>
     )}
    
     <form onSubmit={handleSubmit} className="card">
       <div className="mb-4">
         <h3 className="mb-2">인터페이스 설정</h3>
        
         <div className="checkbox-group">
           <input
             id="darkMode"
             type="checkbox"
             checked={darkMode}
             onChange={() => setDarkMode(!darkMode)}
           />
           <label htmlFor="darkMode">다크 모드</label>
         </div>
        
         <div className="form-group">
           <label className="form-label">언어:</label>
           <select
             value={language}
             onChange={(e) => setLanguage(e.target.value)}
             className="form-control"
             style={{ maxWidth: '200px' }}
           >
             <option value="ko">한국어</option>
             <option value="en">English</option>
             <option value="ja">日本語</option>
             <option value="zh">中文</option>
           </select>
         </div>
       </div>
      
       <div className="mb-4">
         <h3 className="mb-2">알림 설정</h3>
        
         <div className="checkbox-group">
           <input
             id="emailNotifications"
             type="checkbox"
             checked={emailNotifications}
             onChange={() => setEmailNotifications(!emailNotifications)}
           />
           <label htmlFor="emailNotifications">이메일 알림 사용</label>
         </div>
       </div>
      
       <button
         type="submit"
         className="btn"
       >
         설정 저장
       </button>
     </form>
   </div>
 );
}

export default Settings;

