import { Link } from "react-router-dom";

function StudentList(){

    function stuList(){
        fetch("http://localhost:3010/student")
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
    stuList();
    return <>
        <h2>학생 목록!</h2>
        <hr></hr>
        <Link to="/student/add">학생추가</Link>
    </>
}

export default StudentList;