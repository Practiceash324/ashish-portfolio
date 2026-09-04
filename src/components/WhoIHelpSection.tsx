import React from 'react';
import { 
  GraduationCap, 
  Home, 
  Rocket, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Users,
  Compass
} from 'lucide-react';
import { WHO_I_HELP_PATHS } from '../data/portfolioData';
import { NavPage, UserJourney } from '../types';

interface WhoIHelpSectionProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const WhoIHelpSection: React.FC<WhoIHelpSectionProps> = ({ onNavigate, onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-violet-400" />;
      case 'Home':
        return <Home className="w-5 h-5 text-amber-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-blue-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Users className="w-5 h-5 text-violet-400" />;
    }
  };

  const getBorderColor = (id: string) => {
    switch (id) {
      case 'learn-marketing':
        return 'hover:border-violet-500/50 hover:shadow-violet-500/10';
      case 'learn-for-yourself':
        return 'hover:border-amber-500/50 hover:shadow-amber-500/10';
      case 'grow-business':
        return 'hover:border-blue-500/50 hover:shadow-blue-500/10';
      case 'improve-tracking':
        return 'hover:border-emerald-500/50 hover:shadow-emerald-500/10';
      default:
        return 'hover:border-white/20';
    }
  };

  return (
    <section id="who-i-help" className="py-20 bg-[#0B0B14] relative border-t border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Compass className="w-3.5 h-3.5" /> Tailored Pathways
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Whether You're Learning Marketing or Growing a Business, <span className="grad-text">Start Here.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Choose the path that matches your current goal — from mastering real-world digital marketing to executing profitable ad campaigns and auditing your tracking data.
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_I_HELP_PATHS.map((path) => (
            <div
              key={path.id}
              className={`bg-[#10101C] rounded-2xl p-6 border border-white/10 flex flex-col justify-between transition-all duration-300 shadow-xl ${getBorderColor(path.id)} group hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Card Top Accent Tag */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-inner">
                    {getIcon(path.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {path.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-violet-200 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-xs text-violet-400/90 font-medium mt-0.5">
                    {path.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {path.description}
                </p>

                {/* Target Audience checklist */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                    Ideal For:
                  </span>
                  <div className="space-y-1">
                    {path.targetAudience.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-white/10">
                <button
                  onClick={() => onNavigate(path.targetPage)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-violet-600 border border-white/10 hover:border-violet-500 text-white transition-all flex items-center justify-center gap-2 group-hover:bg-violet-600 cursor-pointer shadow-md"
                >
                  <span>{path.primaryCtaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
