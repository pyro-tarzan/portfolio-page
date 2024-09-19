import React, { forwardRef } from "react";
import "./../styles/intro.css"

const Intro = forwardRef((props, ref) => {
    return (
        <div className="intro" ref={ref}>
            <div className="center-container">
                <h1>Welcome to <span className="yellow-span">My Portfolio!</span></h1>
                <h2>A Newbie <span className="yellow-span">Full Stack Web Developer</span>. Whether it's through design, development,
                    or innovative thinking, I strive to make a positive
                    impact with my work.</h2>
            </div>
        </div>
    )
}
)

export default Intro;