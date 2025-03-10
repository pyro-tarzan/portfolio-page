"use client";
import { usePathname } from "next/navigation";
import React from "react";

// STYLES
import "@/components/styles/AnimatedRootContainer.css"

// ANIMATIONS
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/app/_animations/motionVariants";

// TYPES
interface AnimatedContainerProps {
    children: React.ReactNode
}

export default function AnimatedRootContainer( { children }: AnimatedContainerProps ) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            className="border-style-pink-shade"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    )
}