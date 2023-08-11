import React from "react";
import '../style.css'

const Project = ({projectName,projectLink,desc}) =>{
    return (
       <div className="project">
        <div className="projectInnerDiv"> 
            <a href={projectLink}>{projectName}</a>
            {/* <h3>{projectName}</h3>
            <p>{projectLink}</p> */}
            <p>{desc}</p>
         </div>
       </div>
    )
}

export default Project;