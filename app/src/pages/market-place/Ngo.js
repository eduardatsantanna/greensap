import React, { useContext, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Slider from "react-slick";
import { breakText } from "@/helpers";
import { TotalCount } from '@/components/utils';
import { ngoService } from "@/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export const Ngo = ({ ngos }) => {
    const { url } = useRouteMatch();
    const ngo = ngos.data[0];
    const [summary, setSummary] = useState({
        Investments: -1,
        Trees: -1,
        Tree_cost: -1,
    });

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    const goProfile = () => {
        history.push(`/profile?id=${ngo.ID}`)
    }

    useEffect(() => {
        ngoService.getNGOInvestment(ngo.ID).then(data => setSummary(data));
    }, []);


    return (
        <>
            <button className="back-icon btn float-left pl-0">
                <FontAwesomeIcon className="" icon={faArrowLeft} onClick={goBack} />
            </button>
            <div className="ngos-profile profile">

                <div className="ngo-pro">
                    <img className="picture" src={`${process.env.PUBLIC_URL}${ngo.DisplayPicture}`} alt="Profile NGO img" />
                    <div className="name">
                        <p >{breakText(ngo.DisplayName, 30)}</p>
                    </div>
                </div>

                <div className="totals-percents marketplace">
                    <div className="totals-container marketplace">
                        {summary.Investments === -1 ? null : <TotalCount title="Investments" number={summary.Investments} simbol="$" delay={1000} />}
                        {summary.Trees === -1 ? null : <TotalCount title="Trees Planted" number={summary.Trees} simbol="" delay={1000} />}
                        {summary.Tree_cost === -1 ? null : <TotalCount title="Tree Cost" number={summary.Tree_cost} simbol="$" delay={1000} />}
                    </div>
                </div>

                <div className="profile-option">
                    <button className="fill-button profile-btn" onClick={goProfile}>View Profile</button>
                </div>

            </div>
        </>
    )
}

