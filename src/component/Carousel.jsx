// LogoCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Michael from "../assets/images/Michael.png";
import Nick from "../assets/images/Nick.png";
import Retro from "../assets/images/Retro.png";
import skylight from "../assets/images/skylight.png";
import AboutIcon from "../assets/images/Line3.svg";
import "../css/Carousel.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 320,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  // Replace with actual image URLs or import statements for your logos
  const logos = [Michael, Nick, Retro, skylight];

  return (
    <section className="section bg-white py-5" id="brand-carousel">
      <div className="container px-2 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center align-item-center gap-3">
        <hr className="line" />
          <h2 className="mx-2 mb-0 pt-1 fs-20 font-saira-semi-Condensed fw-bold">
            OUR SUCCESSFUL CLIENTS
          </h2>
          <hr className="line" />
        </div>
        <div className="py-5">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="p-2">
                <img
                  src={logo}
                  className="img-fluid"
                  alt={`Logo ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
