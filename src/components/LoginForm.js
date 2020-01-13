import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";

import {
    Alert, Col, Row, Button, FormGroup,
} from 'reactstrap';

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const LoginTitle = styled.div`
    font-size: 2rem;
    padding: 2%;
`

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
        <LoginDiv className="wrapper">
            <LoginTitle>Login</LoginTitle>
            {/* <Form>
                <label htmlFor="username">
                    Username
                    <Field
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                    {touched.username && errors.username && (
                        <p className="errors">{errors.username}</p>
                    )}
                </label>
                <label htmlFor="password">
                    Password
                    <Field
                        id="password"
                        type="text"
                        name="password"
                        placeholder="Password"
                    />
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}
                </label>

                <button type="submit">Submit</button>
            </Form> */}
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="username"
                                placeholder="Username"
                            />
                            {touched.username && errors.username && (

                                <Alert color="danger">
                                    <p className="errors">{errors.username}</p>
                                </Alert>
                            )}
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            {touched.password && errors.password && (

                                <Alert color="danger">
                                    <p className="errors">{errors.password}</p>
                                </Alert>
                            )}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button tpye="submit" outline color="success">
                            Submit
                    </Button>
                    </Col>
                </Row>
            </Form>



        </LoginDiv >
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