import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DiaryContext } from '../contexts/DiaryContext';

const History = () => {
  const { diaryList } = useContext(DiaryContext);

  return (
    <div>
      <h2>기록한 감정 목록</h2>
      <ul>
        {diaryList.map((it) => (
          <li key={it.id}>
            <Link to={`/detail/${it.id}`}>
              [{it.date}] {it.emotion} - {it.content.substring(0, 20)}...
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;