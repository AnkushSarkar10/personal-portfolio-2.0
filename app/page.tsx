"use client";

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

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center max-w-screen overflow-x-hidden min-h-screen text-white bg-background relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[20px_20px] opacity-20"></div>
            <Spotlight />
            <div className="flex flex-col gap-8 relative z-50">
                <h1 className="text-7xl font-momo-trust-display">
                    Ankush Sarkar
                </h1>
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
                            window.open(
                                "https://blog.ankushsarkar.dev/",
                                "_blank"
                            )
                        }
                    >
                        <IconArticle className="h-5 w-5" />
                        <span>Blog</span>
                    </Button>
                </div>
            </div>
            <MacNavBar />
            <div className="fixed bottom-8 right-8 text-sm text-gray-600 z-40">
                ©️ 2025 Ankush Sarkar
            </div>
        </main>
    );
}

export function MacNavBar() {
    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-gray-400" />,
            href: "#",
            isActive: true,
        },
        {
            title: "Work",
            icon: <IconTerminal2 className="h-full w-full text-gray-400" />,
            href: "#",
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
