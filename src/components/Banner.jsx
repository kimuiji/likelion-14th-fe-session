import { useEffect, useState } from 'react';
import { fetchTrending } from '../api/tmdb';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetchTrending().then((data) => {
      setMovies(data.slice(0, 5));
    })
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (current === 4) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  if (movies.length === 0) {
    return <div>로딩중...</div>
  }

  const movie = movies[current];

  return (
    <div style={{
      height: '500px',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      backgroundSize: 'cover',
    }}>
      <div style={{ paddingTop: '300px', paddingLeft: '40px' }}>
        <h1 style={{ color: 'white' }}>{movie.title}</h1>
        <p style={{ color: 'white', width: '500px' }}>{movie.overview.slice(0, 100)}...</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', paddingLeft: '40px' }}>
        {movies.map((m, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              display: 'inline-block',
              cursor: 'pointer',
              backgroundColor: i === current ? 'white' : 'gray',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;