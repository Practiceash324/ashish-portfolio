import React from 'react';
import { ArrowUp, Award, Mail, MapPin, Heart, Sparkles, TrendingUp, BarChart3 } from 'lucide-react';
import { NavPage, UserJourney } from '../types';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#08080E] py-14 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center font-display font-extrabold text-white text-sm shadow-md">
                AM
              </div>
              <div>
                <div className="font-display font-bold text-base text-white">
                  Ashish Mishra
                </div>
                <p className="text-xs text-violet-300">
                  Performance Marketer &amp; Tracking Architect
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Helping direct-to-consumer e-commerce brands and B2B companies scale profitably through intent-driven paid media, dynamic creative testing, and resilient server-side telemetry.
            </p>

            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>4+ Years Growth Experience &bull; ₹5Cr+ Ad Spend Managed</span>
            </div>
          </div>

          {/* Core Pages Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Services &amp; Solutions
            </div>
            <div className="flex flex-col space-y-2">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-white transition-colors cursor-pointer">
                Home Portfolio
              </button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-white transition-colors cursor-pointer">
                About &amp; Operating Philosophy
              </button>
              <button onClick={() => onNavigate('performance-marketing')} className="text-left hover:text-white transition-colors cursor-pointer">
                Paid Media (Meta &amp; Google Ads)
              </button>
              <button onClick={() => onNavigate('services')} className="text-left hover:text-white transition-colors cursor-pointer">
                Client Service Packages
              </button>
              <button onClick={() => onNavigate('tracking')} className="text-left hover:text-white transition-colors cursor-pointer">
                Server-Side Tracking &amp; sGTM
              </button>
              <button onClick={() => onNavigate('work')} className="text-left hover:text-white transition-colors cursor-pointer">
                Client Case Studies
              </button>
            </div>
          </div>

          {/* Resources & Content */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Knowledge
            </div>
            <div className="flex flex-col space-y-2">
              <button onClick={() => onNavigate('insights')} className="text-left hover:text-white transition-colors cursor-pointer">
                Growth Insights &amp; Articles
              </button>
              <button onClick={() => onNavigate('work')} className="text-left hover:text-white transition-colors cursor-pointer">
                Attribution Case Studies
              </button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-white transition-colors cursor-pointer">
                Request an Account Audit
              </button>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Work with Ashish
            </div>
            <p className="text-xs text-slate-400">
              Ready to eliminate ghost conversions, cut wasted ad spend, or scale your profitable customer acquisition?
            </p>
            <div className="pt-1">
              <button
                onClick={() => onOpenContact('work', 'Footer Consultation Request')}
                className="w-full py-2.5 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Start a Project Inquiry</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
              <Mail className="w-3.5 h-3.5 text-violet-400" /> ashmanagerid@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Ashish Mishra &bull; Performance Marketer &amp; Tracking Architect. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
