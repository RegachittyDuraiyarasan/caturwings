import React, { useState, useEffect, useRef } from 'react';
import '../css/Home.css';
import NavBar from '../component/NavBar';
import ellipse3 from '../assets/images/Ellipse1.svg';
import ellipse2 from '../assets/images/Ellipse2.svg';
import ellipse from '../assets/images/Ellipse3.svg';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import r13 from '../assets/images/Rectangle13.png';
import r14 from '../assets/images/Rectangle14.png';
import r15 from '../assets/images/Rectangle15.png';
import r13mobile from '../assets/images/Rectangle13_mobile.png';
import r14mobile from '../assets/images/Rectangle14_mobile.png';
import r15mobile from '../assets/images/Rectangle15_mobile.png';
import check from '../assets/images/check.svg';
import cleaning from '../assets/images/s1.png'; // Placeholder images
import fire from '../assets/images/s2.png';
import compliance from '../assets/images/s3.png';
import pest from '../assets/images/s4.png';
import gardening from '../assets/images/s5.png';
import plumbing from '../assets/images/s6.png';
import ContactUs from '../component/ContactUs';
import Footer from '../component/Footer';
import Testimonial from '../component/Testimonial';
import Carousel from '../component/Carousel';
import { Link } from 'react-router-dom';


function Home() {


    // run only once on component mount


    const startSectionRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleStart = () => {
        if (startSectionRef.current) {
            startSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

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


    const features = [
        { title: 'Clear responsibility and accountability for key activities.' },
        { title: 'Systematic definition of activities to achieve desired results.' },
        { title: 'Continuous improvement through measurement and evaluation.' }
    ];

    const services = [
        { img: cleaning, title: 'Cleaning and Upkeep', description: 'Ensuring clean and well-maintained spaces with thorough and regular cleaning services.', id: '/services/soft-services' },
        { img: fire, title: 'Fire, Safety, and Health', description: 'Training security personnel and conducting surprise safety checks to maintain a secure environment.', id: '/services/soft-services' },
        { img: compliance, title: 'Statutory Compliance', description: 'Ensuring detailed checks and maintaining compliance with all statutory regulations.', id: '/services/office-service' },
        { img: pest, title: 'Pest and Rodent Control', description: 'Comprehensive pest and rodent control programs to keep your spaces safe and clean.', id: '/services/pest' },
        { img: gardening, title: 'Landscaping and Horticulture', description: 'Professional landscaping and qualified horticultural services to enhance your outdoor spaces.', id: '/services/pest' },
        { img: plumbing, title: 'Plumbing and Drainage', description: 'Expert plumbing services including pipeline installation and maintenance.', id: '/services/soft-services' },
    ];

    return (
        <div className='home-page' >
            <div className="hero-section hero-section-bg">
                <div >
                    <NavBar home='true' />
                </div>


                <div className='container'>
                    <div className='row mt-3  hero-content'>
                        <div className=" col-lg-11 col-md-12 text-white py-3 mt-3">
                            <h1 className="display-2 fw-bold my-5 font-condensed text-uppercase mb-4 solid-left-border font-saira">CATUR WINGS FACILITY MANAGEMENT  SERVICES PRIVATE LIMITED</h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 text-white'>

                                <p className=" mb-4  font-roboto subfont font-18">Experience Excellence in Facility Management. Trusted by Industry Leaders, We Deliver Exceptional Solutions Tailored to Your Needs. We're Ready to Work with You to Elevate Your   Space.</p>
                            </div>
                        </div>
                        <div className="font-saira d-flex justify-content-between justify-content-md-start align-items-center flex-wrap gap-3 py-3">
                            <Link to='/services' className="btn btn-light hero-btn text-left fw-bold hero-btnc font-saira-semi-Condensed fw-semibold">
                                OUR SERVICES
                            </Link>
                            <Link to='/contactpage#enq' className="btn hero-btn text-left fw-semibold text-light get-st font-saira-semi-Condensed fw-semibold">
                                GET STARTED
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container services-section" ref={startSectionRef} >
                <div className="row ">
                    <div className="col-xl-4 col-md-6 d-flex mt-3" data-aos="fade-up" data-aos-delay="60">
                        <div className="service-item  service-card  expert justify-content-center align-items-center">
                            <div className="col-2  p-2">
                                <img src={ellipse} alt="Expert Team" />

                            </div>
                            <div className="col mt-2 p-2 font-saira justify-content-center align-items-center  service-card-content">
                                <h3 className="  mb-2 card-head font-saira ">Expert Team</h3>
                                <p className="card-content font-roboto">Our team comprises seasoned professionals with extensive experience in facility management.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 d-flex mt-3  " data-aos="fade-up" data-aos-delay="60 ">
                        <div className="service-item  service-card  expert justify-content-center align-items-center bg bg-white ">
                            <div className="col-2 ml-2 p-2">
                                <img src={ellipse2} alt="Comprehensive Services" />
                            </div>
                            <div className="col mt-2 p-2 font-saira justify-content-center align-items-center  ">
                                <h3 className="  mb-2 card-head font-saira ">Comprehensive Services</h3>
                                <p className="card-content font-roboto">We offer a wide range of services, from cleaning and maintenance to security and event management.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-12 d-flex mt-3 justify-content-md-center align-items-md-center" data-aos="fade-up" data-aos-delay="60 " >
                        <div className='client-width' style={{ justifyContent: 'center' }}>

                            <div className="service-item  service-card  expert justify-content-center align-items-center  " style={{
                                background: 'linear-gradient(to right, #F5F5F5 20%, #0000 225%)',
                            }} >
                                <div className="col-2 ml-2 p-2">
                                    <img src={ellipse3} alt="ClientCentric" />
                                </div>
                                <div className="col mt-2 p-2 font-saira justify-content-center align-items-center  ">
                                    <h3 className="  mb-2 card-head font-saira ">Client-Centric Approach</h3>
                                    <p className="card-content font-roboto">Our "Single Point of Contact" approach simplifies communication, ensuring your concerns are addressed promptly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='why-choose-us-section container  py-2'>
                <div className='row text-white py-5'>
                    <div className='col-lg-6'>
                        {/* {!isMobile && (
                            <div className='py-3 d-flex align-items-center gap-3 why-us  py-4'>
                                <h6 className="mt-2 h5 fw-bold font-saira-semi-Condensed lsp">WHY CHOOSE US</h6>
                                <div className="border-line1"></div>

                            </div> 


                        )} */}

                        {/* Mobile View */}
                        {/* {isMobile && (
                            <div className="d-flex justify-content-center align-items-center mt-5 why-us-res">
                                <div className="border-linem mt-3 "></div>
                                <h6 className="mx-2 mt-2 font-saira-semi-Condensed fw-bolder ">WHY CHOOSE US</h6>
                                <div className="border-line1m mt-3 "></div>
                            </div>
                        )} */}

                        <div className="h5 fw-bold font-saira-semi-Condensed lsp">
                            <span className="d-flex align-items-center gap-2 justify-content-center justify-content-sm-start">
                                <hr className="line d-md-none" />
                                WHY CHOOSE US<hr className="line" />
                            </span>
                        </div>
                        {!isMobile && (
                            <h1 className='py-4 display-4 fw-bold text-uppercase font-condensed font-50'>OUR SYSTEMATIC <br /> APPROACH TO EXCELLENCE</h1>



                        )}

                        {/* Mobile View */}
                        {isMobile && (
                            <h1 className='py-4 fw-bold text-center font-condensed '>OUR SYSTEMATIC <br /> APPROACH TO EXCELLENCE</h1>

                        )}
                        <div className='py-3 font-roboto  ' >
                            Establishing clear responsibility and accountability for managing key activities, we systematically define the necessary steps to achieve desired results.
                        </div>
                        <div className='py-3 font-roboto ' >
                            By focusing on resources, methods, and materials, we continuously improve processes and procedures through regular measurement and evaluation.
                        </div>
                        <ul className='why_choose_sec'>
                            {features.map((feature, index) => (
                                <li key={index} className='font-roboto fw-normal py-2  ' >
                                    <img src={check} alt="check" className='mr-2 pl-0 check-img p-2' />
                                    {feature.title}
                                </li>
                            ))}
                        </ul>
                        <div className='py-3'>
                            <Link to='/about' className="btn hero-btn hero-btn2 text-left fw-semibold text-light get-st font-saira-semi-Condensed fw-semibold text-upparcase">
                                MORE ABOUT US
                            </Link>




                        </div>
                    </div>
                    <div className='col-lg-6 py-4'>
                        <div className='row align-items-end'>
                            <div className='col-6 col-sm-4 mb-3 mb-sm-0'>
                                <div className='r13'>
                                    <img data-aos="fade-up" data-aos-delay="100" src={isMobile ? r13mobile : r13} alt="whyus" className="img-fluid rounded" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 mb-3 mb-sm-0'>
                                <div className='r14'>

                                    <img data-aos="fade-up" data-aos-delay="300" src={isMobile ? r14mobile : r14} alt="whyus" className="img-fluid rounded" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                </div>

                            </div>
                            <div className='col-12 col-sm-4'>
                                <div className='r15'>

                                    <img data-aos="fade-up" data-aos-delay="500" src={isMobile ? r15mobile : r15} alt="whyus" className="img-fluid rounded" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid our-services-section py-5 my-0 font-saira color-white">
                <div className="text-center mb-5">



                    {/* {!isMobile && (
                        <div className="d-flex justify-content-center  mt-5">
                            <div className="border-line mt-3 "></div>
                            <h6 className="mx-4 mt-2 h5 fw-bold  lsp font-saira-semi-Condensed">OUR SERVICES</h6>
                            <div className="border-line1 mt-3 "></div>
                        </div>
                    )} */}

                    {/* Mobile View */}
                    {/* {isMobile && (
                        <div className="d-flex justify-content-center align-items-center mt-3 why-us-res">
                            <div className="border-linem mt-3 "></div>
                            <h6 className="mx-2 mt-1 font-saira-semi-Condensed fw-bolder ">OUR SERVICES</h6>
                            <div className="border-line1m mt-3 "></div>
                        </div>
                    )} */}

                    <div className="d-flex justify-content-center  align-items-center gap-md-3">
                        <hr className="line" />

                        <h6 className="mx-2 font-saira-semi-Condensed fw-bold contactSize mb-0">
                            OUR SERVICES
                        </h6>
                        <hr className="line" />

                    </div>
                    <div className='row'>
                        <div className="py-3 mx-auto col-md-8 pb-0">
                            <h1 className="py-3 text-center display-4 fw-bold text-uppercase font-condensed">
                                COMPREHENSIVE FACILITY MANAGEMENT SOLUTIONS
                            </h1>
                        </div>
                        <p className="col-md-8 offset-md-2 text-justify font-roboto  subfont ">
                            We offer a comprehensive range of solutions tailored to meet all your facility management needs. Our expert team ensures the highest
                            quality of service in every aspect of facility management, from cleaning and maintenance to security and event management.
                        </p>
                    </div>
                    <p className="lead mb-5"></p>
                </div>
                <div className='container '>
                    <div className="row justify-content-center align-items-center align-items-center-card">
                        {services.map((service, index) => (
                            <div key={index} className="col-xl-4 col-md-6 py-3   d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="100">
                                <div className="card service-cards" >
                                    <img src={service.img} className="card-img-top" alt={service.title} style={{ objectFit: 'cover' }} />
                                    <div className="card-body text-center d-flex flex-column justify-content-between row-gap-2"> {/* Changed justify-content-center to text-center */}
                                        <div>
                                            <h1 className="card-title fw-bold  text-uppercase font-saira-semi-Condensed  ">{service.title}</h1> {/* Removed justify-content-center and align-items-center */}
                                            <p className="card-text fw-semibold font-roboto ">{service.description}</p>
                                        </div>
                                        <Link to={service.id} className="btn btn-dark service-btn text-left fw-normal hero-btn3 text-uppercase font-saira-semi-Condensed  fw-semibold font-16 d-block mx-auto">Service Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="d-flex view-all-service-btn justify-content-center align-items-center flex-wrap gap-4 py-5">
                    <Link to='/services' className="btn btn-light hero-btn hero-btn2 text-left fw-bold hero-btnc font-saira-semi-Condensed fw-semibold text-uppercase">
                        View All Services
                    </Link>
                    <Link to='/contactpage' className="btn hero-btn hero-btn2 text-left fw-semibold text-light get-st font-saira-semi-Condensed fw-semibold">
                        CONTACT US
                    </Link>
                </div>
            </div>
            <Carousel />
            <Testimonial />


            {/* testimonial */}
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Home;
