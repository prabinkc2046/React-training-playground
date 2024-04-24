// dispatch({type:'ADD_NEW_PROJECT', payload:{title: title, description: description}})
// dispatch({type:'SET_ACTIVE_PROJECT_ID', payload: id});
// dispatch({type:'SET_EDIT_PROJECT_ID', payload: id})
// dispatch({type:'UPDATE_PROJECT', payload:{title: title, description: description}});
// dispatch({type:'DELETE_PROJECT', payload: id})
// dispatch({type:'ADD_NEW_TASK', payload:{id: currentProject.projectId, task: task}});
// dispatch({type:'DELETE_TASK', payload:id})
// dispatch({type:'SET_EDIT_TASK_ID', payload: id});
// dispatch({type:'UPDATE_TASK', payload:{name: task}});
// dispatch({type:'SET_SELECTED_STATUS', payload: selectedStatus})
// dispatch({type:'UPDATE_STATUS'});
// dispatch({type:'UPDATE_PROJECT_STATUS'})

export const Reducer = (state, action) => {
    switch(action.type){
        case 'ADD_NEW_PROJECT':
            return {...state, projects: [...state.projects, {projectId: Date.now(), ...action.payload, }]};
        case 'SET_ACTIVE_PROJECT_ID':
            return {...state, activeProjectId: action.payload}
        case 'UPDATE_PROJECT':
            return {...state, projects: [...state.projects.map(project => project.projectId === state.activeProjectId ? {...project, ...action.payload}: project)]}
        
        case 'ADD_NEW_TASK':
            return {...state, tasks: [...state.tasks, {...action.payload}]}
        case 'DELETE_PROJECT':
            return {...state, projects: [...state.projects.filter(project => project.projectId !== action.payload)]}
        case 'DELETE_TASK':
            return {...state, tasks: [...state.tasks.filter(task => task.id !== action.payload)]}
        
        case 'SET_EDIT_TASK_ID':
            return {...state, editTaskId: action.payload}
        
        case 'SET_SELECTED_STATUS':
            return {...state, selectedStatus: action.payload};
        case 'UPDATE_TASK':
            return {...state, tasks: [...state.tasks.map(task => task.id === state.editTaskId ? {...task, ...action.payload} : task)]}
        case 'UPDATE_STATUS':
            const total = state.tasks.filter(task => task.project === state.activeProjectId).length;
            const todo =  state.tasks.filter(task => task.project === state.activeProjectId && task.status === 'todo').length;
            const inProgress =  state.tasks.filter(task => task.project === state.activeProjectId && task.status === 'In progress').length;
            const done =  state.tasks.filter(task => task.project === state.activeProjectId && task.status === 'done').length;
            return {...state, status: {...state.status, total: total, todo: todo, inProgress: inProgress, done: done}}
        case 'UPDATE_PROJECT_STATUS':
            for (let project of state.projects){
                const total = state.tasks.reduce((acc, task)=> {return acc + (project.projectId === task.project ? 1 : 0)},0);
                const done = state.tasks.reduce((acc, task)=> {return acc + (project.projectId === task.project && task.status === 'done' ? 1 : 0)},0);
                if (total !== 0 && done !== 0){
                    project.status = Math.floor((done/total)*100);
                } else{
                    project.status = 0;
                }
                
            }
        default:
            return state;
    }
}