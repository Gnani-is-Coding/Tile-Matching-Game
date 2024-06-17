import React from 'react'

import './Board.css'

const tilesImages = [
    {id:0,name:'strawberries',
        imageUrl: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:1,name:'pineapple',
        imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:2,name:'oranges',
        imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:3,name:'mosambhi',
        imageUrl: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:4,name:'apple',
        imageUrl: 'https://images.unsplash.com/photo-1600423115367-87ea7661688f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:5,name:'papaya',
        imageUrl: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    
        {id:6,name:'strawberries',
            imageUrl: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id:7,name:'pineapple',
            imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id:8,name:'oranges',
            imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id:9,name:'mosambhi',
            imageUrl: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id:10,name:'apple',
            imageUrl: 'https://images.unsplash.com/photo-1600423115367-87ea7661688f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id:11,name:'papaya',
            imageUrl: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
              
]

function Board() {
  return (
    <div className='container'>
    <h1 className='heading'>React Tiles</h1>

    <div className='score-time-container'>
    <p className='heading'>Score: 12</p>
    <p className='heading'>Time: 10:00</p>
    </div>

    <div className='tiles-container'>
    <div className='welcome-container'>
    <h1 style={{fontSize: '18px' }}><span style={{textDecoration: 'underline'}}>Welcome</span>, Gnani.🔥🔥</h1>
    </div>

    <div className='tiles-items-container'>
    {tilesImages.map(obj =>(
        <li key={obj.id} className='tile-card'>   
            <img src={obj.imageUrl} alt={obj.name} className='tile-img'/>
        </li>
    ))}
    </div>
    
    </div>
  </div>
  )
}

export default Board