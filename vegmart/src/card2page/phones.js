import React, { useEffect, useState } from "react";
import Card4 from "../card1page/Card4";
import '../card1page/Card4';

function Phones(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch('http://localhost:3001/smartphones');
            const getdata = await res.json();

            setItems(getdata);
            console.log(getdata);
        }
        getItems();
    }, []);

    const { products, onAdd } = props;

    return (
        <div className="py-5" id="wrapper" style={{ marginTop: "100px", marginBottom: "50px" }}>
            <h1>Here are some SmartPhones Available!</h1>
            <h2>SmartPhones</h2>
            <div style={{ display: "flex", paddingLeft: "50" }}>
                {products.map((product,idx) =>
                (
                    <div key={idx}>
                    <Card4 key={product.id} products={product} onAdd={onAdd} />
                    </div>
                )
                )
                }
                {/* {
                    items.map((e, idx) => {
                        return (
                            <div key={idx}>
                                <Card4 id={e.logo} name={e.name} price={e.price} img={e.image} onAdd={onAdd} />
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default Phones;