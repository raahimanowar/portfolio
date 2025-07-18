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
    { href: '#projects', label: 'projects' },
    { href: '#experience', label: 'experience' },
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
            className="text-xl sm:text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
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
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Download resume"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
              >
                {item.label}
              </button>
            )
          ))}
          
          {/* Theme toggle button */}
          <button 
            className="text-gray-300 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
            aria-label="Toggle dark/light theme"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-gray-400 hover:text-white p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
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
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            {navigationItems.map((item) => (
              item.isButton ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-base uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
                  onClick={closeMenu}
                  aria-label="Download resume"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-400 hover:text-white transition-colors px-2 py-3 text-lg uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
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
