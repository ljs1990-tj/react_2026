// 복습 1 - 컴포넌트

function Text(props){
    return <>
        <div style={{color : props.color, fontWeight : "bold"}}>
            <a href="/" onClick={e => {
                e.preventDefault();
                // alert("안녕?");
                props.onPrint();
            }}>{props.txt}</a>
        </div>
    </>
}

function App(){

    let test = () => {
        alert("안녕?")
    }

    return <>
        <Text txt="안녕하세요" color="blue" onPrint={test}></Text> {/* 안녕하세요(10줄) */}
        <Text txt="반갑습니다" color="orange" onPrint={()=>{
            window.confirm("확인 or 취소");
        }}></Text> {/* 반갑습니다 */}
        <Text txt="ㅋㅋㅋㅋㅋ" color="purple" onPrint={()=>{
            prompt("숫자 입력 : ");
        }}></Text> {/* ㅋㅋㅋㅋㅋ */}
    </>
}
export default App;