import React from 'react'
import './LifeBox.css'

const heartLive = { "src": "/img/heart.png"}
const heartDie = { "src": "/img/cardiogram.png"}
  
const LifeBox = ({ life = 2 }) => {
  const hearts = [];

  for (let i = 0; i < life; i++) {
    hearts.push(<img key={Math.random()} src={heartLive.src} alt="heartLive"/>);
  }
  for (let i = 0; i < 4 - life; i++) {
    hearts.push(<img key={Math.random()} src={heartDie.src} alt="heartLive"/>);
  }

  return (
    <div className='LifeBox_component'>
      {hearts}
    </div>
  )
}

export default LifeBox