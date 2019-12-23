import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import {
    Col, Row, Button, FormGroup,
} from 'reactstrap';
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ values, errors, touched, status }) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touched);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Status has changed!", status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div className="login-form">
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                            />
                            {touched.first_name && errors.first_name && (
                                <p className="errors">{errors.first_name}</p>
                            )}
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                            />
                            {touched.last_name && errors.last_name && (
                                <p className="errors">{errors.last_name}</p>
                            )}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            {touched.email && errors.email && (
                                <p className="errors">{errors.email}</p>
                            )}
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="username"
                                placeholder="Username"
                            />
                            {touched.username && errors.username && (
                                <p className="errors">{errors.username}</p>
                            )}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button outline color="secondary">
                            Submit
                    </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        axios
            .post("https://optimal-airbnb-pricing-api.herokuapp.com/login", values)
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.res));
    }
})(LoginForm);

export default FormikLoginForm;