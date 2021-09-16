import React from "react"
import { ProgressBar } from "react-bootstrap"

export const ProgressBarProject = ({currentT, goalT}) => {
    return (
        <div className="progress-bar-project">
        <div className="progress-bar">
            <ProgressBar  style={{ width: "%" }} variant="success" now={(currentT / goalT * 100)} />
        </div>
        {/* <p className="current-goal"><span className="current">{currentT.toLocaleString("EN-us")}</span>/{goalT.toLocaleString("EN-us")} <span> trees</span></p> */}
        
    </div>
    )
}
