import React, { useState } from 'react'
import axios from 'axios';
import  {createRoot}  from 'react-dom/client';
import { Link } from 'react-router-dom';




export default function Alphbet() {
  
  let [Plat,setPlat]=useState([])
  
const options = {
  method: 'GET',
  url: `https://free-to-play-games-database.p.rapidapi.com/api/games`,
  params: {'sort-by': 'alphabetical'},
  headers: {
    'X-RapidAPI-Key': '0ee8da8eb8mshffe536985706046p120588jsnbed496d1eb24',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	// console.log(response.data);
  setPlat(response.data)
}).catch(function (error) {
	console.error(error);
});

// let ullist = createRoot(document.getElementById('root'));
// for(let i = 0 ; i<ullist.length; i++){
//   ullist[i].addEventListener('click',function(e){
//     Plat(e.target.innerHTML)
//     console.log(e.target.innerHTML);
//   })
// }



  return (
    
    <div className='row'>
      {Plat.map((ele,index)=> 

  
<div class="col-lg-3 col-md-6 mahm my-3">
<Link className='text-decoration-none text-white' to={`/moviedetails/${ele.id}`}>

<div className='card'  >
  <img src={ele.thumbnail}   class="w-100 p-3 " alt="..."/>
  <div className="card-body" >
    <div className="d-flex justify-content-between align-items-center ">
      <h6 className="card-title ">{ele.title.split(" ", 2)}</h6>
      <button className="text-white btn ">free</button>

    </div>
    <p className="card-text ">{ele.short_description.split(" ", 3)}</p>
  </div>
  <hr className=""/>
  <div className="d-flex justify-content-between ">
    <span className="badge badge-color">{ele.genre}</span>
    <span className="badge badge-color">{ele.platform}</span>
  </div>
</div>
</Link>

</div>
      )}
    </div>
    
    
  )
}



