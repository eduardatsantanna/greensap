import React, { useState } from "react"
import { Form, Col, Row, InputGroup, OverlayTrigger, Popover } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"


export const SignupNgo = ({ data }) => {
    // const [register, setRegister] = useState({ loading: false, registered: false, error: null });

    // console.log(data);

    // const saveUser = () => {
    //     return new Promise((resolve,reject) => {
    //     setRegister({
    //         ...register,
    //         loading: true
    //     });

    //     setTimeout(() => {
    //         setRegister({
    //             ...register,
    //             loading: false,
    //             registered: true
    //         });
    //         resolve("regstrado");
    //     }, 2000);
    //     }).then(()=>{
    //         console.log("no entro")
    //         setTimeout(() => {
    //         setRegister({
    //                 ...register,
    //                 loading: false,
    //                 registered: false
    //         });
    //         }, 1000);
    //     });
    // }

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        criteriaMode: "firstError",
    });
    const onSubmit = (data) => alert(JSON.stringify(data));

    const [viewPass, setViewPass] = useState(false);
    const [viewConfirmPass, setViewConfirmPass] = useState(false);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
            <Form.Group className="mb-2" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control autoComplete="off" type="text" placeholder="Enter your username" {...register("username", {
                    required: "The username is required",
                    minLength: {
                        value: 3,
                        message: "The min length is 5 characters"
                    },
                    maxLength: {
                        value: 255,
                        message: "The max length is 255 characters"
                    },
                })}
                    // isValid={touchedFields.email&&!errors.email}
                    isInvalid={errors.username}
                />

                <Form.Text className="text-danger">
                    {errors.username && errors.username.message}
                </Form.Text>

                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("email", {
                    required: "The email is required",
                    minLength: {
                        value: 5,
                        message: "Invalid email"
                    },
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Invalid email" // JS only: <p>error message</p> TS only support string
                    }
                })}
                    // isValid={touchedFields.email&&!errors.email}
                    isInvalid={errors.email}
                />
                <Form.Text className={errors.email ? `text-danger` : `text-muted`}>
                    {errors.email ? `${errors.email.message}` : `We"ll never share your email with anyone else.`}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2" controlId="country">
                <Row>
                    <Col>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            as="select"
                            {...register("country", {
                                validate: value => value !== "1" || "The country is required"
                            })}
                            // isValid={touchedFields.email&&!errors.email}
                            isInvalid={errors.country}
                        >
                            <option value="1">Select your country</option>
                            {data && data.map((element, i) => (
                                <option key={i} value={element.name}>{element.name}</option>
                            )
                            )}
                        </Form.Control>
                        <Form.Text className="text-danger">
                            {errors.country && errors.country.message}
                        </Form.Text>
                    </Col>
                    <Col>
                        <Form.Label>Registration id</Form.Label>

                        <OverlayTrigger trigger="hover" placement="top" overlay={
                            <Popover id="popover-basic">
                                <Popover.Title as="h3">Registration id</Popover.Title>
                                <Popover.Content>
                                    The <strong>Registration id</strong> is... ed gravida libero ac dolor varius, in euismod massa sagittis. Suspendisse commodo felis ut iaculis blandit. Pellentesque eget augue non erat mollis porta ac eget nunc. Cras et neque nunc. Proin a accumsan enim. Quisque bla
                                </Popover.Content>
                            </Popover>
                        }>
                            <FontAwesomeIcon icon={faInfoCircle} className="icon pl-2 pt-1 fa-w-20 info-icon text-success" />
                        </OverlayTrigger>

                        <Form.Control type="text" {...register("registrationId", { required: "Registration id is required" })}
                            isInvalid={errors.registrationId}
                        />
                        <Form.Text className="text-danger">
                            {errors.registrationId && errors.registrationId.message}
                        </Form.Text>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <Form.Control type={viewPass?"text":"password"}  placeholder="Password" {...register("password", {
                        required: "The password is required",
                        minLength: {
                            value: 8,
                            message: "The min length password is 8 characters"
                        },
                        maxLength: {
                            value: 64,
                            message: "The max length password is 64 characters"
                        },
                        pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                            message: "The passwors must contain a least: 1 upper case, 1 lower case, 1 number and 1 special character" // JS only: <p>error message</p> TS only support string
                        }
                    })}
                        // isValid={touchedFields.email&&!errors.email}
                        isInvalid={errors.password}
                    />

                    <InputGroup.Append>
                        <div style={{ zIndex: "100", height: "100%", position: "absolute", right: "2rem", display: "flex", alignItems: "center" }}>
                            {!viewPass ? 
                            <FontAwesomeIcon icon={faEyeSlash} onClick={() => setViewPass(!viewPass)}/>
                            :
                            <FontAwesomeIcon icon={faEye} onClick={() => setViewPass(!viewPass)}/>
                            }
                        </div>
                    </InputGroup.Append>
                </InputGroup>

                <Form.Text className="text-danger">
                    {errors.password && errors.password.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                    <Form.Control type={viewConfirmPass?"text":"password"} placeholder="Confirm Password" {...register("confirmPassword", {
                        required: "The confirm password is required",
                        validate: value => value === getValues("password") || "The password will be the same"
                    })}
                        // isValid={touchedFields.email&&!errors.email}
                        isInvalid={errors.confirmPassword}
                    />
                    <InputGroup.Append>
                        <div style={{ zIndex: "100", height: "100%", position: "absolute", right: "2rem", display: "flex", alignItems: "center" }}>
                            {!viewConfirmPass ? 
                            <FontAwesomeIcon icon={faEyeSlash} onClick={() => setViewConfirmPass(!viewConfirmPass)}/>
                            :
                            <FontAwesomeIcon icon={faEye} onClick={() => setViewConfirmPass(!viewConfirmPass)}/>
                            }
                        </div>
                    </InputGroup.Append>
                </InputGroup>

                <Form.Text className="text-danger">
                    {errors.confirmPassword && errors.confirmPassword.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2" controlId="check">
                <Form.Check type="checkbox" label="I accept the Terms of Use & Privacy Policy" {...register("check", {
                    required: "You need to check this"
                })} />
                <Form.Text className="text-danger">
                    {errors.check && errors.check.message}
                </Form.Text>
            </Form.Group>

            <div className="d-grid gap-2 mt-4">
                <button type="submit" className={`btn ${!register.loading ? "btn-success" : "btn-light"} w-100`}> Register </button>
            </div>
        </Form>
    )
}
