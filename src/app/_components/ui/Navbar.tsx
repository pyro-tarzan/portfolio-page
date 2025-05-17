"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/_styles/ui/navbar.module.css";

interface NavItem {
    id: string;
    label: string;
}

const navItems: NavItem[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
]

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const scrollToSection = (id: string): void => {
        const element = document.getElementById(id);
        
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;

        const handleScroll = (): void => {

            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const scrollPosition = window.scrollY + 100;

                for (const item of navItems) {
                    const element = document.getElementById(item.id);

                    if (element) {
                        const { offsetTop, offsetHeight } = element;

                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(item.id);
                            break;
                        }
                    }
                }
            }, 100);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, []);

    return (
        <nav className={styles.navigationBar}>
            <div className={styles.titleLogo}>Portfolio</div>

            <button
                className={styles.menuToggle}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            <ul className={`${styles.navigationLinks} ${menuOpen ? styles.menuOpen : ""}`}>
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-current={activeSection == item.id ? "page" : undefined}
                        className={activeSection === item.id ? styles.active : ""}
                    >
                        {item.label}
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navbar;