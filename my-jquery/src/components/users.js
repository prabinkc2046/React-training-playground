import React, { useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// mockData.js
const usersData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson'}
];

// fetch data
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(usersData);
		}, 2000)
	});
}


const Users = () => {
	const nameRef = useRef();
    const queryClient = useQueryClient();

    const { data: users, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: () => fetchData(),
    });

	const addUser = useMutation({
		mutationFn: newUser => {
			users.push(newUser);
		}
	});

	const deleteUser = useMutation({
		mutationFn: userId => {
			//get the index
			const userIndex = usersData.findIndex(user => user.id === userId);
			users.splice(userIndex,1);
		}
	});

	const handleSubmit = (e) => {
	e.preventDefault();
	const name = nameRef.current.value;
	addUser.mutate({id: Date.now(), name: name});
	nameRef.current.value = null;
	};
	

	const updateUser = useMutation({
		mutationFn: id => {
			//find the index of the user
			const updatedUser = users.find(user => user.id === id);
			updatedUser.name = "Changed"
		}
	});
    if (isLoading) return <div>Page is loading</div>;

    if (isError) return <div>Error in fetching data</div>;

    return (
        <div className="user-container">
            {users.map((user) => (
                <div key={user.id} className="user">
                    {user.name}
                    <button onClick={() => deleteUser.mutate(user.id)}>Delete</button>
					<button onClick={() => updateUser.mutate(user.id)}>Edit</button>
                </div>
            ))}

		
            <form onSubmit={handleSubmit}>
			<input type="text" ref={nameRef}/>
			<button type="submit">Add item</button>
            </form>
        </div>
    );
};

export default Users;
