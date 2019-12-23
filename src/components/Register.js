import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import {
    Col, Row, Button, FormGroup, Label, Input
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
                {/* <Field
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                />
                {touched.first_name && errors.first_name && (
                    <p className="errors">{errors.first_name}</p>
                )}
                <Field
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                />
                {touched.last_name && errors.last_name && (
                    <p className="errors">{errors.last_name}</p>
                )}
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                {touched.email && errors.email && (
                    <p className="errors">{errors.email}</p>
                )}
                <Field
                    type="text"
                    name="user_name"
                    placeholder="Username"
                />
                {touched.username && errors.username && (
                    <p className="errors">{errors.username}</p>
                )}

                <button type="submit">Submit</button> */}

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                            />

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Field
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                    </Col>
                </Row>
                <FormGroup>
                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">Zip</Label>
                            <Input type="text" name="zip" id="exampleZip" />
                        </FormGroup>
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