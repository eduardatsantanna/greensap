import { Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"

export const SignupInvestor = () => {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        criteriaMode: "firstError",
    });
    const onSubmit = (data) => alert(JSON.stringify(data));

    const [viewPass, setViewPass] = useState(false);
    const [viewConfirmPass, setViewConfirmPass] = useState(false);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Form.Group className="mb-2" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" {...register("username", {
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
