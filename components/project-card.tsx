"use client";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    picUrl: string;
}

export default function ProjectCard({
    title,
    description,
    link,
    picUrl,
}: ProjectCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-xs w-full group/card"
        >
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-52 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-cover bg-center"
                )}
                style={{ backgroundImage: `url(${picUrl})` }}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="text content relative z-10 mt-auto">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {title}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
}
