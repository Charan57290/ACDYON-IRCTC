import { useState, useEffect } from 'react';
import { Train, Menu, X, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { AuthModal } from '../auth/AuthModal';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Train Search', to: '/#search' },
    { name: 'PNR Status', to: '/pnr-status' },
    { name: 'Train Schedule', to: '/schedule' },
    { name: 'Help', to: '/help' },
  ];

  // Handle scrolling when hash changes or on navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookClick = () => {
    navigate('/#search');
    setIsMobileMenuOpen(false);
  };

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
              <Link
                key={link.name}
                to={link.to}
                onClick={handleNavClick}
                className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 text-brand-700 hover:text-brand-900 font-semibold text-sm transition-colors"
              >
                <User className="w-4 h-4" />
                Login
              </button>
              <button 
                onClick={handleBookClick}
                className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-subtle hover:shadow-md"
              >
                Book a Journey
              </button>
            </div>
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
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={handleNavClick}
              className="block px-3 py-3 text-base font-medium text-brand-700 hover:text-brand-900 hover:bg-brand-50 rounded-md cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3 space-y-3">
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full flex justify-center items-center gap-2 border-2 border-brand-100 hover:bg-brand-50 text-brand-700 px-5 py-3 rounded-xl text-base font-semibold transition-all"
            >
              <User className="w-5 h-5" />
              Login / Sign Up
            </button>
            <button 
              onClick={handleBookClick}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-xl text-base font-semibold transition-all shadow-subtle"
            >
              Book a Journey
            </button>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
}
