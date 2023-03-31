import React,{useState} from 'react';
import {Formik, Form, Field, ErrorMessage,FieldArray} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const NewFormik = () => {

    const initialValues = {
        name:'',
        email:'',
        channel:'',
        social:{
            facebook:'',
            twitter:''
        },
        phone:['',''],
        phNumbers:[''],
        comment:''
    }

    const savedValues = {
        name:'Rajiv',
        email:'rajiv@gmail.com',
        channel:'Aaj Tak',
        social:{
            facebook:'',
            twitter:''
        },
        phone:['',''],
        phNumbers:[''],
        comment:'Jawaan hai'
    }

    const [formValues,setformValues] = useState(initialValues)

    const onSubmit = (values,onSubmitProps) => {
        console.log('Form Data',values)
        console.log('onSubmitProps',onSubmitProps)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name required !'),
        email: Yup.string().email('Invalid email format').required("Email is required !"),
        channel: Yup.string().required('Channel required'),
        //comment: Yup.string().required(' required')
     })

     //Field Level Validation
     const validatecomment = value =>{
        let error;
        if(!value){error = 'Required comment'}
        return error 
     }


    return (


        <Formik 
        initialValues={formValues } 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
        //validateOnChange={false}
        //validateOnBlur={false}
        //validateOnMount
        enableReinitialize
        >
        {
            formik =>{
                console.log('Formik props',formik)
                return(
                    <Form className="p-6 flex flex-col gap-4 border-fuchsia-600 border-2 rounded-md w-96 absolute left-1/4 top-40" >

                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        name='name'
                        id='name'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1"
                    />
                    <ErrorMessage name='name' component={TextError} />
        
                    <label htmlFor='email'>E-mail</label>
                    <Field
                        type='email'
                        name='email'
                        id='email'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1" />
                    <ErrorMessage name='email' component={TextError}/>
        
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        name='channel'
                        id='channel'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1" />
                    <ErrorMessage name='channel'component={TextError} />
        
                    <label htmlFor='facebook'>Facebook Profile :</label>
                    <Field
                        type='text'
                        name='social.facebook'
                        id='facebook'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1" />
                    <ErrorMessage name='social'component={TextError} />
        
                    <label htmlFor='twitter'>Twitter Profile :</label>
                    <Field
                        type='text'
                        name='social.twitter'
                        id='twitter'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1" />
                    <ErrorMessage name='social'component={TextError} />
        
                    <label htmlFor='phoneNumber'>Phone number :</label>
                    <Field
                        type='number'
                        name='phone[0]'
                        id='phoneNumber'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1" />
                    <ErrorMessage name='social'component={TextError} />
        
                    <label htmlFor='tollFree'>Toll Free :</label>
                    <Field
                        type='text'
                        name='phone[1]'
                        id='twitter'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1" />
                    <ErrorMessage name='social'component={TextError} />
        
                    <label htmlFor='PhNumbers'>phNumbers :</label>
                    {/* <FieldArray name='phNumbers' className="border-[1px] border-fuchsia-600 rounded-md p-1">
                        {
                            fieldArrayprops =>{
                                // console.log('fieldArrayProps',fieldArrayprops)
                                const{ push ,remove , form} = fieldArrayprops;
                                const{values} = form;
                                const{phNumbers} = values;
                                //console.log("Form Errors",form.errors);
                                return(
                                    <div>
                                        {
                                            phNumbers.map((phNumber,index)=>(
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`} className="border-[1px] border-fuchsia-600 w-auto rounded-md p-1" />
                                                    {index>0 && <button type='button' className="button" onClick={()=>remove(index)}> - </button>}
                                                    
                                                    <button type='button' className="button" onClick={()=>push('')}> + </button>
                                                </div>    
        
                                            ))
                                        }
                                    </div>
                                )
        
                            }
                        }
        
                    </FieldArray>
                    <ErrorMessage name='social'component={TextError} /> */}
        
                    <label htmlFor='comment'>Comment:</label>
                    <Field
                        as='textarea'
                        name='comment'
                        id='comment'
                        className="border-[1px] border-fuchsia-600 rounded-md p-1"
                        validate={validatecomment} />
                    <ErrorMessage name='comment' component={TextError}/>
        
        
        
                    <button type='submit' className='button' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    <button type='reset' className='button' >Reset</button>
                    <button 
                    type='button'
                    className='button' 
                     //disabled={!formik.isValid || formik.isSubmitting}
                    onClick={()=>setformValues(savedValues)}>Load Saved Data</button>
                    {/* <button type='button' className='button' onClick={()=>formik.validateField('comment')}>Validate comment</button>
                    <button type='button' className='button' onClick={()=>formik.validateForm()}>Validate all</button>
                    <button type='button' className='button' onClick={()=>formik.setFieldTouched('comment')}>Visit comment</button>
                    <button type='button' className='button' onClick={()=>formik.setTouched({name:true,email:true,channel:true,comment:true})}>Visit all</button> */}
        
                </Form>
                )
            }
        }

        
        </Formik>
    )
}

export default NewFormik