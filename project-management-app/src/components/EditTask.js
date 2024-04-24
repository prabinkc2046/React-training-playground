import React, {useRef}from 'react';
import { useProject } from './ProjectContextProvider';
import ListTasks from './ListTasks';
import { useNavigate } from 'react-router-dom';
export default function EditTask() {
    const taskRef = useRef(null);
    const statusRef = useRef(null);
    const {dispatch, state} = useProject();
    const editedTask = state.tasks.find(task => task.id === state.editTaskId);
    const navigate = useNavigate();
    if (!editedTask) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = taskRef.current.value;
        const status = statusRef.current.value;
        dispatch({type:'UPDATE_TASK', payload:{name: task, status: status}});
        dispatch({type:'SET_EDIT_TASK_ID', payload: null});
        dispatch({type:'UPDATE_PROJECT_STATUS'});
        navigate('/addTask')
}
    
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            ref={taskRef}
            defaultValue={editedTask.name}
            />
            <select ref={statusRef} defaultValue={state.selectedStatus}>
              <option value= "todo">todo</option>
              <option value= "In progress">In progress</option>
              <option value="done">done</option>
            </select>

            <input
            type='submit'
            value={'Update'}
            />
        </form>   
    </div>
    
    </>
  )
}
