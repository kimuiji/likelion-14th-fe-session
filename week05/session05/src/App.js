import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <BrowserRouter>
      <div style={{padding: 20}}>
        <nav style={{marginBottom: 16}}>
          <Link to="/" style={{marginRight: 10}}>홈</Link>
          <Link to="/about">소개</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;







/* import React, {useState} from "react";
import { ThemeContext } from "./ThemeContext";
import Page from "./Page";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 20 }}>
        <h1>Context API 실습</h1>
        <button onClick={toggleTheme}>테마변경</button>
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
  )



import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <BrowserRouter>
      <div style={{padding: 20}}>
        <nav style={{marginBottom: 16}}
          <Link to="/" style={{marginRight: 10}}>Home</Link>
          <Link to="/about">소개</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



/* import React, {useState, useEffect, useReducer, useRef} from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState 실습</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("페이지에 접속하셨습니다", count);
  }, []);
  useEffect(() => {
    console.log("count 변경됨:", count);
  }, []);

  return (
    <div>
      <h2>useEffect 실습</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}


function UseReducerDemo() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  }
  
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>useReducer 실습</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

function UseRefDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const isEmailValid = email.includes("@");

  const handleSubmit = () => {
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (!enteredEmail || !enteredPassword) {
      alert("빈 칸이 있습니다!");
      return;
    }
    console.log("이메일:", enteredEmail);
    console.log("비밀번호:", enteredPassword);
  };
  
  return (
    <div>
      <h2>Form 실습</h2>
      <h4>Controlled Form</h4>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{borderColor: isEmailValid ? "black" : "red"}}
      />
      <p>이름 : {name}</p>
      <p>이메일 : {email}</p>

      <h4>Uncontrolled Form</h4>
      <input type="text" placeholder="이메일" ref={emailRef} />
      <input type="password" placeholder="비밀번호" ref={passwordRef} />
      <button onClick={handleSubmit}>로그인</button>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState("useState");
  
  return (
    <div style={{padding: 24}}>
      <h1>React Hooks & Form 통합 실습</h1>
      <div style={{marginBottom: 16}}>
        <button onClick={() => setTab("useState")}>useState</button>
        <button onClick={() => setTab("useEffect")}>useEffect</button>
        <button onClick={() => setTab("useReducer")}>useReducer</button>
        <button onClick={() => setTab("form")}>Form</button>
    </div>

    {tab === "useState" && <UseStateDemo />}
    {tab === "useEffect" && <UseEffectDemo />}
    {tab === "useReducer" && <UseReducerDemo />}
    {tab === "form" && <UseRefDemo />}
    </div>
  );
}

export default App;








/*import React, {useState, useEffect, Component} from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count > 10 && prevState.count <= 10) {
      console.log("카운트가 10을 초과했습니다!");
    }
  }

  render() {
    return (
      <div>
        <h2>카운터 (클래스형 컴포넌트)</h2>
        <p>카운트: {this.state.count}</p>
        <button onClick={this.increment}>카운트 증가</button>
      </div>
    );
  }
}

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 10) {
      console.log("카운트가 10을 초과했습니다!");
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>(함수형 컴포넌트)</h2>
      <p>카운트: {count}</p>
      <button onClick={increment}>카운트 증가</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CounterClass />
      <CounterFunction />
    </div>
  );
}




/* import React, {useState, useCallback, useMemo} from 'react';

function heavyCalculation(num) {
  console.log("heavy calculation 실행 중...");
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += num;
  }
  return result;
}

function Calculator() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");
  const result = useMemo(() => heavyCalculation(number), [number]);

return (
  <div>
    <h2>계산기</h2>
    <input
      type="number"
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
    />
    <p>계산 결과: {result}</p>
    <input
      type="text"
      placeholder='여기에 텍스트 입력'
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  </div>
);
}




export default Calculator;

/* const Child = React.memo(({onClick}) => {
  console.log("Child rendered");
  return <button onClick={onClick}> Click me (Child) </button>
});

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}> + </button>
      <p>Count: {count}</p>
    </div>

  );
}

export default Parent;




/* import React from 'react';
import './App.css';
import NoticeBox from './NoticeBox';

function App() {
  return(
    <div clasName = "app">
      <h2>공지사항</h2>

      <NoticeBox title = "시스템 점검 안내" content = "4월 1일 00시 부터 서비스 점검이 진행됩니다." highlight = {true}/>
      <NoticeBox title = "기능 추가 안내 " content = "파일 업로드 기능이 추가되었습니다." highlight = {false}/>
    </div>
  )
   
}

export default App; */
