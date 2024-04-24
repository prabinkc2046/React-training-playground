import React from 'react';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import { EmployeeProvider } from './components/EmployeeProvider';
export default function App() {
  return (
    <div>
      <EmployeeProvider>
        <EmployeeAdd/>
        <EmployeeList/>
      </EmployeeProvider>
      
    </div>
  )
}
