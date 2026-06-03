import { useEffect, useState, useRef } from 'react';
import MovieCard from './MovieCard';

function MovieRow({ title, fetchFn }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null)

  useEffect(() => {
    fetchFn().then(data => setMovies(data))
  }, [fetchFn]);

  const scroll = (dir) => {
    rowRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2 style={{ color: 'white', paddingLeft: '20px' }}>{title}</h2>
      <div style={{ display: 'flex', gap: '10px', overflowX: 'scroll', padding: '0 20px' }} ref={rowRef}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;