import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, connect} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { login } from '../actions';
import { connect as rconnect } from 'react-redux';




const LoginForm = ( { login, values, errors, touched, status }) => {
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

    handleSubmit(values, {setStatus, resetForm}) {
        console.log("submitting", values);
        axios
        .post("https://optimal-airbnb-pricing-api.herokuapp.com/login", values)
        .then(res => {
            console.log("success", res);
            login(res.data.id)

            setStatus(res.data);
            window.localStorage.setItem('token', res.data.token);
            resetForm();
        })
        .catch(err => console.log(err.res));
    }
})(LoginForm);

// const rmapStateToProps = state => {
//     return state;
// }

export default rconnect(null,{login})(FormikLoginForm);
