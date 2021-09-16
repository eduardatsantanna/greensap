import React, { useState } from 'react'

export const useModal = () => {



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return {
        handleClose,
        handleShow,
        show
    }
}
