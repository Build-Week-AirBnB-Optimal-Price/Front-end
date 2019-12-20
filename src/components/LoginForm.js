import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({values, errors, touched, status}) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touched);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Status has changed!", status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <div className="login-form">
            <Form>
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
            </Form>
        </div>
    )

}