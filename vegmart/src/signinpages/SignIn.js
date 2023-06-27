import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {

    const [user, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirmPassword] = useState("");

    const [employeeList, setEmployeeList] = useState([]);

    const submitOnClick = () => {
        Axios.post('http://localhost:3001/api/create',
            { user: user, email: email, password: password, confirm_password: confirm }).then(() => {
                console.log("submitted");
            });
    };

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee", marginTop: "110px" }}>
            <div className="Con">
                <h1 className="text-center my-4">Sign Up</h1>
                <div className="information">
                    <label>Username:</label>
                    <input
                        type="text" id="user" name= "user"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <label>Email:</label>
                    <input
                        type="email" id="email" name= "email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <label>Password:</label>
                    <input
                        type="password" id="password" name= "password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <label>Confirm Password:</label>
                    <input
                        type="password" id="confirmpassword" name="confirmpassword"
                        onChange={(event) => {
                            setConfirmPassword(event.target.value);
                        }}
                    />
                    <Link to="/"><button className="btn btn-danger" onClick={submitOnClick}>SignUp</button></Link>
                    {/* <Link to="/Feedback">Feedback</Link> */}
                </div>
            </div>
        </section>
    )
}

export default SignIn;