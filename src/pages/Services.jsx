import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import CarouselCard from "../component/CarouselCard";
import Carousel from "../component/Carousel";
import emoji from "../assets/images/emoji.png";
import glass from "../assets/images/glass.png";
import chart from "../assets/images/chart.png";
import cleaning from "../assets/images/cleaning.png";
import fireSafety from "../assets/images/fireSafety.png";
import statutory from "../assets/images/statutory.jpg";
import statutoryMob from "../assets/images/statutory.png";
import pest from "../assets/images/pestControl.png";
import plumbing from "../assets/images/plumbing.png";
import landscape from "../assets/images/landscape.png";
import asthetic from "../assets/images/asthetic.png";
import trainer from "../assets/images/trainer.png";
import pool from "../assets/images/pool.png";
import electrical from "../assets/images/electrical.jpg";
import electrical2 from "../assets/images/electrical2.jpg";
import womanPlumber from "../assets/images/womanPlumber.jpg";
import rangers from "../assets/images/rangers.jpg";
import fridge from "../assets/images/fridge.jpg";
import team from "../assets/images/team.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import pappers from "../assets/images/pappers.jpg";
import pappers2 from "../assets/images/pappers2.jpg";
import calc from "../assets/images/calc.jpg";
import calc2 from "../assets/images/calc2.jpg";
import fileRack from "../assets/images/fileRack.jpg";
import delivery from "../assets/images/delivery.jpg";
import check from "../assets/images/check.svg";

