import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import All from './Components/All/All';
import Platform from './Components/Platform/Platform';
import Sortedby from './Components/Sortedby/Sortedby';
import Categores from './Components/Categores/Categores';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRow from './Components/Protected/ProtectedRow';
import MovieDetails from './Components/Moviedetalis/Moviedetalis';
import Plat from './Components/Plat/Plat';
import Browser from './Components/Browser';
import Relasedata from './Components/Relasedata';
import Pobularity from './Components/Pobularity';
import Relevance from './Components/Relvance';
import Alphbet from './Components/Alphbet';





function App() {
  
  useEffect(()=>{
    if(localStorage.getItem('usertoken') !==null){
      savecurntuser()
    }
  },[])


  const [userdata,setuserdata] = useState(null)
  
  function savecurntuser(){
    let token = localStorage.getItem('usertoken');
    let decoded = jwtDecode(token)
    setuserdata(decoded);
    console.log(userdata);


  }

let routers = createBrowserRouter([
  { path: "", element: <Layout userdata={userdata} setuserdata={setuserdata} /> , children: [
    {path:'home'  , element:<ProtectedRow><Home/></ProtectedRow> },
    {path:"All" , element: <All/>},
    // {path:"Platform" , element: <ProtectedRow><Platform/></ProtectedRow> },
    {path:"pc" , element: <ProtectedRow><Plat></Plat></ProtectedRow> },
    {path:"browser" , element: <ProtectedRow><Browser></Browser></ProtectedRow> },
    {path:"Sortedby" , element: <ProtectedRow><Sortedby/></ProtectedRow>},
    {path:"relasedata" , element: <ProtectedRow><Relasedata></Relasedata></ProtectedRow>},
    {path:"Pobularity" , element: <ProtectedRow><Pobularity></Pobularity></ProtectedRow>},
    {path:"Relevance" , element: <ProtectedRow><Relevance></Relevance></ProtectedRow>},
    {path:"Alhapet" , element: <ProtectedRow><Alphbet></Alphbet></ProtectedRow>},
    {path:"Categores" , element:<ProtectedRow> <Categores/></ProtectedRow>},
    {path:"moviedetails/:id" , element: <ProtectedRow><MovieDetails></MovieDetails></ProtectedRow> },

    {path:"login" , element: <Login savecurntuser={savecurntuser}/>},
    {path: 'register', element: <Register/>},
    {path:"*" , element: <Notfound/>},
  ]}
])

  return <RouterProvider router={routers}></RouterProvider>
}
export default App;


