import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(props) {

    const handleClick= () =>{
        const text="Go to cart"
        const value= new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
    }

    const handleSignIn= () =>{
        const text="LogIn"
        const value= new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
    }

    const { countCartItems } = props;
    return <div className="fixed-top">
        <Navbar expand="md" className="bg-body-terittory bg-danger">
            <Container>
                <div className="row d-flex flex-row">
                    <Navbar.Brand href="/" className="text-bold h1">VEGMART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="h5">Home</Nav.Link>
                            <Nav.Link href="/Cart" className="h5" onClick={handleClick}>
                                Cart {' '}
                                {countCartItems ? (
                                    <button className="badge bg-dark text-white">{countCartItems}</button>
                                ) : (' ')
                                }
                            </Nav.Link>
                            <Nav.Link href="/LogIn" className="h5 border text-white" onClick={handleSignIn}>LogIn</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
        <div className="typesof">
            <select name="Groceries">
                <option>Fruits</option>
                <option>Beverages</option>
                <option>Home Care</option>
            </select>
            <select>
                <option>Trays</option>
                <option>Baskets</option>
                <option>Fridges</option>
            </select>
            <select>
                <option>SmartPhones</option>
                <option>Realme</option>
                <option>Redmi</option>
                <option>Samsung</option>
            </select>
            <select>
                <option>Refrigerators</option>
                <option>SAMSUNG</option>
                <option>LG</option>
                <option>WhirlPool</option>
                <option>Haeir</option>
            </select>
            <select>House Improvement
                <option>Auto Care</option>
                <option>Carpentry</option>
                <option>Home Cleaning and organisation</option>
                <option>Kitchen and Bath Fixtures</option>
            </select>
        </div>
    </div>
}

export default Header;