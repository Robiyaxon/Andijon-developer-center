import React from 'react'
import  ProjectHeader  from './ProjectHeader';
import {ProjectName} from "./ProjectName.jsx";
 const MainProject = (props) => {
  return (
    <div>
        <ProjectHeader map2={props.map2}/>
        <ProjectName map2={props.map2} />
    
    </div>
  )
}
export default MainProject;