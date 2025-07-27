import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./main/navbar";
import LandingHere from "./main/landinghere";
import OurService from "./main/modules/ourservice";
import ContactUs from "./main/modules/contactus";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Only here */}
      <Routes>
        <Route path="/" element={<LandingHere />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<LandingHere />} /> {/* fallback */}
      </Routes>
    </>
  );
}

export default App;
