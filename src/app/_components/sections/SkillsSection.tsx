import React from "react";
import styles from "@/app/_styles/sections/sections.module.css";

import { skills } from "@/app/_data/skills";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
    SiHtml5, SiCss3, SiExpress, SiMongodb, SiMysql, SiDocker,
    SiFigma, SiPostman, SiPython, SiJupyter
} from "react-icons/si"

// Map skill names to icons
const skillIcons: Record<string, JSX.Element> = {
    "React": <FaReact/>,
    "JavaScript": <SiJavascript/>,
    "TypeScript": <SiTypescript/>,
    "NextJS": <SiNextdotjs />,
    "HTML5": <SiHtml5 />,
    "CSS3": <SiCss3 />,
    "Tailwind CSS": <SiTailwindcss />,
    "NodeJS": <FaNodeJs />,
    "ExpressJS": <SiExpress />,
    "MongoDB": <SiMongodb />,
    "MySQL": <SiMysql />,
    "Git/GitHub": <FaGitAlt />,
    "Docker": <SiDocker />,
    "Figma": <SiFigma />,
    "Postman": <SiPostman />,
    "Python": <SiPython/>,
    "Jupyter Notebook": <SiJupyter/>
}

const getIconForSkill = (skillName: string): JSX.Element => {
    return skillIcons[skillName] || <div className={styles.defaultIcon}>{skillName.charAt(0)}</div>;
};

const SkillsSection: React.FC = () => {
    const frontendSkills = skills.filter(skill => skill.category === "frontend");
    const backendSkills = skills.filter(skill => skill.category === "backend");
    const otherSkills = skills.filter(skill => skill.category === "other" || skill.category === "tools");

    // Function to render skill dots (for proficiency visualization)
    const renderSkillLevel = (level: number): JSX.Element[] => {
        const dots: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
            dots.push(
                <div
                    key={i}
                    className={`${styles.skillDot} ${i <= level ? styles.active : ""}`}
                />
            );
        }
        return dots;
    };

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
                                    <div className={styles.skillIcon}>
                                        {getIconForSkill(skill.name)}
                                    </div>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    <div className={styles.skillLevel}>
                                        {skill.level && renderSkillLevel(skill.level)}
                                    </div>
                                    {skill.level && (
                                        <span className={styles.skillPercentage}>
                                            {skill.level * 20}%
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3>Backend Development</h3>
                        <div className={styles.skillsList}>
                            {backendSkills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        {getIconForSkill(skill.name)}
                                    </div>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    <div className={styles.skillLevel}>
                                        {skill.level && renderSkillLevel(skill.level)}
                                    </div>
                                    {skill.level && (
                                        <span className={styles.skillPercentage}>
                                            {skill.level * 20}%
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3>Tools & Other Skills</h3>
                        <div className={styles.skillsList}>
                            {otherSkills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        {getIconForSkill(skill.name)}
                                    </div>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    <div className={styles.skillLevel}>
                                        {skill.level && renderSkillLevel(skill.level)}
                                    </div>
                                    {skill.level && (
                                        <span className={styles.skillPercentage}>
                                            {skill.level * 20}%
                                        </span>
                                    )}
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