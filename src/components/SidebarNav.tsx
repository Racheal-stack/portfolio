"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

export default function SidebarNav() {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-28 hidden w-48 shrink-0 lg:block">
      <ul className="space-y-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`block rounded-full px-4 py-2.5 text-sm transition ${
                active === link.href
                  ? "bg-[#6ea8fe]/15 font-medium text-[#6ea8fe]"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
