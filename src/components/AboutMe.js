import React from 'react'
import '../style.css'
//import {picture1} from '../assets/girl.jpg'
const picture1 = require("../assets/girl.jpg");


const AboutMe = () => {
  return (
    <div className="aboutMe">
    <h1 align="center">AboutMe</h1>
    <img src={picture1} alt="girl"/>
    <p>
      Dedicated and innovative software developer with a passion for crafting efficient and elegant solutions to complex challenges. Proficient in a diverse range of programming languages and technologies, with a strong foundation in algorithm design and system architecture. Adept at collaborating with cross-functional teams to deliver high-quality software products that meet user needs. Continuously driven to stay up-to-date with industry trends and emerging technologies, ensuring the delivery of cutting-edge solutions. Exceptional problem-solving skills combined with a keen eye for detail, reflecting a track record of successfully translating concepts into functional, user-friendly applications.
    </p>
    </div>
  )
}

export default AboutMe