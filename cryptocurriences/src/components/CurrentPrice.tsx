import React, { useEffect, useState } from "react";
import fetchCurrentPrice from "../utils/fetchCurrentPrice";


const CurrentPrice: React.FC = () => {
    const [currentPrice, setCurrentPrice] = useState <string>("loading...")
    useEffect(() => {
        const getCurrentPrice = async () => {
            const updatedCurrentPrice =  await fetchCurrentPrice();
            setCurrentPrice(updatedCurrentPrice)
        };
        getCurrentPrice();
    },[])
    return (
        <div>
            <p>Current price of bitcoin in USD: {currentPrice}</p>
        </div>
    )
}

export default CurrentPrice;