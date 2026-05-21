import { useState } from "react"

function A(){return <h3>A컴포넌트!</h3>}
function B(){return <h3>B컴포넌트!</h3>}
function C(){return <h3>C컴포넌트!</h3>}

function App(){
    let [menu, setMenu] = useState("Clear");
    return <>
    {/* 컴포넌트 출력 (중복 X) */}
    {menu == "A" ? <A></A> : menu == "B" ? <B></B> : menu == "C" ? <C></C> : null}
    {/* {menu == "A" ? <A></A> : null}
    {menu == "B" ? <B></B> : null}
    {menu == "C" ? <C></C> : null} */}

    <hr></hr>
    <button onClick={()=>setMenu("A")}>A컴포넌트 호출</button>
    <button onClick={()=>setMenu("B")}>B컴포넌트 호출</button>
    <button onClick={()=>setMenu("C")}>C컴포넌트 호출</button>
    <button onClick={()=>setMenu("Clear")}>클리어</button>
    </>
}

export default App;