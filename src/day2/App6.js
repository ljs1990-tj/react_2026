import { useState } from "react"

function Sample(props){
    return <>
        <h3>{props.txt}</h3>
        <button onClick={()=>{
            props.onPrint(props.txt);
        }}>클릭!</button>
        {/* A컴포넌트 호출 후 버튼 클릭 시 'A컴포넌트 호출' 이 내용을 alert로 출력 */}
        {/* B컴포넌트 호출 후 버튼 클릭 시 'B컴포넌트 호출' 이 내용을 confirm 출력 */}
        {/* C컴포넌트 호출 후 버튼 클릭 시 'C컴포넌트 호출' 이 내용을 prompt로 출력 */}
    </>
    
}

function Sample2(props){
    return <>
        <h3>{props.txt}</h3>
        <button onClick={()=>{
            props.onPrint(props.txt, props.kind);
        }}>클릭!</button>  
    </>
    
}

function App(){
    let [txt, setTxt] = useState(""); 
    let [kind, setKind] = useState("");
    
    function qqq(txt, kind){
        if(kind == "A"){
            alert(txt);
        } else if(kind == "B"){
            window.confirm(txt);
        } else if (kind == "C"){
            prompt(txt);
        } else {
            alert("몰라");
        }
    }

    return <>
    {txt != "" ? 
        <Sample 
            txt={txt} 
            onPrint={kind == "A" ? (txt)=>{alert(txt)} : kind == "B" ? (txt)=>{window.confirm(txt)} : (txt)=>{prompt(txt)}}>
        </Sample> : null}

    {txt != "" ? <Sample2 txt={txt} kind={kind} onPrint={qqq}></Sample2> : null} 

    <hr></hr>
    <button onClick={()=>{
        setTxt("A컴포넌트 호출");
        setKind("A");
    }}>A컴포넌트 호출</button>
    <button onClick={()=>{
        setTxt("B컴포넌트 호출")
        setKind("B");
    }}>B컴포넌트 호출</button>
    <button onClick={()=>{
        setTxt("C컴포넌트 호출")
        setKind("C");
    }}>C컴포넌트 호출</button>
    <button onClick={()=>{
        setTxt("")
        setKind("");
    }}>클리어</button>
    </>
}

export default App;