import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ background: 'black', padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ color: 'red', fontSize: '24px', fontWeight: 'bold' }}>NETFLIX</span>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>홈</Link>
        <Link to="/popular" style={{ color: 'white', marginRight: '20px' }}>인기</Link>
        <Link to="/latest" style={{ color: 'white', marginRight: '20px' }}>최신</Link>
        <Link to="/wishlist" style={{ color: 'white' }}>찜</Link>
      </div>
    </div>
  );
}

export default Header;