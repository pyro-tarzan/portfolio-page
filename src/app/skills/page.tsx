import "@/app/skills/Skills.css"

export default function Skills(){
    return (
        <div className="skills-page">
            <div className="skill-contents">
                <h1>Skills:</h1>
                <div className="card-component">
                    <div className="frontend-cont skillset-card-cont">
                        <h2>FrontEnd</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TypeScript</li>
                            <li>React Framework</li>
                            <li>Next Framework</li>
                        </ul>
                    </div>
                    <br />

                    <div className="backend-cont skillset-card-cont">
                        <h2>BackEnd</h2>
                        <ul>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Flask</li>
                            <li>Jinja</li>
                            <li>Selenium Web Driver</li>
                        </ul>
                    </div>
                    <br />

                    <div className="datalayer-cont skillset-card-cont">
                    <h2>Data Layer</h2>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Pandas Dataframe</li>
                        <li>Jupyter Notebook</li>
                    </ul>
                    </div>

                    <div className="prog-lang-cont skillset-card-cont">
                        <h2>Programming Languages</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                        </ul>
                    </div>

                    <div className="other-cont skillset-card-cont">
                        <h2>Others</h2>
                        <ul>
                            <li>Git</li>
                            <li>Docker</li>
                            <li>Vim</li>
                            <li>Linux CLI Commands</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}