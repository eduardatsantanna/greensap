import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { useCounter } from "../../hooks/useCounter"


export const Compensation = ({ compensation, investForm, count, kpi, costCompensation }) => {



    const { register, setValue, getValues } = investForm;
    const { counter, setCounter, increment, decrement } = count;
    const { costPerTree, carbonOffsetPerTree, carbonOffsetSymbol } = kpi;
    const [cost, setCost] = costCompensation;


    const { costConcept, estimated, total } = cost;

    useEffect(()=>{
        setCounter(0);
    },[])

    useEffect(() => {
        setValue("quantity", counter);
        if (compensation.section === "reforest") setCost({ ...cost, costConcept: costPerTree, estimated: counter * carbonOffsetPerTree, total: costConcept * counter })
        if (compensation.section === "co2") setCost({ ...cost, costConcept: costPerTree / carbonOffsetPerTree, estimated: counter / carbonOffsetPerTree  , total: costConcept * counter })
    }, [counter]);

    return (
        <div className="invest">

            <div className="ngo-project">
                <p>Investing in Ketrawe Agroforestry by Plant for the planet</p>
            </div>
            <div className="invest-first-steep">
                <div className="text-option">
                    {compensation.section === "co2" && <><p>Choose your {carbonOffsetSymbol} tons of CO<sub>2</sub> offset</p></>}
                    {compensation.section === "reforest" && <><p>Choose your trees quantity</p></>}

                </div>

                <div className="invest-input">
                    <button className="btn btn-light" onClick={() => { decrement() }}><FontAwesomeIcon icon={faMinus} /></button>
                    <input className="input" type="number" style={{ fontSize: '20px', textAlign: 'right' }} min="0" {...register("quantity")} onKeyUp={() => setCounter(parseInt(getValues("quantity")))} />
                    <button className="btn btn-light" onClick={() => { increment() }}><FontAwesomeIcon icon={faPlus} /></button>
                </div>

                <div className="totals">
                    {compensation.section === "reforest" && <p>Price per tree</p>}
                    {compensation.section === "co2" && <p>Price per {carbonOffsetSymbol} CO<sub>2</sub> tons</p>}
                    <p>${costConcept.toFixed(2)} USD</p>
                </div>

                <div className="totals">
                    {compensation.section === "co2" && <p>Estimated trees planted</p>}
                    {compensation.section === "reforest" && <p>Co<sub>2</sub> neutralization in tons {carbonOffsetSymbol}</p>}
                    <p>{isNaN(estimated)?(0).toFixed(1):estimated.toFixed(1)}</p>
                </div>

                <div className="grand-total">
                    <p>Total:</p>  <p>${isNaN(total)?(0).toFixed(2):total.toFixed(2)} USD</p>
                </div>


                <div className="grand-total">
                    <div></div>  <select><option>USD</option></select>
                </div>
            </div>

        </div>
    )
}
