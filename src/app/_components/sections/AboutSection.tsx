import React from "react";
import styles from "@/app/_styles/sections/sections.module.css";

const AboutSection: React.FC = () => {
    return(
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.aboutText}>
                        <p>
                            Hello! I'm Vignesh, a passionate full stack developer specializing in building
                            modern, responsive web applications with Next.js and React.
                        </p>

                        <p>
                            With a strong foundation in front-end development and a keen eye for design,
                            I create seamless user experiences that combine functionality with aesthetic appeal.
                        </p>

                        <p>
                            My journey in web development began by doing some hands-on basic project.
                            I continously strive to stay updated with latest technologies and best practices in the ever-evolving
                            world of web development.
                        </p>
                    </div>

                    {/* You can add an image here */}
                    <div className={styles.aboutImage}>

                        {/* Placeholder for profile image */}
                        <div className={styles.imageContainer}>
                            
                            {/* You can replace this with an actual image */}
                            <div className={styles.placeholderImage}>
                                {/* You can use Next.js Image component in the future */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;