import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchCurrentWeather =  async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok){
        throw Error("Failed to fetch data")
    }
    return response.json();
}

const CurrentWeather = () => {
        const postQuery = useQuery({
            queryKey: ["weather0123"],
            queryFn: () =>  fetchCurrentWeather(),
        });

        if (postQuery.isLoading) return <div> ...Loading </div>;

        if (postQuery.isError) {
            return <div>Error: Failed to fetch posts</div>
        }

        console.log(postQuery.data)

    return(
        <div className="blogs-container">
           <div className="blog">
            {postQuery.data.map((blog) => (
                <div className="blogContent" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
           </div>
        </div>
    )
}

export default CurrentWeather;
