import React, { useState } from 'react';
import './Projects.css';
import './App.css';

function Project({projectname, id, HW1, HW2, Amount}){
  const [projects, setProjects] = useState([

    
  ]);
  console.log(projectname);
  return (
    <div className="Project">
      <table>
        <thead>
          <tr>
            <th>ProjectName</th>
            <th>ProjectID</th>
            <th>Hardware Set #1</th>
            <th>Hardware Set #2</th>
            <th>Amount</th>
            <th>CheckIn/CheckOut</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td>{projectname}</td>
              <td>{id}</td>
              <td>{HW1}</td>
              <td>{HW2}</td>
              <td>
                <input type="number" value={Amount} />
              </td>
              
              <td>
                <button> HW1 Check In</button>
                <button > HW1 Check Out</button>
              </td>
              <td>
                <button> HW2 Check In</button>
                <button > Hw2 Check Out</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Project;