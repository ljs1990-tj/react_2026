// 복습 7

function A(props){
    return <>
        <button onClick={()=>{
            alert("함수111111111111");
        }}>함수1(직접작성)</button>
        <hr></hr>
        
        {props.onFunc != null ? 
            <button onClick={()=>{
                props.onFunc();
            }}>함수2(props로 받은 함수)</button> : null
        }
    </>
}

function B(props){
    return <>
        <div>
            <a href="/" id="HelloReact" onClick={(e)=>{
                e.preventDefault();
                alert(e.target.id);
            }}>a태그!!!!!!!!</a>
        </div>
        <button onClick={()=>{
            props.onFunc(3,5);
        }}>B컴포넌트 버튼</button>
    </>
}

function App(){

    function test1(){
        alert("React 정말 좋다!");
    }

    function test2(x, y){
        alert(x+y);
    }

    return <>
        <A onFunc={()=>{
            alert("React 진짜 재밌다!")
        }}></A>
        <div style={{margin : "20px"}}>===============================================</div>
        
        <A onFunc={test1}></A>

        <div style={{margin : "20px"}}>===============================================</div>

        <B onFunc={test2}></B>
    </>
}

export default App;