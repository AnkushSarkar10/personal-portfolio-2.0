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
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import ProjectCard from "@/components/project-card";
import ColourfulText from "@/components/ui/colourful-text";

export default function Home() {
    const [activePage, setActivePage] = useState<"home" | "work">("home");

    return (
        <main className="flex flex-col w-screen h-screen overflow-hidden text-white bg-background relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[20px_20px] opacity-20"></div>
            <Spotlight />
            {activePage === "home" ? <LandingPage /> : <Work />}
            <MacNavBar onNavigate={setActivePage} activePage={activePage} />
            <div className="fixed bottom-8 right-8 text-sm text-gray-600 z-40">
                ©️ 2025 Ankush Sarkar
            </div>
        </main>
    );
}

function LandingPage() {
    return (
        <div className="flex flex-col h-screen items-center justify-center gap-8 relative z-50">
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
            title: "Project 1",
            description: "A description of project 1",
            link: "https://example.com",
            picUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        },
        {
            title: "Project 2",
            description: "A description of project 2",
            link: "https://example.com",
            picUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        },
        {
            title: "Project 3",
            description: "A description of project 3",
            link: "https://example.com",
            picUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        },
        {
            title: "Project 4",
            description: "A description of project 4",
            link: "https://example.com",
            picUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        },
        {
            title: "Project 5",
            description: "A description of project 5",
            link: "https://example.com",
            picUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        },
        {
            title: "Project 6",
            description: "A description of project 6",
            link: "https://example.com",
            picUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        },
    ];

    return (
        <div className="flex flex-col h-full w-full gap-6 relative px-52 pt-24 pb-24 z-50 overflow-hidden">
            <h1 className="text-4xl font-momo-trust-display shrink-0">Work</h1>
            <div className="flex flex-row gap-8 h-full overflow-hidden">
                <div className="flex flex-col w-1/3 overflow-hidden">
                    <p className="text-xl font-normal text-gray-400">
                        I&apos;m Ankush Sarkar, a fifth-year Computer Science
                        student at McMaster University. I previously worked as a
                        software developer intern at Hitachi Rail, where I built
                        features for software for autonomous trains used by
                        train operators. <br/> I focus mainly on{" "} 
                        <ColourfulText text="TypeScript" /> across both web and
                        mobile. I enjoy writing clean, understandable code and
                        tackling tricky technical problems.
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

function MacNavBar({
    onNavigate,
    activePage,
}: {
    onNavigate: (page: "home" | "work") => void;
    activePage: "home" | "work";
}) {
    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-gray-400" />,
            href: "#",
            isActive: activePage === "home",
            onClick: () => onNavigate("home"),
        },
        {
            title: "Work",
            icon: <IconTerminal2 className="h-full w-full text-gray-400" />,
            href: "#",
            isActive: activePage === "work",
            onClick: () => onNavigate("work"),
        },
        {
            title: "Resume",
            icon: <IconFileTypePdf className="h-full w-full text-gray-400" />,
            href: "#",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-gray-400" />,
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full text-gray-400" />,
            href: "#",
        },
        {
            title: "X.com",
            icon: <IconBrandX className="h-full w-full text-gray-400" />,
            href: "#",
        },
    ];
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <FloatingDock items={links} />
        </div>
    );
}
