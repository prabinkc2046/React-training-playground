import React, { useEffect, useState } from 'react';
import fetchUsers from '../utils/fetchUsers';


interface Users {
    id: number;
    title: string;
    body: string
}

const userDetails: React.FC = () => {
    const [users, setUsers] = useState <Users []>([]);
    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers();
            console.log(users);
        };

        getUsers();
    },[])

    return (

        <div className='userContainer'>
            <div className='user'>
            {"UserID: 1"}
            {"Title: title"}
            {"body: body"}
        </div>
        </div>
        
    )
}


export default userDetails;