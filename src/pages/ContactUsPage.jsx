import React, { useEffect, useState } from "react";
import "../css/ContactPage.css";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import manage from "../assets/images/manage.svg";
import client from "../assets/images/client.svg";
import centric from "../assets/images/centric.svg";
import like from "../assets/images/like.svg";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from 'emailjs-com';

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { sectionI } = useParams();
  useEffect(() => {

    if (sectionI) {
      const element = document.getElementById(sectionI);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        const element = document.getElementById(contact);

        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    const hash = window.location.hash;
    console.log(hash);
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sectionI]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    location: "",
    email: "",
    enquiry: "",
    subject: "",
    service: "",
    enquiryDetails: "",
  });
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let formErrors = {};


    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (!/^[a-zA-z\s.]+$/.test(formData.name)) {
      formErrors.name = "Name is invalid";
    }
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber) || /^0{10}$/.test(formData.phoneNumber) || (!/^\d+$/.test(formData.phoneNumber))) {
      formErrors.phoneNumber = "Phone number is invalid";
    }

    if (!formData.location) formErrors.location = "Location is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.enquiry) formErrors.enquiry = "Enquiry is required";
    if (!formData.service) formErrors.service = "Service is required";

    if (!formData.subject) formErrors.subject = "Subject is required";

    return formErrors;
  };

  const handleSubmit = (e) => {
    //   Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "jayaraman.r@hepl.com",
    //     Password : "E5E42C5BACB0D9B7B1849087C9A6D4CD804D",
    //     To : 'jayaraman.r@hepl.com',
    //     From : "jayaraman.r@hepl.com",
    //     Subject : "This is the subject",
    //     Template: "Caturwings",
    //     TemplateContent: {
    //         Name: "John Doe",
    //     }      
    // }).then(
    //   message => alert(message)
    // );
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form data:", formData);
      emailjs.send('service_piq2ugi', 'template_0n2pkgp', formData, '0MaAo4El0ZUKglUZ0')
        .then((response) => {
          console.log('Email sent:', response.status, response.text);
        }, (error) => {
          console.error('Error sending email:', error);
        });

      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phoneNumber: "",
        location: "",
        email: "",
        enquiry: "",
        subject: "",
        service: "",
        enquiryDetails: "",
      });
      navigate("/");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className=" container-fluid  p-0 overflowX-hidden" id="contact">
        <div className=" contactPage-bg">

          <NavBar contact="true" />
          <div className="row py-5 m-0 justify-content-center text-white contact_content_sec">
            <div className="col-md-10 col-sm-12 col-xs-12 text-center py-5 contact_content mt-5">
              <div className="d-flex justify-content-center  align-items-center">
                <hr className="line" />

                <h6 className="mx-2 font-saira-semi-Condensed fw-bold contactSize mb-0">
                  CONTACT
                </h6>
                <hr className="line" />

              </div>
              <div className="py-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 c_title">
                <h1 className="pt-4 text-center fw-bolder font-saira textFont w-75 m-auto">
                  CONNECT WITH CATUR
                  <br /> WINGS
                </h1>
                {/* <h1 className="text-center fw-bold font-saira textFont">WINGS</h1> */}
                <p className="text-center font-Roboto mt-4 px-2 para-dec">
                  Have a question or need our expert facility management services?
                  We're just a message away. Get in touch with us and let’s make
                  your spaces more efficient and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container services-section">
          <div className="row justify-content-center ">
            <div
              className="col-xl-4 col-md-4 col-sm-12 col-xs-12 d-flex mt-3 "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="service-item service-card1 contact-top-card contact-card office-card">
                <div className="card-body text-center py-3">
                  <div className="icon-container">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <h4 className="font-saira-semi-Condenseds fw-bolder">OFFICE ADDRESS</h4>
                  <p className="card-text font-roboto text-black">
                    #27, 9/1, Prakash Reddy Layout, 6th Cross, Doddanakundhi,
                    Bangalore - 37.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-4 col-sm-12 col-xs-12 d-flex mt-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item service-card1 contact-top-card contact-card">
                <div className="card-body text-center py-3">
                  <div className="icon-container">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <h4 className="font-saira-semi-Condenseds fw-bolder">PHONE NUMBER</h4>
                  <p className="card-text fw-bold font-roboto text-black mx-xl-5 mx-lg-5 mx-md-3 mx-5">
                    +91 - 9844416686, +91 - 9886587666, <br /> +91 - 8050682368
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-4 col-sm-12 col-xs-12 d-flex mt-3"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="service-item service-card1 contact-top-card contact-card w-100">
                <div className="card-body text-center py-3">
                  <div className="icon-container">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h4 className="font-saira-semi-Condenseds fw-bolder">EMAIL ADDRESS</h4>
                  <p className="card-text font-roboto text-black">
                    caturwings@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container services-section">
          <div className="row justify-content-center ">
            <div
              className="col-xl-4 col-md-4 col-sm-12 col-xs-12 d-flex mt-3 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item service-card1 contact-top-card contact-card office-card">
                <div className="card-body text-center py-3">
                  <div className="icon-container">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <h4 className="font-saira-semi-Condenseds fw-bolder">WORKING HOUR</h4>
                  <p className="card-text font-roboto text-black">
                    Mon - Fri : 10:00AM - 6:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="bg-form mt-3 reach_out_form" >
          <div className="container">
            <div className="py-5 text-center text-white">
              <h2 className="font-saira fw-bold fontSize">REACH OUT TO US</h2>
              <div className="row justify-content-center py-3">
                <div className="col-lg-8 col-md-10 text-center">
                  <p className="justify-content-center  font-roboto content_detail px-2">
                    We’d love to hear from you. Whether you have a question or
                    need our expert facility management services, fill out the
                    form below, and our team will get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="row" id="enq">
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                {/* Form goes here */}
                <div
                  className=" gradient-background"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <form
                    className="px-3 pt-3 reach_out_frm"
                    onSubmit={handleSubmit}
                  >
                    <div className="row ">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="form-label content-color font-saira-semi-Condensed fw-bold">
                          NAME
                        </label>

                        <input
                          className="form-control mb-2 font-roboto"
                          placeholder="Your Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className="error-message-font-roboto text-danger">{errors.name}</p>
                        )}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <label className="form-label content-color font-saira-semi-Condensed fw-bold">
                          PHONE NUMBER
                        </label>
                        <input
                          className="form-control mb-2 font-roboto"
                          placeholder="Your Phone Number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                        {errors.phoneNumber && (
                          <p className="error-message-font-roboto text-danger">{errors.phoneNumber}</p>
                        )}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label className="form-label content-color font-saira-semi-Condensed fw-bold">
                          LOCATION
                        </label>
                        <input
                          className="form-control mb-2 font-roboto"
                          placeholder="Your Location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                        />
                        {errors.location && (
                          <p className="error-message-font-roboto text-danger">{errors.location}</p>
                        )}
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="form-label content-color font-saira-semi-Condensed fw-bold">
                          EMAIL ADDRESS
                        </label>
                        <input
                          className="form-control mb-2 font-roboto"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="error-message-font-roboto text-danger">{errors.email}</p>
                        )}
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <label className="form-label content-color font-saira-semi-Condensed fw-bold">
                          TYPE OF ENQUIRY
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input "
                            type="radio"
                            name="enquiry"
                            value="General Enquiry"
                            checked={formData.enquiry === "General Enquiry"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color  font-roboto">
                            General Enquiry
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="enquiry"
                            value="Service Enquiry"
                            checked={formData.enquiry === "Service Enquiry"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color  font-roboto">
                            Service Enquiry
                          </label>
                          {errors.enquiry && (
                            <span className="error-message-font-roboto text-danger"><br />{errors.enquiry}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <label className="form-label content-color font-saira-semi-Condensed fw-bold">
                          SUBJECT
                        </label>
                        <input
                          className="form-control font-roboto"
                          placeholder="Your Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && (
                          <p className="error-message-font-roboto text-danger">{errors.subject}</p>
                        )}
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <label className="form-label content-color mt-4 font-saira-semi-Condensed fw-bold">
                          SERVICE INTERESTED IN,(IF "SERVICE ENQUIRY")
                        </label>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value="Soft Services"
                            checked={formData.service === "Soft Services"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Soft Services
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value="Waste Disposal Management"
                            checked={
                              formData.service === "Waste Disposal Management"
                            }
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Waste Disposal Management
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value=" Water Management & Facade Cleaning Services"
                            checked={
                              formData.service ===
                              " Water Management & Facade Cleaning Services"
                            }
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Water Management & Facade Cleaning Services
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value="Additional Services"
                            checked={formData.service === "Additional Services"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Additional Services
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value="Hard Services"
                            checked={formData.service === "Hard Services"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Hard Services
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value="Office Services"
                            checked={formData.service === "Office Services"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Office Services
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value="Transition Models"
                            checked={formData.service === "Transition Models"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Transition Models
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="service"
                            value=" Other"
                            checked={formData.service === " Other"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label content-color font-roboto">
                            Other
                          </label>

                        </div>
                        {errors.service && (
                          <span className=" error-message-font-roboto text-danger">{errors.service}</span>
                        )}
                      </div>
                      <div className="col-lg-12  col-md-12  col-sm-12 col-xs-12 mt-4">
                        <label className="form-label content-color font-saira fw-bold">
                          ENQUIRY SERVICE DETAILS
                        </label>
                        <textarea
                          className="form-control mt-3 font-roboto "
                          rows="9"
                          placeholder="Enquiry Service Details"
                          name="enquiryDetails"
                          // value={formData.enquiryDetails}
                          onChange={handleChange}
                        ></textarea>
                        {/* {errors.enquiryDetails && (
                        <p className="text-danger">{errors.enquiryDetails}</p>
                      )} */}
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 my-4">
                        <div className="d-grid gap-2">
                          <button
                            className="send-btn fw-bold py-2 font-saira-semi-Condensed"
                            type="submit"
                          >
                            SEND MESSAGES
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <div
                  className="experts contact-card mb-4 text-start"
                  data-aos="flip-right"
                  data-aos-offset="100"
                >
                  <div className="row align-items-center">
                    <div className="col-3 col-lg-3 mt-2 contact-s-logo">
                      <img src={manage} alt="manage" className="img-fluid" />
                    </div>
                    <div className="col-9 col-lg-9">
                      <h6 className="mb-2 card_head_contact  font-saira">
                        Expertise in Property Management
                      </h6>
                      <p className="card_content_contact font-roboto">
                        Our extensive experience in managing various properties
                        ensures precision and professionalism in every aspect.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="experts contact-card w-100 mb-4 text-start"
                  data-aos="flip-left"
                  data-aos-offset="100"
                >
                  <div className="row align-items-center">
                    <div className="col-3 col-lg-3 mt-2 contact-s-logo">
                      <img src={client} alt="manage" className="img-fluid" />
                    </div>
                    <div className="col-9 col-lg-9">
                      <h6 className="mb-2 card_head_contact font-saira">
                        Customized Solutions for Clients
                      </h6>
                      <p className="card_content_contact font-roboto">
                        Tailored solutions, backed by our "Single Point of
                        Contact" approach, ensure personalized services that
                        exceed client expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="experts contact-card w-100 mb-4 text-start"
                  data-aos="flip-right"
                  data-aos-offset="100"
                >
                  <div className="row align-items-center">
                    <div className="col-3 col-lg-3 mt-2 contact-s-logo">
                      <img src={like} alt="manage" className="img-fluid" />
                    </div>
                    <div className="col-9 col-lg-9">
                      <h6 className="mb-2 card_head_contact font-saira">
                        Commitment to Excellence
                      </h6>
                      <p className="card_content_contact font-roboto">
                        Excellence is our standard. From efficient property
                        management to innovative solutions, we are dedicated to
                        high quality.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="experts contact-card w-100 mb-4 text-start"
                  data-aos="flip-left"
                  data-aos-offset="100"
                >
                  <div className="row align-items-center">
                    <div className="col-3 col-lg-3 mt-2  contact-s-logo">
                      <img src={centric} alt="manage" className="img-fluid" />
                    </div>
                    <div className="col-9 col-lg-9">
                      <h6 className="mb-2 card_head_contact font-saira">
                        Client-Centric Approach
                      </h6>
                      <p className="card_content_contact font-roboto">
                        Our "Single Point of Contact" approach simplifies
                        communication, ensuring your concerns are addressed
                        promptly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row text-start">
                  <h1 className="text-white pt-lg-3  md-pt-3  py-lg-0 py-md-0 py-4 font-saira-semi-Condensed fw-bold  text-lg-start text-md-start text-center">
                    LOCATE US
                  </h1>
                  <div className="col-12 map_height ">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9865697807973!2d77.69208267962442!3d12.972710682240363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae117fd649cb53%3A0x821becfa854143e9!2s27%2C%209%2C%20Prakash%20Reddy%20Layout%2C%20Doddanekundi%2C%20Doddanekkundi%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1719312198720!5m2!1sen!2sin"
                      title="#27, 9/1, Prakash Reddy Layout, 6th Cross, Doddanakundhi, Bangalore - 37."
                      aria-label="#27, 9/1, Prakash Reddy Layout, 6th Cross, Doddanakundhi, Bangalore - 37."
                      frameBorder="0"
                      allowFullScreen
                      className="googlemap"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default ContactUsPage;