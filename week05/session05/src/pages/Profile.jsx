function Profile({ user }) {
   return (
     <div>
       <h2 className="mb-4">프로필</h2>
       <div className="card">
         <div className="mb-4">
           <h3 className="mb-2">사용자 정보</h3>
           <p><strong>사용자 이름:</strong> {user?.username}</p>
           <p><strong>역할:</strong> 사용자</p>
           <p><strong>최근 로그인:</strong> 방금 전</p>
         </div>
        
         <div>
           <h3 className="mb-2">계정 상태</h3>
           <div className="status-indicator">
             <div className="status-dot status-active"></div>
             <span>활성화</span>
           </div>
         </div>
       </div>
     </div>
   );
 }
  export default Profile