"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// Logo component with exact Figma specifications
function LogoComponent() {
  const logoSvg =
    "/Logo En.svg";

  return (
    <Link
      href="/"
      className="h-[48px] w-[106px] relative overflow-hidden shrink-0"
    >
      <div className="absolute inset-0">
        <img
          alt="Snow Logo"
          className="block max-w-none size-full object-contain"
          src={logoSvg}
        />
      </div>
    </Link>
  );
}

// Navigation links component with exact Figma specifications
function NavigationLinks() {
  const links = [
    { href: "/", label: "home", active: true },
    { href: "/about", label: "about", active: false },
    { href: "/services", label: "Our Services", active: false },
    { href: "/industries", label: "industries", active: false },
    { href: "/team", label: "Team", active: false },
  ];

  return (
    <nav className="flex items-center justify-center gap-[24px]">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center justify-center gap-[10px] capitalize font-medium text-[16px] leading-normal transition-colors hover:text-[#384d82] ${
            link.active ? "text-[#384d82]" : "text-[#6a7aa1]"
          }`}
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

// Main navbar component with exact Figma specifications
export function Navbar() {
  return (
    <header className="w-full bg-white border-b border-solid border-[#e1e4ec] relative">
      <div className="box-border flex items-center justify-between px-4 lg:px-[140px] py-[16px] relative w-full">
        <LogoComponent />
        <div className="hidden lg:flex">
          <NavigationLinks />
        </div>
        <div className="flex flex-col gap-[10px] items-start w-[122px] shrink-0">
          <Button
            className="w-full bg-[#44c5e2] hover:bg-[#44c5e2]/90 text-white border-0 rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
