import React from "react";

import './style.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from "./components/Skills";
import skillData from "./Data/skillData";
// import expData from "./Data/projectData";
import projectData from "./Data/projectData";
import Project from "./components/Project";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <AboutMe />

     {/* skills section */}
       <hr/>
        <h1 align="center" className="skillsHeading"> Skills</h1>
     <div className="skills-section">  
        {
          skillData.map((item,index)=>(
              <Skills skillName={item} />
          ))
        }
      </div>

      {/* project section */}
      <hr/>
          <h1 align="center" className="projectHeading"> Projects</h1>
      <div className="project-section">    
         {
          projectData.map((item,index)=>(
              <Project  projectLink={item.projectLink}  projectName={item.projectName}  desc={item.desc}/>
          ))
          }
      </div>
     <Experience />
      <Footer />
    </div>
  );
}

export default App;
