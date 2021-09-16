import React, { useState, useEffect, useContext } from "react"
import useMeasure from "react-use-measure";
// import {prefixNum} from "../../helpers/prefixNum";
import { Ngos } from "./";
import { ngoService } from "@/services";
import { MarketplaceContext } from "@/context";
import { useQuery } from "@/hooks";
import { Ngo } from "./Ngo";
import { useLocation } from "react-router-dom";

export const Main = () => {
    const [ref, bounds] = useMeasure();
    const { ngosRed } = useContext(MarketplaceContext);
    const [ngos, dispatch] = ngosRed;
    const id = useQuery("id");
    const {pathname} = useLocation();
    

    useEffect(() => {
        dispatch({ type: 'loading' });
        if (!id && pathname === "/marketplace") {
        
            ngoService.getAll().then(
                ngos => {
                    dispatch({ type: 'finished', payload: ngos });
                },
                error => {
                    dispatch({ type: 'error', payload: error });
                }
            );
        } else {
            
            ngoService.getById(id).then(
                ngos => {
                    console.log(ngos);
                    dispatch({ type: 'finished', payload: ngos });
                },
                error => {
                    dispatch({ type: 'error', payload: error });
                }
            );
        }


    }, [id]);


    useEffect(() => {

        

    }, [ngos]);

    console.log(ngos);

    // const number = (value) => {
    //     var number = prefixNum(bounds.width, value);
    //     return number;
    // }

    return (
        <>
        {!ngos.loading && 
            <div className="main-ngo" ref={ref}>
            { ngos.data.length > 1 && 
            <Ngos ngos={ngos} />}
            { ngos.data.length === 1 && 
            <Ngo ngos={ngos} />}
            </div>

        }
        </>
        
    )
}
