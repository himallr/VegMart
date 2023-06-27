import React from "react";
import Card4 from "./Card4";

function Grocery(props) {

    const { products, onAdd } = props;

    return (
        <div className="py-5" style={{marginTop: "100px",marginBottom: "50px"}}>
            <h1>Here are some Frest Veges Available!</h1>
            <h2>Vegetables</h2>
            <div style={{ display: "flex" }}>
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

export default Grocery;