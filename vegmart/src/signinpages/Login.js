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
        Axios.post('http://localhost:3001/login',values).then(response => {
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
                {/* <table className="border text-center">
                    <tr className="border">
                        <td>Username</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Confirm_Password</td>
                    </tr>
                    {
                        items.map((getitem) => (
                            // <div className="row">
                            //     <div className="col-sm-6">
                            <tr> 
                                <td className="card-title">{getitem.name}</td>
                                <td className="card-title">{getitem.price}</td>
                                <td className="card-title">{getitem.weight}</td>
                                <td className="card-title">{getitem.image}</td>
                            </tr>
                        ))
                    }
                </table> */}
            </div>

        </section>
    )
}

export default LogIn;