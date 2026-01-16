import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe, Search, ChevronDown, User } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Our Model', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Partnerships', path: '/partners' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-white">
      {/* Header - Udemy/Udacity Style: White, Shadow, Functional */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 gap-4 md:gap-8">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
              <div className="bg-brand-primary text-white p-1.5 rounded group-hover:bg-blue-700 transition-colors">
                <Heart size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-brand-dark tracking-tight leading-none">HEART</span>
              </div>
            </Link>

            {/* Desktop Categories / Nav */}
            <div className="hidden md:flex items-center gap-6 flex-1">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-primary cursor-pointer">
                <span>Categories</span>
                <ChevronDown size={14} />
              </div>

              {/* Search Bar - EdTech Standard */}
              <div className="flex-1 max-w-lg relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="What do you want to learn or fund?" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
                />
              </div>

              {/* Links */}
              <nav className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                      isActive(item.path) ? 'text-brand-primary' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Auth / CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/contact" className="text-sm font-bold text-gray-700 hover:text-brand-primary px-3 py-2">
                Log in
              </Link>
              <Link
                to="/contact"
                className="bg-brand-dark text-white px-4 py-2.5 rounded font-bold text-sm hover:bg-gray-800 transition-all border border-transparent"
              >
                Partner With Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
            <div className="px-4 py-6 space-y-4">
               {/* Mobile Search */}
               <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-lg text-sm"
                />
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-brand-primary text-white px-4 py-3.5 rounded-lg font-bold shadow-sm"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Udacity Style Dark */}
      <footer className="bg-[#2d3748] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Heart className="text-white fill-current" size={28} />
                <span className="text-2xl font-bold">HEART</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 A specialized alliance transforming nursing education in Nigeria through resource collaboration and digital innovation.
              </p>
              <div className="flex items-center gap-4">
                 {/* Social Placeholders */}
                 <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary cursor-pointer transition-colors"><Globe size={16}/></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Initiative</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Consortium Partners</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Programs</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link to="/programs" className="hover:text-white transition-colors">Apprenticeships</Link></li>
                <li><Link to="/programs" className="hover:text-white transition-colors">Financing</Link></li>
                <li><Link to="/programs" className="hover:text-white transition-colors">Curriculum Digitalisation</Link></li>
                <li><Link to="/programs" className="hover:text-white transition-colors">Skills Export</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link to="/contact" className="hover:text-white transition-colors">Partnership Inquiry</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/admin" className="hover:text-white transition-colors">Staff Login</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} HEART Initiative. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built for Nigeria's Workforce.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};