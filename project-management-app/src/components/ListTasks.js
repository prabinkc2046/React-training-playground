import React, { useEffect, useMemo, useRef } from 'react';
import { useProject } from './ProjectContextProvider';
import { Link } from 'react-router-dom';

export default function ListTasks() {
  const {state, dispatch} = useProject();
  const selectedStatusRef = useRef(null);
  const deleteTask = (id)=>{
    dispatch({type:'DELETE_TASK', payload:id});
    dispatch({type:'UPDATE_PROJECT_STATUS'});
  }
  const handleEditTask = (id)=>{
    dispatch({type:'SET_EDIT_TASK_ID', payload: id});
  }

  const displayTaskByStatus = ()=> {
    const selectedStatus = selectedStatusRef.current.value;
    dispatch({type:'SET_SELECTED_STATUS', payload: selectedStatus});
  };

  useMemo(()=>{
    dispatch({type:'UPDATE_STATUS'});
  },[state.tasks, state.selectedStatus])

  return (
    <>
    <div>
      {state.status.total > 0 && (
        <div>
          Total: {state.status.total} In Progress: {state.status.inProgress} Done: {state.status.done} Todo: {state.status.todo}
        </div>
      )}
    </div>

    <div>
      <label>Filter task</label>
      <select defaultValue={state.selectedStatus} ref={selectedStatusRef} onChange={()=>displayTaskByStatus()}>
        <option value= "todo" >To do</option>
        <option value="In progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>

    <div>
      {state.tasks.map(task => (
        <div key={task.id}>
          {task.project === state.activeProjectId && task.status === state.selectedStatus ? (
            <>
            {task.name}- status:{task.status}
            <br/>
            <button onClick={()=>deleteTask(task.id)}>delete</button>
            <Link to={'/edittask'} onClick={() => handleEditTask(task.id)}>Edit task</Link>
            </>
          ): (
            null
          )}
        </div>
      ))}
      
    </div>
    
    </>
  )
}
