import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Menu from './Menu';
import App from './day3/App2';
import Test from './day3/App1';
import Main from './Main';
import StudentList from './component/student/List';
import StudentAdd from './component/student/Add';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/student/list" element={<StudentList />} />
        <Route path="/student/add" element={<StudentAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;