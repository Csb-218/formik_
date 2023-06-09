import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormControl';



function FormikContainer() {

    const dropdownOptions = [
        {key: 'Select an option', value:''},
        {key : 'Option 1', value:'option1'},
        {key : 'Option 2', value:'option2'},
        {key : 'Option 3', value:'option3'}
    ]
    
    const radioOptions = [
        {key : 'Option 1', value:'roption1'},
        {key : 'Option 2', value:'roption2'},
        {key : 'Option 3', value:'roption3'}
    ]

    const checkboxOptions = [
        {key : 'Option 1', value:'coption1'},
        {key : 'Option 2', value:'coption2'},
        {key : 'Option 3', value:'coption3'}
    ]

    const initialValues = {
        email:'',
        description:'',
        selectOption:'',
        radioOption:'',
        checkboxOption:[],
        birthDate: null

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required !'),
        description: Yup.string().required('Description is required !'),
        selectOption: Yup.string().required('Select an option'),
        radioOption: Yup.string().required('Select an option'),
        checkboxOption: Yup.array().min(1,'Atleast check one box'),
        birthDate: Yup.date().required('Date is required').nullable()

    })
    const onSubmit = (val) => {
        console.log('Form Data', val);
    }


  return (
    <Formik
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        {
            formik => {
                console.log('Formik props',formik)
                return (
                    <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email' />

                        <FormikControl
                            control='textarea'
                            label='Description'
                            name='description' />

                        <FormikControl
                            control='select'
                            label='Select a topic'
                            name='selectOption'
                            options={dropdownOptions} />

                        <FormikControl
                            control='radio'
                            label='Radio topic :'
                            name='radioOption'
                            options={radioOptions} />

                        <FormikControl
                            control='checkbox'
                            label='checkbox topic :'
                            name='checkboxOption'
                            options={checkboxOptions} />
                        
                        <FormikControl
                            control='date'
                            label='Pick a date'
                            name='birthDate'/>

                        <button type="submit" className=" button ">Submit</button>
                    </Form>
                )
            }
        }

    </Formik>
  )
}

export default FormikContainer