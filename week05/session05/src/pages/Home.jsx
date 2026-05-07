function Home() {
   return (
     <div className="text-center page-content">
       <h1 className="mb-4">React Router 실습에 오신 것을 환영합니다!</h1>
       <p className="mb-4">
         이 웹사이트는 리액트 라우터를 사용한 실습 예제입니다.
       </p>
       <p className="mb-4">
         리디렉션, 네비게이션, 중첩 라우트, 보호된 라우트 등의 기능을 살펴보세요.
       </p>
       <div className="card mt-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
         <h2 className="mb-2">주요 기능</h2>
         <ul style={{ paddingLeft: '20px', textAlign: 'left' }}>
           <li>✅ 네비게이션 바를 통한 페이지 이동</li>
           <li>✅ 로그인/로그아웃 기능</li>
           <li>✅ 인증된 사용자만 접근 가능한 보호된 라우트</li>
           <li>✅ 대시보드 내 중첩 라우트 구현</li>
           <li>✅ 리디렉션 처리</li>
         </ul>
       </div>
     </div>
   );
 }
  export default Home;