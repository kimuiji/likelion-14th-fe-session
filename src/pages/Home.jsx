import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import { fetchTrending, fetchPopular, fetchTopRated, fetchNowPlaying, fetchUpcoming } from '../api/tmdb';

function Home() {
  return (
    <main>
      <Banner />
      <MovieRow title="🔥 지금 뜨는 콘텐츠" fetchFn={fetchTrending} />
      <MovieRow title="👍 인기 영화"        fetchFn={fetchPopular} />
      <MovieRow title="⭐ 평점 높은 영화"   fetchFn={fetchTopRated} />
      <MovieRow title="🎬 현재 상영 중"     fetchFn={fetchNowPlaying} />
      <MovieRow title="🎞 개봉 예정"        fetchFn={fetchUpcoming} />
    </main>
  );
}

export default Home;