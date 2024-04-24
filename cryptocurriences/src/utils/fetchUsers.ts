import axios from "axios";
import { error } from "console";

interface apiResponse {
    id: number;
    title: string;
    body: string
}
const fetchUsers = async () => {
    try {
        const response = await axios.get <apiResponse []>("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data)
    } catch (error) {
        console.log("Error during fetch", error)
    }
}


export default fetchUsers;