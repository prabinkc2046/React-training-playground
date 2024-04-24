import React, { useRef } from 'react';
import { useEmployee } from './EmployeeProvider';

export default function EmployeeAdd() {
    const nameRef = useRef(null);
    const {dispatch, state} = useEmployee();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        
        dispatch({type: 'ADD_EMPLOYEE', payload:{name: name}});
        nameRef.current.value = "";
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
        type='text'
        ref={nameRef}
        />

        <button type='submit'>Add</button>
        </form>
    </div>
  )
}
