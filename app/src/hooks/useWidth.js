
import { useEffect, useState } from "react"

export const useWidth = () => {

    const [bodyWidth, setBodyWidth] = useState(0);

    useEffect(() => {
        const body = document.querySelector("body");
        setBodyWidth(body.offsetWidth)
    }, [])
    
    
    useEffect(() => {

        const onResize = () => { 
        const body = document.querySelector("body");
        setBodyWidth(body.offsetWidth)
        }

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);

    }, [bodyWidth]);

    return bodyWidth;

}
