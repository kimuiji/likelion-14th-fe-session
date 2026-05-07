import { Link, NavLink } from 'react-router-dom';

function Navbar({ isAuthenticated, user, onLogout }) {
 return (
   <nav className="navbar">
     <div className="container navbar-container">
       <div className="navbar-brand">
         <Link to="/">React Router 실습</Link>
       </div>
       <div className="navbar-nav">
         <NavLink
           to="/"
           className={({ isActive }) =>
             isActive ? "nav-link active" : "nav-link"
           }
         >
           홈
         </NavLink>
         <NavLink
           to="/about"
           className={({ isActive }) =>
             isActive ? "nav-link active" : "nav-link"
           }
         >
           소개
         </NavLink>
        
         {isAuthenticated ? (
           <>
             <NavLink
               to="/dashboard"
               className={({ isActive }) =>
                 isActive ? "nav-link active" : "nav-link"
               }
             >
               대시보드
             </NavLink>
             <div className="d-flex align-items-center">
               <span style={{ marginRight: '10px' }}>안녕하세요, {user.username}님!</span>
               <button
                 onClick={onLogout}
                 className="btn btn-danger"
               >
                 로그아웃
               </button>
                </div>
           </>
         ) : (
           <NavLink
             to="/login"
             className={({ isActive }) =>
               isActive ? "nav-link active" : "nav-link"
             }
           >
             로그인
           </NavLink>
         )}
       </div>
     </div>
   </nav>
 );
}

export default Navbar;

