import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const OldFormik = () => {

    const initialValues = {
        name:'',
        email:'',
        channel:''
    }
    const onSubmit = values => {console.log('Form Data',values)}

    const validationSchema = Yup.object({
        name: Yup.string().required('Name required !'),
        email: Yup.string().email('Invalid email format').required("Email is required !"),
        channel: Yup.string().required('Channel required')
     })


    const formik = useFormik({initialValues,onSubmit,validationSchema});

    console.log('Form visited',formik.touched)

    return (
    <form 
    className="p-6 flex flex-col gap-4 border-teal-600 border-2 rounded-md w-3/12 absolute left-1/4 top-40"
    onSubmit={formik.handleSubmit}
    >
       
            <label htmlFor='name'>Name</label>
            <input 
            type='text' 
            name='name' 
            id='name' 
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            className="border-[1px] border-teal-600 rounded-md"
            />
            {formik.touched.name && formik.errors.name?<div>{formik.errors.name}</div> : null}
        
            <label htmlFor='email'>E-mail</label>
            <input 
            type='email' 
            name='email' 
            id='email' 
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className="border-[1px] border-teal-600 rounded-md"/>
            {formik.touched.name && formik.errors.email?<div>{formik.errors.email}</div> : null}

            <label htmlFor='channel'>Channel</label>
            <input 
            type='text' 
            name='channel' 
            id='channel' 
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
            className="border-[1px] border-teal-600 rounded-md"/>
            {formik.touched.name && formik.errors.channel?<div>{formik.errors.channel}</div> : null}

            <button type='submit' className="bg-teal-400 text-white w-4/12 border-teal-600 border-2 rounded-md">Submit</button>
           

    </form>
  )
}

export default OldFormik