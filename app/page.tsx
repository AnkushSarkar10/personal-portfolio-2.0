"use client";

import { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconTerminal2,
    IconFileTypePdf,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconMail,
    IconArticle,
    IconExternalLink,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import ProjectCard from "@/components/project-card";
import { MacOSTransition } from "@/components/ui/macos-transition";

export default function Home() {
    const [activePage, setActivePage] = useState<"home" | "work" | "resume">(
        "home"
    );
    const [iconPosition, setIconPosition] = useState<{
        x: number;
        y: number;
    } | null>(null);

    return (
        <main className="flex flex-col w-screen h-screen overflow-hidden text-white bg-background relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[20px_20px] opacity-20"></div>
            <Spotlight />
            <div className="absolute inset-0 z-40">
                <MacOSTransition
                    activePage={activePage}
                    pageKey="home"
                    iconPosition={iconPosition}
                >
                    <LandingPage />
                </MacOSTransition>
                <MacOSTransition
                    activePage={activePage}
                    pageKey="work"
                    iconPosition={iconPosition}
                >
                    <Work />
                </MacOSTransition>
                <MacOSTransition
                    activePage={activePage}
                    pageKey="resume"
                    iconPosition={iconPosition}
                >
                    <ResumePage />
                </MacOSTransition>
            </div>
            <MacNavBar
                onNavigate={(page, position) => {
                    setIconPosition(position);
                    setActivePage(page);
                }}
                activePage={activePage}
            />
            <div className="fixed bottom-8 right-8 text-sm text-gray-600 z-40">
                ©️ 2025 Ankush Sarkar
            </div>
        </main>
    );
}

function LandingPage() {
    return (
        <div className="flex flex-col h-full items-center justify-center gap-8 relative">
            <h1 className="text-7xl font-momo-trust-display">Ankush Sarkar</h1>
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-3xl text-gray-400">Software developer</p>
                <p className="text-lg text-gray-400">
                    prev intern @ Hitachi Rails
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-3 text-xl text-gray-400">
                    <IconMail className="h-6 w-6" />
                    <a
                        href="mailto:ankush.sarkar2002@gmail.com"
                        className="hover:text-white transition-colors text-sm"
                    >
                        ankush.sarkar2002@gmail.com
                    </a>
                </div>
                <Button
                    variant="outline"
                    size="lg"
                    className="w-fit"
                    onClick={() =>
                        window.open("https://blog.ankushsarkar.dev/", "_blank")
                    }
                >
                    <IconArticle className="h-5 w-5" />
                    <span>Blog</span>
                </Button>
            </div>
        </div>
    );
}

function Work() {
    const projects = [
        {
            title: "Bill Splitting app",
            description:
                "A bill splitting app built with React Native and TypeScript.",
            link: "https://github.com/mac-capstone/Capstone-Project",
            picUrl: "/project/bill-splitting.png",
        },
        {
            title: "Habits Together",
            description:
                "A app for habit tracking with friends, built with React Native and TypeScript.",
            link: "https://habitstogether.app/",
            picUrl: "/project/habitstogether.jpeg",
        },
        {
            title: "Family Tree Visualizer",
            description: "A fullstack family tree Visualiser built using Nuxt JS, Supabase and d3-org-chart.",
            link: "https://familivistas.vercel.app",
            picUrl: "/project/famtree.png",
        },
        {
            title: "Audio Visualizer",
            description:
                "A 3D audio visualzer built using Three js and  Nuxt js.",
            link: "https://audio-visualizer-threejs.netlify.app/",
            picUrl: "/project/audioviz.png",
        },
        {
            title: "Multiplayer Tic Tac Toe",
            description:
                "An online multiplayer Tic Tac Toe, built using vue js and flask-socketio.",
            link: "https://vue-flask-tic-tac-toe.web.app/",
            picUrl: "/project/tictactoe.png",
        },
        {
            title: "Sorting Algorithm Visualizer",
            description:
                "A web app for visualizing various sorting algorithms. Built using Nuxt js and DaisyUi.",
            link: "https://sorting-algo-visualiser.netlify.app",
            picUrl: "/project/sortingalgovis.png",
        },
    ];

    return (
        <div className="flex flex-col h-full w-full gap-6 relative px-52 pt-24 pb-24 overflow-hidden">
            <h1 className="text-4xl font-momo-trust-display shrink-0">Work</h1>
            <div className="flex flex-row gap-8 h-full overflow-hidden">
                <div className="flex flex-col w-1/3 overflow-hidden">
                    <p className="text-xl font-normal text-gray-400">
                        I&apos;m Ankush Sarkar, a fifth-year Computer Science
                        student at McMaster University. I previously worked as a
                        software developer intern at Hitachi Rail, where I built
                        features for software for autonomous trains used by
                        train operators. <br /> <br /> I focus mainly on{" "}
                        <span className="font-bold">TypeScript</span> across
                        both web and mobile. I enjoy writing clean,
                        understandable code and tackling tricky technical
                        problems.
                    </p>
                </div>
                <div className="flex flex-col w-2/3 overflow-hidden">
                    <div className="grid grid-cols-2 gap-3 h-full overflow-hidden">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                picUrl={project.picUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ResumePage() {
    return (
        <div className="flex flex-col h-full w-full relative px-32 pt-8 pb-32 overflow-hidden">
            <div className="flex items-center justify-end mb-4 shrink-0">
                <Button
                    variant="ghost"
                    className="w-fit"
                    onClick={() =>
                        window.open(
                            "https://AnkushSarkar10.github.io/Resume/resume.pdf",
                            "_blank"
                        )
                    }
                >
                    <IconExternalLink className="w-full h-full" />
                </Button>
            </div>
            <div className="flex-1 overflow-hidden rounded-lg">
                <iframe
                    src="https://AnkushSarkar10.github.io/Resume/resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                    className="w-full h-full border-0"
                    title="Resume PDF Viewer"
                />
            </div>
        </div>
    );
}

function MacNavBar({
    onNavigate,
    activePage,
}: {
    onNavigate: (
        page: "home" | "work" | "resume",
        position: { x: number; y: number }
    ) => void;
    activePage: "home" | "work" | "resume";
}) {
    const getIconPosition = (
        title: string,
        event?: React.MouseEvent
    ): { x: number; y: number } => {
        // If we have a click event, use it to get the position
        if (event) {
            return {
                x: event.clientX,
                y: event.clientY,
            };
        }

        // Otherwise, try to find the icon in the DOM
        const dockElement = document.querySelector("[data-dock-container]");
        if (!dockElement) {
            // Fallback to center bottom if dock not found
            return {
                x: window.innerWidth / 2,
                y: window.innerHeight - 32,
            };
        }

        // Find the specific icon by title
        const icons = dockElement.querySelectorAll("a[data-icon-title]");

        for (let i = 0; i < icons.length; i++) {
            const icon = icons[i];
            const iconTitle = icon.getAttribute("data-icon-title");
            if (iconTitle === title) {
                const rect = icon.getBoundingClientRect();
                return {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                };
            }
        }

        // Fallback to center bottom
        return {
            x: window.innerWidth / 2,
            y: window.innerHeight - 32,
        };
    };

    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-gray-400" />,
            href: "#",
            isActive: activePage === "home",
            onClick: (event?: React.MouseEvent) => {
                const position = getIconPosition("Home", event);
                onNavigate("home", position);
            },
        },
        {
            title: "Work",
            icon: <IconTerminal2 className="h-full w-full text-gray-400" />,
            href: "#",
            isActive: activePage === "work",
            onClick: (event?: React.MouseEvent) => {
                const position = getIconPosition("Work", event);
                onNavigate("work", position);
            },
        },
        {
            title: "Resume",
            icon: <IconFileTypePdf className="h-full w-full text-gray-400" />,
            href: "#",
            isActive: activePage === "resume",
            onClick: (event?: React.MouseEvent) => {
                const position = getIconPosition("Resume", event);
                onNavigate("resume", position);
            },
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-gray-400" />,
            href: "https://github.com/AnkushSarkar10",
            onClick: () => {
                window.open("https://github.com/AnkushSarkar10", "_blank");
            },
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full text-gray-400" />,
            href: "https://www.linkedin.com/in/ankush-sarkar-a55a5b213/",
            onClick: () => {
                window.open(
                    "https://www.linkedin.com/in/ankush-sarkar-a55a5b213/",
                    "_blank"
                );
            },
        },
        {
            title: "X.com",
            icon: <IconBrandX className="h-full w-full text-gray-400" />,
            href: "https://x.com/Ankush_Sarkar_",
            onClick: () => {
                window.open("https://x.com/Ankush_Sarkar_", "_blank");
            },
        },
    ];
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <FloatingDock items={links} />
        </div>
    );
}
