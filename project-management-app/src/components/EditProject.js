import React, {useRef}from 'react';
import { useProject } from './ProjectContextProvider';
import { useNavigate } from 'react-router-dom';
export default function EditProject() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const {dispatch, state} = useProject();
    const editedProject = state.projects.find(project => project.projectId === state.activeProjectId);
    const navigate = useNavigate();
    if(!editedProject) return null;
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        dispatch({type:'UPDATE_PROJECT', payload:{title: title, description: description}});
        navigate(-1);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            ref={titleRef}
            placeholder='title'
            defaultValue={editedProject.title}
            />

            <input
            type='text'
            ref={descriptionRef}
            placeholder='Describe project'
            defaultValue={editedProject.description}
            />

            <input
            type='submit'
            value={'Update'}
            />
        </form>
    </div>
  )
}
