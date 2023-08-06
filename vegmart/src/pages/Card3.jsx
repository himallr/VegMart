import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


function Card3(props) {

    const navigate = useNavigate();

    return <div>
        <div className="card border-0 shadow mx-2 my-3" style={{ width: "14rem" }}>
            <Link to="/Phones">
                <img className="card-img-top" src={props.img} style={{ height: 450 }}></img>
            </Link>
        </div>
    </div>
}

export default Card3;