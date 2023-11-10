import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Input: React.FC<{
  type: string;
  id: string;
  className: string;
  placeholder: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {

  return (
    <>
      <Field
        type={props.type}
        name={props.name}
        id={props.id}
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
      <div className='text-red-700 '>
        <ErrorMessage name={props.name} /> 
      </div>
    </>
  );
};
export default Input;
