import { Modal, Col, Row, Tooltip } from "react-bootstrap";
import { useEffect, useState } from "react";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useWidth } from "@/hooks";
import EcologyIcon from "@/assets/flat-icon/svg/ecology.svg";
import GreenEarthIcon from "@/assets/flat-icon/svg/green-earth.svg";
import { FlatIcon } from "@/components/icon";
import { PaymentMethod } from "./PaymentMethod";
import { Compensation } from "./Compensation";
import { useForm } from "react-hook-form";
import { useCounter } from "../../hooks/useCounter";


export const Invest = ({ show, handleClose, handleShow, project }) => {

    const investForm = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        criteriaMode: "firstError",
    });

    const {
        TreeCostAverage: treeCost,
        CarbonOffsetAverage: carbonPerTree,
        CarbonOffsetSymbol: carbonSymbol,
        ID: recipientId,
        Owner_ID: ownerId,

    } = project;

    const kpi = {
        costPerTree: treeCost,
        carbonOffsetPerTree: carbonPerTree,
        carbonOffsetSymbol: carbonSymbol,
    }

    const sections =
    {
        ask: { sectionSelected: "ask", title: "Choose the invest type", back: null, to: "compensation" },
        compensation: { sectionSelected: "compensation", title: "Compensation", back: "ask", to: "payment" },
        payment: { sectionSelected: "payment", title: "Choose the payment method", back: "compensation", to: null },

    };

    const bodyWidth = useWidth();
    const [section, setSection] = useState({ ...sections.ask });
    const [click, setClick] = useState({ section: "co2", click: 1 });
    const [disabled, setDisabled] = useState(true);
    const count = useCounter();
    const { counter } = count;

    const costCompensation = useState({
        costConcept: 0,
        estimated: 0,
        total: 0,
    });


    const [cost] = costCompensation;


    useEffect(() => {
        if (counter > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [counter])


    const onClose = (e) => {
        handleClose(e);
        setTimeout(() => {
            setSection({ ...sections.ask });
        }, 500);
    }

    const nextSection = () => {
        if (section.to) setSection({ ...sections[section.to] });
    }

    const backSection = () => {
        if (section.back) setSection({ ...sections[section.back] });
    }

    const buttonOption = () => {
            nextSection();
    }

    return (
        <>
            <Modal show={show} onHide={onClose} centered="true">
                <Modal.Header closeButton>
                    {section.sectionSelected !== "ask" &&
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-top">
                                    Back
                                </Tooltip>
                            }
                        >
                            <button className="btn float-left pl-0" onClick={() => { backSection() }}><FontAwesomeIcon className="text-success back-icon" icon={faArrowCircleLeft} />
                            </button>
                        </OverlayTrigger>
                    }
                    <Modal.Title centered="true">
                        {section.sectionSelected === "compensation" && <>
                            {click.section === "co2" && <>Co<sub>2</sub> </>}
                            {click.section === "reforest" && <>Reforest </>}
                        </>
                        }
                        {section.title}

                    </Modal.Title>

                    <div style={{ position: "absolute", left: "50%" }}>
                        <div style={{ position: "relative", left: "-50%", top: "40px" }}>
                            {(section.sectionSelected === "compensation" && click.section === "co2") && <FlatIcon size="xxl"><img src={EcologyIcon} alt="icono ecology" style={{ width: "100%" }} /></FlatIcon>}
                            {(section.sectionSelected === "compensation" && click.section === "reforest") && <FlatIcon size="xxl"><img src={GreenEarthIcon} alt="icono ecology" style={{ width: "100%" }} /></FlatIcon>}
                        </div>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    {section.sectionSelected === "ask" &&
                        <>
                            <Row>
                                <Col onMouseEnter={bodyWidth > 720 ? () => { setClick({ ...click, section: "co2" }) } : undefined}>
                                    <button className={`btn w-100 mb-4${click.section === "co2" ? " btn-success" : " btn-light text-muted"}`} onClick={nextSection}>
                                        CO<sub>2</sub> compensation
                                    </button>
                                </Col>
                                <Col onMouseEnter={bodyWidth > 720 ? () => { setClick({ ...click, section: "reforest" }) } : undefined}>
                                    <button className={`btn w-100 mb-4${click.section === "reforest" ? " btn-success" : " btn-light text-muted"}`} onClick={nextSection} >
                                        Reforest compensation
                                    </button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {click.section === "co2" &&
                                        <p className="animate__animated animate__fadeIn">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula purus, ultrices eget tortor id, hendrerit pulvinar ipsum. Curabitur suscipit mauris in mollis sollicitudin. Donec facilisis elit finibus, hendrerit lorem non, sodales urna. Etiam porta venenatis libero, id bibendum lacus dictum sit amet. Etiam volutpat dui sed leo dignissim, sit amet ultrices turpis consequat.
                                        </p>
                                    }
                                    {click.section === "reforest" &&
                                        <p className="animate__animated animate__fadeIn">
                                            Sed gravida libero ac dolor varius, in euismod massa sagittis. Suspendisse commodo felis ut iaculis blandit. Pellentesque eget augue non erat mollis porta ac eget nunc. Cras et neque nunc. Proin a accumsan enim. Quisque blandit dui auctor dolor venenatis, nec feugiat mauris porta. Quisque ut luctus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et ipsum ultrices.
                                        </p>
                                    }
                                </Col>

                            </Row>
                        </>
                    }

                    {(section.sectionSelected === "compensation") &&
                        <Compensation compensation={click} investForm={investForm} count={count} kpi={kpi} costCompensation={costCompensation} />
                    }

                    {section.sectionSelected === "payment" &&
                        <PaymentMethod {...cost} recipientId={recipientId} treeCost={treeCost} ownerId={ownerId} counter={counter} compensation={click.section} onClose={onClose}/>
                    }

                    {(section.sectionSelected !== "ask" && section.sectionSelected !== "payment") &&
                        <div className="d-grid gap-2 mt-4">
                            <button disabled={disabled} className={`btn btn-success w-100`} onClick={buttonOption} >{"Next"}  </button>
                        </div>
                    }

                </Modal.Body>
            </Modal>
        </>
    )

}