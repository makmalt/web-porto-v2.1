"use client";
import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiAward } from "react-icons/fi";
import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { useEffect, useState } from "react";

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FiBookOpen: FiBookOpen,
  FiCode: FiCode,
  FiAward: FiAward,
  FaUserGraduate: FaUserGraduate,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

type Milestone = {
  id: string | number;
  year: string;
  title: string;
  place: string;
  description: string;
  icon: keyof typeof iconMap;
};


function Dot({ Icon }: { Icon: React.ComponentType<{ className?: string; color?: string }> }) {
  return (
    <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center bg-main border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <Icon className="h-6 w-6" color="black" />
    </div>
  );
}

function Card({ year, title, place, description }: { year: string; title: string; place?: string; description: string }) {
  return (
    <div className="ml-6 w-full">
      <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
        <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
          <span className="bg-red-500 text-white px-3 py-1 font-bold border-2 border-black">
            {year}
          </span>
          {place && (
            <span className="bg-yellow-400 text-black px-3 py-1 font-bold border-2 border-black">
              {place}
            </span>
          )}
        </div>
        <h3 className="text-xl font-black leading-tight text-black mb-2">
          {title}
        </h3>
        <p className="text-black font-medium">{description}</p>
      </div>
    </div>
  );
}

export default function Milestones({ id }: { id?: string }) {
  const [milestones, setMilestones] = useState([]);
  useEffect(() => {
    // Fetching data from an API or local JSON
    const fetchMilestones = async () => {
      const response = await fetch("/milestone.json");
      const data = await response.json();
      setMilestones(data);
      console.log(data);
    };

    fetchMilestones();
  }, []);

  return (
    <section id={id} className="max-w-full mx-auto md:max-w-4xl px-4 py-12" data-aos="zoom-in">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-main border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-3 mb-4 -rotate-2 transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-300 p-6">
          <h2 className="text-4xl md:text-5xl font-black text-black">
            My Journey
          </h2>
        </div>
        <p className="text-xl font-bold text-black mt-4">
          A quick timeline of how I got here.
        </p>
      </div>

      {/* Timeline */}
      <motion.ol
        variants={container}
        initial="hidden"
        animate="show"
        className="relative grid gap-6"
      >
        <div className="pointer-events-none absolute left-6 top-0 h-full w-1 bg-black" />

        {milestones.map((m: Milestone, index) => {
          const Icon = iconMap[m.icon] || FiBookOpen;
          return (
            <motion.li
              key={m.id}
              className="relative flex items-start"
              style={{
                rotate: index % 2 === 0 ? -1 : 1,
              }}
            >
              <div className="mr-4 shrink-0">
                <Dot Icon={Icon} />
              </div>
              <Card
                year={m.year}
                title={m.title}
                place={m.place}
                description={m.description}
              />
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}
