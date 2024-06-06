import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css"
import { Image } from '../Image/Image'; 

export const Carrusel = () => {
  const ArrowLeft = (props) => (
    <button {...props} className="slick-arrow slick-prev">{""}</button>
);

const ArrowRight = (props) => (
    <button {...props} className="slick-arrow slick-next">{""}</button>
);
    const settings = {
        dots: true,
        infinite: true, 
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000 ,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />
    };


    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <Image src="/sportWoman.jpg" alt="Slide 1" className={"carousel-image"} />
                </div>
                <div>
                    <img src="/pilates.jpg" alt="Slide 2" className={"carousel-image"} />
                </div>
                <div>
                    <img src="/bici.jpg" alt="Slide 3" className={"carousel-image"} />
                </div>
            </Slider>
        </div>
    );
}
