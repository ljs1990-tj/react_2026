// 복습 4 -- useState 문제

import { useState } from "react";

function App(){
    let [num, setNum] = useState(1);
    
    let decreaseNum = ()=>{
        if(num > 0){
            setNum(num-1);
        }
    }
    return <>
        {/* 텍스트를 출력 -> 숫자변수가 5이상이면 '큰 수', 아니면 '작은 수' 출력 */}
        {num >= 5 ? "큰 수" : "작은 수"}
        <hr></hr>
        {num}
        {/* 숫자변수 - 버튼 클릭 시 숫자 1씩 증가 */} 
        <button onClick={()=>{
            setNum(num+1);
        }}>증가</button>
        {/* 숫자변수 - 버튼 클릭 시 숫자 1씩 감소. 단, 0미만 x */} 
        <button onClick={decreaseNum}>감소</button>
    </>
}

export default App;