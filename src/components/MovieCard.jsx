import { memo, useState } from 'react';
import { IMG_BASE_URL } from '../api/tmdb';

function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: '150px', cursor: 'pointer', position: 'relative' }}
    >
      <img
        src={IMG_BASE_URL + movie.poster_path}
        alt={movie.title}
        style={{ width: '100%' }}
      />
      {hovered === true &&
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.7)',
          padding: '8px',
        }}>
          <p style={{ color: 'white', fontSize: '13px', margin: 0 }}>{movie.title}</p>
          <p style={{ color: 'gray', margin: 0 }}>⭐ {movie.vote_average}</p>
        </div>
      }
    </div>
  );
}

export default memo(MovieCard);