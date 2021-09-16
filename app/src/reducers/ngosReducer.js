import React from 'react'

export const ngosReducer = (state = {}, action) => {
    
    switch(action.type){
        case "loading":
            return { loading: true, error: '', data: []}
        case "finished":
            return { loading: false, error: '', data: action.payload}
        case "error":
            return { loading: false, error: action.payload, data: []}
        default:
            return state;
    }
}
