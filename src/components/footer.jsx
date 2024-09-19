import React, { forwardRef } from "react";
import "./../styles/footer.css"
import github from "./../assets/github-mark/github-mark.png"

const Footer = forwardRef(({scrollToSection, homeRef, skillRef, contactRef}, ref) => {

    const year = new Date().getFullYear()

    return (
        <div className="footer" ref={ref}>
            <div>
                <div className="main-part">
                    <div className="first-footer">
                        <div className="icon-circle blue">
                            <a href="https://www.facebook.com"><span>f</span></a>
                        </div>
                        <div className="icon-circle blue">
                            <a href="https://www.linkedin.com/in/vignesh-m-6a3142241"><span>in</span></a>
                        </div>
                        <div className="icon-circle white">
                            <a href="https://github.com/pyro-tarzan"><span><img src={github} alt="" /></span></a>
                            
                        </div>

                    </div>
                    <div className="second-footer">
                        <div className="section" onClick={() => scrollToSection(homeRef)}>Home</div>
                        <div className="section" onClick={() => scrollToSection(skillRef)}>About</div>
                        <div className="section" onClick={() => scrollToSection(contactRef)}>Contact</div>

                    </div>
                </div>
                <div className="copy">
                    <span>Copyright {year} Vignesh</span>
                </div>
            </div>
        </div>
    )
})

export default Footer;