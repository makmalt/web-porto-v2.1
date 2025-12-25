"use client";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@/src/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      path: "#home",
      text: "Home",
    },
    {
      path: "#education",
      text: "Education",
    },
    {
      path: "#projects",
      text: "Projects",
    },
    {
      path: "#skills",
      text: "Skills",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-5 left-0 z-50 w-full px-4">
      <nav className="text-main-foreground p-5 border-border shadow-shadow rounded-base bg-white font-base mx-auto flex w-full max-w-[1300px] gap-5 border-2 px-5 text-sm sm:text-base">
        <div className="relative mx-auto flex w-full items-center justify-between text-foreground">
          <a
            className="text-[22px] size-8 rounded-base flex bg-main text-main-foreground border-2 border-black items-center justify-center font-heading"
            href="/"
          >
            AK
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => {
              return (
                <a
                  key={link.path}
                  className={clsx(
                    "text-xl hover:-translate-y-1 hover:rotate-2 font-bold transition-transform"
                  )}
                  href={link.path}
                >
                  {link.text}
                </a>
              );
            })}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-yellow-400 text-black hover:bg-yellow-600"
              asChild
            >
              <a href="#footer" className="text-lg font-semibold">Get In Touch</a>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-2xl p-2 hover:bg-gray-100 rounded-base transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-[1300px]">
          <div className="bg-white border-2 border-border rounded-base shadow-shadow p-4">
            <div className="flex flex-col gap-4">
              {links.map((link) => {
                return (
                  <a
                    key={link.path}
                    className="text-lg font-bold hover:bg-gray-100 p-3 rounded-base transition-colors"
                    href={link.path}
                    onClick={closeMenu}
                  >
                    {link.text}
                  </a>
                );
              })}
              <Button
                className="bg-gray-700 text-white hover:bg-gray-600 w-full"
                asChild
              >
                <a href="/contact" onClick={closeMenu}>
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
