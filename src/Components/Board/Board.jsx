import React, { useEffect, useState } from 'react'

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
    const [imagesObj, setImagesObj] = useState([])
    const [currentView, setCurrentView] = useState('boardView')
    const [matchedList, setMatchedList] = useState([])
    const [flippedList, setFlippedList] = useState([])
    const [score, setScore] = useState(0)
    const [time, setTime] = useState('5:00')

    const onFlipCard = (index) => {
       
        {/*#TODO 
        1. SELECTED cards should turn around, Matched cards will be displayed 
        2. select 2 cards, if they both match, inc score add them to matchedList
        3. if they dont match, dec score.
        4. 
        */}
        const imageName = imagesObj.filter(obj => obj.id === index)[0].name

        if (matchedList.includes(imageName)){
            return
        }
        const currentFLippedTiles = [...flippedList, index]
        setFlippedList(currentFLippedTiles)

        console.log(flippedList, ";flipped")

        if (currentFLippedTiles.length === 2){
            const storedFlippedImg = imagesObj.filter(obj => obj.id === flippedList[0])[0].name

            if (storedFlippedImg === imageName){
                console.log(storedFlippedImg)
                setMatchedList([...matchedList, imageName])
                setScore(score + 1)
                setFlippedList([])
            }
            else {
                setScore(score - 1)
                setTimeout(() => {
                    setFlippedList([])
                },1000)   
                //schedular is for removing flippingList variables after sometime so that they a=can be visible for som etime in output
                
            }
        }
    }
    

    useEffect(() => {
        setImagesObj(tilesImages.sort(() => Math.random() - 0.5))
    },[])

    useEffect(() => {
        const timerId = setInterval(() => {
            let mins = parseInt(time.split(':')[0])
            let secs = parseInt(time.split(':')[1])

            if (secs === 0 ){
                secs = 59
                if (mins > 0){
                    mins = mins - 1
                }
            }
            else {
                secs = secs - 1
            }
            setTime(`${mins}:${secs < 10 ? `0${secs}`:`${secs}`}`) 

        },1000)

        return () => {
            clearTimeout(timerId)
        }
    })

    // console.log(matchedList)

  return (
    <div className='container'>
    <h1 className='heading'>React Tiles</h1>

    <div className='score-time-container'>
    <p className='heading'>Score: {score}</p>
    <p className='heading'>Time: {time}</p>
    </div>

    <div className='tiles-container'>
    <div className='welcome-container'>
    <h1 style={{fontSize: '18px' }}><span style={{textDecoration: 'underline'}}>Welcome</span>, {localStorage.getItem("username")}.🔥🔥</h1>
    </div>

    {currentView === 'scoreView' ? (
        <div className='score-card-container'>
            <h1 className='heading'>Game Finished!</h1>

            <h1 className='score-heading'>Score: 12</h1>
            <h1 className='score-heading'>Time Taken: 10:20</h1>
            
        </div>
    ): (
        <div className='tiles-items-container'>
        {imagesObj.map(obj =>(
            <li key={obj.id} className='tile-card' onClick={() => onFlipCard(obj.id)}>
                <img src={obj.imageUrl} alt={obj.name} className={matchedList.includes(obj.name) || flippedList.includes(obj.id) ? 'tile-img-active':'tile-img'}/>
            </li>
        ))}
        </div>
    )}
    
    
    </div>
  </div>
  )
}

export default Board