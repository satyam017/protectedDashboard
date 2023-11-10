import React from 'react'
import { logoutSlice } from '../store/slices/auth.slice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard: React.FC = ()=> {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between">
      <div>
        Dashboard  
      </div>
      <button onClick={()=>{
        localStorage.removeItem('login')
        dispatch(logoutSlice())
        toast.success('Logout successfully ');
        return navigate('/');
      }} className="bg-white p-1 rounded text-blue-500 ">Logout</button>
    </div>
  )
}

export default Dashboard