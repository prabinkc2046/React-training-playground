import React, { useEffect, useMemo, useState } from 'react'

export default function FactorialCalculator() {
    const [number, setNumber] = useState(9);
    // const factorial = () => {
    //     console.log("calculating factorial")
    //     let result = 1;
    //     for (let i=2; i <= number; i++){
    //         result = result * i
    //     }
    //     return result;
    // };
    
    

    useEffect(() => {
        const factorial = useMemo(() => {
            console.log("calculating factorial....", new Date().getSeconds());
            let result = 1;
            for( let i = 1; i <= number; i++){
                result = result * i
            }
            return result;
        },[number]);
        factorial();
    },[])
  return (
    <div>
        <p>The factorial of {number} is {factorial}</p>
    </div>
  )
}
