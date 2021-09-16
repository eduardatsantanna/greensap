import "@/scss/auth/index.scss";
import { Modal, Col, Row, Tooltip } from "react-bootstrap";
import { useEffect, useState } from "react";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useWidth, useFetch } from "@/hooks";
import { SignupInvestor, SignupNgo } from "./";
import { userService } from "@/services";

export const Signup = ({ ...props }) => {

    // const url = `https://restcountries.eu/rest/v2/all?fields=name`;

    // const {data} = useFetch(url); 

    
    const [openSection, setOpenSection] = useState("ask");
    const [register, setRegister] = useState({ loading: false, registered: false, error: null });
    const bodyWidth = useWidth();
    const [click, setClick] = useState({section: "investor", click: 1}); 
    const [data, setData] = useState(null);

    useEffect(() => {
        userService.getCountries().then((countries) => {setData(countries)});
    }, [])

    const onClose = (e) => {
        props.handleCloseS(e);
        setTimeout(() => {
            setOpenSection("ask");
        }, 500);
    }

    const saveUser = () => {
        return new Promise((resolve,reject) => {
        setRegister({
            ...register,
            loading: true
        });
        
        setTimeout(() => {
            setRegister({
                ...register,
                loading: false,
                registered: true
            });
            resolve("regstrado");
        }, 2000);
        }).then(()=>{
            setTimeout(() => {
            setRegister({
                    ...register,
                    loading: false,
                    registered: false
            });
            onClose(true);
            }, 1000);
        });
    }

    

    const chooseSection = (sectionVal) =>{
        

        if(bodyWidth < 720){

            if(sectionVal !== click.section){
                setClick({section: sectionVal, click: 1});
            } else {
                setClick({section: click.section, click: click.click + 1});

                 if(click.click === 2){
                    setOpenSection(click.section);
                    setClick({...click, click: 1});
                }
                
            }

        } else {
            setOpenSection(sectionVal);
        }

    }

    return (
        <>
            <Modal show={props.showS} onHide={onClose} centered="true">
                <Modal.Header closeButton>
                    {openSection !== "ask" &&
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-top">
                                    Back
                                </Tooltip>
                            }
                        >
                            <button className="btn float-left pl-0" onClick={() => setOpenSection("ask")}><FontAwesomeIcon className="text-success back-icon" icon={faArrowCircleLeft} />
                            </button>
                        </OverlayTrigger>
                    }
                    <Modal.Title centered="true">{openSection === "ask" ? "Choose the registration type" : "Register"}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    {openSection === "ask" &&
                        <>
                            <Row>
                                <Col onMouseEnter={bodyWidth > 720 ?() => { setClick({...click, section: "investor"}) }:undefined}>
                                    <button className={`btn w-100 mb-4${click.section === "investor" ? " btn-success" : " btn-light"}`} onClick={() => chooseSection("investor")}>
                                        <span className={`${click.section !== "investor" ? "text-muted" : ""}`}>Investor</span>
                                    </button>
                                </Col>
                                <Col onMouseEnter={bodyWidth > 720 ?() => { setClick({...click, section: "ngo"}) }:undefined}>
                                    <button className={`btn w-100 mb-4${click.section === "ngo" ? " btn-success" : " btn-light"}`} onClick={() => chooseSection("ngo")} >
                                        <span className={`${click.section !== "ngo" ? "text-muted" : ""}`}>NGO</span>
                                    </button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {click.section === "investor" &&
                                        <p className="animate__animated animate__fadeIn">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula purus, ultrices eget tortor id, hendrerit pulvinar ipsum. Curabitur suscipit mauris in mollis sollicitudin. Donec facilisis elit finibus, hendrerit lorem non, sodales urna. Etiam porta venenatis libero, id bibendum lacus dictum sit amet. Etiam volutpat dui sed leo dignissim, sit amet ultrices turpis consequat.
                                        </p>
                                    }
                                    {click.section === "ngo" &&
                                        <p className="animate__animated animate__fadeIn">
                                            Sed gravida libero ac dolor varius, in euismod massa sagittis. Suspendisse commodo felis ut iaculis blandit. Pellentesque eget augue non erat mollis porta ac eget nunc. Cras et neque nunc. Proin a accumsan enim. Quisque blandit dui auctor dolor venenatis, nec feugiat mauris porta. Quisque ut luctus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et ipsum ultrices.
                                        </p>
                                    }
                                </Col>

                            </Row>
                        </>

                    }
                    {openSection === "investor" &&
                        <SignupInvestor/>
                    }
                    {openSection === "ngo" &&
                       <SignupNgo data={data}/>
                    }

                    {register.registered && <div class="alert alert-success">Successfully registered</div>}

                </Modal.Body>
        
            </Modal>
        </>
    )

}