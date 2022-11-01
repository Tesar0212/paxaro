import React from "react";
import './assets/styles/App.css';
import Header from "./sections/header/Header";
import Landing from "./sections/landing/Landing";
import Benefits from "./sections/benefits/Benefits";
import Offers from "./sections/offers/Offers";
import Referral from "./sections/refferal/Referral";
import Footer from "./sections/footer/Footer";
import ContactUs from "./sections/contact-us/ContactUs";
import Cookie from "./components/cookie/Cookie";

function App() {
    return (
        <>
            <Header></Header>
            <Landing></Landing>
            <Benefits></Benefits>
            <Offers></Offers>
            <Referral></Referral>
            <ContactUs></ContactUs>
            <Footer></Footer>
            <Cookie></Cookie>
        </>
    );
}

export default App;
