import React from 'react';
import Project from './Project';

function Projects(props){
    return(
        <div>
            <h1>Projects</h1>
            <Project projectname={"test1"} id={"1.0"} HW1={10} HW2={20} />
            <Project projectname={"test2"} id={"2.0"} HW1={10} HW2={20} />
        </div>
    );
}

export default Projects