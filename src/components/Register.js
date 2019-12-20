// first_name
// last_name
// email
// user_name

import React, { useState } from 'react';


const Register = () => {
    const [register, setRegister] = useState({
        first_name: "",
        last_name: "",
        email: "",
        user_name: ""
    })

    const handleChanges = event => {
        setRegister({ ...register, [event.target.name]: event.target.value })
    };
    const addNewRegister = () => {
        return
    }

    const submitForm = event => {
        event.preventDefault();
        console.log(register.first_name);
        console.log(register.last_name);
        console.log(register.email);
        console.log(register.user_name);

        addNewRegister({ first_name: "", last_name: "", email: "", user_name: "" })
    }
    console.log("register state", register);

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="first_name">First Name</label>
            <input
                id="first_name"
                type="text"
                name="first_name"
                onChange={handleChanges}
                value={register.first_name}
            />
            <label htmlFor="last_name">Last Name</label>
            <input
                id="last_name"
                type="text"
                name="last_name"
                onChange={handleChanges}
                value={register.last_name}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={register.email}
            />
            <label htmlFor="user_name">First Name</label>
            <input
                id="user_name"
                type="text"
                name="user_name"
                onChange={handleChanges}
                value={register.user_name}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Register;