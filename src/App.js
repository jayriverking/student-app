// import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';


function App() {
  const studentData = [
    {
        nameData: 'Ada',
        emailData: 'ada@dev.org'
    },
    {
        nameData: 'Soo-ah',
        emailData: 'sooah@dev.org'
    },
    {
        nameData: 'Chrissy',
        emailData: 'chrissy@dev.org'
    }
];

  // const studentList = <StudentList></StudentList>
  // const classInfo = <ClassInfo></ClassInfo>
  return (
    <main>
      <h1>Attendance: First student list</h1>
      <StudentList students={studentData}></StudentList>
      <h1>Class Info!</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
    </main>
  );
}

export default App;
