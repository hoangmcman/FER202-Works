import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <NavbarComponent />
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                    <Row>
                        <Col lg={5}>
                            <Form.Group className="mb-3">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter first name"
                                    {...register("firstName", { required: "First name is required" })}
                                    className={
                                        errors.firstName
                                            ? "is-invalid"
                                            : touchedFields.firstName
                                                ? "is-valid"
                                                : ""
                                    }
                                />
                                {errors.firstName && (
                                    <div className="invalid-feedback">{errors.firstName.message}</div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    {...register("city", { required: "City is required" })}
                                    className={
                                        errors.city
                                            ? "is-invalid"
                                            : touchedFields.city
                                                ? "is-valid"
                                                : ""
                                    }
                                />
                                {errors.city && (
                                    <div className="invalid-feedback">
                                        {errors.city.message}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>
                        <Col lg={1}></Col> {/* Spacer column */}
                        <Col lg={6}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter last name"
                                            {...register("lastName", { required: "Last name is required" })}
                                            className={
                                                errors.lastName
                                                    ? "is-invalid"
                                                    : touchedFields.lastName
                                                        ? "is-valid"
                                                        : ""
                                            }
                                        />
                                        {errors.lastName && (
                                            <div className="invalid-feedback">{errors.lastName.message}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            {...register("username", { required: "Username is required" })}
                                            className={
                                                errors.username
                                                    ? "is-invalid"
                                                    : touchedFields.username
                                                        ? "is-valid"
                                                        : ""
                                            }
                                        />
                                        {errors.username && (
                                            <div className="invalid-feedback">
                                                {errors.username.message}
                                            </div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="State"
                                            {...register("state", { required: "State is required" })}
                                            className={
                                                errors.state
                                                    ? "is-invalid"
                                                    : touchedFields.state
                                                        ? "is-valid"
                                                        : ""
                                            }
                                        />
                                        {errors.state && (
                                            <div className="invalid-feedback">
                                                {errors.state.message}
                                            </div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Zip"
                                            {...register("zip", { required: "Zip code is required" })}
                                            className={
                                                errors.zip
                                                    ? "is-invalid"
                                                    : touchedFields.zip
                                                        ? "is-valid"
                                                        : ""
                                            }
                                        />
                                        {errors.zip && (
                                            <div className="invalid-feedback">
                                                {errors.zip.message}
                                            </div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    label="Agree to terms and conditions"
                                    {...register("terms", {
                                        required: "You must agree before submitting",
                                    })}
                                    className={
                                        errors.terms
                                            ? "is-invalid"
                                            : touchedFields.terms
                                                ? "is-valid"
                                                : ""
                                    }
                                />
                                {errors.terms && (
                                    <div className="invalid-feedback">
                                        {errors.terms.message}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>
                        <Col lg={12} className="mt-3">
                            <Button variant="primary" type="submit">
                                Submit form
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
};

export default Contact;


