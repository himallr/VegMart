import { Axios } from "axios";
import React, { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';

function Stripe(){

    const [product ] = useState({
        name: "Smaple",
        price: 200,
        description: "Sample"
    })

    async function handleToken(token,addresses){
        const response = await Axios.post('http://localhost:3001/checkout',(token,product))

    }

    return(
        <div className="container" style={{ backgroundColor: "#eee", marginTop: "110px" }}>
            <div className="row">
                <h1>Stripe Payment Method</h1>
            </div>
            <div className="form-group container">
                <StripeCheckout className="center" stripeKey="pk_test_51NPHokSD1SZTUDhPlFvyRedL6P3jRsbhzdwOJCzJYSJBZU3yLV3EyJT8kUdLHgsmY7RCBfhozIrieXO9M778HrLH00Lfyi2SAN"
                token={handleToken}
                amount={product.price * 100}
                name={product.name}
                billingAddress
                shippingAddress />
            </div>
        </div>
    )
}

export default Stripe