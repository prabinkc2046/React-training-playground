import React, {useRef}from 'react';
import { useProject } from './ProjectContextProvider';

export default function CreateProject() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const {dispatch} = useProject();
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        dispatch({type:'ADD_NEW_PROJECT', payload:{title: title, description: description, status: 0}});
        titleRef.current.value = "";
        descriptionRef.current.value="";
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            ref={titleRef}
            placeholder='title'
            />

            <input
            type='text'
            ref={descriptionRef}
            placeholder='Describe project'
            />

            <input
            type='submit'
            value={'Add'}
            />
        </form>
    </div>
  )
}
