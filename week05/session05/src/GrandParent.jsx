/* import React, {useState, useEffect, Component} from "react";
import Parent from "./Parent";

export default function GrandParent() {
    const [count, setCount] = useState(0);

    console.log("GrandParent rendered");

    return (
        <div>
            <h2>GrandParent 컴포넌트</h2>
            <button onClick={() => setCount(count + 1)}>
                GrandParent 버튼
            </button>
            <p>Count: {count}</p>
            <Parent />
        </div>
    )


/* import React from "react";
import Parent from "./Parent";
import UserContext from "./UserContext";

function GrandParent() {
    return (
        <div className="drill-box grandparent">
            <p className="drill-title">GrandParent  (Context 사용)</p>
            <UserContext.Provider value="라이언">
                <Parent />
            </UserContext.Provider>
        </div>
    );
}

export default GrandParent; */