import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

function StudentList(){
    let [list, setList] = useState([]);
    let [keyword, setKeyword] = useState("");
    let keywordRef = useRef("");
    function stuList(){
        fetch("http://localhost:3010/student?keyword="+keyword)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data.list);
            });
    }
    useEffect(()=>{
        stuList();
    }, [keyword]);
    return <>
        <h2>학생 목록!</h2>
        <div>
            {/* 이름 검색 */}
            {/* <input ref={keywordRef}></input> */}
            <input value={keyword} onChange={(e)=>{
                setKeyword(e.target.value);
            }}></input>
            <button onClick={()=>{
                stuList();
            }}>검색</button>
            <table>
                <tr>
                    <th>학번</th>
                    <th>이름</th>
                    <th>학과</th>
                    <th>학년</th>
                </tr>
                {list.map(item => {
                    return <tr>
                        <td>{item.STU_NO}</td>
                        <td>{item.STU_NAME}</td>
                        <td>{item.STU_DEPT}</td>
                        <td>{item.STU_GRADE}</td>
                    </tr>
                })}
            </table>
        </div>

        <hr></hr>
        <Link to="/student/add">학생추가</Link>
    </>
}

export default StudentList;