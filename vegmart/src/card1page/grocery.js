import React, { useEffect, useState } from "react";
import Card4 from "./Card4";

function Grocery(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch('http://localhost:3001/groceries');
            const getdata = await res.json();
            setItems(getdata);
        }
        getItems();
    }, []);

    const { products, onAdd } = props;

    return (
        <div className="container py-5" style={{ marginTop: "100px", marginBottom: "50px" }}>
            <h1>Here are some Fresh Vegies Available!</h1>
            <h2>Vegetables</h2>
            <div className="row">
                {
                    items.map((e) => {
                        return (
                            <div className="col-md-4">
                                <Card4 id={e.id} logo={e.logo} name={e.name} price={e.price} weight={e.weight} img={e.image} onAdd={onAdd} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Grocery;