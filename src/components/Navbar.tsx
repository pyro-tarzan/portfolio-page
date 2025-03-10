"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/components/styles/Navbar.css"

const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills & Tech Stack", path: "/skills" },
    { name: "Contact", path: "/contact" }
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="bg-white line-bottom nav-bar-height">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link 
                        href="/"
                    >
                        <span className="text-3xl cursor-pointer title-name">
                            <span className="v-title-name">V</span>ignesh
                        </span>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <ul className="flex items-center space-x-8 text-lg font-semibold text-gray-700">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    href={item.path}
                                >
                                    <span className="cursor-pointer content-nav">
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        aria-label="Toggle Menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="focus:outline-none"
                    >

                        {/* Use SVG Icon for Hamburger Menu */}
                        {menuOpen ? (
                            <svg
                                className="h-8 w-8 mearun-color"
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
                                className="h-8 w-8 mearun-color"
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
                        className="md:hidden overflow-hidden"
                    >
                        <ul className="px-4 pt-2 pb-4 space-y-4 bg-color-hambug">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path}>
                                        <span className="block px-3 py-2 rounded content-nav">
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