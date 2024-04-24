import { createContext, useReducer, useContext, useEffect } from "react";
import { Reducer } from "./Reducer";
const ProjectContext = createContext();
export const useProject = () => useContext(ProjectContext);

export const ProjectContextProvider = ({children})=>{
    const storedState = localStorage.getItem('c6525d68-dceb-472f-b95d-052211368f12');

    const initialState = JSON.parse(storedState) || {
        projects:[],
        tasks:[],
        activeProjectId: null,
        editTaskId: null,
        selectedStatus: 'todo',
        status: [{total: 0, todo: 0, inProgress: 0, done: 0}]
    };

    const [state, dispatch] = useReducer(Reducer, initialState);
    
    useEffect(()=>{
        localStorage.setItem('c6525d68-dceb-472f-b95d-052211368f12',JSON.stringify(state))
        console.log(JSON.parse(storedState));
    },[state])
    
    return(
        <ProjectContext.Provider value={{state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    )
}