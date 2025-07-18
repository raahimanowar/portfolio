'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavigationItem {
  href: string;
  label: string;
  isButton?: boolean;
}

const ResponsiveNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navigationItems: NavigationItem[] = [
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#contact', label: 'contact' },
    { href: '/resume', label: 'resume', isButton: true }
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-6 bg-black border-b border-gray-800" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition-colors duration-200 focus:outline-none"
            aria-label="Go to homepage"
          >
            RAAHIM
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            item.isButton ? (
              <Link
                key={item.href}
                href={item.href}
                className="btn-simple"
                aria-label="Download resume"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wide focus:outline-none"
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-gray-400 hover:text-white p-2 focus:outline-none transition-colors duration-200"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={handleMenuToggle}
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[84px] bg-black z-50 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
            {navigationItems.map((item) => (
              item.isButton ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="btn-simple px-8 py-3 text-base"
                  onClick={closeMenu}
                  aria-label="Download resume"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 px-4 py-3 text-xl uppercase tracking-wide focus:outline-none"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
