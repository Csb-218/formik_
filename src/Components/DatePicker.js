import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError';


function Datepicker(props) {
    
    const {label,name} = props;
    console.log(props);
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field name={name} >
            {
                ({form,field})=> {
                    const {setFieldValue} = form;
                    const {value} = field;
                    return(
                        <DatePicker
                        className='container'
                        id={name}
                        {...field}
                        
                        selected={value}
                        onChange={val => setFieldValue(name,val)}
                        />
                    )
                }
            }

        </Field>
        <ErrorMessage name={name} component={TextError}/>

    </div>
  )
}

export default Datepicker