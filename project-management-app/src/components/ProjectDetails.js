import React  from 'react';
import { Link} from 'react-router-dom';
import { useProject } from './ProjectContextProvider';
export default function ProjectDetails() {
  const {state, dispatch} = useProject();
  const project = state.projects.find(project => project.projectId === state.activeProjectId);
  const deleteProject = (id) => {
    dispatch({type:'DELETE_PROJECT', payload: id});
    dispatch({type:'SET_ACTIVE_PROJECT_ID', payload: null});
  }
  if(!project) return null;

  return (
    <div>
     <h5>Project Details</h5>
     <p>Title: {project.title}</p>
     <p>description: {project.description}</p>
     <Link to={'/projects'} onClick={()=>dispatch({type:'SET_ACTIVE_PROJECT_ID', payload: null})}>Back to projects</Link>
     <br/>
     <Link to={'/editproject'}>Edit project</Link>
     <br/>
     <Link to={'/projects'} onClick={()=>deleteProject(project.projectId)}>Delete project</Link>
     <br/>
     <Link to={'/addtask'} onClick={()=>dispatch({type:'SET_SELECTED_STATUS', payload: 'todo'})}>Start Adding Task in your project</Link>
    </div>
  )
}
