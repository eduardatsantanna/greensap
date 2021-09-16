import React from "react";

export const FlatIcon = ({children, size = ""}) => {
    return (
        <div className={`flat-icon ${size}`}>
            {children}
        </div>
    )
}

