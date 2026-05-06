/* import React from "react";
import Child from './Child';

function Parent({ count }){
    console.log("Parent rendered");
    return(
        <div>
            <h2>Parent 컴포넌트</h2>
            <p>GrandParent로부터 받은 count: {count}</p>
            <Child />
        </div>
    );
}

export default React.memo(Parent);



/* import React from "react";
import Child from './Child';

function Parent({user}){
    return(
        <div className="drill-box parent">
            <p className="drill-title">Parent   (props 없이 전달)</p>
            <Child user={user}/>
        </div>
    );
}

export default Parent; */