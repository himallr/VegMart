import React, { useState } from "react";
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
import foot from "./footwearTypes";
import grains from "../card3page/GrainsTypes";
import grainsmain from "./grainsTypes";

function Main(props) {
    const slide = [
        { url: [slide1] },
        { url: [slide2] },
        { url: [slide3] },
        { url: [slide2] },
    ];

    const [page,setPage] =useState("Grains");

    return <div className="py-4" style={{marginTop: "80px"}}>
        <div>
            <SimpleImageSlider width={1519}
                height={250} images={slide} showBullets={true}
                showNavs={true} />
        </div>
        <br></br>
        <div className="ad mx-3" >
            <a href="/Phones">
                <img src={slide2} alt="slide2"></img>
            </a>
        </div>
        <hr></hr>
        <div className="cards ">
            {groceries.map(typesFruit => (
                <Card id={typesFruit.id} name={typesFruit.name} img={typesFruit.image}/>
            )
            ) 
            }
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