"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Expertise", "Projects", "Experience", "Skills", "Contact"];

function scrollToSection(section: string) {
  document
    .getElementById(section.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-[1.5px] border-[#151515] bg-[#f7f3ea]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <button
          onClick={() => scrollToSection("Home")}
          className="flex items-center gap-3"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-[#151515] bg-[#ff6b35] font-black">
            TA
          </span>

          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black uppercase tracking-[0.28em]">
              Tuan Ta Anh
            </span>
            <span className="block text-xs font-medium text-[#6b645c]">
              AI Engineer Portfolio
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border-[1.5px] border-[#151515] bg-[#fffdf7] p-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="rounded-full px-4 py-2 text-sm font-bold text-[#151515] transition hover:bg-[#151515] hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href="mailto:anhtuan19981998@gmail.com"
          className="hidden rounded-full border-[1.5px] border-[#151515] bg-[#2454ff] px-4 py-2 text-sm font-black text-white transition hover:bg-[#151515] md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-xl border-[1.5px] border-[#151515] bg-[#fffdf7] p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t-[1.5px] border-[#151515] bg-[#f7f3ea] px-5 py-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setMobileOpen(false);
              }}
              className="block w-full rounded-xl px-4 py-3 text-left font-bold hover:bg-[#fffdf7]"
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}