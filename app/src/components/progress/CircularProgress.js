import React from "react"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { FlatIcon } from "@/components/icon";
import PlantingIcon from "@/assets/flat-icon/svg/planting.svg";


export const CircularProgress = ({ currentT, goalT, number, width }) => {
    return (
        <CircularProgressbarWithChildren styles={buildStyles({
            rotation: 0,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `rgb(139, 195, 70)`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
            width: `${width}px`
        })}
            value={(currentT / goalT * 100)}>
            <div className="d-flex align-items-center flex-column" style={{ marginTop: -5 }}>
                {/* <div className="totals-percents kdis">
                    <div className="total">
                        <div className="total-count">
                            <p className="counter">${prefixNum(320, number)}</p>
                            <p className="title">Total Investments</p>
                        </div>

                        <div className="total-count pt-1">
                            <p className="counter">213</p>
                            <div className="title">Trees planted</div>
                        </div>
                    </div >
                </div> */}
                
                <FlatIcon size="xxl"><img src={PlantingIcon} alt="icono agenda" style={{width: "100%"}}/></FlatIcon>

                <div className="target-kpi">
                    <p className="current">{currentT.toLocaleString("EN-us")}/</p>
                    <div className="goal"><p className="goal-value">{goalT.toLocaleString("EN-us")}</p><p className="small-text">target trees</p></div>
                </div>
            </div>
        </CircularProgressbarWithChildren>
    )
}
