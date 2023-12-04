import React, { useEffect, useState } from "react";
import Card4 from "../card1page/Card4";

function Grains(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch('https://veg-mart-5u48.vercel.app/grains');
            const getdata = await res.json();
            setItems(getdata);
        }
        getItems();
    }, []);

    const { products, onAdd } = props;

    return (
        <div className="container py-5" style={{ marginTop: "100px", marginBottom: "50px" }}>
            <h1>Here are some Products Available!</h1>
            <h2></h2>
            <div className="row">
                {items.map((e) =>
                (
                    <div className="col-lg-3 col-md-4 col-sx-4">
                        <Card4 id={e.id} name={e.name} price={e.price} img={e.image} onAdd={onAdd} />
                    </div>
                )
                )
                }
            </div>
        </div>
    )
}

export default Grains;
