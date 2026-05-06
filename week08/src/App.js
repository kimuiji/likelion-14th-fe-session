import React from "react";
import Profile from "./profile.jsx";
import StatusCard from "./statuscard.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <div className="App">
      <Header title="나의 대시보드" />
      <Profile 
        img="https://m.comics-art.co.kr/web/product/big/202410/248bbdc47da38af7dd2b26bcbd20ccab.png"
        mood="행복해" 
      />
      <StatusCard label="현재 활동" value="리액트 과제 중" color="#FF8C00" />
      <StatusCard label="오늘의 목표" value="컴포넌트 마스터" color="#4CAF50" />
    </div>
  );
}

export default App;
