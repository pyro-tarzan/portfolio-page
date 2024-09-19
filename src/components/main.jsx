import React from "react";
import "./../styles/main.css"

import Intro from "./Intro";
import About from "./about";
import Footer from "./footer";

const Main = ({homeRef, skillRef, contactRef, scrollToSection}) => {
    return (
        <div className="main">
            <Intro ref={homeRef}></Intro>
            <About ref={skillRef}></About>
            <Footer ref={contactRef} scrollToSection={scrollToSection} homeRef={homeRef} skillRef={skillRef} contactRef={contactRef}></Footer>
        </div>
    )
}

export default Main;