"use client";

import { useEffect, useState, type MouseEvent } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

const links = [
  { path: "#home", text: "Home" },
  { path: "#education", text: "Education" },
  { path: "#projects", text: "Projects" },
  { path: "#skills", text: "Skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = [...links.map(({ path }) => path.slice(1)), "footer"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    const id = path.slice(1);
    const target = document.getElementById(id);

    if (!target) return;
    setActiveSection(id);
    setIsOpen(false);
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    window.history.replaceState(null, "", path);
  };

  return (
    <div className="fixed top-5 left-0 z-50 w-full px-4" data-aos="fade-down">
      <nav className="text-main-foreground p-5 border-border shadow-shadow rounded-base bg-white font-base mx-auto flex w-full max-w-[1300px] gap-5 border-2 px-5 text-sm sm:text-base">
        <div className="relative mx-auto flex w-full items-center justify-between text-foreground">
          <Link
            className="text-2xl size-8 rounded-base flex bg-red-600 text-main-foreground border-2 border-black items-center justify-center font-heading px-12 py-5 transition-transform duration-200 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
            href="#home"
            onClick={(event) => navigateTo(event, "#home")}
          >
            Akmal
          </Link>

          <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => {
              const isActive = activeSection === link.path.slice(1);
              return (
                <motion.a
                  key={link.path}
                  className="relative isolate rounded-base px-4 py-2 text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-2"
                  href={link.path}
                  onClick={(event) => navigateTo(event, link.path)}
                  whileHover={reduceMotion ? undefined : { y: -3, rotate: 1.5 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute inset-0 -z-10 border-2 border-black bg-yellow-400 shadow-[3px_3px_0_#000]"
                      transition={{ type: "spring", stiffness: 430, damping: 32 }}
                    />
                  )}
                  {link.text}
                </motion.a>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-600" asChild>
              <motion.a
                href="#footer"
                className="text-xl font-bold"
                onClick={(event) => navigateTo(event, "#footer")}
                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              >
                Get In Touch
              </motion.a>
            </Button>
          </div>

          <motion.button
            className="lg:hidden text-2xl p-2 hover:bg-gray-100 rounded-base transition-colors"
            onClick={() => setIsOpen((open) => !open)}
            whileTap={reduceMotion ? undefined : { scale: 0.86, rotate: 6 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "menu"}
                className="block"
                initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.16 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden mt-2 mx-auto max-w-[1300px] origin-top"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scaleY: 0.92 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          >
            <div className="bg-white border-2 border-border rounded-base shadow-shadow p-4 overflow-hidden">
              <div className="flex flex-col gap-2">
                {links.map((link, index) => {
                  const isActive = activeSection === link.path.slice(1);
                  return (
                    <motion.a
                      key={link.path}
                      className={clsx(
                        "text-lg font-bold p-3 border-2 border-transparent transition-colors",
                        isActive ? "bg-yellow-400 border-black shadow-[3px_3px_0_#000]" : "hover:bg-gray-100",
                      )}
                      href={link.path}
                      onClick={(event) => navigateTo(event, link.path)}
                      initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduceMotion ? 0 : index * 0.045 }}
                      whileTap={reduceMotion ? undefined : { x: 4, scale: 0.98 }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.text}
                    </motion.a>
                  );
                })}
                <Button className="bg-yellow-400 text-black hover:bg-yellow-600 w-full mt-2" asChild>
                  <a href="#footer" onClick={(event) => navigateTo(event, "#footer")}>
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
