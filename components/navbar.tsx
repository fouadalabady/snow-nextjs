"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";

// Logo component with exact Figma specifications
function LogoComponent() {
  const logoSvg = "/Logo En.svg";

  return (
    <Link
      href="/"
      className="h-[40px] w-[88px] md:h-[48px] md:w-[106px] relative overflow-hidden shrink-0"
    >
      <div className="absolute inset-0">
        <Image
          alt="Snow Logo"
          className="block max-w-none size-full object-contain"
          src={logoSvg}
          fill
          sizes="(max-width: 768px) 88px, 106px"
        />
      </div>
    </Link>
  );
}

// Hamburger menu icon component
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span
        className={`block h-0.5 w-6 bg-snow-secondary transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-1" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-snow-secondary transition-all duration-300 mt-1 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-snow-secondary transition-all duration-300 mt-1 ${
          isOpen ? "-rotate-45 -translate-y-1" : ""
        }`}
      />
    </div>
  );
}

// Navigation links component with responsive design
function NavigationLinks({ 
  isMobile = false, 
  onLinkClick 
}: { 
  isMobile?: boolean; 
  onLinkClick?: () => void; 
}) {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/services", label: "Our Services" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClasses = isMobile
    ? "block py-3 px-4 capitalize font-medium text-[16px] leading-normal transition-colors hover:text-snow-secondary hover:bg-gray-50 rounded-lg"
    : "flex items-center justify-center gap-[10px] capitalize font-medium text-[16px] leading-normal transition-colors hover:text-snow-secondary";

  const containerClasses = isMobile
    ? "flex flex-col space-y-2"
    : "flex items-center justify-center gap-[24px]";

  return (
    <nav className={containerClasses}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={`${linkClasses} ${
              isActive ? "text-snow-secondary" : "text-[#6a7aa1]"
            }`}
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

// Mobile menu overlay component
function MobileMenu({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-snow-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h2 
                className="text-lg font-semibold text-snow-secondary"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                Navigation
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 p-4 overflow-y-auto">
            <NavigationLinks isMobile onLinkClick={onClose} />
            
            {/* Additional mobile-only links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 
                className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-snow-secondary hover:bg-gray-50 rounded-lg transition-colors"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Link>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-snow-secondary hover:bg-gray-50 rounded-lg transition-colors"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
          
          {/* Contact Button */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <Button
              onClick={onClose}
              className="w-full bg-snow-primary hover:bg-snow-primary/90 text-white border-0 rounded-[8px] px-[16px] py-[12px] h-auto font-medium text-[16px] leading-normal shadow-lg"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

// Main navbar component with responsive design
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on window resize to desktop size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-white/95 backdrop-blur-sm border-b border-solid border-[#e1e4ec] sticky top-0 z-30">
        <div className="container-section box-border flex items-center justify-between py-[12px] md:py-[16px] relative">
          {/* Logo */}
          <LogoComponent />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationLinks />
          </div>
          
          {/* Desktop Contact Button */}
          <div className="hidden md:flex flex-col gap-[10px] items-start w-[100px] lg:w-[122px] shrink-0">
            <Button
              className="w-full bg-snow-primary hover:bg-snow-primary/90 text-white border-0 rounded-[8px] px-[12px] lg:px-[16px] py-[8px] h-auto font-medium text-[14px] lg:text-[16px] leading-normal transition-all duration-200"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact Us
            </Button>
          </div>
          
          {/* Mobile Contact Button (Tablet) */}
          <div className="hidden sm:flex md:hidden">
            <Button
              size="sm"
              className="bg-snow-primary hover:bg-snow-primary/90 text-white border-0 rounded-[6px] px-[12px] py-[6px] h-auto font-medium text-[14px] leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-snow-primary focus:ring-opacity-50"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
