import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';


function App() {
  const studentList = <StudentList></StudentList>
  const classInfo = <ClassInfo></ClassInfo>
  return (
    <main>
      <h1>Attendance: First student list</h1>
      {studentList}
      <h2>Class Info!</h2>
      {classInfo}
    </main>
  );
}

export default App;
