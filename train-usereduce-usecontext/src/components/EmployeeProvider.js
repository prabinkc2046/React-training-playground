import { createContext, useContext, useReducer } from "react";
import { EmployeeReducer } from "./EmployeeReducer";
const EmployeeContext = createContext();
export const useEmployee = () => useContext(EmployeeContext);
export const EmployeeProvider = ({children})=> {
    const initialState = {
        employees: [],
        showDetailsId: null
    }
    const [state, dispatch] = useReducer(EmployeeReducer, initialState)
    return (
        <EmployeeContext.Provider value={{state, dispatch}}>
            {children}
        </EmployeeContext.Provider>
    )
}