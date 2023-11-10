import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import Input from './Input';
import * as Yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import { signUp } from '../apis/signup';
import { toast } from 'react-toastify';

const SignUp = () => {

  const handleSubmit = async (values: FormikValues) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      await signUp(payload)
        .then((res) => {
            toast.success('Account created successfully');
          <Navigate to={'/'}/>
        })
        .catch((err: any) => {
          console.log(err, 'error');
          toast.error(err.response.data.error);
        });
    } catch (err) {
      console.log(err, 'Error');
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), undefined],
      'Passwords must match',
    ),
  });

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
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
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-gray-600 text-sm font-medium mb-2'
                >
                  Password
                </label>
                <Input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='w-full border rounded px-3 py-2 outline-none'
                  placeholder='Your password'
                  value={values.confirmPassword}
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
            Already have a account?{' '}
            <Link to='/' className='text-blue-500 hover:underline'>
              Login here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
