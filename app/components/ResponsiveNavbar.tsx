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
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-6 glass-surface relative z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-white tracking-wider hover:text-red-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-sm"
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
                className="btn-primary focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Download resume"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-300 hover:text-red-400 transition-colors duration-300 text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-red-400 rounded-sm"
              >
                {item.label}
              </button>
            )
          ))}
          
          {/* Theme toggle button */}
          <button 
            className="text-slate-400 hover:text-red-400 transition-colors duration-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg"
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
            className="text-slate-400 hover:text-red-400 p-2 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg transition-colors duration-300"
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
        <div className="md:hidden fixed inset-0 top-[84px] glass z-50 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
            {navigationItems.map((item) => (
              item.isButton ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="btn-primary px-8 py-3 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  onClick={closeMenu}
                  aria-label="Download resume"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-300 hover:text-red-400 transition-colors duration-300 px-4 py-3 text-xl uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-red-400 rounded-sm"
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
