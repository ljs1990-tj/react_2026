// 복습 3 - useState

import { useState } from "react";

function App(){
    let varNum = 1;
    let [stateNum, setNum] = useState(1);

    return <>
        <h3>{varNum}</h3>
        <div>
            <button onClick={()=>{
                varNum += 1;
            }}>varNum 증가!</button>
        </div>
        <hr></hr>
        <h3>{stateNum}</h3>
        <div>
            <button onClick={()=>{
                setNum(stateNum+1);
            }}>stateNum 증가!</button>
        </div>
    </>
}

export default App;