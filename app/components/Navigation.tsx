// app/components/Navigation.tsx
"use client";

import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* No Socks Agency Logo */}
            <div className="flex items-center">
              <a href="/" className="text-3xl font-bold tracking-tighter text-gray-100 hover:text-blue-500 transition-colors duration-200">
                no<span className="text-blue-500">.</span>socks
              </a>
            </div>
            
            {/* Agency Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-8">
              <a href="/who" className="text-gray-400 font-semibold text-lg px-6 py-3 rounded-lg hover:text-gray-100 hover:bg-gray-700 transition-all duration-200">
                Who
              </a>
              <a href="/what" className="text-gray-400 font-semibold text-lg px-6 py-3 rounded-lg hover:text-gray-100 hover:bg-gray-700 transition-all duration-200">
                What
              </a>
              <a href="/connect" className="brand-button ml-6 text-lg px-6 py-3">
                Connect
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-gray-400 hover:text-gray-100 transition-colors p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separate element to avoid hydration issues */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-600 shadow-lg fixed top-20 left-0 right-0 z-40 animate-slideDown">
          <div className="container mx-auto px-6 py-6 space-y-3">
            <a 
              href="/who" 
              className="block w-full text-left text-gray-300 font-semibold text-lg px-6 py-4 rounded-lg hover:text-gray-100 hover:bg-gray-700 transition-all duration-200 border border-transparent hover:border-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who
            </a>
            <a 
              href="/what" 
              className="block w-full text-left text-gray-300 font-semibold text-lg px-6 py-4 rounded-lg hover:text-gray-100 hover:bg-gray-700 transition-all duration-200 border border-transparent hover:border-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              What
            </a>
            <a 
              href="/connect" 
              className="block w-full text-center brand-button text-lg px-6 py-4 mt-6 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect
            </a>
          </div>
        </div>
      )}

      {/* Backdrop to close menu when clicking outside */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}