import React,{Fragment} from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';


function RadioButtons(props) {
    const {label, name, options, ...rest} = props

  return (
    <div className='form-control'>
        <label>{label}</label>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                    return options.map(option => {
                        return (
                        <Fragment key={option.key} >
                            <div className='flex gap-1'>
                            
                            <input 
                            type='radio' 
                            id={option.value} 
                            {...field}
                            value={option.value}
                            checked={field.value === option.value} 
                            />
                            <label htmlFor={option.value}>{option.key}</label>
                            </div>

                        </Fragment>
                        )
                    })

                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError}/>

    </div>
  )
}

export default RadioButtons