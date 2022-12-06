import React, { useState } from 'react'
import './Difficulty.css'

const difficultyList = ['Grandmother', 'Student', 'Genius', 'Impossible']

const Difficulty = ({ setDifficulty }) => {
  const [difficult, setDifficult] = useState(0)
  setDifficulty(2)
  return (
    <div className="box">
      <small>Difficulty</small>
      <select value={difficult} onChange={setDifficult()}>
        {difficultyList.map((difficult, i) => {
            return <option key={Math.random()} value={i} onClick={() => {setDifficult(i)}} >{difficult}</option>
        })}
      </select>
    </div>
  )
}

export default Difficulty