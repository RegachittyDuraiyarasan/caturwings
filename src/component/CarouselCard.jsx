import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImg1 from "../assets/images/carousel-img-1.png";
import carouselImg2 from "../assets/images/carousel-img-2.jpg";
import carouselImg3 from "../assets/images/carousel-img-3.jpg";
import cleaning from "../assets/images/cleaning.png";
import trainer from "../assets/images/trainer.png";
import pool from "../assets/images/pool.jpg";
const CarouselCard = () => {
  const settings = {
    loop: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // {
      // breakpoint: 600,
      // settings: {
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // },
      // },
      // {
      // breakpoint: 480,
      // settings: {
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // },
      // },
    ],
  };

  const card = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    cleaning,
    pool,
    trainer,
  ];

  return (
    <>
      <section>
        <div className="container" data-aos="flip-left" data-aos-offset="100">
          <Slider {...settings} className="">
            {card.map((item, index) => {
              return (
                <div key={index} className="w-100 h-100">
                  <img
                    src={item}
                    alt="Clients Logo"
                    style={{ objectFit: "cover" }}
                    className="h-100 w-100 rounded-4 p-2"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CarouselCard;
