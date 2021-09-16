import React, { useEffect, useState } from "react"
import { Loader } from "./";
import "@/scss/Modules.scss";

export const LoadContent = ({ children }) => {

    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setisLoaded(true)
        }, 1000);
    }, [])

    return (
        <>
            {!isLoaded ? (<Loader />) :(<>{children}</>)}
        </>
    )
}
