// useRef

import { useRef, useState } from "react";

function App(){
    let varNum = 1;
    let [stateNum, setNum] = useState(1);
    let refNum = useRef(1);

    return <>
        <h3>{varNum}</h3>
        <div>
            <button onClick={()=>{
                varNum += 1;
                console.log(varNum);
            }}>varNum 증가!</button>
        </div>
        <hr></hr>
        <h3>{stateNum}</h3>
        <div>
            <button onClick={()=>{
                setNum(stateNum+1);
            }}>stateNum 증가!</button>
        </div>
        <hr></hr>
        <h3>{refNum.current}</h3>    
        <div>
            <button onClick={()=>{
                refNum.current += 1;
                console.log(refNum.current);
            }}>refNum 증가!</button>
        </div>

    </>
}

export default App;