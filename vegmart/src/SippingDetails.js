import Axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Shipping() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [address, setAddress] = useState("");

    const submitOnClick = () => {
        Axios.post('https://veg-mart-server.vercel.app/shipping',
            { name: name, email: email, phone: phone, address: address }).then(() => {
                console.log("submitted");
            });
    };

    return (
        <div style={{ backgroundColor: "#eee", paddingTop: "10px", paddingBottom: "50px" }}>
            <h1 className="text-center my-4">Shipping Details</h1>
            <div className="information">
                <label>Enter Full Name:</label>
                <input
                    type="text" id="user" name="name" placeholder="Enter Your Name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    required
                />
                <label>Enter Email Address:</label>
                <input
                    type="email" id="email" name="email" placeholder="Enter Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    required
                />
                <label>Enter Phone Number:</label>
                <input
                    type="text" id="phone" name="phone" placeholder="Enter phone"
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                    required
                />
                <label>Enter your current Address:</label>
                {/* <textarea className="my-2" rows={5} cols={40} placeholder="Enter Adress"
                    onChange={(event) => {
                        setAddress(event.target.value);
                    }}></textarea> */}
                <input
                    type="text" id="phone" name="address" placeholder="Enter Address"
                    onChange={(event) => {
                        setAddress(event.target.value);
                    }}
                    required
                />
                <Link to="/Shipping/Stripe"><button className="btn btn-outline-danger px-5 py-2" onClick={submitOnClick}>Continue</button></Link>

            </div>
        </div>
    )
}

export default Shipping
