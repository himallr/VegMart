import React, { useState } from "react";
import './Card.css';
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();

    // const { cartItems } = props;
    // const { product, onAdd } = props;

    return (

        <div className="container">
            <div className="card">
                <img src={props.img} className="card-img-top" style={{ height: 200 }}></img>
                <div className="card-body">
                    <div style={{ textAlign: "center" }}>
                        <h3 className="card-title">{props.name}</h3>
                        <Link to="/groceries"><button className="btn btn-danger">Check Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;