import React, { useMemo } from 'react';
import { useProject } from './ProjectContextProvider';
import ProjectDetails from './ProjectDetails';
import { Link } from 'react-router-dom';
export default function ListProjects() {
  const {state, dispatch} = useProject();
  const showProjectDetails = (id) => {
    dispatch({type:'SET_ACTIVE_PROJECT_ID', payload: id});
  }
  
  

  return (
    <div>
      {state.projects.map(project => (
        <div key={project.projectId}>
          {project.title}
          status: {project.status}%
          <Link to={'/projectDetails'} onClick={()=>showProjectDetails(project.projectId)}>Show Details</Link>
        </div>
      ))}
    </div>
  )
}
