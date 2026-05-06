import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DiaryProvider } from './contexts/DiaryContext';
import Home from './pages/Home';
import History from './pages/History';
import Detail from './pages/Detail';

function App() {
  return (
    <DiaryProvider>
      <BrowserRouter>
        <div className="App">
          <h2>오늘의 기분을 기록해보세요</h2>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryProvider>
  );
}

export default App;