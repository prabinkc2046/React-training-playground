import { updateDate } from "../utils/formatDate";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (api) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(api);
                setData(response.items);
            } catch (error){
                setError(error);
            }finally{
                setLoading(false);
            }
            
        };
        fetchData();
    }, [api])

    return {data, error, loading}
}