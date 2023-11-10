
import '../App.css';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import SignUp from './SignUp';
import { ToastContainer } from 'react-toastify';
const App: React.FC = () => {
   
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/dashboard' element={<ProtectedRoute children={<Dashboard />}/> } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
