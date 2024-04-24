import React from 'react';

export const EmployeeReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_EMPLOYEE':
            return {...state, employees: [...state.employees, {...action.payload, id: Date.now()}]}
        
        case 'SHOW_DETAILS':
            return {...state, showDetailsId: action.payload.id}
        
        default:
            return state;
    }
}

