import React from "react";

function App() {

  const routines = [
    {
      time: "08:00",
      title: "스트레칭하기",
      content: "기분 좋게 하루를 시작해요!",
      type: "morning"
    },
    {
      time: "13:00",
      title: "친구랑 점심 먹기",
      content: "오늘은 치킨!",
      type: "lunch"
    },
    {
      time: "20:00",
      title: "React 공부하기",
      content: "프론트엔드 개발자 성장중!",
      type: "dinner"
    }
  ];

  const handleClick = () => {
    alert("오늘 루틴 응원합니다 💪");
  };

  return (
    <div style={styles.container}>
      <h2>📅 나의 하루 루틴</h2>

      {routines.map((item, index) => (
        <div key={index} style={styles.card}>
          <p><strong>{item.time}</strong></p>
          <h3>{item.title}</h3>
          <p>{item.}</p>

          {/* 조건부 렌더링 (점심만 메시지) */}
          {item.type === "lunch" && (
            <p style={{ color: "orange" }}>⭐ 점심은 꼭 챙겨 먹어요!</p>
          )}
        </div>
      ))}

      <button style={styles.button} onClick={handleClick}>
        오늘 루틴 응원하기 💪
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px"
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px auto",
    width: "300px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer"
  }
};

export default App;