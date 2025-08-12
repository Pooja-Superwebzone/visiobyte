'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SvgImages } from './SVG/SvgImages';
import HeaderUL from './uiCompontents/HeaderUl';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0  bg-white/95 backdrop-blur-md z-[99999999]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <SvgImages imageName='logo' />
              <SvgImages imageName='logoTextOnly' />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <HeaderUL />
          </nav>
       <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="#demo"
            className="inline-flex items-center justify-center
                      px-4 py-1.5
                      bg-[#9331F4] text-white 
                      font-inter font-medium text-[18px] leading-[28px] tracking-[-0.02em]
                      rounded-[16px] shadow-md
                      hover:shadow-lg hover:brightness-110 
                      focus:outline-none focus:ring-2 focus:ring-[#9331F4]/50 
                      transition-all duration-300 ease-out"
          >
            Contact
          </Link>

        </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#solutions"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  href="#demo"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
