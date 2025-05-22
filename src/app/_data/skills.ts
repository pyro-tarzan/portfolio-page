interface Skill {
    name: string;
    category: "frontend" | "backend" | "tools" | "other",
    level?: number;
}

export const skills: Skill[] = [
    { name: "HTML5", category: "frontend", level: 5 },
    { name: "CSS3", category: "frontend", level: 4 },
    { name: "JavaScript", category: "frontend", level: 3 },
    { name: "React", category: "frontend", level: 3 },
    { name: "NextJS", category: "frontend", level: 3 },
    { name: "TypeScript", category: "frontend", level: 4 },

    { name: "NodeJS", category: "backend", level: 3 },
    { name: "ExpressJS", category: "backend", level: 3 },
    { name: "MongoDB", category: "backend", level: 2 },
    { name: "Python", category: "backend", level: 5 },

    { name: "Git/GitHub", category: "tools", level: 4 },
    { name: "Jupyter Notebook", category: "backend", level: 2 }
];