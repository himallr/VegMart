import Axios from "axios";
import React, { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import GooglePayButton from '@google-pay/button-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Stripe(props) {
    //toast.configure()

    const [product] = useState({
        name: "Smaple",
        price: props.price,
        description: "Sample"
    })

    Axios.defaults.withCredentials = true;

    async function handleToken(token, addresses) {
        const response = await Axios.post('http://localhost:3001/checkout', {token, product})

        console.log(response.status);

        if(response.status === 200){
            toast("Success Payment",{type: "Success"});
        }
        else{
            toast("Payment is not completed",{type:"error"})
        }
    }

    return (
        <div className="container" style={{ backgroundColor: "#eee", marginTop: "100px" }}>
            <div className="row">
                <h1>Payment Method</h1>
            </div>
            <div className="form-group container my-3">
                <h4 className="my-4">Choose your payment option:</h4>
                <div className="card px-5" style={{ backgroundColor: "#eee" }}>
                    <h3>Google Pay:</h3>
                    <div className="row my-4 mx-1">
                        <GooglePayButton
                            ks
                            environment="TEST"
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', "CRYPTOGRAM_3DS"],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'example',
                                                gatewayMerchantID: 'exampleGatewayMerchantId'
                                            }
                                        }
                                    }
                                ],
                                merchantInfo: {
                                    merchantId: "12345678901234567890",
                                    merchantName: 'DEMO Merchant'
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: '100.00',
                                    currencyCode: 'INR',
                                    countryCode: 'US'
                                }
                            }}

                            onLoadPaymentData={paymentRequest => {
                                console.log('Load Payment Data', paymentRequest);
                            }}
                        />
                    </div>
                    <h3>Pay with Card:</h3>
                    <div>
                        <StripeCheckout className="center my-4" stripeKey="pk_test_51NPHokSD1SZTUDhPlFvyRedL6P3jRsbhzdwOJCzJYSJBZU3yLV3EyJT8kUdLHgsmY7RCBfhozIrieXO9M778HrLH00Lfyi2SAN"
                            token={handleToken}
                            amount={props.price}
                            name={product.name}
                            billingAddress
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stripe