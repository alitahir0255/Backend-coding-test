import './App.css';
import UserAttendance from 'pages/Attendance';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className='App'>
      <UserAttendance />
      <ToastContainer />
    </div>
  );
}

export default App;
