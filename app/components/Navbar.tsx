'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoColor = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20 min-h-14">
          {/* Logo: Symbol auf Mobile, voller Schriftszug auf Desktop */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className={`font-bold transition-colors flex items-center gap-1.5 ${logoColor}`}
              aria-label="Handwerker – Startseite"
            >
              {/* Mobile: Winkel/Schraubenschlüssel-Symbol (Handwerker-Icon) */}
              <span className={`md:hidden flex items-center justify-center w-10 h-10 rounded-lg ${isScrolled ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-white/10 border border-white/20'}`}>
                <svg
                  className={`w-6 h-6 ${logoColor}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              {/* Desktop: voller Schriftszug */}
              <span className="hidden md:flex items-center text-2xl">
                HANDWERKER
                <span className="ml-2 w-2 h-2 rounded-full bg-orange-500" />
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block ml-20">
            <div className="flex items-baseline space-x-8">
              <a
                href="#start"
                className={`px-3 py-2 text-base font-semibold transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Start
              </a>
              <a
                href="#leistungen"
                className={`px-3 py-2 text-base font-semibold transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Leistungen
              </a>
              <a
                href="#ueber-uns"
                className={`px-3 py-2 text-base font-semibold transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Über uns
              </a>
              <a
                href="#projekte"
                className={`px-3 py-2 text-base font-semibold transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Projekte
              </a>
              <a
                href="#kontakt"
                className={`px-3 py-2 text-base font-semibold transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#start"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Start
              </a>
              <a
                href="#leistungen"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Leistungen
              </a>
              <a
                href="#ueber-uns"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </a>
              <a
                href="#projekte"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projekte
              </a>
              <a
                href="#kontakt"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

