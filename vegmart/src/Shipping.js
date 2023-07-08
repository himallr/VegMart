import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function Ship() {
    return (
        <div style={{ backgroundColor: "#eee", paddingTop: "120px", paddingBottom: "50px" }}>
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-secondary rounded-circle text-center">1</button>
                    <Link className="text-decoration-none text-dark mx-5" to="ShippingDet">Shipping Details</Link>
                    <hr></hr>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-secondary rounded-circle text-center">2</button>
                    <Link className="text-decoration-none text-dark mx-5" to="Stripe">Payment Details</Link>
                    <hr></hr>
                </div>
            </div>

            <Outlet />
        </div>

    )
}

export default Ship;