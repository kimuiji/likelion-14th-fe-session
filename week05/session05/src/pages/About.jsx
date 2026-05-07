function About() {
   return (
     <div style={{ maxWidth: '800px', margin: '0 auto' }}>
       <h1 className="mb-4">소개 페이지</h1>
       <p className="mb-4">
         이 프로젝트는 React Router를 활용한 실습 예제입니다. 다음과 같은 React Router의 주요 기능을 학습할 수 있습니다:
       </p>
       <ul className="mb-4" style={{ paddingLeft: '20px' }}>
         <li className="mb-2"><strong>라우팅</strong>: 다양한 URL에 따른 컴포넌트 렌더링</li>
         <li className="mb-2"><strong>네비게이션</strong>: Link, NavLink를 활용한 페이지 이동</li>
         <li className="mb-2"><strong>중첩 라우트</strong>: 라우트 내부에 또 다른 라우트 구성</li>
         <li className="mb-2"><strong>보호된 라우트</strong>: 인증된 사용자만 접근 가능한 페이지 구현</li>
         <li className="mb-2"><strong>리디렉션</strong>: 특정 조건에 따른 페이지 이동 처리</li>
       </ul>
       <p>
         React Router 버전 6을 기반으로 작성되었으며, 최신 React 기능과 함께 사용되었습니다.
       </p>
     </div>
   );
 }
  export default About;