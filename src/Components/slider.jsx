import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slider = [
    {
        id: 1,
        src: "../images/slider-image-1.png"
      },
      {
        id: 2,
        src: "../images/slider-image-2.png"
      },
      {
        id: 3,
        src: "../images/slider-image-3.png"
      }
]

export default class Sliider extends Component {
  constructor() {
    super();
    this.state = { slider: [] };
  }

  render() {

      const settings={
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        fade:true,
        infinite:true,
        speed:200,
        slidesToshow:1,
        arrows:true,
        slidesToScroll:1,
        className:"slides"
        }

    return (
        <>
        <div className="slider-box">
        <Slider {...settings}>
            {

                slider.map(slides => (
                    <>
                    <img className="slider-img" id={slides.id} alt="slider-img" width="100%" height="100%" src={slides.src} />
                    </>
                ))
            }
            </Slider>
            </div>
            </>
    );
  }
}
