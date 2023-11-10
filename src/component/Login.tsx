import Input from './Input';
import { Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { login } from '../apis/login';
import {  Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useEffect } from 'react';
import { loginSlice } from '../store/slices/auth.slice';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleSubmit = async (values: FormikValues )=>{
      try{
        const payload = {
          email: values.email,
          password: values.password
      }
      await login(payload).then((res: any )=>{
        localStorage.setItem('login', 'true')
        
        dispatch(loginSlice({
          user: payload.email,
          token: res.token,
          isAuthenticated: true
        }))
        toast.success('Login successfully ');
        navigate('/dashboard');
        toast.success('Login successfully ');
        return navigate('/dashboard')
      }).catch((err:any)=>{
        toast.error(err.response.data.error);
      })
        
      } catch(err) {
        console.log(err , 'Error')
      }
    }
    const validationSchema = Yup.object({
      email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    })

    useEffect(() => {
      const isLogin = localStorage.getItem('login')
      if(isLogin) {
        navigate('/dashboard')
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // if (isLogin) {
    //   return <Navigate to='/dashboard'/>
    // }

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-8 rounded shadow-md w-96'>
          <h2 className='text-2xl font-semibold mb-4'>Login</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className='mb-4'>
                  <label
                    htmlFor='email'
                    className='block text-gray-600 text-sm font-medium mb-2'
                  >
                    Email
                  </label>
                  <Input
                    type={'email'}
                    name='email'
                    id={'email'}
                    className={'w-full border rounded px-3 py-2 outline-none'}
                    placeholder={'Your email'}
                    handleChange={handleChange}
                    value={values.email}
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='password'
                    className='block text-gray-600 text-sm font-medium mb-2'
                  >
                    Password
                  </label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    className='w-full border rounded px-3 py-2 outline-none'
                    placeholder='Your password'
                    value={values.password}
                    handleChange={handleChange}
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <div className='mt-4'>
            <p className='text-sm text-gray-600'>
              Don't have an account?{' '}
              <Link to='/sign-up' className='text-blue-500 hover:underline'>
              Sign up here.
            </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
