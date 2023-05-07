import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../photo/logo.png'

export default function Navbar({ userdata, logout }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <Link className="navbar-brand text-light" to='/'><div className='d-flex me-5 '><img src={img} width="80" alt="" /><h5 className='mt-3'>GameOver</h5></div></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">



            {userdata ? <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to='All'>All</Link>
              </li>
{/* 

              <li className="nav-item">
                <Link className="nav-link active" to='Platform'>Platform</Link>
              </li> */}

                <li class="nav-item dropdown mt-2">
                  <Link class=" dropdown-toggle text-decoration-none text-white" to='Platform' data-bs-toggle="dropdown" aria-expanded="false">
                  Platform
                  </Link>
                  
                  <ul  class="dropdown-menu dropdown-menu-dark ">
                    <li><Link class="dropdown-item"to='pc' >pc</Link></li>
                    <li><Link class="dropdown-item" to='browser'  >browsers</Link></li>
                  </ul>
                </li>

                
                <li class="nav-item dropdown mt-2">
                  <Link class=" dropdown-toggle text-decoration-none text-white" to='Sortedby' data-bs-toggle="dropdown" aria-expanded="false">
                  Sortedby
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" to="relasedata">release-data</Link></li>
                    <li><Link class="dropdown-item" to="Pobularity">popularity</Link></li>
                    <li><Link class="dropdown-item" to="Alhapet">alphabetical</Link></li>
                    <li><Link class="dropdown-item" to="Relevance">relevance</Link></li>
                  </ul>
                </li>
                
                <li class="nav-item dropdown mt-2">
                  <Link class=" dropdown-toggle text-decoration-none text-white" to='Categores' data-bs-toggle="dropdown" aria-expanded="false">
                  Categores
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">pc</a></li>
                    <li><a class="dropdown-item" href="#">browsers</a></li>
                  </ul>
                </li>






            </ul>

              : ''}


            <ul className="navbar-nav mb-2 mb-lg-0 ">





              {userdata ? <li className="nav-item">
                <span className="nav-link" onClick={logout}  >Logout</span>
              </li> : <>

                <li className="nav-item">
                  <Link className="nav-link active" to='register'>Register</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to='login'>Login</Link>
                </li>
              </>}




            </ul>
          </div>
        </div>
      </nav >
    </div >
  )
}
