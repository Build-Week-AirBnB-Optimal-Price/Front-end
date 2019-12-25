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
                        <Button tpye="submit" outline color="secondary">
                            Submit
                    </Button>
                    </Col>
                </Row>
            </Form>

            {users.map(user => {
                return (
                    <ul>
                        <li>First Name: {user.first_name}</li>
                        <li>Last Name: {user.last_name}</li>
                        <li>Email: {user.email}</li>
                        <li>Username: {user.username}</li>
                    </ul>
                )
            })}
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues(props) {
        return {
            first_name: props.first_name || "",
            last_name: props.last_name || "",
            email: props.email || "",
            username: props.username || "",
        };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        email: Yup.string().required(),
        username: Yup.string().required()
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.res));
    }
})(LoginForm);

export default FormikLoginForm;