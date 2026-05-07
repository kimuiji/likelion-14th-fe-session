import { Link, Outlet } from 'react-router-dom';

function Dashboard({ user }) {
 return (
   <div className="dashboard-container">
     {/* Sidebar */}
     <div className="sidebar">
       <h2 className="mb-4">대시보드</h2>
       <div className="user-badge">
         <p className="form-label">{user?.username ?? '사용자'}</p>
         <p className="user-status">로그인 상태</p>
       </div>
      
       <nav className="sidebar-nav">
         <p className="sidebar-nav-title">네비게이션</p>
         <ul style={{ listStyle: 'none', padding: 0 }}>
           <li className="sidebar-nav-item">
             <Link
               to="/dashboard"
               className="sidebar-link"
             >
               메인 대시보드
             </Link>
           </li>
           <li className="sidebar-nav-item">
             <Link
               to="/dashboard/profile"
               className="sidebar-link"
             >
               프로필
             </Link>
           </li>
           <li className="sidebar-nav-item">
             <Link
               to="/dashboard/settings"
               className="sidebar-link"
             >
               설정
             </Link>
           </li>
         </ul>
       </nav>
     </div>
    
     {/* Main Content Area */}
     <div className="content-area">
       <Outlet /> {/* 중첩된 라우트 컴포넌트가 이곳에 렌더링됩니다 */}
     </div>
   </div>
 );
}

export default Dashboard;
