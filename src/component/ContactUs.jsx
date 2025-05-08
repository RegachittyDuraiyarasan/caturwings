import React from "react";
import Callicon from "../assets/images/phone_icon.png";
import "../css/ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="contact-bg p-3">
        <div className="row py-5 justify-content-center text-white">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center py-5">
            <div className="d-flex justify-content-center align-items-center ">
            <hr className="line" />
              <h5 className="mx-2 mb-0 font-saira-semi-Condensed fw-bolder ">
                CONTACT US
              </h5>
              <hr className="line" />
            </div>
            <div className="py-2 col-lg-12  col-md-12 col-sm-12 col-xs-12">
              <h1 className="py-4 text-center fw-bolder font-saira font-50 ">
                GET STARTED TODAY
              </h1>
              <p className="text-center font-Roboto fs-18">
                Ready to experience top-notch facility management services?
                Contact us now to discuss your needs and discover how Catur
                Wings Facility Management Services can enhance your space.
              </p>
            </div>
            <div className="row py-3">
  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-2 order-md-1 order-lg-1 mt-4 mt-lg-2 mt-md-2 text-lg-end text-md-center">
    <div className="call_btn font-saira-semi-Condensed font-18">
      <img src={Callicon} alt="Call" className="img-fluid" />
      <a href='tel:+919844416686' className="text-decoration-none text-white">+91-9844416686</a>
    </div>
  </div>
  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-1 order-md-2 order-lg-2 text-lg-start text-md-center mt-lg-0 mt-4">
  <Link 
      to="/contactpage" 
      className="btn hero-btn text-left fw-semibold text-light bg bg-white text-black font-saira-semi-Condensed">

      CONTACT US
    </Link>
  </div>
 
</div>

            {/* <div className="row py-3 ">
              <div className="col-lg-6  col-md-12 col-sm-12 col-xs-12 mt-2 text-lg-end text-md-center ">
                <div className="call_btn font-saira-semi-Condensed font-18 ">
                  <img src={Callicon} alt="" className="img-fluid" />
                  <a href='tel:+919844416686' className="text-decoration-none text-white ">+91-9844416686</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-lg-start text-md-center mt-lg-0 mt-md-2 mt-md-2 mt-sm-2 mt-4 ">
              
                <a href='#/contactpage' className="btn  hero-btn text-left fw-semibold  text-light bg bg-white text-black fw-semibold  font-saira-semi-Condensed  fw-semibold "> CONTACT US</a>

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;