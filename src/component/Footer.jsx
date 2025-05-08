import React, { useEffect } from 'react';
import '../css/Footer.css';

import facebookIcon from '../assets/images/facebook-icon-footer.svg';
import empImg1 from '../assets/images/emp1-icon-footer.svg';
import empImg2 from '../assets/images/emp2-icon-footer.svg';
import empImg3 from '../assets/images/emp3-icon-footer.svg';
import empImg4 from '../assets/images/emp4-icon-footer.svg';
import empImg5 from '../assets/images/emp5-icon-footer.svg';
import empImg6 from '../assets/images/emp6-icon-footer.svg';
import logo from '../assets/images/Catur Wings logo.svg';
import instaIcon from '../assets/images/insta-icon-footer.svg';
import xappIcon from '../assets/images/twitter-icon-footer.svg';
import linkedinIcon from '../assets/images/linkedin-icon-footer.svg';
import whatsappIcon from '../assets/images/whatsapp-icon-footer.svg';
import dropArrowIcon from '../assets/images/arrow-icon-footer.svg';
import phoneIcon from '../assets/images/call-icon-footer.svg';
import emailIcon from '../assets/images/emailIcon.svg';
import locationIcon from '../assets/images/locationIcons.svg';
import { Link } from 'react-router-dom';
import pdf from '../assets/images/pdf.pdf'

const Footer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const handleOpenPdf = () => {
        window.open(pdf, '_blank');
      };
    return (
        <div className="container-fluid bg-color justify-content-center py-5">
            <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img src={facebookIcon} alt="facebook-icon" className="follow-us-img" />
                    <h6 className="text-white d-inline-block align-middle p-4 ml-2 mb-0 follow-us fw-bolder font-saira-semi-Condensed">FOLLOW US ON FACEBOOK</h6>
                </div>
            </div>
            <div className="row container-fluid text-center mt-5 mx-auto px-0 mx-0">
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 mb-2">
                    <img src={empImg1} className='img-fluid' alt="emp-img-1" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 mb-2">
                    <img src={empImg2} className='img-fluid' alt="emp-img-2" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 mb-2">
                    <img src={empImg3} className='img-fluid' alt="emp-img-3" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 mb-2">
                    <img src={empImg4} className='img-fluid' alt="emp-img-4" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 mb-2">
                    <img src={empImg5} className='img-fluid' alt="emp-img-5" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 mb-2">
                    <img src={empImg6} className='img-fluid' alt="emp-img-6" />
                </div>
            </div>
            <div className="row mt-5 mx-md-4 w-0">
                {/* Logo and Social Icons */}
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 col-my-4 text-center text-md-start order-4 order-md-1 footer-logo-algin">
                    <img src={logo} alt="logo" />
                    <div className="row mt-5 py-3">
                        <div className="col-xl-2 col-lg-2 col-md-1 col-2 offset-2 offset-md-0">
                            <img src={instaIcon} alt="insta-icon" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-2">
                            <img src={xappIcon} alt="xapp-icon" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-2">
                            <img src={linkedinIcon} alt="linkedin-icon" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-2">
                            <img src={whatsappIcon} alt="whatsapp-icon" />
                        </div>
                    </div>
                    <p className="text-white py-4 pt-4 font-roboto copyright">Copyrights @ 2024, All Rights Reserved</p>
                </div>
                {/* Quick Links */}
                <div className="col-lg-2 order-2">
                    <h5 className="text-white ms-1 mt-3 font-saira-semi-Condensed">Quick Links</h5>
                    <ul className="drop-town">
                        <li>
                            <img src={dropArrowIcon} alt="Home" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/home">Home</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="About" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/about">About</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Services" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services">Services</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Contact Us" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/contactpage">Contact Us</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Privacy Policy" />
                            <Link className="text-white ps-1 font-roboto font-16" onClick={handleOpenPdf}
to="/">Privacy Policy</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Terms & Conditions" />
                            <Link className="text-white ps-1 font-roboto font-16"  onClick={handleOpenPdf} to="/">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
                {/* Our Services */}
                <div className="col-lg-4 order-3">
                    <h5 className="text-white ms-1 mt-3 font-saira-semi-Condensed">Our Services</h5>
                    <ul className="drop-town">
                        <li>
                            <img src={dropArrowIcon} alt=">Soft Services" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/soft-services">Soft Services</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Waste Disposal Management" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/pest">Waste Disposal Management</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Water Management & Facade Cleaning Services" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/water">Water Management & Facade Cleaning Services</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Security Awareness" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/security">Security Awareness</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Add-On Services" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/add">Add-On Services</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Hard Services" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/hs">Hard Services</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Office Services" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/office-service">Office Services</Link>
                        </li>
                        <li>
                            <img src={dropArrowIcon} alt="Transition Models" />
                            <Link className="text-white ps-1 font-roboto font-16" to="/services/transition">Transition Models</Link>
                        </li>
                    </ul>
                </div>
                {/* Address and Contact */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 order-1 order-md-4">
                    <div className="service mx-auto d-flex justify-content-center">
                        <Link to="/contactpage#enq" className="btn btn-md btn-transparent px-5 custom-btn fw-semibold font-saira-semi-Condensed">SERVICE ENQUIRY</Link>
                    </div>
                    <div className="mx-auto">
                        <a href="tel:+919844416686" className="f-cbtn mt-3 experts expert-btn w-100 p-3 justify-content-center font-saira-semi-Condensed text-black text-decoration-none text-black gap-3">
                            <img src={phoneIcon} className='object-fit-contain' alt="Phone" />
                            <div className="ps-2">
                                <p className='fw-semibold mb-0'>Talk to our Expert </p>
                                <span className='fw-semibold mb-0 text-decoration-none text-black'> +91-9844416686</span>
                            </div>
                        </a>
                    </div>
                    <div className="mail pt-xl-4 pt-lg-5 pt-md-3 pt-sm-3 d-flex">
                        <img src={emailIcon} alt="emailId" className='img-fluid email-icon-footer'/>
                        <p className="text-white ps-3 pt-3 font-roboto font-16">caturwings@gmail.com</p>
                    </div>
                    <div className="address pt-xl-3 pt-lg-3 pt-mt-2 pt-sm-2 d-flex">
                        <img src={locationIcon} alt="location" className='img-fluid location-icon-footer' />
                        <address className="text-white ps-3 font-roboto font-16">
                            #27, 9/1, Prakash Reddy Layout, 
                            6th Cross, Doddanakundhi, Bangalore -37.
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
