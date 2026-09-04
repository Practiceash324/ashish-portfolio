import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Award, ChevronRight, TrendingUp, BarChart3, Layers, ShieldCheck, Mail } from 'lucide-react';
import { NavPage, UserJourney } from '../types';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: NavPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Paid Media', page: 'performance-marketing' },
    { label: 'Services', page: 'services' },
    { label: 'Tracking & Telemetry', page: 'tracking' },
    { label: 'Case Studies', page: 'work' },
    { label: 'Insights', page: 'insights' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0B14]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5' 
          : 'bg-[#0B0B14]/80 backdrop-blur-md py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center text-white font-extrabold font-display text-base shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform">
              AM
            </div>
            <div>
              <div className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center gap-1.5">
                <span>Ashish Mishra</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Performance Marketer &bull; Paid Media &amp; Tracking
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#141424]/90 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  currentPage === item.page
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContact('work', 'Paid Media & Tracking Inquiry')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-md shadow-violet-900/40 transition-all hover:scale-105 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Ashish</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0B0B14]/98 backdrop-blur-2xl border-b border-white/10 p-5 shadow-2xl animate-in slide-in-from-top-5 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 text-left">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === item.page
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  onOpenContact('work', 'Direct Project Inquiry');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Work With Ashish</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
