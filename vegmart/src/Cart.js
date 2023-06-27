import { Button } from "bootstrap";
import React from "react";

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const priceItem = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxItem = priceItem * 0.10;
    const shippingPrice = priceItem > 200 ? 0 : 70;
    const totalPrice = priceItem + taxItem + shippingPrice;

    return (
        <div className="container" style={{ marginTop: "130px", marginBottom: "80px" }}>
            <h1 className="my-4">Cart Items</h1>
            <hr></hr>
            <div className="row">
                <div id="col-md-12">
                    {cartItems.length === 0 && <div>Cart Is Empty</div>}
                    {/* <div className="row mx-0">
                        <h4 className="col-md-2"></h4>
                        <h4 className="col-md-4">Products</h4>
                        <h4 className="col-md-3">Items</h4>
                        <h4 className="col-md-3">Price</h4>
                    </div>
                    <hr></hr> */}
                    {cartItems.map((item) => (
                        <div className="container">
                            <div key={item.id} className="row">
                                <div className="col-md-2 text-center"><img src={item.image} width={50} height={100}></img></div>
                                <div className="col-md-2 h5 mx-4 text-center">{item.name} {item.weight}</div>
                                <div className="col-md-4 ">
                                    <div style={{ border: "1px solid black" }} className="mx-4">
                                        <button onClick={() => onRemove(item)} className="remove px-2">-</button>
                                        {item.qty}
                                        <button onClick={() => onAdd(item)} className="add px-2">+</button>
                                    </div>

                                </div>
                                <div className="col-md-2 text-right">
                                    {item.qty} x {item.price}
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            </div>
            {cartItems.length !== 0 && (
                <>
                    <div className="row">
                        <div className="col-md-4 h4">Items prices:</div>
                        <div className="col-md-4 text-right">Rs.{priceItem.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 h4">Tax prices:</div>
                        <div className="col-2 text-right">Rs.{taxItem.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 h4">Shipping Charge(below 2000):</div>
                        <div className="col-2 text-right">Rs.{shippingPrice.toFixed(2)}</div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6 h2">Total prices:</div>
                        <div className="col-2 text-right">Rs.{totalPrice.toFixed(2)}</div>
                    </div>
                    <div className="row my-4">
                        <button className="btn btn-outline-danger px-5 py-2" style={{ marginLeft: "25%" }}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart;