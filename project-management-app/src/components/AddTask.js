import React, {useRef}from 'react';
import { useProject } from './ProjectContextProvider';
import ListTasks from './ListTasks';
export default function AddTask() {
    const taskRef = useRef(null);
    const {dispatch, state} = useProject();
    const currentProject = state.projects.find(project => project.projectId === state.activeProjectId);
    if (!currentProject) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = taskRef.current.value;
        dispatch({type:'ADD_NEW_TASK', payload:{id: Date.now(), project: currentProject.projectId, name: task, status: 'todo'}});
        dispatch({type:'UPDATE_PROJECT_STATUS'});
        taskRef.current.value = "";
    }

  return (
    <>
    <div>
      <h5>Project name: {currentProject.title}</h5>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            ref={taskRef}
            placeholder='add task'
            />

            <input
            type='submit'
            value={'Add'}
            />
        </form>   
    </div>

    <ListTasks/>
    </>
  )
}
