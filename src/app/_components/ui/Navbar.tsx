"use client";

import React, { useState, useEffect, useRef } from "react";
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
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const navRef = useRef<HTMLElement>(null);

    const scrollToSection = (id: string): void => {
        const element = document.getElementById(id);
        
        if (element) {
            // element.scrollIntoView({ behavior: "smooth" });

            const navHeight = navRef.current?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementPosition - navHeight,
                behavior: "smooth"
            });
            setActiveSection(id);
            setMenuOpen(false);
        }
    };

    // HANDLE ACTIVE SECTION ON SCROLL
    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;

        const handleScroll = (): void => {
            // UPDATE SCROLL STATE FOR STYLING
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 50);

            // CALCULATE SCROLL PROGRESS
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPct = (scrollTop / windowHeight) * 100;
            setScrollProgress(scrollPct);

            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const navHeight = navRef.current?.offsetHeight || 0;
                const scrollPosition = window.scrollY + navHeight + 50;

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

        // INTIAL CHECK FOR ACTIVE SECTION
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        // HANDLE RESIZE EVENTS TOO FOR BETTER RESPONSIVENESS
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, []);

    // CLOSE MENU WHEN CLICKING OUTSIDE
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav 
            className={`${styles.navigationBar} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
            ref={navRef}
        >
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

            {/* SCROLL PROGRESS INDICATOR */}
            <div
                className={styles.scrollProgress}
                style={{ width: `${scrollProgress}%`}}
                aria-hidden="true"
            />
        </nav>
    )
}

export default Navbar;