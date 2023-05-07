import React, { useState } from 'react'
import img from '../../photo/gaming.ebaf2ffc84f4451d.jpg'
import style from './ReStyle.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';









export default function Register() {
  
  const navigate = useNavigate()
 let [errors , seterror] = useState()
 let [loading,setloading] = useState(false)


 let validate = Yup.object({
  name : Yup.string().required('name is req').min(3,'min is 3').max(15,'max is 15'),
  email : Yup.string().required('email is req').email('email.invalid'),
  password : Yup.string().required('pass is req').matches(/^[A-Z][a-z0-9]{5,15}$/,'pass must statr with capital litter'),
  rePassword : Yup.string().required('repass is req').oneOf([Yup.ref('password')],'repass is incorect'),
  phone : Yup.string().required('phone is req').matches(/^01[0125][0-9]{8}$/,'phone in valied')

 })

  let formik = useFormik({
    initialValues :{
      name : "" ,
      email : '' ,
      password : '' ,
      rePassword : ''  ,
      phone : ' ',
    },
    validationSchema : validate
    ,
    onSubmit: sendregisterdata
  });
 async function sendregisterdata(values){

  try {
    setloading(true);

    
  let {data} = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',values)
  if(data.message == 'success')
  navigate('/login')
  setloading(false)
  console.log(data);
    
  } catch (error) {
    seterror(error.response.data.message)
    setloading(false)

    console.log(error.response.data.message)

    
  }
    
  }






  return (
    <>
      <div className='container'>

        <div className='row my-5'>

          <div className='col-md-6'>
            <img src={img} width='100%' alt="" />

          </div>
          <div className={`col-md-6 ${style.cart}`}>
            <h2 className='text-center text-muted my-1'>Create My Acount !</h2>
            <form onSubmit={formik.handleSubmit}>

              <input className={`form-control my-3 ${style.bac}`} type="text" placeholder="FirstName" name='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} aria-label="default input example" />
              {formik.errors.name && formik.touched.name ? <p className='alert alert-info'>{formik.errors.name}</p> : ''}
              <input className={`form-control my-3 ${style.bac}`} type="email" placeholder="Email adress" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} aria-label="default input example" />
              {formik.errors.email && formik.touched.email ? <p className='alert alert-info'>{formik.errors.email}</p> : ''}

              <input className={`form-control my-3 ${style.bac}`} type="Password" placeholder="password" onBlur={formik.handleBlur} value={formik.values.password} name='password' onChange={formik.handleChange} aria-label="default input example" />
              {formik.errors.password && formik.touched.password ? <p className='alert alert-info'>{formik.errors.password}</p> : ''}

              <input className={`form-control my-3 ${style.bac}`} type="Password" placeholder="rePassword" onBlur={formik.handleBlur} value={formik.values.rePassword} name='rePassword' onChange={formik.handleChange} aria-label="default input example" />
              {formik.errors.rePassword && formik.touched.rePassword ? <p className='alert alert-info'>{formik.errors.rePassword}</p> : ''}

              <input className={`form-control my-3 ${style.bac}`} type="tel" placeholder="phone" onBlur={formik.handleBlur} value={formik.values.phone} name='phone' onChange={formik.handleChange} aria-label="default input example" />
              {formik.errors.phone && formik.touched.phone ? <p className='alert alert-info'>{formik.errors.phone}</p> : ''}



              <button type='submit' className='btn btn-secondary form-control form-control-lg'> Create acount</button>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}
