import img from '../../photo/gaming.ebaf2ffc84f4451d.jpg'
import imge from '../../photo/logo.png'
import style from './Login.module.css'
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function login({savecurntuser}) {
  const navigate = useNavigate()
  
 let [errors , seterror] = useState()
 let [loading,setloading] = useState(false)


 let validate = Yup.object({
  email : Yup.string().required('email is req').email('email.invalid'),
  password : Yup.string().required('pass is req').matches(/^[A-Z][a-z0-9]{5,15}$/,'pass must statr with capital litter'),

 })

  let formik = useFormik({
    initialValues :{
      email : '' ,
      password : '' ,
    },
    validationSchema : validate
    ,
    onSubmit: logindata
  });
 async function logindata(values){

  try {
    setloading(true);

    
  let {data} = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',values)
  if(data.message == 'success'){
    localStorage.setItem('usertoken', data.token)
    savecurntuser()
    
  navigate('/')
  setloading(false)
  console.log(data);
    

  }
  
  } catch (error) {
    seterror(error.response.data.message)
    setloading(false)

    console.log(error.response.data.messagemessage)

    
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
            <div className='text-center'>

              <img src={imge} className={style.imgees} alt="" />
              <h2 className='text-center text-muted my-1'>Login in to Gameover</h2>

            </div>
            <form onSubmit={formik.handleSubmit}>

              <input className={`form-control my-3 ${style.bac}`} type="email" placeholder="Email adress" name='email' onChange={formik.handleChange} value={formik.values.email} aria-label="default input example" />
              <input className={`form-control my-3 ${style.bac}`} type="Password" placeholder="password" value={formik.values.password} name='password' onChange={formik.handleChange} aria-label="default input example" />



              <button type='submit' className='btn btn-secondary form-control form-control-lg'> Login </button>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}
