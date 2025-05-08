import React, { useEffect, useState } from "react";
import check from "../assets/images/check.svg";
// import React from "react";
import NavBar from "../component/NavBar";
import CEO from "../assets/images/CEO.png";
import director from "../assets/images/Director(F&S).png";
import Director from "../assets/images/Director.png";
import Diirector from "../assets/images/Director(Fiield).png";
import Ellipse from "../assets/images/Ellipse 14.png";
import diirector from "../assets/images/Director(Field Executive).png";
import AboutIcon from "../assets/images/Line3.svg";
import qualityLogo1 from "../assets/images/Group95.svg";
import qualityLogo2 from "../assets/images/Group96.svg";
import qualityMainImage from "../assets/images/Rectangle151.png";
import approachHand from "../assets/images/Hand.png";
import approachPerson from "../assets/images/person.png";
import approachImage from "../assets/images/image.png";
import ourvision1 from "../assets/images/Rectangle 17.png";
import ourvision2 from "../assets/images/Rectangle 18.png";
import ourvision3 from "../assets/images/Rectangle 16.png";
import ourmission1 from "../assets/images/Group 20.svg";
import ourmission2 from "../assets/images/Group21.svg";
import ourmission3 from "../assets/images/Group22.svg";
import approachHandMob from "../assets/images/Rectangle 32.png";
import approachPersonMob from "../assets/images/Rectangle 31.png";
import approachImageMob from "../assets/images/Rectangle 15.png";
import ourvision1Mob from "../assets/images/Rectangle 17-mob.png";
import ourvision2Mob from "../assets/images/Rectangle 18-mob.png";
import ourvision3Mob from "../assets/images/Rectangle 16-mob.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Michael from "../assets/images/Michael.png";
import Nick from "../assets/images/Nick.png";
import Retro from "../assets/images/Retro.png";
import skylight from "../assets/images/skylight.png";
import Carousel from "../component/Carousel";
import ContactUs from "../component/ContactUs";
import Footer from "../component/Footer";
import "../css/AboutUs.css";

const socialIcons = {
  instagram: <i className="bi bi-instagram px-1 text-black"></i>,
  twitter: <i className="bi bi-twitter-x px-1 text-black"></i>,
  linkedin: <i className="bi bi-linkedin px-1 text-black"></i>,
  whatsapp: <i className="bi bi-whatsapp  px-1 text-black"></i>,
};

const features = [
  { title: "Cost and Time Efficiency" },
  { title: "Highest Level of Customer Satisfaction & Quality" },
  { title: "Flexibility to Meet Client Needs" },
  { title: "Optimal Resource Utilization" },
  { title: "Tailored Solutions with Client-Centric Focus" },
];

const users = [
  {
    img: CEO,
    title: "DEVARAJ A",
    description: "CEO and Director",
    social: socialIcons,
  },
  {
    img: Director,
    title: "CHANDRA SHEKAR S ",
    description: "Director(Facility & Infrastructure)",
    social: socialIcons,
  },
  {
    img: director,
    title: "UMESH K",
    description: "Director(Finance & Security)",
    social: socialIcons,
  },
  {
    img: Diirector,
    title: "RAMESH A",
    description: "Director(Field Executive)",
    social: socialIcons,
  },
  // {
  //   img: diirector,
  //   title: "RAMESH A",
  //   description: "Director(Field Executive)",
  //   social: socialIcons,
  // },
  // {
  //   img: Ellipse,
  //   title: "RAMESH A",
  //   description: "Director(Field Executive)",
  //   social: socialIcons,
  // },
];

const logos = [Michael, Nick, Retro, skylight];

