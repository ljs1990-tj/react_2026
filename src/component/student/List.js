import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

function StudentList(){
    let [list, setList] = useState([]);
    function stuList(){
        fetch("http://localhost:3010/student")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data.list);
            });
    }
    useEffect(()=>{
        stuList();
    }, []);
    return <>
        <h2>학생 목록!</h2>
        <div>
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