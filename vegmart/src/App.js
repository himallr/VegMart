import React, { useState } from 'react';
import Main from './pages/Main';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Route, Routes } from 'react-router';
import Phones from './card2page/phones';
import phones from './card2page/PhoneTypes';
import Grocery from './card1page/grocery';
import vegies from './card1page/GroceryTypes';
import SignIn from './signinpages/SignIn';
import Cart from './Cart';
import grains from './card3page/GrainsTypes';
import Grain from './card3page/Grains';
import Feedback from './Feedback';
import LogIn from './signinpages/Login';
import Shipping from './SippingDetails';
import Stripe from './Stripe';

function App() {

    const { products } = phones;
    const {groc} = vegies;
    const {prods} = grains;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
        }
        else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        }
        else {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    };

    return (
        <div>
            <Header countCartItems={cartItems.length} />
            <Routes>
                <Route path='/SignIn' element={<SignIn />}></Route>
                <Route path='/Groceries' element={<Grocery onAdd={onAdd} products={groc}/>}></Route>
                <Route path='/Phones' element={<Phones onAdd={onAdd} products={products} />}></Route>
                <Route path='/Grain' element={<Grain onAdd={onAdd} products={prods} />}></Route>
                <Route path='/Cart' element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}></Route>
                <Route path='/Feedback' element={<Feedback />}></Route>
                <Route path='/Shipping' element={<Shipping />}></Route>
                <Route path='/LogIn' element={<LogIn />}></Route>
                <Route path='/Stripe' element={<Stripe />}></Route>
                <Route path="/" element={<Main />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;