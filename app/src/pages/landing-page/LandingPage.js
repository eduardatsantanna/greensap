import "@/scss/landing-page/index.scss";
import React, { useEffect, useState } from "react";
import { Header, About, HowItWorks, Investors } from "./";
import RiverTrees from "@/assets/river-across-trees.mp4";
import { Loader } from "@/pages/general";

export const LandingPage = () => {


    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // setTimeout(() => {
        //     setIsLoaded(true)
        // }, 2000);
    }, [])

    return (
        <>
            <video width='100%' autoPlay muted loop 
            onLoadStart={() => {
                console.log('...I am loading...')
                setIsLoaded(false);
            }}
            onLoadedData={() => {
                console.log('...I am loadedcac...')
                setIsLoaded(true);
            }}>
                <source src={RiverTrees} type="video/mp4"></source>
            </video>

            <div style={{
                background: "linear-gradient(180deg, rgb(14 156 104 / 22%) 0%, rgb(2 4 4 / 83%) 100%)",
                position: "fixed",
                width: "100%",
                height: "100%",
                zIndex: -100
            }}>
            </div>
            {
                !isLoaded ? (<Loader />) :
                    (<>
                        <Header />
                        <About />
                        <HowItWorks />
                        <Investors />
                    </>
                    )
            }
        </>
    )
}