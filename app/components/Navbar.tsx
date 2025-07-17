import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 bg-black shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            RAAHIM
          </Link>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">
            PROJECTS
          </Link>
          <Link href="/experience" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">
            EXPERIENCE
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">
            CONTACT
          </Link>
          <Link 
            href="/resume" 
            className="bg-white text-black px-3 sm:px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm lg:text-base font-medium"
          >
            RESUME
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-gray-400 hover:text-white p-1 transition-colors"
            aria-label="Open mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
