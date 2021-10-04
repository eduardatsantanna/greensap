
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { Card, ProgressBar, Form, Popover, OverlayTrigger } from "react-bootstrap";
import { prefixNum } from "@/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import {
    XYPlot, HorizontalGridLines, XAxis, YAxis,
    LineSeriesCanvas
} from "react-vis";
import { useWidth } from "@/hooks";

export const SumaryCard = ({ type, isDashboard, project, v1 = 0, v2 = 0, v3 = 0, v4 = 0, }) => {
    const history = useHistory();
    const bodyWidth = useWidth();
    const [toggleInfo, setToggleInfo] = useState(true);
    const timestamp = new Date("Jul 2021").getTime();
    const ONE_DAY = 86400000;

    const onRedirect = (id) => history.push(`/project?id=${id}`);

    const cardWidth = () => {
        if (bodyWidth < 768) {
            return (
                <>
                    <div className="body-data mt-0">
                        <div className="counts">
                            <p>${prefixNum(320, project.invested)} Invested</p>
                        </div>
                        <div className="counts">
                            <p>{prefixNum(320, project.actualTrees)} Trees</p>
                        </div>
                    </div>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Popover id="button-tooltip-2" style={{ padding: 10 }}>
                                Target trees: {prefixNum(720, project.actualTrees)} / {prefixNum(720, project.goalTrees)}
                            </Popover>
                        }
                    >
                        {({ ref, ...triggerHandler }) => (
                            <div ref={ref} {...triggerHandler}>
                                <ProgressBar style={{ width: "100%" }} variant="success" now={((project.actualTrees / project.goalTrees * 100))} />
                            </div>
                        )}
                    </OverlayTrigger>
                </>
            );
        } else {
            return (
                <div onClick={() => setToggleInfo(false)} className="w-75 h-100 mx-auto mt-5 animate__animated animate__fadeIn">
                    <CircularProgressbarWithChildren
                        styles={buildStyles({
                            rotation: 0,
                            strokeLinecap: "butt",
                            textSize: "16px",
                            pathTransitionDuration: 0.5,
                            pathColor: `rgb(139, 195, 70)`,
                            textColor: "#f88",
                            trailColor: "#d6d6d6",
                            backgroundColor: "#3e98c7",
                        })}
                        value={(project.actualTrees / project.goalTrees * 100)}
                    >
                        <div className="progress-children">
                            <div className="counts">

                                <p className="counter">${prefixNum(320, project.invested)}</p>
                                <p className="title">Total Investments</p>
                            </div>
                            <div className="counts">
                                <p className="counter">
                                    <span>{prefixNum(720, project.actualTrees)}</span> / <span>{prefixNum(720, project.goalTrees)}</span>
                                </p>
                                <p className="title">Target trees</p>
                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            )
        }
    }

    const DATA = [
        { x: timestamp + 1 * ONE_DAY, y: v1 },
        { x: timestamp + 3 * ONE_DAY, y: v1 },
        { x: timestamp + 5 * ONE_DAY, y: v1 },
        { x: timestamp + 7 * ONE_DAY, y: v1 },
        { x: timestamp + 10 * ONE_DAY, y: v2 },
        { x: timestamp + 12 * ONE_DAY, y: v2 },
        { x: timestamp + 14 * ONE_DAY, y: v2 },
        { x: timestamp + 16 * ONE_DAY, y: v2 },
        { x: timestamp + 20 * ONE_DAY, y: v3 },
        { x: timestamp + 21 * ONE_DAY, y: v3 },
        { x: timestamp + 23 * ONE_DAY, y: v3 },
        { x: timestamp + 25 * ONE_DAY, y: v3 },
        { x: timestamp + 27 * ONE_DAY, y: v4 },
        { x: timestamp + 29 * ONE_DAY, y: v4 },
        { x: timestamp + 30 * ONE_DAY, y: v4 },
    ];

    return (
        <Card className="summary-card">
            <Card.Img
                className="summary-image"
                variant="top"
                src={project.banner}
            />
            <Card.ImgOverlay className={bodyWidth < 768 ? "px-3 py-1 image-overlay" : "image-overlay"}>
                <Card.Title className="m-0 h-100 d-flex justify-content-between align-items-center">
                    <p className="mt-2">{project.name}</p>
                    {isDashboard && type === 'nonprofit' && (
                        <div>
                            <button className="btn btn-outline-dark" onClick={() => onRedirect(project.id)}>
                                <FontAwesomeIcon icon={faCog} size="lg" />
                            </button>
                        </div>
                    )}
                </Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="py-auto px-1 card-body">
                {toggleInfo ? cardWidth() : (
                    <div className="project-graph">
                        <Form.Group className="mb-2" Control size="sm" Id="loginUser">
                            <Form.Control as="select" className="px-3" aria-label="Floating label select example">
                                <option value="1">Week</option>
                                <option value="2" selected="true">Month</option>
                                <option value="3">Year</option>
                            </Form.Control>
                        </Form.Group>
                        <div onClick={() => setToggleInfo(true)} className="pl-3 mt-5 animate__animated animate__fadeIn">
                            <XYPlot xType="time" height={200} width={275}>
                                <HorizontalGridLines />
                                <LineSeriesCanvas curve={"curveMonotoneX"} data={DATA} color="#8bc346" />
                                <XAxis />
                                <YAxis hideLine tickFormat={v => `$${prefixNum(320, v)}`} />
                            </XYPlot>
                        </div>
                    </div>
                )}
            </Card.Body>
        </Card>

    )
}
