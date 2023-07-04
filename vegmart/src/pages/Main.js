// import React, { useState } from "react";
import './Main.css';
import SimpleImageSlider from "react-simple-image-slider";
import slide2 from '../images/SLIDES/slide2.jpg';
import slide1 from '../images/SLIDES/slide1.jpg';
import slide3 from '../images/SLIDES/slide3.jpg';
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import groceries from "./groceriesTypes";
import mobile from "./phoneTypes";
import grainsmain from "./grainsTypes";
import { useState } from 'react';

function Main(props) {
    
    const slide = [
        { url: [slide1] },
        { url: [slide2] },
        { url: [slide3] },
        { url: [slide2] },
    ];

    // const [page, setPage] = useState("Grains");

    return <div className="py-2" style={{ marginTop: "100px" }}>
        <div>
            <SimpleImageSlider width={1519}
                height={250} images={slide} showBullets={true}
                showNavs={true} />
        </div>
        {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 h-20" src={slide1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 h-50" src={slide2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 h-50" src={slide3} alt="Third slide" />
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
        </div> */}
        <br></br>
        <div className="ad mx-3" >
            <a href="/Phones">
                <img src={slide2} alt="slide2"></img>
            </a>
        </div>
        <hr></hr>
        <div className="cards ">
            {groceries.map(typesFruit => (
                <Card id={typesFruit.id} name={typesFruit.name} img={typesFruit.image} />
            )
            )
            }
            {/* {
                items.map((e)=>{
                    return(
                        <Card name={e.name} price={e.price} weight={e.weight} img={e.image} />
                    )
                })
            } */}
            
        </div>
        <hr></hr>
        <h1 className="mx-3">Streams on to go</h1>
        <div className="cards">
            {mobile.map(typesMobile =>
            (
                <Card2 name={typesMobile.name} img={typesMobile.image1} range={typesMobile.range} />
            )
            )
            }
        </div>-
        <br></br>
        <div className="ad mx-3">
            <a href="/Groceries">
                <img src={slide3} alt="slide3"></img>
            </a>
        </div>
        <h1 className="mx-3 pt-4">Trending now!</h1>
        <div className="cards">
            {groceries.map(typesMob =>
            (
                <Card3 img={typesMob.images1} />
            )
            )
            }
        </div>
        <hr></hr>
        <h1 className="mx-3">Grains and Wheats</h1>
        <div className="cards">
            {grainsmain.map(typesFoot =>
            (
                <Card2 name={typesFoot.name} img={typesFoot.image} />
            )
            )
            }
        </div>
        <hr></hr>

    </div>

}

export default Main;