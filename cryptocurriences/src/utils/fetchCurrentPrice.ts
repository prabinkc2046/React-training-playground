import axios from "axios";
const url: string = "https://api.coindesk.com/v1/bpi/currentprice.json";


interface apiResponse {
    bpi : {
        USD: {
            code : string;
            symbol: string;
            rate: string;
            description: string
        }

        GBP: {
            code : string;
            symbol: string;
            rate: string;
            description: string
        }
    }
}
const fetchCurrentPrice = async () => {
    try {
        const response = await axios.get <apiResponse>(url);
        return response.data.bpi.USD.rate
    } catch (error) {
        console.error("Error in fetching", error);
        return "Error"
    }
}

export default fetchCurrentPrice;