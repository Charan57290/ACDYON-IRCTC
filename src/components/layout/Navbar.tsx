import { useState } from 'react';
import { Train, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Train Search', href: '#' },
    { name: 'PNR Status', href: '#' },
    { name: 'Train Schedule', href: '#' },
    { name: 'Help', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-brand-600 p-2 rounded-lg">
              <Train className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-brand-900 tracking-tight">TrackSync</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-subtle hover:shadow-md">
              Book a Journey
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-700 hover:text-brand-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-white border-b border-brand-100 shadow-premium overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-brand-700 hover:text-brand-900 hover:bg-brand-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <button className="w-full bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-xl text-base font-semibold transition-all shadow-subtle">
              Book a Journey
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
