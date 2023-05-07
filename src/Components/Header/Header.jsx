import React from 'react'
import img from '../../photo/wraper.png'

export default function Header() {
  return (
    <header style={{backgroundImage : `url(${img})`,height:'40vh' , width:'100%'}}>
        <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
        <h3 className='text-white'>Find & track the best <span className='text-info'>free-to-play</span> games!</h3>
        <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <button type="button" class="btn btn-secondary">Browse Games</button>



        </div>
         </header>
  )
}
