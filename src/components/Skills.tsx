"use client";
import { useEffect, useState } from "react";
import PixelTransition from "./animate/PixelTransition";
import { Icon } from "@iconify/react";
const iconMap: iconMapType = {
    Laravel: <Icon icon="logos:laravel" color="#FF2D20" className="w-20 h-20" />,
    React: <Icon icon="logos:react" color="#61DAFB" className="w-20 h-20" />,
    ".NET": <Icon icon="logos:dotnet" color="#512BD4" className="w-20 h-20" />,
    MySQL: <Icon icon="logos:mysql" color="#4479A1" className="w-20 h-20" />,
    Bootstrap: (
        <Icon icon="logos:bootstrap" color="#7952B3" className="w-20 h-20" />
    ),
    Astro: <Icon icon="logos:astro-icon" color="#000000" className="w-20 h-20" />,
    Alpine: (
        <Icon icon="logos:alpinejs-icon" color="#000000" className="w-20 h-20" />
    ),
    SqlServer: (
        <Icon icon="logos:microsoft-icon" color="#000000" className="w-20 h-20" />
    ),
    Flutter: <Icon icon="logos:flutter" color="#000000" className="w-20 h-20" />,
    Kotlin: (
        <Icon icon="logos:kotlin-icon" color="#000000" className="w-20 h-20" />
    ),
    Firebase: (
        <Icon icon="logos:firebase-icon" color="#000000" className="w-20 h-20" />
    ),
    Next: <Icon icon="logos:nextjs-icon" color="#000000" className="w-20 h-20" />,
    Tailwind: (
        <Icon icon="logos:tailwindcss-icon" color="#000000" className="w-20 h-20" />
    ),
};

type Skill = {
    id: number;
    name: string;
    title: string;
};

type iconMapType = {
    [key: string]: React.ReactNode;
};
const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch("/skills.json");
                const dataSkill = await response.json();
                console.log(dataSkill);
                setSkills(dataSkill);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };

        fetchSkills();
    }, []);
    return (
        <>
            <div className="mt-10 flex flex-col">
                <div className="mb-12 text-center">
                    <div
                        className="inline-block bg-red-500 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-3 mb-4 transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-300 p-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-black">
                            Skills
                        </h2>
                    </div>
                </div>
                <div className="grid gap-10 mx-auto px-10
                    grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4
                     max-w-7xl">
                    {/* Skill Items */}
                    {skills.map((skill: Skill) => (
                        <PixelTransition
                            key={skill.id}
                            aspectRatio="100%" 
                            firstContent={
                                <div className="flex items-center justify-center h-full w-full">
                                    {iconMap[skill.name] || null}
                                </div>
                            }
                            secondContent={
                                <div className="flex items-center justify-center text-center h-full w-full p-4">
                                    <h3 className="text-2xl font-bold">{skill.title}</h3>
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
