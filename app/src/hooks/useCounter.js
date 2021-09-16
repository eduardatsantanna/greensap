import { useState } from "react";


export const useCounter = (initialState=0) => {
    
    const [counter, setCounter] = useState(initialState);
    
    const increment = () => {setCounter(counter + 1)};

    const decrement = () => {if(counter>0)setCounter(counter - 1)};

    return {
        counter,
        setCounter,
        increment,
        decrement,
    };
}
