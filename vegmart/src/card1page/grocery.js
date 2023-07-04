import React, { useEffect, useState } from "react";
import Card4 from "./Card4";
import './Card4.css';

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
        <div className="py-5" id="wrapper" style={{ marginTop: "100px", marginBottom: "50px" }}>
            <h1>Here are some Frest Veges Available!</h1>
            <h2>Vegetables</h2>
            <div style={{ display: "flex", paddingLeft: "50" }}>
                {/* {products.map((product) =>
                (
                    <Card4 key={product.id} products={product} onAdd={onAdd} />
                )
                )
                } */}
                {
                items.map((e)=>{
                    return(
                        <Card4 id={e.logo} name={e.name} price={e.price} weight={e.weight} img={e.image} onAdd={onAdd}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Grocery;