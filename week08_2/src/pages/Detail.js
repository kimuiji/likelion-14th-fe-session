import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DiaryContext } from '../contexts/DiaryContext';

const Detail = () => {
  const { id } = useParams();
  const { diaryList } = useContext(DiaryContext);
  const navigate = useNavigate();

  const targetDiary = diaryList.find((it) => String(it.id) === String(id));

  if (!targetDiary) return <div>일기를 찾을 수 없습니다.</div>;

  return (
    <div>
      <h2>기록 상세</h2>
      <p>날짜: {targetDiary.date}</p>
      <p>기분: {targetDiary.emotion}</p>
      <p>내용: {targetDiary.content}</p>
      <button onClick={() => navigate(-1)}>목록으로</button>
    </div>
  );
};

export default Detail;