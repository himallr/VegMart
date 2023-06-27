import React from "react";
import Card4 from "../card1page/Card4";

function Phones(props) {

    const { products, onAdd } = props;

    return (
        <div className="py-5" style={{marginTop: "100px",marginBottom: "50px"}}>
            <h1>Here are some SmartPhones Available!</h1>
            <h2>SmartPhones</h2>
            <div style={{ display: "flex", paddingLeft: "50" }}>
                {products.map((product) =>
                (
                    <Card4 key={product.id} products={product} onAdd={onAdd} />
                )
                )
                }
            </div>
        </div>
    )
}

export default Phones;