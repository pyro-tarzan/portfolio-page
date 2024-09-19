import React, {useRef} from "react";
import "./../styles/stage1.css"
import Navigation from "./Navigation";
import Main from "./main";

const Stage1 = () => {

    const homeRef = useRef(null)
    const skillRef = useRef(null)
    const contactRef = useRef(null)

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className="stage1">
           <Navigation homeRef={homeRef} skillRef={skillRef} contactRef={contactRef} scrollToSection={scrollToSection}></Navigation>
           <Main homeRef={homeRef} skillRef={skillRef} contactRef={contactRef} scrollToSection={scrollToSection}></Main>
        </div>
    )
}

export default Stage1;