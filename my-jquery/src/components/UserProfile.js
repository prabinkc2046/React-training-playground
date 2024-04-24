import react from 'react';
import { useQuery, QueryClient } from "@tanstack/react-query";
import axios from 'axios';

const fetchUserData = (userId) => {
// query function needs return a promise
 return new Promise((resolve, reject) => {
	// asynchronous function goes here
	axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
	.then ( response => {
		resolve(response.data);
	})
	.catch(error => {
	reject( new Error("Error in fetching user profile"))
	})
 });
};


// component UserProfileuserId

const UserProfile = ({userId}) => {
	const queryClient = QueryClient();
	const {isLoading, isError, data: user, error } = useQuery({
	queryKey: ["userProfile", userId],
	queryFn: () => fetchUserData(userId),
	initialData: () => {
		queryClient.
	}
	});

	if (isLoading) return <div> its loading....</div>

	if (isError) return <div> Error: {error.message}</div>
	
	return (
		<div >
			<ul key={user.id}>
				<li>{user.name}</li>
				<li>{user.email}</li>
			</ul>
		</div>
	);
};

export default UserProfile;
 
