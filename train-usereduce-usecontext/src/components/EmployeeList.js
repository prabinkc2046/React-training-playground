import React from 'react';
import { useEmployee } from './EmployeeProvider';
import EmployeeDetails from './EmployeeDetails';
export default function EmployeeList() {
    const {state, dispatch} = useEmployee();
    const handleShowDetails = (id) =>{
        dispatch({type: 'SHOW_DETAILS', payload: {id: id}})
    }
  return (
    <div>
        {state.employees.map(employee => (
            <div key={employee.id}>
                
                {employee.id === state.showDetailsId ? (
                    <EmployeeDetails/>
                ): 
                (
                    <>
                    <span>{employee.name}</span>
                    <button onClick={()=> handleShowDetails(employee.id)}>Show details</button>
                    </>  
                )}
            </div>
        ))}
    </div>
  )
}
