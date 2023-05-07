import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './Mov.module.css'

export default function MovieDetails() {

   
    
    let [imgs, setimg] = useState([])

    let { id } = useParams()

    const [detalies, setdetails] = useState([])
    async function getTrinding(id) {


        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: { id },
            headers: {
                'X-RapidAPI-Key': '0ee8da8eb8mshffe536985706046p120588jsnbed496d1eb24',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setdetails(response.data)
            setimg(response.data.screenshots)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getTrinding(id)
    }, [])
    return (
        <>
            <div className='row'>

                <h4 class="text-white">Details Game</h4>

                <div class="col-md-5 d-flex flex-column">
                    <img src={detalies.thumbnail} width="80%" alt="" />

                    <div className='my-3 d-flex justify-content-around' >

                        <button className="text-white btn ">free</button>
                        <a className={`  ${style.badge} `} href={detalies.game_url}>Play now</a>

                    </div>



                </div>

                <div class="col-md-7 text-muted">






                    <h2 className='text-white'>Title: {detalies.title}</h2>
                    <h3 className='text-muted'>About  {detalies.title}</h3>




                    <p > {detalies.description}</p>
                    <h4 className='text-white'>Minimum_system_requirements</h4>
                    <h4>{detalies.title}  Screenshots </h4>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                        <div class="carousel-inner">


                    {imgs.map((ele) => <>
                    
                        <div class="carousel-item active ">
                            <img src={ele.image} className='w-100 ' alt="" />
                            </div>
                       
                    </>
                    )}
                         
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <h4 className='mt-3'>Additional Information</h4>
                    <div className='row'>
                        
                        <div className='col-md-4'>
                            <h5>Title</h5>
                            <h6>{detalies.title}</h6>

                        </div>

                        <div className='col-md-4'>
                            <h5>Developer</h5>
                            <h6>{detalies.developer}</h6>

                        </div>

                        <div className='col-md-4'>
                            <h5>Publisher</h5>
                            <h6>{detalies.publisher}</h6>

                        </div>
                        <div className='col-md-4'>
                            <h5>date</h5>
                            <h6>{detalies.release_date}</h6>

                        </div>
                        <div className='col-md-4'>
                            <h5>genre</h5>
                            <h6>{detalies.genre}</h6>

                        </div>
                        <div className='col-md-4'>
                            <h5>platform</h5>
                            <h6>{detalies.platform}</h6>

                        </div>

                    </div>





                </div>
            </div>

        </>
    )
}
