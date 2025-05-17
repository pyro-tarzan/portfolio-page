import React from "react";
import styles from "@/app/_styles/sections/sections.module.css";

import { projects } from "@/app/_data/projects";

const ProjectSections: React.FC = () => {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>My Projects</h2>

                <div className={styles.projectGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.projectImageContainer}>
                                {project.imageUrl ? (
                                    <div 
                                        className={styles.projectImage}
                                        style={{backgroundImage: `url(${project.imageUrl})`}}
                                    >
                                    </div>
                                ) : (
                                    <div
                                        className={styles.projectImagePlaceholder}
                                    ></div>
                                )}
                            </div>

                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>

                                <div className={styles.projectTechnologies}>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>

                                <div className={styles.projectLinks}>
                                    {project.repoUrl && (
                                        <a href={project.repoUrl}>Source Code</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSections;