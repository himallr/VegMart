import React from "react";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

function Card2(props) {
    const navigate = useNavigate();

    return (
        <div className="card mx-2 my-3" style={{ width: "12rem" }}>
            <img className="card-img-top" src={props.img} style={{ height: 200 }}></img>
            <div className="card-body">
                <div style={{ textAlign: "center" }}>
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.range}</p>
                    <button className="btn btn-danger" onClick={() => { navigate('/Phones') }}>Check Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card2;