import React from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import { BUSINESS_SERVICES } from '../data/portfolioData';

interface TrainingProgramsProps {
  onOpenContact?: (topic?: string) => void;
}

export const TrainingPrograms: React.FC<TrainingProgramsProps> = ({ onOpenContact }) => {
  return (
    <section id="services-highlight" className="py-20 bg-slate-950/40 relative border-t border-white/5 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <TrendingUp className="w-3.5 h-3.5" /> Performance &amp; Attribution Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Growth <span className="grad-text">Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Dedicated paid media management, server-side tracking implementations, and 45-point account audits.
          </p>
        </div>

        {/* 3 Business Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {BUSINESS_SERVICES.slice(0, 3).map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#141424] border-2 border-violet-500/50 shadow-2xl shadow-violet-900/20'
                    : 'bg-[#10101C] border border-white/10 hover:border-white/20'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" /> Core Service
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-violet-300 inline-block">
                      {service.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-white/5">
                    <span className="text-[10px] uppercase font-mono font-semibold text-slate-400">Included Deliverables:</span>
                    <div className="space-y-2">
                      {service.deliverables.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <button
                    onClick={() => onOpenContact && onOpenContact(service.title)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      isFeatured
                        ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-600/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-white/10'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
