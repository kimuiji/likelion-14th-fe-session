import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryContext } from '../contexts/DiaryContext';

const Home = () => {
  const { onCreate } = useContext(DiaryContext);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState("neutral");

  const handleSubmit = () => {
    onCreate(new Date().toLocaleDateString(), emotion, content);
    navigate('/history');
  };

  return (
  <div className="Home" style={{ padding: "20px" }}>
    
    
    <div className="emotion_wrapper" style={{ marginBottom: "10px" }}>
      {["happy", "neutral", "sad"].map((type) => (
        <button
          key={type}
          onClick={() => setEmotion(type)}
          style={{
            cursor: "pointer",
            marginRight: "5px",
            padding: "5px",
            backgroundColor: emotion === type ? "#eee" : "white",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        >
          {type === "happy" && "😀"}
          {type === "neutral" && "😐"}
          {type === "sad" && "😢"}
        </button>
      ))}
    </div>

    
    <div className="input_wrapper">
      <textarea
        placeholder="오늘 있었던 일을 간단히 써보세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",      
          height: "100px",    
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          display: "block" 
        }}
      />
    </div>

    
    <button 
      onClick={handleSubmit}
      style={{
        marginTop: "10px",
        padding: "5px 10px",
        cursor: "pointer",
        backgroundColor: "#f5f5f5",
        border: "1px solid #ccc"
      }}
    >
      기록하기
    </button>
  </div>
    );
};

export default Home;