import Footer from "../component/Footer";
import Testimonial from "../component/Testimonial";
import ContactUs from "../component/ContactUs";
import { useParams } from "react-router-dom";
const Services = () => {
  const { sectionId } = useParams();
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
  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        const element = document.getElementById(services);

        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [sectionId]);
  const features = [
    [
      "Fire, Safety, and Health",
      "Compliance and Space Planning",
      "Statutory Compliance and Space Planning",
    ],
    [
      "Pest and Rodent Control",
      "Landscaping and Horticulture",
      "Plumbing and Drainage Services",
    ],
    [
      "Clubhouse and Swimming Pool Management",
      "HK Security Services",
      "Physical Training",
    ],
    [
      "Stores & Inventory Management",
      "Vendor Management",
      "Event Management",
      "Pantry and Vending Management",
      "Systems & Safety Audits",
      "Incident Reporting",
    ],
    [
      "Operation & Maintenance of HVAC Systems",
      "Electrical Systems",
      "Building Automation",
      "Elevators",
      "Fire Services",
      "Power Supply System Including DG Sets",
      "ETP/WTP/STP Management",
      "Tank Cleaning Services",
      "AMC & Preventive Maintenance",
      "Energy Management",
      "Building Repairs & Maintenance",
      "Sinking Fund Management",
      "Quality Assurance on Maintenance Activities",
    ],
    [
      "Mail Room Management",
      "Courier Services",
      "Building Automation",
      "Dispositions & Subleases",
      "In-Depth Local Analysis",
      "Lease Negotiations & Renewals",
      "Space Expansion & Consolidation",
      "Office Equipment's Operation & Management",
    ],
    [
      "Tenant Relations and Services",
      "File Audits",
      "Technical Audit",
      "Business Plan and Budget",
      "Transition Plan with Pre-determined Deliverables",
      "Weekly Transition Monitors and Monthly Status Reports",
      "Quality Evaluation, Requirement Gathering & Planning Reporting",
      "On-Site & Transition Training & Deployment Feedback Complete Hand Over",
    ],
  ];
  return (
    <div className="container-fluid p-0 overflowX-hidden" id="services">
      <div className="container-fluid p-0">
        {/*================================ Banner ========================*/}
        <div className="banner">
          <NavBar services="true" />
          <div className="container-fluid banner-content text-light d-flex flex-column justify-content-center text-center">
            <div className="row">
              <div className="col-md-6 offset-md-3 p-0">
                <h5 className="h5 mx-auto font-saira-semi-Condensed fw-bold d-flex align-items-center justify-content-center">
                  <hr className="line" />
                  <span className="mx-2">SERVICES</span>
                  <hr className="line" />
                </h5>
                <div className="display-2 fw-bold my-5 font-condensed text-uppercase ">
                  Expert Solutions for <br />
                  Every Need
                </div>
                <p className="font-roboto px-2 px-md-0">
                  Catur Wings Facility Management Services, we provide a
                  comprehensive suite of services to transform and maintain your
                  spaces with unparalleled expertise and dedication. Discover
                  how!
                </p>
              </div>
            </div>
            <div className="container banner-boxs px-0" id="security">
              <div className="row text-start row-gap-3" data-aos="fade-up">
                {/* =========== Left Side Box =========== */}
                <div className="col-md-6 excellence">
                  <div className="text-black light-gradient-lft rounded-4 p-3 p-md-5 h-100">
                    <div className="display-3 fw-bold text-uppercase font-condensed text-md-start text-center head-text-algin">
                      Excellence in Every Detail!
                    </div>
                    <div className="font-roboto-19 d-flex flex-column gap-3  content-service-algin">
                      <p className="mt-4">
                        Catur Wings Facility Management Services, we pride
                        ourselves on delivering a wide array of top-tier
                        services tailored to meet the unique needs of our
                        clients.
                      </p>
                      <p>
                        Our dedicated team of professionals ensures the highest
                        standards in every aspect of facility management. From
                        meticulous cleaning and maintenance to advanced security
                        solutions and efficient waste management, we have you
                        covered.
                      </p>
                      <p>
                        Explore our services and see how we can transform your
                        space into a well-maintained, secure, and efficient
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
                {/* =========== Right Side Box =========== */}

                <div className="col-md-6">
                  <div className="bg-dark rounded-4 p-2 p-md-4 text-black h-100">
                    <div className="key-points d-flex flex-column gap-3">
                      <div
                        className="key-point light-gradient-rit d-flex rounded-3 p-3 p-md-4 align-items-center gap-3"
                        data-aos="flip-right"
                        data-aos-offset="200"
                      >
                        <div className="row">
                          <div className=" col-3 col-sm-4 col-lg-2 px-0">
                            <img
                              src={emoji}
                              alt="Tailored Solutions"
                              className="img-fluid p-2"
                            />
                          </div>
                          <div className="col-lg-10 col-9 col-sm-8 px-0 p-md-3">
                            <div className="content">
                              <h4 className="font-saira-semi-Condensed fw-bold">
                                Tailored Solutions
                              </h4>
                              <p className="font-roboto-19">
                                We deliver customized facility management
                                services designed to meet your specific needs,
                                ensuring maximum efficiency and satisfaction.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="key-point light-gradient-rit d-flex rounded-3 p-3 p-md-4 align-items-center gap-3"
                        data-aos="flip-left"
                        data-aos-offset="100"
                      >
                        <div className="row">
                          <div className=" col-3 col-sm-4 col-lg-2 px-0">
                            <img
                              src={chart}
                              alt="Experienced Professionals"
                              className="img-fluid p-2"
                            />
                          </div>
                          <div className="col-lg-10 col-9 col-sm-8 px-0 p-md-3">
                            <div className="content">
                              <h4 className="font-saira-semi-Condensed fw-bold">
                                Experienced Professionals
                              </h4>
                              <p className="font-roboto-19">
                                Our team of seasoned experts brings extensive
                                knowledge and expertise to every project,
                                guaranteeing top-notch service and reliability.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="key-point light-gradient-rit d-flex rounded-3 p-3 p-md-4 align-items-center gap-3"
                        data-aos="flip-right"
                        data-aos-offset="100"
                      >
                        <div className="row">
                          <div className=" col-3 col-sm-4 col-lg-2 px-0">
                            <img
                              src={glass}
                              alt="Comprehensive Coverage"
                              className="img-fluid p-2"
                            />
                          </div>
                          <div className="col-lg-10 col-9 col-sm-8 px-0 p-md-3">
                            <div className="content">
                              <h4 className="font-saira-semi-Condensed fw-bold">
                                Comprehensive Coverage
                              </h4>
                              <p className="font-roboto-19">
                                From waste disposal to water management, we
                                provide a wide range of services to cover all
                                aspects of facility management with excellence.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*================================ Soft Services ========================*/}
        <section className="soft-services container py-5" id="soft-services">
          <div className="row row-gap-4">
            <div className="col-md-6 order-2 order-md-1">
              <div className="row row-gap-3">
                <div className="col-12 col-md-8 pe-md-0 d-flex flex-md-column flex-row flex-wrap row-gap-3">
                  <div
                    className="col-6 col-md-12 pe-1"
                    data-aos="fade-right"
                    data-aos-offset="100"
                  >
                    <img
                      className="img-fluid w-100"
                      src={cleaning}
                      alt="Image"
                    />
                  </div>
                  <div
                    className="col-6 col-md-12 ps-1"
                    data-aos="fade-left"
                    data-aos-offset="100"
                  >
                    <img
                      className="img-fluid w-100 h-100"
                      src={fireSafety}
                      alt="Image"
                    />
                  </div>
                </div>
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-offset="100"
                >
                  <img
                    className="h-100 img-fluid rounded-4"
                    src={isMobile? statutoryMob :statutory }
                    alt="Image"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2 text-white">
              <div className="h5 fw-bold font-saira-semi-Condensed lsp">
                <span className="d-flex align-items-center gap-2 justify-content-center justify-content-sm-start">
                  <hr className="line d-md-none" />
                  SOFT SERVICES <hr className="line" />
                </span>
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="display-4 fw-bold text-uppercase font-condensed text-center text-sm-start">
                  Elevating Everyday <br />
                  Efficiency!
                </div>
                <p className="font-roboto">
                  Our soft services are designed to enhance the daily operations
                  of your facility, ensuring a clean, safe, and well-organized
                  environment.
                </p>
                <p className="font-roboto">
                  From comprehensive cleaning and upkeep to specialized training
                  and compliance management, we provide the essential services
                  that keep your facility running smoothly.
                </p>

                <ul className="checks font-roboto list-unstyled">
                  {features[0].map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*================================ Clean and green environment ========================*/}
        <section className="soft-services container my-5 pt-md-5 " id="pest">
          <div className="row row-gap-4">
            <div className="col-md-6 text-white">
              <div className="h5 fw-bold font-saira-semi-Condensed lsp">
                <span className="d-flex align-items-center gap-2 tex-upparcase justify-content-center justify-content-sm-start">
                  <hr className="line d-md-none" />
                  <span> WASTE DISPOSAL MANAGEMENT</span>
                  <hr className="line" />
                </span>
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="display-4 fw-bold text-uppercase font-condensed text-center text-sm-start">
                  Ensuring a Clean and Green <br />
                  Environment
                </div>
                <p className="font-roboto">
                  Our waste disposal management services are designed to
                  maintain cleanliness and hygiene in your facility while
                  promoting sustainability.
                </p>
                <p className="font-roboto">
                  From effective pest control to meticulous landscaping and
                  plumbing services, we ensure your premises are well-maintained
                  and environmentally friendly.
                </p>

                <ul
                  className="checks font-roboto list-unstyled"
                  style={{ listStyleType: "none" }}
                >
                  {features[1].map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row row-gap-3">
                <div
                  className="col-12"
                  data-aos="fade-down"
                  data-aos-offset="100"
                >
                  <img
                    className="h-100 img-fluid rounded"
                    src={pest}
                    alt="Image"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="col-12 d-flex max-h-200">
                  <div
                    className="col-6 col-md-8 pe-1"
                    data-aos="fade-right"
                    data-aos-offset="100"
                  >
                    <img
                      className="img-fluid w-100 h-100 rounded-4"
                      src={landscape}
                      alt="Image"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="col-6 col-md-4 ps-1"
                    data-aos="fade-left"
                    data-aos-offset="100"
                  >
                    <img
                      className="img-fluid w-100 h-100"
                      src={plumbing}
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================================ Cleanliness and Aesthetics ========================*/}
        <section className="soft-services container py-5 my-5" id="water">
          <div className="row row-gap-4">
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
                      src={trainer}
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
                      src={asthetic}
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
                      src={pool}
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
                    src={pool}
                    alt="Image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      objectPosition: "left",
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
                    src={asthetic}
                    alt="Image"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2 text-white">
              <div className="h5 fw-bold font-saira-semi-Condensed lsp">
                <span className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start text-center text-sm-start">
                  <hr className="line d-md-none" />
                  WASTER MANAGEMENT & FACADE CLEANING <hr className="line" />
                </span>
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="display-4 fw-bold text-uppercase font-condensed text-center text-sm-start">
                  Maintaining Cleanliness and Aesthetics
                </div>
                <p className="font-roboto">
                  Our water management and facade cleaning services are
                  dedicated to preserving the pristine appearance of your
                  facility while ensuring efficient water usage and safety.
                </p>
                <p className="font-roboto">
                  From expert clubhouse and swimming pool management to
                  professional facade cleaning, we uphold the highest standards
                  of cleanliness and aesthetics
                </p>
                <ul className="checks font-roboto list-unstyled">
                  {features[2].map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ============================== Additional Services ============================ */}
      <div className="container-fluid bg-111 py-5" id="add">
        <div className="container p-0 mb-5 pb-md-5">
          <div className="row text-center text-white py-5 my-5">
            <div className="col-12 p-0">
            <div className="d-flex justify-content-center  align-items-center">
              <hr className="line" />
              <h5 className="fw-bold text-uppercase mx-2 mb-0 font-saira-semi-Condensed">Additional Services</h5>


              <hr className="line" />
              </div>
              <div className="display-3 fw-bold my-5 font-condensed text-uppercase text-center">
                <span>Going Above and Beyond</span>
              </div>
              <p className="font-roboto  fw-semibold">
                In addition to our core facility management offerings, we
                provide a range of additional services to address diverse client
                needs and enhance operational efficiency. From inventory
                management to event coordination, our comprehensive solutions
                ensure that every aspect of your facility is well-managed and
                optimized for success.
              </p>
            </div>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-12 col-md-4 col-lg-3">
              <ul className="checks font-roboto list-unstyled text-white">
                {features[3].map((feature, index) => (
                  <li key={index} className="d-flex align-items-center">
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <CarouselCard />
            </div>
          </div>
        </div>

        {/* =============================== Hard Services ============================ */}
        <section className="soft-services container my-5 pt-md-5 " id="hs">
          <div className="row row-gap-4">
            <div className="col-md-6 text-white">
              <div className="h5 fw-bold font-saira-semi-Condensed lsp">
                <span className="d-flex align-items-center gap-2 tex-upparcase justify-content-center justify-content-sm-start">
                  <hr className="line d-md-none" />
                  <span>HARD SERVICES</span>
                  <hr className="line" />
                </span>
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="display-4 fw-bold text-uppercase font-condensed text-center text-sm-start">
                  Ensuring a Clean and Green Environment
                </div>
                <p className="font-roboto  fw-semibold">
                  Our waste disposal management services are designed to
                  maintain cleanliness and hygiene in your facility while
                  promoting sustainability.
                </p>
                <p className="font-roboto  fw-semibold">
                  From effective pest control to meticulous landscaping and
                  plumbing services, we ensure your premises are well-maintained
                  and environmentally friendly.
                </p>
                <ul className="checks font-roboto list-unstyled">
                  {features[4].map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="row row-gap-3">
                <div className="col-12">
                  <img
                    className="h-100 img-fluid rounded"
                    src={electrical2}
                    alt="Image"
                    style={{ objectFit: "cover", width: "100%" }}
                    data-aos="fade-up"
                    data-aos-offset="100"
                  />
                </div>
                <div className="col-12 ">
                  <div className="row row-gap-3">
                    <div
                      className="col-6 col-md-8 pe-1"
                      data-aos="flip-up"
                      data-aos-offset="200"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded-4 h-100"
                        src={womanPlumber}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div
                      className="col-6 col-md-4 ps-1"
                      data-aos="flip-up"
                      data-aos-offset="200"
                    >
                      <img
                        className="img-fluid w-100 rounded-4 h-100"
                        src={electrical}
                        alt="Image"
                      />
                    </div>
                    <div
                      className="col-6 pe-1"
                      data-aos="flip-down"
                      data-aos-offset="200"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={rangers}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div
                      className="col-6 ps-1"
                      data-aos="flip-down"
                      data-aos-offset="200"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={fridge}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============================== STREAMLINING ADMINISTRATIVE OPERATIONS ============================ */}
        <section
          className="soft-services container my-5 pt-md-5 "
          id="stramlining"
        >
          <div className="row row-gap-4">
            <div className="col-md-6 d-flex  order-2 order-md-1">
              <div className="row row-gap-3">
                <div
                  className="col-12 col-md-8 order-1"
                  data-aos="fade-right"
                  data-aos-offset="100"
                >
                  <img
                    className="h-100 img-fluid rounded"
                    src={team}
                    alt="Image"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div
                  className="col-6 col-md-4 order-2"
                  data-aos="fade-left"
                  data-aos-offset="100"
                >
                  <img
                    className="img-fluid w-100 h-100 rounded-4"
                    src={calc}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="col-12 col-md-8 order-4 order-md-4"
                  data-aos="flip-up"
                  data-aos-offset="100"
                >
                  <img
                    className="img-fluid w-100 h-100 rounded-4"
                    src={fileRack}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="col-6 col-md-4 order-3"
                  data-aos="flip-down"
                  data-aos-offset="100"
                >
                  <img
                    className="h-100 img-fluid rounded"
                    src={delivery}
                    alt="Image"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>

                {/* <div className="col-12 col-md-4">
                  <div className="row row-gap-3">
                    <div className="col-6 col-md-8 pe-1">
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={womanPlumber}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-6 col-md-4 ps-1">
                      <img
                        className="img-fluid w-100 rounded-4 h-100"
                        src={electrical}
                        alt="Image"
                      />
                    </div>
                    <div className="col-6 pe-1">
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={rangers}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-6 ps-1">
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={fridge}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="col-md-6 text-white order-1 order-md-2"
              id="office-service"
            >
              <div className="h5 fw-boldfont-saira-semi-Condensed lsp">
                <span className="d-flex align-items-center gap-2 font-saira-semi-Condensed fw-bold tex-upparcase justify-content-center justify-content-sm-start">
                  <hr className="line d-md-none" />
                  <span>OFFICE SERVICES</span>
                  <hr className="line" />
                </span>
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="display-4 fw-bold text-uppercase font-condensed text-center text-sm-start">
                  STREAMLINING ADMINISTRATIVE OPERATIONS
                </div>
                <p className="font-roboto  fw-semibold">
                  Our office services are designed to optimize administrative
                  processes and support the smooth functioning of your
                  workplace.
                </p>
                <p className="font-roboto  fw-semibold">
                  From efficient mailroom management to strategic lease
                  negotiations, we provide comprehensive solutions to enhance
                  productivity and efficiency.
                </p>
                <ul className="checks font-roboto list-unstyled">
                  {features[5].map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ============================== TRANSITION MODELS =============================== */}
        <section
          className="soft-services container my-5 pt-md-5 "
          id="transition"
        >
          <div className="row row-gap-4">
            <div className="col-md-6 text-white">
              <div className="h5 fw-bold font-saira-semi-Condensed lsp">
                <span className="d-flex align-items-center gap-2 tex-upparcase justify-content-center justify-content-sm-start">
                  <hr className="line d-md-none" />
                  <span>TRANSITION MODELS</span>
                  <hr className="line" />
                </span>
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="display-4 fw-bold text-uppercase font-condensed text-center text-sm-start">
                  Seamless Transition, Lasting Success
                </div>
                <p className="font-roboto  fw-semibold">
                  Our transition models are designed to facilitate smooth
                  transitions during changes in management or operations.
                </p>
                <p className="font-roboto  fw-semibold">
                  From comprehensive audits to detailed business plans, we
                  ensure a seamless handover process that minimizes disruption
                  and maximizes success.
                </p>
                <ul className="checks font-roboto list-unstyled">
                  {features[6].map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
                      <a
                        href="#!"
                        className="btn text-white btn-floating p-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="row row-gap-3">
                <div
                  className="col-12"
                  data-aos="fade-up"
                  data-aos-offset="100"
                >
                  <img
                    className="img-fluid rounded  max-h-250"
                    src={pappers}
                    alt="Image"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="col-12 ">
                  <div className="row row-gap-3">
                    <div
                      className="col-6 col-md-8 pe-1"
                      data-aos="fade-left"
                      data-aos-offset="100"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={pappers2}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div
                      className="col-6 col-md-4 ps-1"
                      data-aos="fade-right"
                      data-aos-offset="100"
                    >
                      <img
                        className="img-fluid w-100 rounded-4 h-100"
                        src={calc2}
                        alt="Image"
                      />
                    </div>
                    <div
                      className="col-6 col-md-8 pe-1"
                      data-aos="flip-left"
                      data-aos-offset="100"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={team2}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div
                      className="col-6 col-md-4 ps-1"
                      data-aos="flip-right"
                      data-aos-offset="100"
                    >
                      <img
                        className="img-fluid w-100 h-100 rounded-4 max-h-200"
                        src={team3}
                        alt="Image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Carousel />
      <Testimonial data-aos="fade-left" data-aos-offset="300" />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Services;
