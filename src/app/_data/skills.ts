interface Skill {
    name: string;
    category: "frontend" | "backend" | "tools" | "other"
}

export const skills: Skill[] = [
    { name: "HTML/CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "NextJS", category: "frontend" },
    { name: "TypeScript", category: "frontend" },

    { name: "NodeJS", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Python", category: "backend" },

    { name: "Git/GitHub", category: "tools" },
    { name: "Jupyter Notebook", category: "backend" }
];