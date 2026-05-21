// 복습 2 - 컴포넌트 / 리스트 처리

function SubjectList(props){
    let newList = props.list.map(item => {
        return <li>{item.subName}</li>
    })
    console.log(newList);
    return <>
        <ol>
            {props.list.map(item => {
                return <li key={item.subId}>
                    <a href="/" onClick={(e)=>{
                        e.preventDefault();
                        // alert(`${item.subName}의 책 이름은 ${item.bookName} 입니다.`);
                        props.onPrint(item.subName, item.bookName, item.price);
                    }}>{item.subName}</a>
                </li>
            })}
        </ol>
    </>

}

function App(){
    let subjects = [
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ]

    let test = (subName, bookName, price) => {
         alert(`${subName}의 책 이름은 ${bookName} 입니다.`);
    }

    return <>
        <SubjectList list={subjects} onPrint={test}></SubjectList> {/* ol태그 안에 과목이름 출력 */}

        <SubjectList list={subjects} onPrint={(subName, bookName, price)=>{
            alert(`${subName}의 책 가격은 ${price}원 입니다.`);
        }}></SubjectList> 
    </>
}

export default App;