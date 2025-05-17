import React from "react";
import styles from "@/app/_styles/sections/sections.module.css";

import { skills } from "@/app/_data/skills";

const SkillsSection: React.FC = () => {
    const frontendSkills = skills.filter(skill => skill.category === "frontend");
    const backendSkills = skills.filter(skill => skill.category === "backend");
    const otherSkills = skills.filter(skill => skill.category === "other" || skill.category === "tools");

    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>My Skills</h2>

                <div className={styles.skillsContainer}>
                    <div className={styles.skillCategory}>
                        <h3>Frontend Development</h3>
                        <div className={styles.skillsList}>
                            {frontendSkills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3>Backend Development</h3>
                        <div className={styles.skillsList}>
                            {backendSkills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3>Tools & Other Skills</h3>
                        <div className={styles.skillsList}>
                            {otherSkills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;