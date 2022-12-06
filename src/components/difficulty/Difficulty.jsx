import React, { useState } from 'react'
import './Difficulty.css'

const difficultyList = ['Grandmother', 'Student', 'Genius', 'Impossible']

const Difficulty = ({ setDifficulty }) => {
  const [difficult, setDifficult] = useState(0)

  const handleClick = (e) => {
    setDifficult(e)
    setDifficulty(e)
  }

  return (
    <div className="box">
      <small>Difficulty</small>
      <select value={difficult} onChange={(e) => handleClick(e.target.value)}>
        {difficultyList.map((difficult, i) => {
            return <option key={Math.random()} value={i} >{difficult}</option>
        })}
      </select>
    </div>
  )
}

export default Difficulty