"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/components/styles/Navbar.css"

const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="navigation-bar">
            <div className="nav-cont">
                <div className="vig-title">
                    <Link 
                        href="/"
                    >
                        <span>
                            Vignesh
                        </span>
                    </Link>
                </div>

                <div className="nav-contents-cont">
                    <ul className="list-nav-contents">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    href={item.path}
                                >
                                    <span className="nav-content">
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-menu">
                    <button
                        aria-label="Toggle Menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="hamburger-menu"
                    >

                        {/* Use SVG Icon for Hamburger Menu */}
                        {menuOpen ? (
                            <svg
                                className="svg-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="svg-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{height: 0}}
                        animate={{height: "auto"}}
                        exit={{height: 0}}
                        className="animation-menu"
                    >
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                    >
                                        <span className="nav-content">
                                            {item.name}                                 
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </nav>
    );
};

export default Navbar;