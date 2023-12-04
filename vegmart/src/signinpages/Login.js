import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {

    const [values, setValues] = useState({
        user: '',
        password : '',
    })

    const [login, setLogin] = useState("");

    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    const submitOnClick = (e) => {
        // console.log("hello");
        e.preventDefault();
        Axios.post('https://veg-mart-5u48.vercel.app/login',values).then(response => {
                if(response.data.Status === "Success"){
                    navigate('/')
                }
                else{
                    setLogin(response.data.message);
                }
            });
    };    

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee", marginTop: "110px" }}>
            <form className="Con">
                <h1 className="text-center my-4">LOGIN HERE</h1>
                <div className="information">
                    <label>Username:</label>
                    <input
                        type="text" id="user" name="user" required onChange={(event) => {
                            setValues({...values , user: event.target.value});
                        }}
                    ></input>
                    <label>Password:</label>
                    <input
                        type="password" id="password" name="password" required
                        onChange={(event) => {
                            setValues({...values , password: event.target.value});
                        }}
                    ></input>

                    <Link to="/Stripe"><button className="btn btn-danger" onClick={submitOnClick} >Log In</button></Link>
                    <div className="d-flex justify-content-between my-3">
                        <p className="px-4">Create an account?</p>
                        <Link to="/SignIn" className="text-dark">SignUp</Link>
                    </div>
                </div>
            </form>
            <h5 className="text-center text-uppercase">{login}</h5>
            <div className="align-items-center justify-content-center">
            </div>

        </section>
    )
}

export default LogIn;
