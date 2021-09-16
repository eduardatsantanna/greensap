import React from "react";
import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
    return (
        <div className="loader animate__fadeOut">
            <p className="logo">GREEN SAP</p>
            <Spinner className="spinner"/>
        </div>
    )
}
