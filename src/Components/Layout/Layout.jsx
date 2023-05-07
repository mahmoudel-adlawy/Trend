import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';


export default function Layout({userdata ,setuserdata}) {
   
let navigate = useNavigate()
function logout(){
  localStorage.removeItem('usertoken')
  setuserdata(null)
  navigate('/')
}
  return <>
    <Navbar logout={logout} userdata={userdata} />
      <Outlet></Outlet>
  </>
}
