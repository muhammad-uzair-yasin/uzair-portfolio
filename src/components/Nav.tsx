"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

interface NavProps {
openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
const navLinks = [
{ name: "Home", href: "home" },
{ name: "About", href: "about" },
{ name: "Skills", href: "skills" },
{ name: "Projects", href: "projects" },
{ name: "n8n", href: "n8n" },
{ name: "Certificates", href: "certificates" },
{ name: "Contact", href: "contact" },
];

const handleScroll = (id: string) => {
const section = document.getElementById(id);
if (section) {
section.scrollIntoView({ behavior: "smooth" });
}
};

return (
<nav className="fixed top-4 left-0 right-0 w-full z-50 flex justify-center px-4">
<div
className="w-full max-w-[1280px]
flex justify-between items-center
bg-[#0b0816]/50 backdrop-blur-xl border border-blue-700/40
rounded-2xl shadow-[0_0_25px_#3b82f630] px-4 sm:px-6 md:px-8 py-3"
>
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 shrink-0" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>
          <Image src="/images/logo.png" alt="Muhammad Uzair" width={56} height={56} className="rounded-lg object-contain" />
          <span className="text-[22px] sm:text-[25px] font-bold text-white tracking-wide hover:text-blue-400 transition hidden sm:inline">
            Muhammad Uzair
          </span>
        </Link>

{/* Desktop Links */}
<ul className="hidden md:flex items-center space-x-8">
{navLinks.map((link) => (
<li key={link.name}>
<button
onClick={() => handleScroll(link.href)}
className="text-gray-300 font-medium relative group"
>
{link.name}
<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-700 transition-all duration-300 group-hover:w-full" />
</button>
</li>
))}
</ul>

{/* Mobile Menu Button */}
<button
className="md:hidden text-blue-400 hover:text-blue-300 transition p-2"
onClick={openNav}
>
<Menu size={28} />
</button>
</div>
</nav>
);
};

export default Nav;
