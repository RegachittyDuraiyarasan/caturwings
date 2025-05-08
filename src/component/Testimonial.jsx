import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg1 from "../assets/images/Ellipse 2.png";
import cardImg2 from "../assets/images/Ellipse 3.png";

import cardImg3 from "../assets/images/Ellipse 4.png";

import "../css/Testimonial.css";
// import cardImg2 from "../assets/images/Ellipse 2.png";
// import cardImg3 from "../assets/images/Ellipse 2.png";

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 577);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);
  const settings = {
    loop: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
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
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const card = [
    {
      img: cardImg1,
      text: "Catur Wings has transformed our facility management with their exceptional services. Their professionalism and attention to detail are unmatched.",
      title: "Jane Smith, Facility Manager",
      alt:"Jane Smith",
    },
    {
      img: cardImg2,
      text: "The team at Catur Wings is highly skilled and reliable. They have consistently delivered top-quality services that have exceeded our expectations.",
      title: "John Doe, CEO of XYZ Corp",
      alt:"John Doe",

    },
    {
      img: cardImg3,
      text: "The team at Catur Wings is highly skilled and reliable. They have consistently delivered top-quality services that have exceeded our expectations.",
      title: "Robert Brown, Director of Operations",
      alt:"Robert Brown",

    },
    
  ];

  return (
    
    <>
     
      <section className="py-5">
        <div className="container">
          <div className="text-center text-light mb-5">
            <div className="d-flex justify-content-center  mt-5">
              <div className="border-line mt-3 "></div>
              <h6 className="mx-4 mt-2 h5 fw-bold font-saira-semi-Condensed lsp">
                TESTIMONIALS
              </h6>
              <div className="border-line1 mt-3 "></div>
            </div>
            <div className="py-2 col-lg-12  col-md-12 col-sm-12 col-xs-12">
              <h1 className="py-4 display-4 fw-bold text-uppercase font-saira ">
                WHAT OUR CLIENTS SAY
              </h1>
              {isMobile && (
              <p className="text-center font-Roboto ">
                Hear from our satisfied clients who have experienced the
                excellence of Catur Wings 
                Facility Management Services.
              </p>)}
              {!isMobile && (
              <p className="text-center font-Roboto ">
                Hear from our satisfied clients who have experienced the
                excellence of Catur Wings<br/>
                Facility Management Services.
              </p>)}
            </div>
            <p className="lead mb-5"></p>
          </div>
          <div className="row my-5 ">
            <div className="col-12">
              <Slider {...settings} className="py-4">
                {card.map((item, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div
                        className="tcard mx-4 p-4 h-100"
                        data-aos="fade-right"
                        data-aos-delay="50"
                      >
                        <div className="card-body text-center text-light p-3">
                          <img
                            src={item.img}
                            alt={item.alt}
                            width={"80px"}
                            style={{ margin: "0 auto" }}
                            className="my-3"
                          />
                          <p className="font-Roboto fw-light">{item.text}</p>
                          <h5 className="font-saira-semi-Condensed">
                            {item.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
