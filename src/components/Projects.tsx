"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  linkDemo: string;
  link: string;
  techstack: Techstack[];
};

type Techstack = {
  id: number;
  name: string;
}

type iconMapType = {
  [key: string]: React.ReactNode;
};
import { Icon } from "@iconify/react";

const iconMap1: iconMapType = {
  React: (
    <span title="React">
      <Icon icon="logos:react" className="w-11 h-11" />
    </span>
  ),
  Laravel: (
    <span title="Laravel">
      <Icon icon="logos:laravel" className="w-11 h-11" />
    </span>
  ),
  ".NET": (
    <span title=".NET">
      <Icon icon="logos:dotnet" className="w-11 h-11" />
    </span>
  ),
  Tailwind: (
    <span title="Tailwind CSS">
      <Icon icon="logos:tailwindcss-icon" className="w-11 h-11" />
    </span>
  ),
  MySQL: (
    <span title="MySQL">
      <Icon icon="logos:mysql" className="w-11 h-11" />
    </span>
  ),
  Bootstrap: (
    <span title="Bootstrap">
      <Icon icon="logos:bootstrap" className="w-11 h-11" />
    </span>
  ),
  Astro: (
    <span title="Astro.JS">
      <Icon icon="logos:astro-icon" className="w-11 h-11" />
    </span>
  ),
  Alpine: (
    <span title="Alpine.JS">
      <Icon
        icon="logos:alpinejs-icon"
        className="w-11 h-11"
      />
    </span>
  ),
  SqlServer: (
    <span title="SQL Server">
      <Icon icon="logos:microsoft-icon" className="w-11 h-11" />
    </span>
  ),
  Flutter: (
    <span title="Flutter">
      <Icon icon="logos:flutter" className="w-11 h-11" />
    </span>
  ),
  Kotlin: (
    <span title="Kotlin">
      <Icon icon="logos:kotlin-icon" className="w-11 h-11" />
    </span>
  ),
  Firebase: (
    <span title="Firebase">
      <Icon icon="logos:firebase-icon" className="w-11 h-11" />
    </span>
  ),
  Next: (
    <span title="NextJS">
      <Icon icon="logos:nextjs-icon" className="w-11 h-11" />
    </span>
  ),
};
const iconMap2: iconMapType = {
  React: <Icon icon="logos:react" className="w-8 h-8" />,
  Laravel: <Icon icon="logos:laravel" className="w-8 h-8" />,
  ".NET": <Icon icon="logos:dotnet" className="w-8 h-8" />,
  Tailwind: <Icon icon="logos:tailwindcss-icon" className="w-8 h-8" />,
  MySQL: <Icon icon="logos:mysql" className="w-8 h-8" />,
  Bootstrap: <Icon icon="logos:bootstrap" className="w-8 h-8" />,
  Alpine: <Icon icon="logos:alpinejs-icon" className="w-8 h-8" />,
  Astro: <Icon icon="logos:astro-icon" className="w-8 h-8" />,
  SqlServer: <Icon icon="logos:microsoft-icon" className="w-8 h-8" />,
  Flutter: <Icon icon="logos:flutter" className="w-8 h-8" />,
  Kotlin: <Icon icon="logos:kotlin-icon" className="w-8 h-8" />,
  Firebase: <Icon icon="logos:firebase-icon" className="w-8 h-8" />,
  Next: <Icon icon="logos:nextjs-icon" className="w-8 h-8" />,
};

const Projects = ({ id }: { id?: string }) => {
  const [projects, setProject] = useState<Project[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProject(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      <div id={id} className="flex flex-col">
        <div className="mb-12 text-center">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-3 mb-4 rotate-3 transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-300 p-6">
            <h2 className="text-4xl md:text-5xl font-black text-black">
              Projects I've Done
            </h2>
          </div>
        </div>
        <div
          className="grid gap-10 mx-auto px-10
                    grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card key={project.id} className="h-148 bg-white transition-all duration-300 hover:scale-105 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
              <div className="flex flex-col gap-4 h-full">
                <Image src={project.image} className="h-64 border-b" alt={project.title} width={500} height={96} />

                <p className="mx-2 text-justify text-lg font-bold">
                  {project.title}
                </p>
                <p className="mx-2 text-justify">
                  {project.description}
                </p>
                {/*layar desktop */}
                <div className="hidden lg:block">
                  <div className="flex justify-start gap-2 ms-2">
                    {project.techstack.map((tech: Techstack) => (
                      <div key={`desktop-${tech.id}`}>{iconMap1[tech.name]}</div>
                    ))}
                  </div>
                </div>

                {/* layar mobile */}
                <div className="block lg:hidden">
                  <div className="flex justify-start gap-2 ms-2">
                    {project.techstack.map((tech: Techstack) => (
                      <div key={`mobile-${tech.id}`}>{iconMap2[tech.name]}</div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-2 me-2 mt-auto">
                  <Button
                    className="w-1/3"
                    variant="neutral"
                    disabled={!project.linkDemo}
                    asChild={!!project.linkDemo}
                  >
                    {project.linkDemo ? (
                      <a
                        href={project.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      <span>View</span>
                    )}
                  </Button>

                  <Button disabled={!project.link} asChild={!!project.link} className="w-1/3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link Repo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
export default Projects;
