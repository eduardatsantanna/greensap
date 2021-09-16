
import "@/scss/auth/index.scss";
import { Modal, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authenticationService } from "@/services";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"

export const Signin = ({ handleClose, show }) => {

    //const { data, loading } = useAuth({ id: 1 });

    // userService.getAll().then((users) => {

    //     console.log(users);

    // });

    //console.log(data);
    const onClose = (e) => {
        handleClose(e);
    }

    const initialState = { loading: false, isLoged: false, error: null };
    const [loged, setLoged] = useState(initialState);
    const history = useHistory();
    const [viewPass, setViewPass] = useState(false);


    const loginUser = (user) => {

        setLoged({
            ...initialState,
            loading: true
        });

        authenticationService.login(user.username, user.password).then(
            user => {
                setLoged({
                    ...loged,
                    loading: false,
                    isLoged: true,
                });
                setTimeout(() => {
                    onClose();
                    history.push('/dashboard');
                }, 1000);
            },
            error => {
                setLoged({
                    ...loged,
                    loading: false,
                    isLoged: false,
                    error: error
                });

                
            }
        );
    }

    const onSubmit = (user) => {
        loginUser(user);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        criteriaMode: "firstError",
    });

    return (

        <Modal show={show} onHide={handleClose} centered="true">
            <Modal.Header closeButton>
                <Modal.Title centered="true">Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <Form.Group className="mb-2" controlId="loginUser">
                        <Form.Label>Username / Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" {...register("username", {
                            required: "The username is required",
                        })}
                            // isValid={touchedFields.email&&!errors.email}
                            isInvalid={errors.username}
                        />
                        <Form.Text className={errors.username ? 'text-danger' : 'text-muted'}>
                            {errors.username ? errors.username.message : 'Enter your username or email address.'}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="loginPass">
                        <Form.Label>Password</Form.Label> <InputGroup>
                            <Form.Control type={viewPass ? "text" : "password"} placeholder="Password" {...register("password", {
                                required: "The password is required"
                            })}
                                // isValid={touchedFields.email&&!errors.email}
                                isInvalid={errors.password}
                            />

                            <InputGroup.Append>
                                <div style={{ zIndex: "100", height: "100%", position: "absolute", right: "2rem", display: "flex", alignItems: "center" }}>
                                    {!viewPass ?
                                        <FontAwesomeIcon icon={faEyeSlash} onClick={() => setViewPass(!viewPass)} />
                                        :
                                        <FontAwesomeIcon icon={faEye} onClick={() => setViewPass(!viewPass)} />
                                    }
                                </div>
                            </InputGroup.Append>
                        </InputGroup>

                        <Form.Text className="text-danger">
                            {errors.password && errors.password.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2 text-center" controlId="formBasicCheckbox">
                        {/* <Form.Check type="checkbox" label="Remember me!" /> */}
                        <a href="javascript(0)" className="text-primary mt-2">Do you forgot your password?</a>
                    </Form.Group>

                    {(!loged.isLoged && loged.error) &&
                        <div className={`alert alert-danger text-center d-grid gap-2 mt-4`}>
                            {loged.error}
                        </div>
                    }

                    {(loged.isLoged && !loged.error) &&
                        <div className={`alert alert-success texte-center d-grid gap-2 mt-4`}>
                            Logged successfully.
                        </div>
                    }

                    <div className="d-grid gap-2 mt-4">
                        <button type="submit" className={`btn ${!loged.loading ? "btn-success" : "btn-light"} w-100`}>{!loged.loading ? "Login" : (<span className="text-muted">Loading...</span>)}</button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>

    )

}