import React, { useState } from 'react'

import './Name.css'

function Name({handlePlayClick}) {
  const [inputName, setName] = useState('')

  const onCLickPlay = ()=>{
    localStorage.setItem("username", inputName)
    handlePlayClick('Board')
  }

  return (
    <div className='container'>
      <h1 className='heading'>React Tiles</h1>

      <div className='name-card-section'>
      <h1 className='heading'>Enter Your Name</h1>

      <input type="text" value={inputName} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className='name-container'/>
      <button className='play-btn' onClick={onCLickPlay}>Play</button>
      </div>
    </div>
  )
}

export default Name