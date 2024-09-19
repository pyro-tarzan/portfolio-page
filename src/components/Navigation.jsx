import React, {useState, useEffect} from "react"
import "./../styles/navigation.css"

const Navigation = ({homeRef, skillRef, contactRef, scrollToSection}) => {

    const [isvisible, setIsvisible] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll) {
            setIsvisible(false)
        }
        else{
            setIsvisible(true)
        }
        setLastScroll(currentScroll)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScroll])

    return (
        <div className={`nav-body ${isvisible ? "visible" : "hidden"} show`}>
                    <div className="nav">
                        <div className="title">
                            <a href="/">
                                <h1 className="first-head head">Portfolio</h1>
                                <h1 className="second-head head">Website</h1>
                            </a>
                            
                        </div>
                        <div className={`sub-titles ${isMenuOpen ? "open" : "" }`}>
                            <h1 className="head sub-title" onClick={() => scrollToSection(homeRef)}>Home</h1>
                            <h1 className="head sub-title" onClick={() => scrollToSection(skillRef)}>About</h1>
                            <h1 className="head sub-title" onClick={() => scrollToSection(contactRef)}>Contact</h1>
                        </div>
                        <div className="hamburger" onClick={toggleMenu}>
                        ☰
                        </div>
                    </div>
                </div>
    )
}


export default Navigation;