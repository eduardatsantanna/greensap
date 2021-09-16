

import React, { useState } from "react"
import {Signup} from "./";

export const RegisterButton = React.memo(({scrollTop = 0}) => {

    const [showS, setShowS] = useState(false);
	const handleCloseS = () => setShowS(false);
    const handleShowS = () => setShowS(true);

    return (
        <>
            <button className={`fill-button ${scrollTop !== 0 ? "scroll" : ""}`} onClick={handleShowS}>PLANT NOW</button>
            { showS ? <Signup showS={showS} handleCloseS={handleCloseS} handleShowS={handleShowS} /> : null}
            {/* <Signup showS={showS} handleCloseS={handleCloseS} handleShowS={handleShowS} /> */}
        </>
    )
});