const settings = {
  loop: true,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const AboutUs = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your design
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <section id="about" className="overflowX-hidden">
        <div className="container-fluid hero position-relative">
          <div>
            <NavBar about="true" />
          </div>

          {/* SECTION 1 */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center d-flex justify-content-center about-main align-items-center">
                <hr className="line text-white" />

                <h5 className="mx-2 font-saira-semi-Condensed fw-bold text-white mb-0">ABOUT US</h5>
                <hr className="line text-white" />

              </div>
              <div className="text-center about-main-p">
                <h2 className="fs-70 c_FFFFFF fw-bold mt-4 font-saira display-2">
                  EXCELLENCE IN FACILITY <br /> MANAGEMENT
                </h2>
                {isMobile && (
                  <p className="fs-18 c_FFFFFF mt-xl-5 mt-lg-5 mt-4 font-roboto about-para">
                    Dedicated to excellence in facility management, Catur Wings
                    Facility Management Services  Pvt Ltd brings unmatched
                    expertise and commitment to every project.
                  </p>
                )}
                {!isMobile && (
                  <p className="fs-18 c_FFFFFF mt-xl-5 mt-lg-5 mt-4 font-roboto about-para">
                    Dedicated to excellence in facility management, Catur Wings
                    Facility Management Services <br /> Pvt Ltd brings unmatched
                    expertise and commitment to every project.
                  </p>
                )}


              </div>
            </div>
          </div>
        </div>
        {/* SECTION 2 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <div
            className="container second px-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >


            <div className="row quality-transforms px-xl-5 px-lg-5 px-md-3 px-2 py-4 align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 pe-xl-3 pe-lg-5 pe-md-3 pe-2">
                <div className="display-5 fw-bold text-uppercase font-condensed text-dark abt-align">
                  <p className="text-black"> QUALITY THAT <br />TRANSFORMS YOUR SPACE </p>

                </div>

                <p className=" c_000000 font-roboto-18 mt-3 quality-algin fw-semibold about-card-content" style={{ fontSize: '18px' }}>
                  At Catur Wings Facility Management Services, Our commitment to
                  excellence ensures that every project is handled with unmatched
                  professionalism and care. Discover how our dedication to quality
                  sets us apart in the industry.
                </p>
                <div className="mt5-down">
                  <div className="d-flex mt-xl-5 mt-lg-5 mt-md-3 mt-2 ">
                    <img src={qualityLogo1} alt="Logo" />
                    <h3 className="fs-20 fw-bold c_000000 mt-2 ms-3 font-saira">
                      Unmatched Professionalism
                    </h3>
                  </div>
                  <p className="fs-16 c_000000 ms-5 mt-2 font-roboto">
                    Our team delivers expert facility management with a focus on
                    exceptional service and attention to detail.
                  </p>
                  <div className="d-flex mt-4">
                    <img src={qualityLogo2} alt="Logo" />
                    <h3 className="fs-20 fw-bold c_000000 mt-2 ms-3 font-saira">
                      Commitment to Excellence
                    </h3>
                  </div>
                  <p className="fs-16 c_000000 ms-5 mt-2 font-roboto">
                    We ensure the highest standards in every project, providing
                    reliable and efficient solutions tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 col-12 text-center">
                <img src={qualityMainImage} alt="Logo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 3 */}
        <section className="mission">
          <div className="container-fluid  pt-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 our-mission-sec">
                <h2 className="fs-50 c_FFFFFF fw-bold font-saira">
                  OUR MISSION
                </h2>
                <p className="fs-18 c_FFFFFF mt-xl-5 mt-lg-5 mt-md-3 mt-2 font-roboto-18 about-card-content">
                  Our mission is to provide comprehensive facility management
                  solutions that exceed client expectations. With our team's
                  expertise in managing various types of properties, including
                  residential apartments and corporate offices.
                </p>
                <div className="mission-cards">
                  <div
                    className="card-mission d-flex justify-content-center mt-5 me-0"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <img src={ourmission1} alt="Logo" className="img-fluid" />
                    <div className="ms-xl-4 ms-lg-4 ms-md-4 ms-1">
                      <h4 className="fs-20 fw-bold c_000000 font-saira-semi-Condensed">
                        Expertise in Property Management
                      </h4>
                      <p className="fs-16 c_000000 font-roboto  fw-bold">
                        Our extensive experience in managing various properties
                        ensures precision and professionalism in every aspect.
                      </p>
                    </div>
                  </div>
                  <div
                    className="card-mission d-flex justify-content-center mt-4 me-0"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <img src={ourmission2} alt="Logo" className="img-fluid" />
                    <div className="ms-xl-4 ms-lg-4 ms-md-4 ms-1">
                      <h4 className="fs-20 fw-bold c_000000 font-saira-semi-Condensed">
                        Customized Solutions for Clients
                      </h4>
                      <p className="fs-16 c_000000 font-roboto  fw-semibold">
                        Tailored solutions, backed by our "Single Point of
                        Contact" approach, ensure personalized services that
                        exceed client expectations.
                      </p>
                    </div>
                  </div>
                  <div
                    className="card-mission d-flex justify-content-center mt-4 me-0"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    <img src={ourmission3} alt="Logo" className="img-fluid" />
                    <div className="ms-xl-4 ms-lg-4 ms-md-4 ms-1">
                      <h4 className="fs-20 fw-bold c_000000 font-saira-semi-Condensed">
                        Commitment to Excellence
                      </h4>
                      <p className="fs-16 c_000000 fw-semibold font-roboto card-about-content  fw-semibold">
                        Excellence is our standard. From efficient property
                        management to innovative solutions, we are dedicated to
                        high quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 our-vision-sec mt-xl-0 mt-lg-0 mt-md-5 px-5 f_0A0A0A d-flex flex-column justify-items-between">
                <h2 className="fs-50 c_FFFFFF fw-bold font-saira">
                  OUR VISION
                </h2>

                <p className="fs-18 c_FFFFFF mt-lg-4 mt-md-3 mt-2  font-Roboto">
                  Our vision is to be the leading provider of comprehensive
                  facility management solutions. We aim to set the industry
                  standard for excellence, innovation, and professionalism in
                  property management.{" "}
                </p>
                <p className="fs-18 c_FFFFFF mt-lg-4 mt-md-3 mt-1 font-roboto">
                  By continuously adapting to evolving client needs and
                  leveraging cutting-edge technologies, we strive to create
                  environments that enhance the lives of those who live and work
                  in them.
                </p>
                <div
                  className="row align-items-center mt-xl-0 mt-lg-0 mt-md-2 mt-5 flex-1 mission-image"
                  data-aos="fade-left"
                  data-aos-delay="60"
                >
                  <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-xl-block d-lg-block d-md-block d-flex order-xl-1 order-lg-1 order-md-1 order-2 mt-md-0 mt-3">
                    <div className="">
                      <img
                        src={isMobile ? ourvision1Mob : ourvision1}
                        alt="Logo"
                        className="img-fluid w-100"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="ms-md-0 ms-3">
                      <img
                        src={isMobile ? ourvision2Mob : ourvision2}
                        alt="Logo"
                        className="img-fluid w-100 mt-md-3 mt-0"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-12 order-xl-2 order-lg-2 order-md-2 order-1">
                    <img
                      src={isMobile ? ourvision3Mob : ourvision3}
                      alt="Logo"
                      className="img-fluid w-100 mt-xl-0 mt-lg-0 mt-md-0 mt-3"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 4 */}
        <div className="container bg-color text-white our_team_sec py-5">
          <div className="text-center d-flex justify-content-center about-maino align-items-center">
            <hr className="line text-white" />

            <h5 className="mx-2 font-saira-semi-Condensed fw-bold text-white mb-0">OUR TEAM</h5>
            <hr className="line text-white" />

          </div>
          <div className="font-saira h1 row">
            <div className="col-md-6 offset-md-3 text-center  mt-3 display-4 fw-bold text-uppercase font-condensed">
              MEET OUR PASSIONATE TEAM OF PROFESSIONALS
            </div>
          </div>
          <p className="col-md-8 offset-md-2 text-center font-roboto  py-4 about-card-content ">
            Discover the faces behind Catur Wings Facility Management Services.
            Our team is comprised of dedicated professionals who bring diverse
            expertise and unwavering commitment to excellence in every project
            we undertake.
          </p>
          <div
  className="row font-roboto pb-5 card-container"
  data-aos="fade-up"
  data-aos-delay="60"
>
  {users.map((user, index) => (
    <div
      key={index}
      className="col-xl-4 col-md-6 py-4 px-xl-5 px-lg-5 px-md-4 px-4 d-flex justify-content-center align-items-center"
    >
      <div className="card user-cards text-white py-4">
        <img
          src={user.img}
          className="card-img-top1 px-5"
          alt={user.title}
        />
        <div className="card-body text-center">
          <div className="d-flex justify-content-center align-items-center">
            <hr className="line" />
            <h5 className="card-title px-3">{user.title}</h5>
            <hr className="line" />
          </div>
          <p className="card-text">{user.description}</p>
          <div className="d-flex justify-content-center">
            <div className="tes mx-3"> {user.social.instagram}</div>
            <div className="tes mx-3"> {user.social.twitter}</div>
            <div className="tes mx-3"> {user.social.linkedin}</div>
            <div className="tes mx-3"> {user.social.whatsapp}</div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
        {/* SECTION 5 */}
        <Carousel />
        {/* SECTION 6 */}
        <div className="content o-approach me-lg-5 me-md-5 me-0 py-4 mt-5">
          <section className="container">
            <div className="row pt-4">


              <div className="col-md-6 order-2 order-md-1">
                <div className="row row-gap-3">
                  <div className="col-12 col-md-8 pe-md-0 d-flex flex-wrap row-gap-3">
                    <div
                      className="col-6 col-md-12 pe-1"
                      data-aos="fade-right"
                      data-aos-offset="100"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded"
                        src={approachHand}
                        alt="Image"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="d-none d-md-block col-md-12 ps-1"
                      data-aos="fade-up"
                      data-aos-offset="100"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded"
                        src={approachPerson}
                        alt="Image"
                      />
                    </div>
                    <div
                      className="col-6 d-md-none ps-1"
                      data-aos="fade-left"
                      data-aos-offset="100"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded"
                        src={approachImageMob}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div
                    className="d-none d-md-block col-md-4"
                    data-aos="fade-left"
                    data-aos-offset="100"
                  >
                    <img
                      className="h-100 img-fluid rounded-4"
                      src={approachImage}
                      alt="Image"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div
                    className="d-md-none col-12"
                    data-aos="fade-up"
                    data-aos-offset="100"
                  >
                    <img
                      className="h-100 img-fluid rounded"
                      src={approachPerson}
                      alt="Image"
                      style={{ objectFit: "cover", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-light ps-md-5 order-lg-2 order-1">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start  mb-4">
                  <div className="border-line4 d-md-none"></div>
                  <h2 className="start m-0 p-0 h5 fw-bold font-saira-semi-Condensed lsp mx-2  fs-20 text-center">
                    OUR APPROACH
                  </h2>
                  <div className="border-line5 ms-md-2 ms-0"></div>
                </div>
                <p className="font-saira text-uppercase display-5 fw-bold text-uppercase font-condensed text-center-md ">
                  Delivering The Art of Facility Management
                </p>
                <p className="font-Roboto about-card-content">
                  At Catur Wings Facility Management Services, we are committed
                  to delivering excellence in every aspect of our approach. From
                  cost and time efficiency to the highest level of customer
                  satisfaction and quality, our approach is centered around
                  meeting the unique needs of our clients.
                </p>
                <ul className="why_choose_sec">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="font-Roboto fw-normal"
                      style={{ fontSize: "14px" }}
                    >
                      <a
                        href="#!"
                        className="btn text-white btn-floating px-0"
                        role="button"
                        data-mdb-ripple-init
                      >
                        <img
                          src={check}
                          alt="check"
                          className="mr-2"
                          style={{ marginRight: "7px" }}
                        />
                      </a>
                      {feature.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* SECTION 7 */}
        <ContactUs />
        {/* SECTION 8 */}
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;