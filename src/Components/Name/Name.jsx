import React from 'react'

import './Name.css'

function Name() {
  return (
    <div className='container'>
      <h1 className='heading'>React Tiles</h1>

      <div className='name-card-section'>
      <h1 className='heading'>Enter Your Name</h1>

      <input type="text" placeholder="Enter your name" className='name-container'/>
      <button className='play-btn'>Play</button>
      </div>
    </div>
  )
}

export default Name