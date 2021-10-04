import React, { useState, useEffect, useContext } from "react"
import useMeasure from "react-use-measure";
// import {prefixNum} from "../../helpers/prefixNum";
import { Ngos } from "./";
import { ngoService } from "@/services";
import { MarketplaceContext } from "@/context";
import { useQuery } from "@/hooks";
import { Ngo } from "./Ngo";
import { useLocation } from "react-router-dom";
import { NgoLoading } from "./NgoLoading";

export const Main = () => {
    const { ngosRed } = useContext(MarketplaceContext);
    const [ngos, dispatch] = ngosRed;
    const id = useQuery("id");
    const { pathname } = useLocation();


    useEffect(() => {
        
        if (!id && pathname === "/marketplace") {
            dispatch({ type: 'loading' });
            ngoService.getAll().then(
                ngos => {
                    dispatch({ type: 'finished', payload: ngos });
                },
                error => {
                    dispatch({ type: 'error', payload: error });
                }
            );
        } else {
            if(ngos.data === []){
                dispatch({ type: 'loading' });
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
           
            
        }

    }, [id]);


    useEffect(() => {

    }, [ngos]);

    return (
        <>
            {ngos.loading &&
                <div className="main-ngo">
                    <NgoLoading />
                </div>
            }
            {!ngos.loading &&
                <div className="main-ngo">
                    {ngos.data.length > 1 &&
                        <Ngos ngos={ngos} />}
                    {ngos.data.length === 1 &&
                        <Ngo ngos={ngos} />}
                </div>
            }
        </>
    )
}