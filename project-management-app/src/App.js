import React from 'react';
import CreateProject from './components/CreateProject';
import ListProjects from './components/ListProjects';
import ProjectDetails from './components/ProjectDetails';
import EditProject from './components/EditProject';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import EditTask from './components/EditTask';
import { ProjectContextProvider } from './components/ProjectContextProvider';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <div>
      <ProjectContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/createproject' element={<CreateProject/>}/>
          <Route path='/projects' element={<ListProjects/>}/>
          <Route path='/editproject' element={<EditProject/>}/>
          <Route path='/projectdetails' element={<ProjectDetails/>}/>
          <Route path='/addtask' element={<AddTask/>}/>
          <Route path='/tasks' element={<ListTasks/>}/>
          <Route path='/edittask' element={<EditTask/>}/>
        </Routes>    
      </ProjectContextProvider>
    </div>
  )
}
