'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Hero: React.FC = () => {
  // Social media links configuration array
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/raahimanowar",
      label: "GitHub Profile",
      icon: <FaGithub className="w-6 h-6" />
    },
    {
      href: "https://linkedin.com/in/raahimanowar",
      label: "LinkedIn Profile",
      icon: <FaLinkedin className="w-6 h-6" />
    },
    {
      href: "https://x.com/raahim_anowar",
      label: "X Profile",
      icon: <FaTwitter className="w-6 h-6" />
    },
    {
      href: "https://instagram.com/raahimanowar",
      label: "Instagram Profile",
      icon: <FaInstagram className="w-6 h-6" />
    }
  ];

  return (
    <main 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 bg-black"
      role="main"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Main hero section */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col items-center space-y-12">
            
            {/* Profile and greeting section */}
            <div className="flex items-center space-x-8">
              {/* Profile image */}
              <div className="relative flex-shrink-0">
                <img
                  src="/images/pp.jpg"
                  alt="Raahim Anowar"
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-gray-800"
                />
              </div>
              
              {/* Text content */}
              <div className="text-left">
                <h1 
                  id="hero-heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white"
                >
                  Hi, I'm <span className="text-white bg-gray-800 px-2 py-1 rounded">Raahim</span> 👋
                </h1>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-400 text-sm sm:text-base font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* Description section */}
            <section className="text-center max-w-3xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                Software Engineer actively building 
                <span className="text-white font-semibold"> AI engineering projects</span> and 
                <span className="text-white font-semibold"> robust backend systems</span>.
              </p>
            </section>

            {/* Social links */}
            <nav aria-label="Social media links" className="mt-8">
              <ul className="flex items-center justify-center space-x-6 sm:space-x-8">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a 
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
