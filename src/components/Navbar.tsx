"use client";

import { useEffect, useState } from "react";
import { headerLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080c14]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="#" className="text-lg font-semibold text-white">
          {personalInfo.initials}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {headerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#6ea8fe] px-5 py-2.5 text-sm font-medium text-[#080c14] transition hover:bg-[#8bb8ff] md:inline-flex"
        >
          Contacts
          <span aria-hidden>→</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-0.5 w-6 bg-slate-300 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-300 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-300 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080c14]/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block text-slate-300" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#6ea8fe] px-5 py-2.5 text-sm font-medium text-[#080c14]"
                onClick={() => setMenuOpen(false)}
              >
                Contacts →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
