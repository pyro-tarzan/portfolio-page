"use client";

import React from "react";
import styles from "@/app/_styles/sections/sections.module.css";
import { projects } from "@/app/_data/projects";

const ProjectSections: React.FC = () => {
    const handleCardClick = (repoUrl: string | undefined) => {
        if (repoUrl) {
            window.open(repoUrl, '_blank');
        }
    };

    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>My Projects</h2>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`${styles.projectCard} ${project.repoUrl ? styles.clickable : ''}`}
                            onClick={() => handleCardClick(project.repoUrl)}
                            role={project.repoUrl ? "button" : undefined}
                            tabIndex={project.repoUrl ? 0 : undefined}
                            onKeyDown={(e) => {
                                if (project.repoUrl && (e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    handleCardClick(project.repoUrl);
                                }
                            }}
                            aria-label={project.repoUrl ? `View ${project.title} repository` : undefined}
                        >
                            <div className={styles.projectImageContainer}>
                                {project.imageUrl ? (
                                    <div 
                                        className={styles.projectImage}
                                        style={{backgroundImage: `url(${project.imageUrl})`}}
                                    />
                                ) : (
                                    <div className={styles.projectImagePlaceholder}>
                                        <div className={styles.placeholderIcon}>📁</div>
                                    </div>
                                )}
                            </div>

                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>

                                <div className={styles.projectTechnologies}>
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.techTag}>{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className={styles.techTag}>+{project.technologies.length - 3}</span>
                                    )}
                                </div>

                                {project.repoUrl && (
                                    <div className={styles.repoIndicator}>
                                        <span className={styles.repoIcon}>→</span>
                                        <span className={styles.repoText}>View Repository</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSections;