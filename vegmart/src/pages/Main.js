import React, { useEffect, useState } from "react";
import './Main.css';
import slide2 from '../images/SLIDES/slide2.jpg';
import slide1 from '../images/SLIDES/slide1.jpg';
import slide3 from '../images/SLIDES/slide3.jpg';
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import groceries from "./groceriesTypes";
import mobile from "./phoneTypes";
import grainsmain from "./grainsTypes";
import { Link } from 'react-router-dom';

function Main(props) {

    const slide = [
        { url: [slide1] },
        { url: [slide2] },
        { url: [slide3] },
        { url: [slide2] },
    ];

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch('http://localhost:3001/card1');
            const getdata = await res.json();
            setItems(getdata);
        }
        getItems();
    }, []);

    const [card2, setCard2] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch('http://localhost:3001/card2');
            const getdata = await res.json();
            setCard2(getdata);
        }
        getItems();
    }, []);

    const [card3, setCard3] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch('http://localhost:3001/card3');
            const getdata = await res.json();
            setCard3(getdata);
        }
        getItems();
    }, []);


    // const [page, setPage] = useState("Grains");

    return (<div className="py-2" style={{ marginTop: "104px" }}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link to="/"><img className="image d-block w-100 h-0" src={slide1} alt="First slide" /></Link>
                </div>
                <div className="carousel-item">
                    <Link to="/phones"><img className="image d-block w-100 h-10" src={slide2} alt="Second slide" /></Link>
                </div>
                <div className="carousel-item">
                    <Link to="/groceries"><img className="image d-block w-100 h-10" src={slide3} alt="Third slide" /></Link>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <br></br>

        <h1 className="mx-3">Check out!</h1>
        <div className="container">
            <div className="row">
                {items.map((typesFruit) => {
                    return (
                        <div className='col-xl-4 col-md-6 col-sm-6'>
                            <Card id={typesFruit.id} name={typesFruit.name} img={typesFruit.image} />
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
        <hr></hr>
        <div className="container-fluid" >
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card border-0'>
                        <div className='card-body'>
                            <a href="/Phones">
                                <img className='card-img-top embed-responsive-item' src={slide2} alt="slide2" height={100}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <h1 className="mx-3">Streams on to go</h1>
        <div className="container">
            <div className="row">
                {card2.map(typesMobile => {
                    return (
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <Card2 name={typesMobile.name} img={typesMobile.image} range={typesMobile.price} />
                        </div>
                    )
                })}
            </div>
        </div>
        <br></br>
        <div className="container-fluid" >
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card border-0'>
                        <div className='card-body'>
                            <a href="/Phones">
                                <img className='card-img-top embed-responsive-item' src={slide3} alt="slide2" height={100}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 className="mx-3 pt-4">Trending now!</h1>
        <div className="container">
            <div className="row">
                {groceries.map(typesMob => {
                    return (
                        <div className='col-xl-4 col-md-6 col-sm-6'>
                            <Card3 img={typesMob.images1} />
                        </div>
                    );
                }
                )
                }
            </div>
        </div>
        <hr></hr>
        <h1 className="mx-3">Home and Kitchen</h1>
        <div className="container">
            <div className='row'>
                {card3.map(e => {
                    return (
                        <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6'>
                            <Card2 name={e.name} img={e.image} />
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
        <hr></hr>
    </div>
    );
}

export default Main;