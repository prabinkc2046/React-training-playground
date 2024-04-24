import React from 'react';
import { useEmployee } from './EmployeeProvider';


export default function EmployeeDetails() {
    const {state, dispatch} = useEmployee();
    const employee = state.employees.find(emp => emp.id === state.showDetailsId);

    if (!employee) {
        return null;
    }
    const handleHideDetails = (id) => {
        dispatch({type: 'SHOW_DETAILS', payload: {id: null}})
    }

  return (
    <div>
        <h2>Employee details</h2>
        <div key={employee.id}>
            <li>{employee.name}</li>
            <li>Other details</li>
            <button onClick={()=> handleHideDetails(employee.id)}>Hide</button>
        </div>
    </div>
  )
}
