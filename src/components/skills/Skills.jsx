import React from 'react'
import './Skills.css'

const SkillsList = [
  { "src": "/img/tarot-card.png", "text": 'Flip 3 random cards for 1s',"have" : true, "times" : 5},
  { "src": "/img/lupa.png", "text": 'Flip 1 row for 1s',"have" : false, "times" : 0},
  { "src": "/img/hat.png", "text": 'Flip 2 rows for 1s',"have" : true, "times" : 2},
  { "src": "/img/crystal-ball.png", "text": 'Flip all cards for 1.5s', "have" : false, "times" : 0},
]
const shuffledCards = [...SkillsList]
        .map((skill) => ({ ...skill, have: true, times: 0 }))

const Skills = () => {
  return (
    <div className='skills'>
      {SkillsList.map((skill,i) => {
        return (
            <div key={i} title={skill.text} className={skill.have === true ? 'singleSkill skillOn' : 'singleSkill skillOff'}>
              <img src={skill.src} alt="skill" />
              <div className='time'>
                <p>{skill.times}</p>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default Skills