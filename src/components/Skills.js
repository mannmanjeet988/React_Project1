import React from 'react'
import skillData from '../Data/skillData'

const Skills = ({skillName}) => {
  return (
    <div className="skills"> 
    <button>{skillName}</button>
    </div>
  )
}

export default Skills