import React, { useEffect } from "react";
import { Route, Routes, Navigate, BrowserRouter, HashRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>

      <BrowserRouter basename="/caturwings">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactpage" element={<ContactUsPage />} />
          <Route path="/contactpage/:sectionI" element={<ContactUsPage />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:sectionId" element={<Services />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
