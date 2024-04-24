import { useEffect, useState } from "react";
import axios from "axios";
const api = "https://api.chucknorris.io/jokes/random";

const user = {
    name:"sam",
    age: 31,
    lang: ["golang", "node"]
}

// const tikTik = () => {
//     return new Date().getMinutes();
// }
export const useJoke = () => {
    const [joke, setJoke] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchJoke = async () => {
            try{
                const response = await axios.get(api);
                setJoke(response.data.value);
            } catch (error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        
        fetchJoke();
        const handleResize = () => console.log('Window resized');
  
        const handleClick = () => {
            console.log("page is clicked")
        }
        window.addEventListener('click', handleClick);
        const intervalId = setInterval(() => {
            fetchJoke();
        }, 20000);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('click', handleClick);
            console.log("Component unmounted and clearning interval ID")
        }
    },[]);

    return { joke, error, loading }
}

