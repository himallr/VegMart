import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./SignIn.css";
import { Link } from "react-router-dom";

function LogIn() {

    const [user, setUsername] = useState("");
    const [password, setPass] = useState("");

    const [login, setLogin] = useState("");

    const submitOnClick = () => {
        Axios.post('http://localhost:3001/login',
            { user: user, password: password }).then((response) => {
                if (response.data.message) {
                    setLogin(response.data.message);
                }
                else {
                    setLogin(response.data[0].username);
                }
            });
    };

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee", marginTop: "110px" }}>
            <div className="Con">
                <h1 className="text-center my-4">LogIn</h1>
                <div className="information">
                    <label>Username:</label>
                    <input
                        type="text" id="id" name="id" onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                    <label>Password:</label>
                    <input
                        type="password" id="password" name="password"
                        onChange={(event) => {
                            setPass(event.target.value);
                        }}
                    />

                    <Link to="/"><button className="btn btn-danger" onClick={submitOnClick} >Log In</button></Link>
                    <div className="d-flex justify-content-between my-3">
                        <p className="px-4">Create an account?</p>
                        <Link to="/SignIn" className="text-dark">SignUp</Link>
                    </div>
                </div>
            </div>
            <h5 className="text-center">{login}</h5>
        </section>
    )
}

export default LogIn;