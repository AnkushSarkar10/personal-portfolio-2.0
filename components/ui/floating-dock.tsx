"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        href: string;
        isActive?: boolean;
    }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        href: string;
        isActive?: boolean;
    }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(
        items.find((item) => item.isActive)?.title || null
    );

    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{
                                    delay: (items.length - 1 - idx) * 0.05,
                                }}
                            >
                                <a
                                    href={item.href}
                                    key={item.title}
                                    className="flex flex-col items-center"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveItem(item.title);
                                        setOpen(false);
                                    }}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-secondary">
                                        <div className="h-4 w-4">
                                            {item.icon}
                                        </div>
                                    </div>
                                    {activeItem === item.title && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="mt-1 h-1 w-1 rounded-full"
                                        />
                                    )}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
            >
                <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        href: string;
        isActive?: boolean;
    }[];
    className?: string;
}) => {
    const mouseX = useMotionValue(Infinity);
    const [activeItem, setActiveItem] = useState<string | null>(
        items.find((item) => item.isActive)?.title || null
    );

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "liquid-glass hidden items-center justify-center px-4 pb-2 md:inline-flex",
                "relative isolate",
                "shadow-[0px_6px_24px_rgba(0,0,0,0.2)]",
                className
            )}
        >
            <div className="relative py-1 z-10 flex items-end gap-2">
                {items.map((item) => (
                    <IconContainer
                        mouseX={mouseX}
                        key={item.title}
                        {...item}
                        isActive={activeItem === item.title}
                        onClick={() => setActiveItem(item.title)}
                    />
                ))}
            </div>
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
    isActive,
    onClick,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
    isActive?: boolean;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: 0,
        };

        return val - bounds.x - bounds.width / 2;
    });

    // macOS dock scaling: icons scale up more subtly (80px base)
    const widthTransform = useTransform(distance, [-150, 0, 150], [75, 75, 75]);
    const heightTransform = useTransform(
        distance,
        [-150, 0, 150],
        [70, 70, 70]
    );

    const widthTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [40, 52, 40]
    );
    const heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [40, 52, 40]
    );

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 15,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 15,
    });

    const widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 15,
    });
    const heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 15,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={href}
            className="relative flex items-end"
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
        >
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 8,
                                x: "-50%",
                                scale: 0.8,
                            }}
                            animate={{ opacity: 1, y: -4, x: "-50%", scale: 1 }}
                            exit={{ opacity: 0, y: 2, x: "-50%", scale: 0.8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute -top-10 left-1/2 z-50 w-fit rounded-lg bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white shadow-lg opacity-10"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center transition-transform duration-200"
                >
                    {icon}
                </motion.div>
            </motion.div>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1 h-1 w-1 rounded-full bg-gray-400"
                />
            )}
        </a>
    );
}
