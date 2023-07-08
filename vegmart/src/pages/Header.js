import React, { useEffect, useState } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Link } from "react-router-dom";
import Axios from "axios";
import SearchResult from "./SearchResults";

function Header(props) {

    const [auth, setAuth] = useState(false)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        Axios.get('http://localhost:3001').then((res) => {
            console.log(res.data.Status)
            if (res.data.Status === "Success") {
                setAuth(true);
                setName(res.data.name);
            }
            else {
                setAuth(false);
                setMessage(res.data.Message)
            }
        })
    }, [])

    const [input, setInput] = useState([]);

    const [result, setResults] = useState([]);

    const fetchData = (value) => {
        fetch("http://localhost:3001/groceries")
            .then((res) => res.json())
            .then(json => {
                const results = json.filter((user) => {
                    return (value && user && user.name && user.name.toLowerCase().includes(value));
                });
                console.log(results);
                setResults(results);
            });
    };

    const searchHandle = (value) => {
        setInput(value)
        fetchData(value)
        
    }

    const handleLogout = () => {
        Axios.get('http://localhost:3001/logout').then(res => {
            console.log(res.data.Status)
            if (res.data.Status === "Success") {
                window.location.reload(true);
            }
            else {
                alert("error")
            }
        }).catch(err => console.log(err))
    }

    const handleHome = () => {
        const text = "Welcome"
        const value = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
    }

    const handleClick = () => {
        const text = "Go to cart"
        const value = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
    }

    const handleSignIn = () => {
        const text = "LogIn"
        const value = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
    }

    const { countCartItems } = props;

    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand text-white" to="/" onClick={handleHome}><strong>VEGMART</strong></Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/Cart" className="bg-danger text-decoration-none link-light mx-5" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                            </svg>
                            {' '}
                            {countCartItems ? (
                                <button className="badge bg-dark text-white">{countCartItems}</button>
                            ) : (' ')
                            }
                        </Link>
                    </ul>
                    <h4>{name}</h4>
                </div>
                <form className="d-flex flex-column form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" onChange={(e) => searchHandle(e.target.value)} placeholder="Search here..." aria-label="Search" />
                    <SearchResult results={result} />
                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
                {
                    auth ?
                        <div>
                            <button className="btn btn-danger" onClick={handleLogout}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                    <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                            </button>
                        </div>
                        :
                        <div>
                            <Link className="text-decoration-none mx-3" onClick={handleSignIn} to="/LogIn">
                                Login
                            </Link>
                        </div>
                }
            </nav>
            <div className="d-flex bg-danger">
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Groceries
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Tomatoes</Link>
                        <Link className="dropdown-item" to="#">Onions</Link>
                        <Link className="dropdown-item" to="#">Brinjals</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Snacks
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Chats</Link>
                        <Link className="dropdown-item" to="#">Fast Foods</Link>
                        <Link className="dropdown-item" to="#">Spicy snacks</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Clothes
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Mens</Link>
                        <Link className="dropdown-item" to="#">Womens</Link>
                        <Link className="dropdown-item" to="#">Kids</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Furnitures
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Chairs</Link>
                        <Link className="dropdown-item" to="#">Tables</Link>
                        <Link className="dropdown-item" to="#">Beds</Link>
                        <Link className="dropdown-item" to="#">Shelves</Link>
                        <Link className="dropdown-item" to="#">Showcases</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Electronics
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">TV</Link>
                        <Link className="dropdown-item" to="#">SmartPhones</Link>
                        <Link className="dropdown-item" to="#">Headsets</Link>
                        <Link className="dropdown-item" to="#">Printers</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;