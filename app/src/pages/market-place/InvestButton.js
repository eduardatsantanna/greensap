import React, { useState } from "react"
import { Invest} from "./Invest";

export const InvestButton = React.memo(({project}) => {

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (
        <>
            <button className="fill-button donate-button"  onClick={handleShow}>Invest</button>
            <Invest show={show} handleClose={handleClose} project={project} handleShow={handleShow} />
        </>
    )
});
