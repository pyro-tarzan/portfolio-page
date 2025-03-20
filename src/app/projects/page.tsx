import "@/app/projects/Projects.css"

export default function Projects(){

    const projectContents = [
        {
            title: "Tic Tac Toe",
            description: `A simple yet powerful CLI-based Tic-Tac-Toe game implemented in Python,
                featuring the Minimax algorithm for optimal AI moves.
                This game supports both single-player and two-player modes,
                delivering a strategic and engaging experience.`
        },
        {
            title: "Todo List",
            description: `A sleek and intuitive To-Do List application designed for effortless task management.
                With a clean user interface, users can create, edit, maintain, and delete tasks seamlessly.
                Built using the Next.js framework, this web-based application leverages a PostgreSQL database
                to efficiently store and manage to-do notes or task cards.`
        },
        {
            title: "Image Color Palette",
            description: `A simple yet powerful web application that extracts a color palette from uploaded images.
                Users can effortlessly upload an image, which is then processed via a Flask-based backend API.
                The backend utilizes Pandas DataFrame to analyze pixel data, extracting unique colors and
                applying weighted calculations to enhance color differentiation. The API responds with a
                set of hex color values, which are then displayed on the frontend.
                The frontend and backend of this project are built using the latest version of Next.js with TypeScript,
                ensuring a seamless and modern user experience.`
        },
        {
            title: "Breakout Game",
            description: `A classic arcade-style game built using Python and the Turtle module. The game features a graphical interface
                designed with Turtle, replicating the retro charm of traditional breakout games. Players can control the paddle
                using keyboard inputs, with an integrated key event listener ensuring smooth gameplay. Clear and concise instructions
                are provided to guide players on controls. As the game progresses, the ball's speed dynamically increases at certain
                score levels, adding to the challenge and excitement.`
        },
        {
            title: "Cafe Wifi Website",
            description: `A simple yet useful web application that helps users find restaurants or cafés based on available amenities.
                The platform allows users to search for locations that meet their specific needs, such as WiFi access, restrooms,
                indoor and outdoor seating, a work-friendly environment, meeting-friendly spaces, and device charging ports.
                The data is sourced from a sample database to provide relevant search results. This web application is built
                using React with Vanilla CSS, ensuring a clean and responsive user experience for café and restaurant enthusiasts.`
        },
        {
            title: "Automate Cleanup Download Directory",
            description: `A Python automation script designed to clean and organize the Downloads directory efficiently.
                This script categorizes files into specific folders based on file types, ensuring a clutter-free environment.
                The script can be scheduled to run at regular intervals using a cron job, automatically organizing the folder
                whenever the machine is running.`
        },
        {
            title: "Disappearing Text Writing",
            description: `A unique and interactive writing tool built using Python's Tkinter module. This simple GUI-based
                application challenges users to keep typing continuously. If the user stops typing for more than 5 seconds,
                all the text disappears, and they must start over. The timer resets each time the user types, creating a fun 
                and engaging way to improve typing speed and focus.`
        }
    ]

    return (
        <div className="project-page">
            <div className="project-contents">
                <h1>Portfolio Projects:</h1>
                <div className="proj-cont">
                    {projectContents.map((project, index) => (
                        <div key={index} className="proj-desc">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                
                {/* <li>Space Mission Analysis Notebook</li>
                <li>Analyse Death in US by Police Notebook</li> */}
            </div>
        </div>
    )
}