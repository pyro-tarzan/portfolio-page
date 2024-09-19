import React, { forwardRef } from "react";
import "./../styles/about.css"
import frontEndImg from "./../assets/html-css-js.png"

const About = forwardRef((props, ref) => {
    return (
        <div className="about" ref={ref}>
            <div>
                <div className="cards-container">
                    <div className="cards">
                        <div className="image-card js-card">
                            <img src={frontEndImg} alt="JavaScript"/>
                        </div>
                        <h2>Web development</h2>
                        <ul>
                            <li>Proficient in writing semantic HTML tags and CSS selectors</li>
                            <li>
                                Familiarity with ES6+ features such as let/const, arrow functions,
                                array methods like map/filter/reduce
                            </li>
                            <li>Solid understanding of React's component-based architecture and JSX syntax</li>
                            <li>Ability to create reusable components and manage component state efficiently</li>
                            <li>Knowledge of React hooks like useState, useEffect, and custom hooks</li>
                            <li>Familiarity with React Router for client-side routing</li>
                        </ul>
                    </div>
                    <div className="cards card-2"></div>
                    <div className="cards card-3"></div>
                    <div className="cards card-4"></div>

                </div>
            </div>
        </div>
    )
}
)

export default About;