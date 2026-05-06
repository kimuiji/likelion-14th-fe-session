import React, { createContext, useState, useEffect } from 'react';

export const DiaryContext = createContext();

export const DiaryProvider = ({ children }) => {
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('diary');
    if (saved) setDiaryList(JSON.parse(saved));
  }, []);

  // 데이터 변경 시 자동 저장
  useEffect(() => {
    localStorage.setItem('diary', JSON.stringify(diaryList));
  }, [diaryList]);

  const onCreate = (date, emotion, content) => {
    const newEntry = { id: Date.now(), date, emotion, content };
    setDiaryList([newEntry, ...diaryList]);
  };

  return (
    <DiaryContext.Provider value={{ diaryList, onCreate }}>
      {children}
    </DiaryContext.Provider>
  );
};