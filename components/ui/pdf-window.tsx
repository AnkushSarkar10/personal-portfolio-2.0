"use client";

import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { useMemo } from "react";

interface PDFWindowProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    iconPosition: { x: number; y: number } | null;
}

export function PDFWindow({
    isOpen,
    onClose,
    pdfUrl,
    iconPosition,
}: PDFWindowProps) {
    const transformOrigin = useMemo(() => {
        if (iconPosition && typeof window !== "undefined") {
            const originX = (iconPosition.x / window.innerWidth) * 100;
            const originY = (iconPosition.y / window.innerHeight) * 100;
            return `${originX}% ${originY}%`;
        }
        return "50% 100%";
    }, [iconPosition]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />
                    {/* Window */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-8 pointer-events-none">
                        <motion.div
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
                            className="w-full h-full max-w-5xl max-h-[90vh] pointer-events-auto"
                        >
                            <div
                                className="w-full h-full bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col"
                                style={{
                                    backdropFilter: "blur(20px)",
                                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Title Bar */}
                                <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                        </div>
                                        <span className="text-sm text-gray-300 ml-2">
                                            Resume.pdf
                                        </span>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-1.5 rounded-md hover:bg-gray-700/50 transition-colors"
                                        aria-label="Close"
                                    >
                                        <IconX className="w-4 h-4 text-gray-400" />
                                    </button>
                                </div>
                                {/* PDF Content */}
                                <div className="flex-1 overflow-hidden">
                                    <iframe
                                        src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                                        className="w-full h-full border-0"
                                        title="Resume PDF Viewer"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

