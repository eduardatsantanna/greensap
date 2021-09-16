import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faMoneyCheckAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectsService } from "@/services"
import { useHistory } from "react-router";

export const PaymentMethod = ({ onClose, recipientId, ownerId, compensation, estimated, costConcept, treeCost, total, counter }) => {


    const [paymentMethodSelected, setPaymentMethodSelected] = useState(null);

    const history = useHistory();

    const [paying, setPaying] = useState({
        loading: false,
        error: '',
        data: [],
        invest: false,
    });

    const [comp, setCompensation] = useState({
        Amount: 0,
        Unit: 0,
        CostPerUnit: 0,
        Currency_code: "USD",
        Recipient_ID: recipientId,
        Owner_ID: ownerId,
    });

    useEffect(() => {
        if (compensation === "co2") {

            setCompensation({
                ...comp,
                Amount: total,
                Unit: estimated,
                CostPerUnit: treeCost,
            })

        } else if (compensation === "reforest") {
            setCompensation({
                ...comp,
                Amount: total,
                Unit: counter,
                CostPerUnit: treeCost,
            })
        }
        return () => {

        }
    }, [])

    const setPayment = () => {

        setPaying({
            ...paying,
            loading: true
        });

        projectsService.createInvestment(comp).then(
            invest =>{
                setPaying({
                    ...paying,
                    loading: false,
                    invest: true,
                    data: invest
                });
                setTimeout(() => {
                    onClose();
                    history.push("/marketplace");
                }, 3000);
            },
            error => {
                setPaying({
                    ...paying,
                    loading: false,
                    invest: false,
                    error: error
                });
                setTimeout(() => {
                    onClose();
                }, 3000);
            }
        )

    }

    return (
        <div className="invest">
            <div className="ngo-project">
                <p>Investing in Ketrawe Agroforestry by Plant for the planet</p>
            </div>

            <div className="totals">
                <p>CO<sub>2</sub> neutralization in tons</p>
                <p>
                    {compensation === "co2" && counter}
                    {compensation === "reforest" && estimated.toFixed(1)} kg
                </p>
            </div>

            <div className="totals">
                <p>Trees to plant</p>
                <p>
                    {compensation === "co2" && estimated.toFixed(0)}
                    {compensation === "reforest" && counter}
                </p>
            </div>

            <div className="totals">
                <p>Total</p>  <p>${total.toFixed(2)} USD</p>
            </div>
            {!paying.invest &&
            <>
            <div className="ngo-project">
                <p>Choose your method payment</p>
            </div>
            
                
                    <div className="choose-payment">
                        <div className="payment-method" onClick={() => setPaymentMethodSelected("paypal")}>
                            {paymentMethodSelected === "paypal" &&
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                            }
                            <div className={`icon ${paymentMethodSelected === "paypal" ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={faPaypal} />
                            </div>
                        </div>
                        <div className="payment-method" onClick={() => setPaymentMethodSelected("bankTransference")}>
                            {paymentMethodSelected === "bankTransference" &&
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                            }
                            <div className={`icon ${paymentMethodSelected === "bankTransference" ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                            </div>
                        </div>
                    </div>

                    {paymentMethodSelected === "bankTransference" &&
                        <div className="totals">
                            <p>Ebanx number</p>
                            <p>
                                Y6zt5r8kNPoeNsjGvTHnnEpXSjz5n5
                            </p>
                        </div>

                    }

                    <div className="d-grid gap-2 mt-4">
                        <button disabled={(!paymentMethodSelected || paying.loading)} className={`btn btn-success w-100`} onClick={setPayment}>{paying.loading ? "Investing..." : "Invest"}</button>
                    </div>
                </>
            }
            {paying.invest &&
                <div className="alert alert-success text-center">
                    Successful investment
                </div>
            }
        </div>
    )
}
