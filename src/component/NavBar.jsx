import React, { useState, useEffect } from 'react';
import "../css/NavBar.css";
import callIcon from '../assets/images/ion_call-sharp.svg';
import enquiryIcon from '../assets/images/Group 24.svg';
import enquiryIconMobile from '../assets/images/Group 240.svg'; // Import your mobile enquiry icon here
import logo from '../assets/images/Catur Wings logo.svg';
import { Link, useLocation } from 'react-router-dom';
import toggle from '../assets/images/Button Home.svg';

function NavBar({ home, about, services, contact }) {
    const [navActive, setNavActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 966); // Adjust the breakpoint as per your design
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const navtoenq=()=>{
        document.getElementById('enq').scrollIntoView({ behavior: 'smooth' });

    }

    const handleToggle = () => {
        setNavActive(!navActive);
    };

    return (
        <>
            <nav className='navbar navbar-expand-lg   mt-0  px-0 bg-light font-saira  '>
                <div className="container-fluid font-saira px-3">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'none', padding: '0px' }} onClick={handleToggle}>
                        <img src={toggle} alt="" className='p-0 img-fluid' />
                    </button>

                   
                   <Link to={'/contactpage#enq'}>
                   <img src={enquiryIconMobile} alt="enquiry" className='enquiry-icon img-fluid' />
                    </Link>

                    <div className={`collapse navbar-collapse ${navActive ? 'show' : ''}`} id='navbarSupportedContent'>
                        <ul className='navbar-nav ' style={{ justifyContent: 'space-around' }}>
                            <NavItem to={"/"} active={home}>HOME</NavItem>
                            <NavItem to={"/about"} className='nav-list' active={about}>ABOUT US</NavItem>
                            <NavItem to={"/services"} active={services}>SERVICES</NavItem>
                            <NavItem to={"/contactpage"} active={contact}>CONTACT</NavItem>
                        </ul>
                    </div>

                    <Link to={'/'} className='navbar-brand '>
                        <img src={logo} alt="CATURWINGS" className='img-fluid brand_logo mb-3' />
                    </Link>
                    <div className="nav-contact d-flex gap-5 fw-semibold align-items-center">
                        <a href='tel:9844416686' className='nav-mobile text-decoration-none text-dark'>
                            <img src={callIcon} alt="call" /> <span className='enq-text px-1 font-saira-semi-Condensed fw-2'>+91-9844416686</span>
                        </a>
                        {/* <a href='#' className='nav-enquirey catur-wings-font py-2 px-3'> */}

                            <Link to="/contactpage#enq" className="enq-text px-1 font-saira-semi-Condensed text-decoration-none text-white nav-enquirey catur-wings-font py-2 px-3">
                            <img src={enquiryIconMobile} alt="FOR Enquiry" className='px-0' onClick={navtoenq} />    
                            FOR ENQUIRY</Link>

                        {/* </a> */}
                    </div>
                </div>
            </nav>
        </>
    );
}

// NavItem component to handle each individual navigation item
const NavItem = ({ to, active, children }) => {
    return (
        <li className={`nav-item ${active ? 'active' : ''}`}>
            <Link to={to} className={`nav-link mx-2 px-3 nav-link  fw-semibold font-saira-semi-Condensed ${active ? 'text-white bg-black' : ''}`}>{children}</Link>
        </li>
    );
};

export default NavBar;
