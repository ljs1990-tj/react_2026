import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function 실습1(){
  return <>
    <Header title="헤더!" subTitle="HaHa"></Header>
    <Header title="ㅋㅋㅋㅋㅋㅋ"></Header>
    <Header title="react 재밌다!"></Header>
    <Main></Main>
    <Footer footer="푸터!!"></Footer>
  </>
}

function 실습2(){
  let userList = [
    {userId : 'user01', userName : '홍길동', age : 30, addr : '인천'},
    {userId : 'user02', userName : '김철수', age : 25, addr : '서울'},
    {userId : 'user03', userName : '박영희', age : 20, addr : '제주도'}
  ]

  let list = [];
  for(let i=0; i<userList.length; i++){
    list.push(<li key={userList[i].userId}>{userList[i].userName}</li>);
  }

  let newList = userList.map(item => {
    return <li key={item.userId}>{item.userName}</li>
  })
  return <>
    <ol>
      {list}
    </ol>
    <ol>
      {newList}
    </ol>
    <ol>
      {userList.map(item => {
        return <li key={item.userId}>{item.userName}</li>
      })}
    </ol>
  </>
}

function App() {
  let userList = [
    {userId : 'user01', userName : '홍길동', age : 30, addr : '인천'},
    {userId : 'user02', userName : '김철수', age : 25, addr : '서울'},
    {userId : 'user03', userName : '박영희', age : 20, addr : '제주도'}
  ]

  return <>
    <table>
      <tr>
        <td>아이디</td>
        <td>이름</td>
        <td>나이</td>
        <td>주소</td>
      </tr>
      {userList.map(item => {
        return <tr key={item.userId}>
          <td>{item.userId}</td>
          <td>{item.userName}</td>
          <td>{item.age}</td>
          <td>{item.addr}</td>
        </tr>
      })}
    </table>
  </>
  ;
}

export default App;
