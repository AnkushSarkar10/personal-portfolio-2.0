"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useMemo } from "react";

interface MacOSTransitionProps {
    children: ReactNode;
    activePage: string;
    pageKey: string;
    iconPosition: { x: number; y: number } | null;
}

export function MacOSTransition({
    children,
    activePage,
    pageKey,
    iconPosition,
}: MacOSTransitionProps) {
    const transformOrigin = useMemo(() => {
        if (iconPosition && typeof window !== "undefined") {
            // Calculate transform origin as percentage from the icon position
            const originX = (iconPosition.x / window.innerWidth) * 100;
            const originY = (iconPosition.y / window.innerHeight) * 100;
            return `${originX}% ${originY}%`;
        }
        // Fallback to bottom center
        return "50% 100%";
    }, [iconPosition]);

    return (
        <AnimatePresence mode="wait">
            {activePage === pageKey && (
                <motion.div
                    key={pageKey}
                    initial={{
                        scale: 0.05,
                        opacity: 0,
                        filter: "blur(30px)",
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    exit={{
                        scale: 0.05,
                        opacity: 0,
                        filter: "blur(30px)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 26,
                        mass: 0.9,
                        opacity: {
                            duration: 0.2,
                            ease: [0.4, 0, 0.2, 1],
                        },
                        filter: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                        },
                    }}
                    style={{
                        transformOrigin: transformOrigin,
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
