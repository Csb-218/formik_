import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';

function TextArea(props) {
    const {label, name ,...rest} = props;

  return (
    <div className=" w-1/4 m-2 relative left-1/4 ">
            <label htmlFor={name} >{label} : </label>
            <Field id={name} as='textarea' name={name} {...rest} className="border-fuchsia-600 border-[0.5px] rounded w-full"/>
            <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default TextArea