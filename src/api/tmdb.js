const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log('API KEY:', API_KEY);
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchMovies = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=ko-KR`);
  if (!res.ok) throw new Error('API 요청 실패');
  const data = await res.json();
  return data.results;
};

export const fetchTrending   = () => fetchMovies('/trending/movie/week');
export const fetchPopular    = () => fetchMovies('/movie/popular');
export const fetchTopRated   = () => fetchMovies('/movie/top_rated');
export const fetchNowPlaying = () => fetchMovies('/movie/now_playing');
export const fetchUpcoming   = () => fetchMovies('/movie/upcoming');